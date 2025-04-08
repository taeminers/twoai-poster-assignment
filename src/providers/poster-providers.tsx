import { AddPhotoProvider } from '@/feature/canvas-konva/context/add-photo-context';
import { EditPosterProvider } from '@/feature/poster-customization/context/edit-poster-context';
import { PosterContentProvider } from '@/feature/poster-customization/context/poster-content-context';
import { DownloadPosterProvider } from '@/feature/poster-download/context/download-poster-context';

interface PosterProvidersProps {
  children: React.ReactNode;
}

export const PotserProviders: React.FC<PosterProvidersProps> = ({
  children,
}) => {
  return (
    <EditPosterProvider>
      <PosterContentProvider>
        <DownloadPosterProvider>
          <AddPhotoProvider>{children}</AddPhotoProvider>
        </DownloadPosterProvider>
      </PosterContentProvider>
    </EditPosterProvider>
  );
};
