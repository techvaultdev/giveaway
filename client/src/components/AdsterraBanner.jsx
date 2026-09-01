import { useEffect, useRef } from 'react';

function AdsterraBanner({
  id = 'adsterra-banner',
  width = 300,
  height = 250,
  keyValue = 'fb258069920e57011e04b6303f9f7494',
  scriptSrc = 'https://www.highrevenueformat.com/fb258069920e57011e04b6303f9f7494/invoke.js',
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const iframe = document.createElement('iframe');
    iframe.title = id;
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox');
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    iframe.style.width = '100%';
    iframe.style.height = `${height}px`;
    iframe.style.maxWidth = `${width}px`;
    iframe.style.border = '0';
    iframe.style.overflow = 'hidden';
    iframe.style.display = 'block';
    iframe.style.margin = '0 auto';
    iframe.style.background = 'transparent';

    const html = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
            html, body {
              margin: 0;
              padding: 0;
              width: 100%;
              height: 100%;
              overflow: hidden;
              background: transparent;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            body {
              font-family: Arial, sans-serif;
            }
          </style>
        </head>
        <body>
          <script type="text/javascript">
            window.atOptions = {
              'key': '${keyValue}',
              'format': 'iframe',
              'height': ${height},
              'width': ${width},
              'params': {}
            };
          <\/script>
          <script type="text/javascript" src="${scriptSrc}"><\/script>
        </body>
      </html>
    `;

    iframe.srcdoc = html;

    const current = containerRef.current;
    current.innerHTML = '';
    current.appendChild(iframe);

    return () => {
      if (current) current.innerHTML = '';
    };
  }, [height, id, keyValue, scriptSrc, width]);

  return (
    <div
      ref={containerRef}
      id={id}
      className="flex items-center justify-center w-full overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm"
      style={{
        width: '100%',
        maxWidth: `${width}px`,
        minHeight: `${height}px`,
        height: `${height}px`,
      }}
      aria-label="Adsterra banner"
    />
  );
}

export default AdsterraBanner;
