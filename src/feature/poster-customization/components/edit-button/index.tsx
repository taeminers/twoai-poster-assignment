import { Button } from '@/components/button';

import { useEditPoster } from '../../context/use-edit-poster';
import './styles.scss';
export const EditButton = () => {
  const { isEditMode, setIsEditMode } = useEditPoster();
  return (
    <Button
      className="edit-button"
      onClick={() => setIsEditMode((prev: boolean) => !prev)}
    >
      {isEditMode ? 'Save' : 'Edit'}
    </Button>
  );
};
