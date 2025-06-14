let result = React.createElement("h1", {}, "Hello, React with CDN!");
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(result);
let img = React.createElement("img", {
    src: "https://reactjs.org/logo-og.png",
    alt: "React Logo",
    style: {
        width: "200px",
        height: "200px"
    }
});
let table = React.createElement("table", {}, React.createElement("thead", {}, React.createElement("tr", {}, React.createElement("th", {}, "Name"), React.createElement("th", {}, "Age"))), React.createElement("tbody", {}, React.createElement("tr", {}, React.createElement("td", {}, "John"), React.createElement("td", {}, "30")), React.createElement("tr", {}, React.createElement("td", {}, "Jane"), React.createElement("td", {}, "25"))));
let form = React.createElement("form", {}, React.createElement("label", {
    htmlFor: "name"
}, "Name: "), React.createElement("input", {
    type: "text",
    id: "name",
    name: "name"
}), React.createElement("br"), React.createElement("label", {
    htmlFor: "email"
}, "Email: "), React.createElement("input", {
    type: "email",
    id: "email",
    name: "email"
}), React.createElement("br"), React.createElement("input", {
    type: "checkbox",
    id: "subscribe",
    name: "subscribe"
}), React.createElement("button", {
    type: "submit"
}, "Submit"));
root.render(React.createElement("div", {}, img, table, form, React.createElement("p", {}, "This is a paragraph.")));

//# sourceMappingURL=cdn.7c0ccee6.js.map
