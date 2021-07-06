import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adpot me!</h1>
      <Pet name="Lory" animal="Dog" breed="Cocker" />
      <Pet name="Zeus" animal="Dog" breed="Unknown" />
      <Pet name="Quarzis" animal="Dog" breed="Unknown" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
