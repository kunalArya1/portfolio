export const getImagePath = (imagePath: string | undefined): string => {
  // If no image path is provided or if it's an empty string
  if (!imagePath || imagePath.trim() === '') {
    return '/images/no-image.jpg';
  }

  // If the image path is a full URL, return it as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  // If it's a local path, return it as is
  return imagePath;
}; 