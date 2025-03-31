import Header from '@/components/header';
import { ArrowLeft } from '@/components/icons/arrow-left';
import Space from '@/components/space';
import { DownloadButton } from '@/feature/poster-customization/components/download-button';
import { EditButton } from '@/feature/poster-customization/components/edit-button';
import { PosterContent } from '@/feature/poster-customization/components/poster-content';
import { EditPosterProvider } from '@/feature/poster-customization/context/edit-poster-context';
import { PosterContentProvider } from '@/feature/poster-customization/context/poster-content-context';

const PosterPage: React.FC = () => {
  return (
    <EditPosterProvider>
      <PosterContentProvider>
        <section>
          <Header
            title="Poster"
            leftIcon={<ArrowLeft />}
            rightIcon={<EditButton />}
          />
          <Space height={50} />
          <PosterContent />
          <DownloadButton />
        </section>
      </PosterContentProvider>
    </EditPosterProvider>
  );
};

export default PosterPage;
