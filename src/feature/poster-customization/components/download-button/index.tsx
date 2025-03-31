import { Button } from '@/components/button';

import { useEditPoster } from '../../context/use-edit-poster';

export const DownloadButton = () => {
  const { isEditMode } = useEditPoster();
  // have download logic implemented here later
  return (
    <Button disabled={isEditMode} fixed={true}>
      Download
    </Button>
  );
};
