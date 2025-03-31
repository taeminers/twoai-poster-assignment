import { usePosterContent } from '../../context/use-poster-content';

interface PosterTextProps {
  text: string;
  field: string;
  editingField: string | null;
}

export const PosterText = ({ text, field, editingField }: PosterTextProps) => {
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
        <div onClick={() => handleTextClick(field)}>{text}</div>
      )}
    </div>
  );
};
