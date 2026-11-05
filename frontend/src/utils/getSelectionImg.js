
   export const getSelectionImg = (fileName) =>
     {
  try {
    return new URL(
      `../assets/images/shop/selection-menu/${fileName}`,
      import.meta.url
    );
  } catch (e) {
    console.warn('Image introuvable :', fileName, e);
    return null;
  }
};