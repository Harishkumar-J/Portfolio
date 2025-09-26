export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

// Writing /assets/... → might break after build because Vite renames/moves files.
//Using getImageUrl() → ensures Vite tracks the asset and always gives the correct URL.