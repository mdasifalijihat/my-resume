import React, { useEffect, useState } from "react";
import IntroScreen from "../components/pages/Home/IntroScreen/IntroScreen";

const LoaderManager = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return <>{loading ? <IntroScreen /> : children}</>;
};

export default LoaderManager;
