import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    const scriptId = 'google-translate-script';

    const addGoogleTranslateScript = () => {
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      if (!window.googleTranslateInitialized) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
        window.googleTranslateInitialized = true;
      }
    };

    if (!window.googleTranslateInitialized) {
      window.googleTranslateInitialized = false; // Ensure the flag is defined
      addGoogleTranslateScript();
    } else {
      window.googleTranslateElementInit();
    }
  }, []);

  return (<div className='pl-4 pt-3'><div id="google_translate_element"></div></div>);
};

export default GoogleTranslate;
