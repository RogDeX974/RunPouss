
import React from "react";
import "./styles.css";

function App() {

    React.useEffect(() => {
        fetch('/')
        .then(response => response.json())
    }, []);

    return (
        <div className="App">
            <h1>Test grand</h1>
            <h2>Test petit</h2>
        </div>
    );
}

export default App;