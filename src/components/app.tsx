import { useEffect, useState } from "react";

import Header from "./header";

const App = () => {
  useEffect(() => {
    const intervalID = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  });

  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <Header message="Naming Contests" />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </button>
    </div>
  );
};

export default App;
