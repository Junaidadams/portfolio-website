// src/hooks/useAnalytics.js

import { useEffect } from "react";
import ReactGA from "react-ga4";

const trackingId = "G-1SZXZF0S3G"; // Replace with your GA tracking ID

ReactGA.initialize(trackingId);

const useAnalytics = (page) => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page });
  }, [page]);
};

export default useAnalytics;
