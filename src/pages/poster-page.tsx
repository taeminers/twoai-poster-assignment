import Header from '@/components/header';
import Space from '@/components/space';
import { DownloadButton } from '@/feature/poster-customization/components/download-button';
import { TemplatePreview } from '@/feature/poster-customization/components/template-preview';
import { EditPosterProvider } from '@/feature/poster-customization/context/edit-poster-context';
import { PosterContentProvider } from '@/feature/poster-customization/context/poster-content-context';

const PosterPage: React.FC = () => {
  return (
    <EditPosterProvider>
      <PosterContentProvider>
        <section>
          <Header title="Poster" showBackButton={true} />
          <Space height={50} />
          <TemplatePreview />
          <DownloadButton />
        </section>
      </PosterContentProvider>
    </EditPosterProvider>
  );
};

export default PosterPage;
