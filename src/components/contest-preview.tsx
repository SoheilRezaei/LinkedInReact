const ContestPreview = ({ contest }) => {
  return (
    <div className="constest-preview">
      <div className="category">{contest.categoryName}</div>
      <div className="contest">{contest.contestName}</div>
    </div>
  );
};

export default ContestPreview;
