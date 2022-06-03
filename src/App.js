import { GridLayout, Header } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <>
    <GridLayout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </GridLayout>
    </>
  );
}

export default App;
