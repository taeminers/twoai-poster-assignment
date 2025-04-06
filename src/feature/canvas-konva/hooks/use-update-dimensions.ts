import { useEffect, useState } from 'react';

export interface Dimensions {
  width: number;
  height: number;
}

export const useUpdateDimensions = (
  ref: React.RefObject<HTMLDivElement | null>,
) => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 590,
    height: 590,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        const { width } = ref.current.getBoundingClientRect();
        setDimensions({ width, height: width }); // Maintain 1:1 aspect ratio
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [ref]);

  return dimensions;
};
