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

// Centralized category-based image fallbacks
import CAM from '../assets/images/11.1th - Accounts Receivable Services Built for Better Cash Flow.avif?w=300;600;900&format=avif&as=srcset';
import CAMFallback from '../assets/images/11.1th - Accounts Receivable Services Built for Better Cash Flow.avif?w=600';
import Audit from '../assets/images/1st.avif?w=300;600;900&format=avif&as=srcset';
import AuditFallback from '../assets/images/1st.avif?w=600';
import Book from '../assets/images/books-1.webp?w=300;600;900&format=webp&as=srcset';
import BookFallback from '../assets/images/books-1.webp?w=600';
import CRE from '../assets/images/14.avif?w=300;600;900&format=avif&as=srcset';
import CREFallback from '../assets/images/14.avif?w=600';
import CAMError from '../assets/images/CAM_Reconciliation_Blog1_KPI_FINAL.avif?w=300;600;900&format=avif&as=srcset';
import CAMErrorFallback from '../assets/images/CAM_Reconciliation_Blog1_KPI_FINAL.avif';
import CAMWorkFlow from '../assets/images/11-10.avif?w=300;600;900&format=avif&as=srcset';
import CAMWorkFlowFallback from '../assets/images/11-10.avif?w=600';
import ARCRE from '../assets/images/13-10.avif?w=300;600;900&format=avif&as=srcset';
import ARCREFallback from '../assets/images/13-10.avif?w=600';
import ARPM from '../assets/images/18-10.avif?w=300;600;900&format=avif&as=srcset';
import ARPMFallback from '../assets/images/18-10.avif?w=600';
import APCRE from '../assets/images/25-10.avif?w=300;600;900&format=avif&as=srcset';
import APCREFallback from '../assets/images/25-10.avif?w=600';
import LeaseAdmin from '../assets/images/3-11.avif?w=300;600;900&format=avif&as=srcset';
import LeaseAdminFallback from '../assets/images/3-11.avif?w=600';

const CATEGORY_IMAGE_FALLBACKS = {
  'Property Management': { srcset: CAM, fallback: CAMFallback },
  'Audit': { srcset: Audit, fallback: AuditFallback },
  'Bookkeeping': { srcset: Book, fallback: BookFallback },
  'Commercial Real Estate': { srcset: CRE, fallback: CREFallback }, 
  'Accounting and Collections' : {srcset: ARCRE, fallback: ARCREFallback},
  'Property Accounting' : {srcset: ARPM, fallback: ARPMFallback},
  'Accounting Controls' : {srcset: APCRE, fallback: APCREFallback},
  'Lease Administration' : {srcset: LeaseAdmin, fallback: LeaseAdminFallback},
};

// Per-post explicit overrides (keeps data pure)
const PER_POST_OVERRIDES = {
  5: { srcset: CAMError, fallback: CAMErrorFallback },
  6: { srcset: CAMWorkFlow, fallback: CAMWorkFlowFallback },
};

// Prefer explicit per-post image; else category fallback; else final default
export function resolvePostImage(post) {
  // Per-post resolver wins first
  const override = PER_POST_OVERRIDES[post?.id];
  if (override?.srcset || override?.fallback) return override;

  const fromData = getPostImageFromData(post);
  if (fromData?.srcset || fromData?.fallback) return fromData;

  const byCategory = CATEGORY_IMAGE_FALLBACKS[post?.category];
  if (byCategory) return byCategory;

  // Final global default
  return { srcset: CAMError,CAMWorkFlow, fallback: CAMErrorFallback,CAMWorkFlowFallback };
}


