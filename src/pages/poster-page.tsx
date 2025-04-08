import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

import Header from '@/components/header';
import { ArrowLeft } from '@/components/icons/arrow-left';
import Space from '@/components/space';
import { Canvas } from '@/feature/canvas-konva/components/canvas';
import { EditButton } from '@/feature/poster-customization/components/edit-button';
import { DownloadButton } from '@/feature/poster-download/components/download-button';
import { PotserProviders } from '@/providers/poster-providers';

/*
 ** - Poster edit page
 */
const PosterPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PotserProviders>
      <section id="poster-page">
        <Header
          title="Poster"
          leftIcon={<ArrowLeft />}
          rightIcon={<EditButton />}
          onLeftIconClick={() => {
            navigate(-1);
          }}
        />
        <Space height={50} />
        <ErrorBoundary fallback={<div>Error Has Occured</div>}>
          <Canvas />
        </ErrorBoundary>
        <DownloadButton />
      </section>
    </PotserProviders>
  );
};

export default PosterPage;
