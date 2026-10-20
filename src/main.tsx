import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Stair from "./components/common/stair.tsx";
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo({ top: 0, behavior: "instant" });
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Stair>
      <App />
    </Stair>
  </BrowserRouter>,
);
