export function normalizeImage(image) {
  let parsed;
  try {
    parsed = JSON.parse(image);
  } catch {
    parsed = image;
  }

  const normalizedImages = Array.isArray(parsed) ? parsed : [parsed];

  return normalizedImages.filter(
    (url) => typeof url === "string" && url.trim() !== ""
  );
}
