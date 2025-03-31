import html2canvas from 'html2canvas';
import React, { useState, useRef, ChangeEvent } from 'react';

interface PosterData {
  teamA: string;
  teamB: string;
  date: string;
  venue: string;
  backgroundImage: string;
  fontColor: string;
  fontSize: string;
  fontFamily: string;
}

const PosterCustomizer = () => {
  // State for poster content
  const [posterData, setPosterData] = useState<PosterData>({
    teamA: 'Team A',
    teamB: 'Team B',
    date: 'March 28',
    venue: 'Madison Square Garden',
    backgroundImage: '/api/placeholder/800/600',
    fontColor: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Arial',
  });

  // Toggle between view and edit mode
  const [isEditMode, setIsEditMode] = useState(false);

  // Currently editing field
  const [editingField, setEditingField] = useState<keyof PosterData | null>(
    null,
  );

  // Temporary value for editing
  const [tempValue, setTempValue] = useState('');

  // Reference to the poster for html2canvas
  const posterRef = useRef<HTMLDivElement>(null);

  // Handle clicking on a text element
  const handleTextClick = (field: keyof PosterData) => {
    if (!isEditMode) return;

    setEditingField(field);
    setTempValue(posterData[field]);
  };

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempValue(e.target.value);
  };

  // Save the edited value
  const handleSaveEdit = () => {
    if (editingField) {
      setPosterData({
        ...posterData,
        [editingField]: tempValue,
      });
      setEditingField(null);
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingField(null);
  };

  // Handle background image change
  const handleBackgroundChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPosterData({
            ...posterData,
            backgroundImage: e.target.result as string,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle font color change
  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPosterData({
      ...posterData,
      fontColor: e.target.value,
    });
  };

  // Handle font size change
  const handleFontSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPosterData({
      ...posterData,
      fontSize: `${e.target.value}px`,
    });
  };

  // Handle font family change
  const handleFontFamilyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPosterData({
      ...posterData,
      fontFamily: e.target.value,
    });
  };

  // Download the poster as an image
  const downloadPoster = () => {
    if (isEditMode) {
      setIsEditMode(false);
      // Delay to allow the UI to update before capturing
      setTimeout(() => {
        captureAndDownload();
      }, 100);
    } else {
      captureAndDownload();
    }
  };

  const captureAndDownload = () => {
    if (posterRef.current) {
      html2canvas(posterRef.current).then((canvas) => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'custom-poster.png';
        link.href = image;
        link.click();
      });
    }
  };

  return (
    <div className="flex flex-col items-center p-4 w-full max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Poster Customizer</h1>

      {/* Controls */}
      <div className="w-full bg-gray-100 p-4 rounded mb-4">
        <div className="flex justify-between mb-4">
          <button
            className={`px-4 py-2 rounded ${isEditMode ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}
            onClick={() => setIsEditMode(!isEditMode)}
          >
            {isEditMode ? 'Exit Edit Mode' : 'Enter Edit Mode'}
          </button>

          <button
            className="px-4 py-2 rounded bg-purple-500 text-white"
            onClick={downloadPoster}
          >
            Download Poster
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Background Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleBackgroundChange}
              className="w-full"
            />
          </div>

          <div>
            <label className="block mb-2">Font Color:</label>
            <input
              type="color"
              value={posterData.fontColor}
              onChange={handleColorChange}
              className="w-full h-10"
            />
          </div>

          <div>
            <label className="block mb-2">Font Size:</label>
            <input
              type="range"
              min="12"
              max="72"
              value={parseInt(posterData.fontSize)}
              onChange={handleFontSizeChange}
              className="w-full"
            />
            <span>{posterData.fontSize}</span>
          </div>

          <div>
            <label className="block mb-2">Font Family:</label>
            <select
              value={posterData.fontFamily}
              onChange={handleFontFamilyChange}
              className="w-full p-2 border rounded"
            >
              <option value="Arial">Arial</option>
              <option value="Verdana">Verdana</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Georgia">Georgia</option>
              <option value="Courier New">Courier New</option>
            </select>
          </div>
        </div>
      </div>

      {/* Poster Preview */}
      <div className="relative w-full mb-4">
        <div
          ref={posterRef}
          className="w-full h-96 bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: `url(${posterData.backgroundImage})`,
            fontFamily: posterData.fontFamily,
            color: posterData.fontColor,
            fontSize: posterData.fontSize,
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            {/* Team A Name */}
            {editingField === 'teamA' ? (
              <div className="mb-4 bg-white bg-opacity-75 p-2 rounded">
                <input
                  type="text"
                  value={tempValue}
                  onChange={handleInputChange}
                  className="border p-2 w-full text-black"
                  autoFocus
                />
                <div className="flex mt-2">
                  <button
                    onClick={handleSaveEdit}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div
                className={`mb-4 ${isEditMode ? 'cursor-pointer hover:bg-white hover:bg-opacity-25 p-2 rounded' : ''}`}
                onClick={() => handleTextClick('teamA')}
              >
                {posterData.teamA}
              </div>
            )}

            <div className="text-xl mb-4">VS</div>

            {/* Team B Name */}
            {editingField === 'teamB' ? (
              <div className="mb-4 bg-white bg-opacity-75 p-2 rounded">
                <input
                  type="text"
                  value={tempValue}
                  onChange={handleInputChange}
                  className="border p-2 w-full text-black"
                  autoFocus
                />
                <div className="flex mt-2">
                  <button
                    onClick={handleSaveEdit}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div
                className={`mb-4 ${isEditMode ? 'cursor-pointer hover:bg-white hover:bg-opacity-25 p-2 rounded' : ''}`}
                onClick={() => handleTextClick('teamB')}
              >
                {posterData.teamB}
              </div>
            )}

            {/* Date */}
            {editingField === 'date' ? (
              <div className="mb-4 bg-white bg-opacity-75 p-2 rounded">
                <input
                  type="text"
                  value={tempValue}
                  onChange={handleInputChange}
                  className="border p-2 w-full text-black"
                  autoFocus
                />
                <div className="flex mt-2">
                  <button
                    onClick={handleSaveEdit}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div
                className={`mb-4 ${isEditMode ? 'cursor-pointer hover:bg-white hover:bg-opacity-25 p-2 rounded' : ''}`}
                onClick={() => handleTextClick('date')}
              >
                {posterData.date}
              </div>
            )}

            {/* Venue */}
            {editingField === 'venue' ? (
              <div className="mb-4 bg-white bg-opacity-75 p-2 rounded">
                <input
                  type="text"
                  value={tempValue}
                  onChange={handleInputChange}
                  className="border p-2 w-full text-black"
                  autoFocus
                />
                <div className="flex mt-2">
                  <button
                    onClick={handleSaveEdit}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div
                className={`${isEditMode ? 'cursor-pointer hover:bg-white hover:bg-opacity-25 p-2 rounded' : ''}`}
                onClick={() => handleTextClick('venue')}
              >
                {posterData.venue}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterCustomizer;
