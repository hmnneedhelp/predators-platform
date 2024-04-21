import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import router from "./utils/router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
