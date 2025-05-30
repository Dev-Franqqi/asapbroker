import React, { useEffect, useRef } from 'react';

const Bitcoincandle: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol: 'BITSTAMP:BTCUSD',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'en',
        allow_symbol_change: true,
        calendar: false,
        support_host: 'https://www.tradingview.com',
      });

      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      style={{ height: '100%', width: '100%' }}
    >
      <div
        ref={containerRef}
        className="tradingview-widget-container__widget"
        style={{ height: 'calc(100% - 32px)', width: '100%' }}
      ></div>
      
    </div>
  );
};

export default Bitcoincandle;