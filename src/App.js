import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "e9aa8d57d641bcca2d97eb57884f4f782e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return <div>hello AI</div>;
};

export default App;
