import React, { Component } from "react";
import ReactDOM from "react-dom";

class Test extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                testing this
            </div>
        )
    }
}
export default Test;

const wrapper = document.getElementById("utk-lib-header");
wrapper ? ReactDOM.render(<Test />, wrapper) : false;