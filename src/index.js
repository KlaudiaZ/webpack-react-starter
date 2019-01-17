import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

import { Content } from "./app/Content.jsx";

class App extends React.Component {
	render() {
		return <Content />;
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
