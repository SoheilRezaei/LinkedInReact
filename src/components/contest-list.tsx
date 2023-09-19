import ContestPreview from "./contest-preview";
import { useEffect, useState } from "react";

import { fetchContests } from "../api-clients";

const ContestList = ({ initialContests }) => {
  const [contests, setConstests] = useState(initialContests);

  // useEffect(() => {
  //   fetchContests().then((contests) => {
  //     setConstests(contests);
  //   });
  // }, []);
  return (
    <div className="contest-list">
      {contests.map((contest) => {
        return <ContestPreview key={contest.id} contest={contest} />;
      })}
    </div>
  );
};

export default ContestList;
