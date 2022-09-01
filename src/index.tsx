import ReactDOM from "react-dom/client";
import "./index.css";
import Menu from "./pages/Menu";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <>
        <Menu />
    </>
);
