export const getBackgroundStyle = (imageUrl?: string) => {
  if (!imageUrl) return {};

  return {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
};
