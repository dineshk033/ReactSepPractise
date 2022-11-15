import { useState } from "react";

const LIST = ["Nike", "Puma", "Adidas", "Reebook", "Snike", "Fuma", "Gamma"];
const PractiseState = () => {
  const [state, setState] = useState({
    list: ["Nike", "Puma", "Adidas", "Reebook", "Snike", "Fuma", "Gamma"],
    isMore: false,
  });

  //   const handleIterate = () => {};

  const moreList = () => {
    setState({ ...state, isMore: true });

    var filteredRecords;
    if (state.isMore) {
      filteredRecords = state.list;
    } else {
      filteredRecords = state.list.filter((_, idx) => idx < 4);
    }
    /**
     * adding with previous prorperty
     */
    setState({ ...state, list: filteredRecords });
  };
  return (
    <>
      <h5>Shoe's Brand</h5>
      {state.list.map((el) => (
        <h6 key={el}>{el}</h6>
      ))}
      <button onClick={() => moreList()}>view More</button>
    </>
  );
};

export default PractiseState;
