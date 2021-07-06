import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-logo" }, "Adpot me!"),
//     React.createElement(Pet, { name: "Lory", animal: "Dog", breed: "Cocker" }),
//     React.createElement(Pet, { name: "Zeus", animal: "Dog", breed: "Unknown" }),
//     React.createElement(Pet, {
//       name: "Quarzis",
//       animal: "Dog",
//       breed: "Unknown",
//     }),
//   ]);
// };

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
