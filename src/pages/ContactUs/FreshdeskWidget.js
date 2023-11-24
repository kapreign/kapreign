import React, { useEffect } from 'react';

const FreshdeskWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');

    window.fwSettings = {
      'widget_id': 1060000000711
    };

    window.FreshworksWidget = function() {
      window.FreshworksWidget.q.push(arguments);
    };
    window.FreshworksWidget.q = [];

    script.src = 'https://ind-widget.freshworks.com/widgets/1060000000711.js';
    script.async = true;
    script.defer = true;

    // Targeting a specific div with id "freshdesk-widget"
    const targetDiv = document.getElementById('freshdesk-widget');

    if (targetDiv) {
      targetDiv.appendChild(script);
    }

    return () => {
      if (targetDiv) {
        targetDiv.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="freshdesk-widget">
      {/* This is the div where the Freshdesk widget will be loaded */}
    </div>
  );
};

export default FreshdeskWidget;
