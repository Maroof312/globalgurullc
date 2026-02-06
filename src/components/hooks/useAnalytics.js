// src/components/hooks/useAnalytics.js
import { useEffect } from 'react';

const runWhenIdle = (cb) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(cb, { timeout: 3000 });
  } else {
    setTimeout(cb, 2000);
  }
};

const useAnalytics = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    runWhenIdle(() => {
      /* -------- Microsoft Clarity -------- */
      if (!window.clarity) {
        (function (c, l, a, r, i, t, y) {
          c[a] =
            c[a] ||
            function () {
              (c[a].q = c[a].q || []).push(arguments);
            };
          t = l.createElement(r);
          t.async = 1;
          t.src = 'https://www.clarity.ms/tag/' + i;
          y = l.getElementsByTagName(r)[0];
          y.parentNode.insertBefore(t, y);
        })(window, document, 'clarity', 'script', 'tkra1crsdg');
      }

      /* -------- Hotjar -------- */
      if (!window.hj) {
        (function (h, o, t, j, a, r) {
          h.hj =
            h.hj ||
            function () {
              (h.hj.q = h.hj.q || []).push(arguments);
            };
          h._hjSettings = { hjid: 6537737, hjsv: 6 };
          a = o.getElementsByTagName('head')[0];
          r = o.createElement('script');
          r.async = 1;
          r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
          a.appendChild(r);
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
      }

      /* -------- HubSpot -------- */
      if (!document.getElementById('hs-script-loader')) {
        const script = document.createElement('script');
        script.id = 'hs-script-loader';
        script.async = true;
        script.defer = true;
        script.src = 'https://js-na2.hs-scripts.com/244025887.js';
        document.head.appendChild(script);
      }
    });
  }, []);
};

export default useAnalytics;
