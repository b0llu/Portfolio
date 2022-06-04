import { GridLayout, Header } from "./components";
import { Routes, Route } from "react-router-dom";
import { About, Home } from "./pages";

function App() {
  return (
    <>
      <GridLayout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </GridLayout>
    </>
  );
}

export default App;
