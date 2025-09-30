export function slugify(title) {
  if (!title) return "";
  return String(title)
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function findBlogBySlug(slug, blogList) {
  if (!slug || !Array.isArray(blogList)) return undefined;
  return blogList.find((post) => slugify(post.title) === slug);
}

export function findBlogById(idParam, blogList) {
  if (idParam == null || !Array.isArray(blogList)) return undefined;
  const idNumber = Number(idParam);
  if (Number.isNaN(idNumber)) return undefined;
  return blogList.find((post) => Number(post.id) === idNumber);
}

export function resolveBlogFromParam(param, blogList) {
  if (!param) return undefined;
  // Try numeric id first (e.g., /blog/4)
  const byId = findBlogById(param, blogList);
  if (byId) return byId;
  // Fallback to slug (e.g., /blog/why-cre-accounting...)
  return findBlogBySlug(param, blogList);
}

// Prefer explicit image fields on a post; fallback handled by caller
export function getPostImageFromData(post) {
  if (!post) return undefined;
  // Allow either featuredImage (string) or explicit pair {imageSrcset, imageFallback}
  if (post.imageSrcset || post.imageFallback) {
    return { srcset: post.imageSrcset, fallback: post.imageFallback };
  }
  if (typeof post.featuredImage === 'string') {
    return { srcset: post.featuredImage, fallback: post.featuredImage };
  }
  return undefined;
}


