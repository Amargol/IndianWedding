import type { WeddingPage } from "./types";

const baseUrl = import.meta.env.BASE_URL;
const basePath = baseUrl === "/" ? "" : baseUrl.replace(/\/$/, "");

export function appPath(path = "") {
  const normalizedPath = path.replace(/^\/+/, "");
  return normalizedPath ? `${baseUrl}${normalizedPath}` : baseUrl;
}

export function routePath(pathname: string) {
  if (!basePath) return pathname;
  if (pathname === basePath) return "/";
  if (pathname.startsWith(`${basePath}/`)) return pathname.slice(basePath.length);
  return pathname;
}

export function templatePath(
  templateSlug: string,
  weddingId: string,
  page?: WeddingPage,
) {
  const path = `templates/${templateSlug}/${encodeURIComponent(weddingId)}`;
  return appPath(page ? `${path}/${page}` : path);
}
