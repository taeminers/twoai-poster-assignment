import { Button } from '@/components/button';
import Header from '@/components/header';
import Space from '@/components/space';
import { TemplatePreview } from '@/feature/poster-customization/components/template-preview';

const PosterPage: React.FC = () => {
  return (
    <section>
      <Header title="Poster" showBackButton={true} />
      <Space height={50} />
      <TemplatePreview />
      <Button fixed={true}>Download Poster</Button>
    </section>
  );
};

export default PosterPage;
