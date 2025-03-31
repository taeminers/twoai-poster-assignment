import './styles.scss';
import { Button } from '@/components/button';

import { useEditPoster } from '../../context/use-edit-poster';
import { PosterContent } from '../poster-content';

/*  
/ * - handles data for the preview, and edit button
*/
export const TemplatePreview = () => {
  // get teamA and teamB from mockdata_teams
  const { isEditMode, setIsEditMode } = useEditPoster();
  return (
    <div className="preview">
      <PosterContent />
      <Button
        className="edit-button"
        onClick={() => setIsEditMode((prev: boolean) => !prev)}
      >
        {isEditMode ? 'Save' : 'Edit'}
      </Button>
    </div>
  );
};
