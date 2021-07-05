const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-logo" }, "Adpot me!"),
    React.createElement(Pet, { name: "Lory", animal: "Dog", breed: "Cocker" }),
    React.createElement(Pet, { name: "Zeus", animal: "Dog", breed: "Unknown" }),
    React.createElement(Pet, {
      name: "Quarzis",
      animal: "Dog",
      breed: "Unknown",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
