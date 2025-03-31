import { createContext, useState } from 'react';

interface EditPosterContextType {
  isEditMode: boolean;
  setIsEditMode: (isEditMode: boolean) => void;
}

export const EditPosterContext = createContext<EditPosterContextType | null>(
  null,
);

export const EditPosterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <EditPosterContext.Provider value={{ isEditMode, setIsEditMode }}>
      {children}
    </EditPosterContext.Provider>
  );
};
