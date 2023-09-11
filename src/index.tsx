import { createRoot } from "react-dom/client";

const Header = (props) => {
  return <div className="header">{props.message}</div>;
};

const App = () => {
  return (
    <div className="container">
      <Header message="Naming Contests" />
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
