/** Prefix an absolute site path with the deploy base ("/" locally, "/marcasdoagro/" on GitHub Pages). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}
