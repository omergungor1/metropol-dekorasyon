import {
  createBrandShareImage,
  OG_IMAGE_SIZE,
} from "../lib/createBrandShareImage";
import { ogImageAlt } from "../lib/shareMeta";

export const runtime = "nodejs";
export const alt = ogImageAlt;
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function TwitterImage() {
  return createBrandShareImage();
}
