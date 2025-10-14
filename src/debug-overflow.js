// Debug utility to find elements causing horizontal overflow
function findWidestElement() {
  const all = document.getElementsByTagName('*');
  let maxWidth = 0;
  let widestElement = null;
  
  for (let i = 0; i < all.length; i++) {
    const el = all[i];
    const rect = el.getBoundingClientRect();
    const width = rect.width + rect.left;
    
    if (width > maxWidth) {
      maxWidth = width;
      widestElement = el;
    }
  }
  
  if (widestElement) {
    console.log('Widest element:', widestElement);
    console.log('Width:', maxWidth, 'Viewport width:', window.innerWidth);
    widestElement.style.outline = '2px solid #00ff00 !important';
    widestElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
  return widestElement;
}

// Run on load and after a short delay to catch dynamically loaded content
window.addEventListener('load', () => {
  console.log('Initial check for overflow...');
  setTimeout(findWidestElement, 1000);
  setTimeout(findWidestElement, 3000);
});

// Expose to global scope for manual checking in console
window.findWidestElement = findWidestElement;
