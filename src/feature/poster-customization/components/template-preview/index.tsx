import './styles.scss';
import PosterCustomizer from '../edit-content/poster-customizer';
import { ViewContent } from '../view-content';

/*  
/ * - handles data for the preview, and edit button
*/
export const TemplatePreview = () => {
  // get teamA and teamB from mockdata_teams

  return (
    <div className="preview">
      {/* <ViewContent /> */}
      <PosterCustomizer />
    </div>
  );
};
