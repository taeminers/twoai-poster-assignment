import { useSearchParams } from 'react-router-dom';

import Header from '@/components/header';
import { TemplatePreview } from '@/feature/poster-customization/template-preview';
import mockData_games from '@/mockdata/mockdata-games';

import NotFound from './not-found';

const PosterPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const gameId = searchParams.get('gameId')!;
  const game = mockData_games.find((game) => game.id === parseInt(gameId));
  if (!game) {
    // if have time, use ErrorBoundaries
    return (
      <>
        <Header title="Poster" showBackButton={true} />
        <NotFound />
      </>
    );
  }

  return (
    <section>
      <Header title="Poster" showBackButton={true} />
      <TemplatePreview {...game} />
    </section>
  );
};

export default PosterPage;
