import React, { useEffect, useRef } from "react";

const NewsWidget: React.FC = () => {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (widgetContainerRef.current) {
      // Clear any previous content
      widgetContainerRef.current.innerHTML = "";

      // Create and append the script tag
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.async = true;
      script.textContent = JSON.stringify({
        feedMode: "all_symbols",
        isTransparent: false,
        displayMode: "regular",
        width: 400,
        height: 550,
        colorTheme: "dark",
        locale: "en",
      });

      widgetContainerRef.current.appendChild(script);
    }

    return () => {
      // Cleanup: Remove widget content on unmount
      if (widgetContainerRef.current) {
        widgetContainerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div id="news-widget-wrapper">
      <div className="tradingview-widget-container">
        <div ref={widgetContainerRef} className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
};

export default NewsWidget;