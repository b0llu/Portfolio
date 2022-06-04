import { GridLayout, Header } from "./components";
import { Routes, Route } from "react-router-dom";
import { About, Home, Projects } from "./pages";

function App() {
  return (
    <>
      <GridLayout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </GridLayout>
    </>
  );
}

export default App;
