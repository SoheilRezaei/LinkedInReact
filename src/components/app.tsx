import Header from "./header";
import ContestList from "./contest-list";

const App = ({ initialData }) => {
  return (
    <div className="container">
      <Header message="Naming Contests" />

      <ContestList contests={initialData.contest} />
    </div>
  );
};

export default App;
