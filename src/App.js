import { GridLayout, Header } from "./components";
import { Routes, Route } from "react-router-dom";
import { About, Blogs, Home, Projects } from "./pages";

function App() {
  return (
    <>
      <GridLayout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </GridLayout>
    </>
  );
}

export default App;
