import Header from '@/components/header';
import { ArrowLeft } from '@/components/icons/arrow-left';
import Space from '@/components/space';
import { Canvas } from '@/feature/canvas-konva/components/canvas';
import { EditButton } from '@/feature/poster-customization/components/edit-button';
import { EditPosterProvider } from '@/feature/poster-customization/context/edit-poster-context';
import { PosterContentProvider } from '@/feature/poster-customization/context/poster-content-context';
import { DownloadButton } from '@/feature/poster-download/components/download-button';
import { DownloadPosterProvider } from '@/feature/poster-download/context/download-poster-context';

const PosterPage: React.FC = () => {
  return (
    <EditPosterProvider>
      <PosterContentProvider>
        <DownloadPosterProvider>
          <section>
            <Header
              title="Poster"
              leftIcon={<ArrowLeft />}
              rightIcon={<EditButton />}
            />
            <Space height={50} />
            <Canvas />
            <DownloadButton />
          </section>
        </DownloadPosterProvider>
      </PosterContentProvider>
    </EditPosterProvider>
  );
};

export default PosterPage;
