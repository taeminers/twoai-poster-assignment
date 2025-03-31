import html2canvas from 'html2canvas';

import { Button } from '@/components/button';
import { useEditPoster } from '@/feature/poster-customization/context/use-edit-poster';
import { useDownloadPoster } from '@/feature/poster-download/context/use-download-poster';
export const DownloadButton = () => {
  const { isEditMode } = useEditPoster();
  const { posterRef } = useDownloadPoster();
  const downloadHandler = () => {
    if (posterRef.current) {
      html2canvas(posterRef.current).then((canvas) => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'poster.png';
        link.href = image;
        link.click();
      });
    }
  };
  return (
    <Button disabled={isEditMode} fixed={true} onClick={downloadHandler}>
      Download
    </Button>
  );
};
