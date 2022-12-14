import "./App.css";

import { useEffect, useState } from "react";
import { createMockRecords } from "./shared/utils/mockResponse";
import Homepage from "./page/homepage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./features/core/header";
import { SearchPageComponent } from "./page/search-page";

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    setState(createMockRecords(12));
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <SearchPageComponent />
        {/* <Homepage data={state} /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
