import "./App.css";

import Header from "./components/Header/Header";
import Contents from "./components/Contents/Contents";
import Disclosure from "./test";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header windowSize={windowSize} />
      <Contents windowSize={windowSize} />
      <Footer />
    </>
  );
}

export default App;
