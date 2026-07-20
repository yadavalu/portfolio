export function resolveAssetPath(path: string): string {
  if (!path) return path;

  if (/^(https?:)?\/\//i.test(path) || path.startsWith("data:")) {
    return path;
  }

  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  if (path.startsWith(basePath)) {
    return path;
  }

  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
