import React, { useEffect, useRef } from 'react';

const Ethwidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null); // Explicitly type the ref

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbol: 'COINBASE:ETHUSD',
        width: 350,
        isTransparent: false,
        colorTheme: 'dark',
        locale: 'en',
      });

      containerRef.current.appendChild(script); // TypeScript now knows this is valid
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div ref={containerRef} className="tradingview-widget-container__widget"></div>
     
    </div>
  );
};

export default Ethwidget;