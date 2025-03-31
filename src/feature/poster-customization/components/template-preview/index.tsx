import './styles.scss';

import { PosterContent } from '../poster-content';

/*  
/ * - handles data for the preview, and edit button
*/
export const TemplatePreview = () => {
  // get teamA and teamB from mockdata_teams
  return (
    <div className="preview">
      <PosterContent />
    </div>
  );
};
