import React, { useEffect, useRef } from 'react';

const Bnbwidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbol: 'CRYPTOCAP:BNB',
        width: 350,
        isTransparent: false,
        colorTheme: 'dark',
        locale: 'en',
      });

      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div ref={containerRef} className="tradingview-widget-container__widget"></div>
     
    </div>
  );
};

export default Bnbwidget;