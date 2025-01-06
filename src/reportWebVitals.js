const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    import("web-vitals")
      .then((webVitals) => {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitals;

        if (getCLS) getCLS(onPerfEntry);
        if (getFID) getFID(onPerfEntry);
        if (getFCP) getFCP(onPerfEntry);
        if (getLCP) getLCP(onPerfEntry);
        if (getTTFB) getTTFB(onPerfEntry);
      })
      .catch((err) => {
        console.error("Error importing web-vitals:", err);
      });
  }
};

export default reportWebVitals;
