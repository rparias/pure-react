const Pet = () => {
    return React.createElement('div', {}, [
        React.createElement('h2', {}, 'Lory'),
        React.createElement('h3', {}, 'Dog'),
        React.createElement('h3', {}, 'Cocker'),
    ]);
}

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {id: 'my-logo'}, 'Adpot me!'),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet)
    ]);
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));
