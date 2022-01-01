import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import routes from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
