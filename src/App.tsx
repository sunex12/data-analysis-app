import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Homepage } from "./pages/Homepage";

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage />} index />
        </Route>
      </Routes>
    </div>
  );
};
