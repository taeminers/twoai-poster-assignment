import { usePosterContent } from '@/feature/poster-customization/context/use-poster-content';

interface PosterTextProps {
  text: string;
  field: string;
  editingField: string | null;
  disabled?: boolean;
}
/*
 ** - if more time, use HOC for disabled, or some other logic
 */

export const PosterText = ({
  text,
  field,
  editingField,
  disabled,
}: PosterTextProps) => {
  const {
    tempValue,
    handleInputChange,
    handleSaveEdit,
    handleCancelEdit,
    handleTextClick,
  } = usePosterContent();
  return (
    <div>
      {editingField === field ? (
        <div>
          <input value={tempValue} onChange={handleInputChange} autoFocus />
          <div>
            <button onClick={handleSaveEdit}>save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        </div>
      ) : (
        <div onClick={() => handleTextClick(disabled ? '' : field)}>{text}</div>
      )}
    </div>
  );
};
