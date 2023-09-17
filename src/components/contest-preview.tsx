import * as React from "React";

const ContestPreview: React.FC<{ contest: object }> = ({ contest }) => {
  return (
    <div className="constest-preview">
      <div className="category">{contest.categoryName}</div>
      <div className="contest">{contest.contestName}</div>
    </div>
  );
};

export default ContestPreview;
