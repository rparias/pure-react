import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adpot me!</h1>
      {/* <Pet name="Lory" animal="Dog" breed="Cocker" />
      <Pet name="Zeus" animal="Dog" breed="Unknown" />
      <Pet name="Quarzis" animal="Dog" breed="Unknown" /> */}

      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
