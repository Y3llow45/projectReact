import React from "react"

function Hello() {
    const sayHello = () => {
        console.log("Hello!");
    };
    return(
        <div>
            <h3>Hello component</h3>
            <button onClick={sayHello}>Say hello</button>
        </div>
    );
}

export default Hello;