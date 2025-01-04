import React from "react";
import { Search } from "./components/Search";

import ImageContextProvider from "./context/ImageContextProvider";
import TheImages from "./components/TheImages";
import { Background } from "./components/Background";

const App = () => {
  return (
    <ImageContextProvider>
      <Background>
        <Search />
      </Background>
      <TheImages />
    </ImageContextProvider>
  );
};

export default App;
