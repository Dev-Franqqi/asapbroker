import React, { useEffect, useRef } from 'react';

const TradingViewTickerTape: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          {
            proName: 'BITSTAMP:BTCUSD',
            title: 'Bitcoin',
          },
          {
            proName: 'BITSTAMP:ETHUSD',
            title: 'Ethereum',
          },
          {
            description: 'Binance Coin',
            proName: 'CRYPTOCAP:BNB',
          },
          {
            description: 'Doge coin',
            proName: 'CRYPTOCAP:DOGE',
          },
          {
            description: 'Litecoin',
            proName: 'BYBIT:LTCUSDT.P',
          },
          {
            description: 'Cardano',
            proName: 'BINANCE:ADAUSD',
          },
        ],
        showSymbolLogo: true,
        isTransparent: false,
        displayMode: 'adaptive',
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

export default TradingViewTickerTape;