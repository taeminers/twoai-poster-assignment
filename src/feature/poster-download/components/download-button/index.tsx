import { Button } from '@/components/button';
import { useEditPoster } from '@/feature/poster-customization/context/use-edit-poster';
import { useDownloadPoster } from '@/feature/poster-download/context/use-download-poster';

export const DownloadButton = () => {
  const { isEditMode } = useEditPoster();
  const { posterRef } = useDownloadPoster();
  const downloadUri = (uri: string, name: string) => {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleExport = () => {
    if (posterRef.current) {
      const uri = posterRef.current.getStage().toDataURL({
        mimeType: 'image/png',
        quality: 1,
      });
      // we also can save uri as file
      downloadUri(uri, 'gameday-poster.png');
    }
  };

  return (
    <Button disabled={isEditMode} fixed={true} onClick={handleExport}>
      Download
    </Button>
  );
};
