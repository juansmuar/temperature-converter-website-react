import React, {useState} from "react";
import "./styles.css"

function TemperatureConverter () { 
    const [degrees, setDegrees] = useState(0);
    const [option, setOption] = useState("kelvin");
    const [result, setResult] = useState(0);

    function handleDeg (event) {
        setDegrees(event.target.value);
    }

    function handleOp (event) {
        setOption(event.target.value);
    }

    function calcTemp () {
        let result = 0;
        if (option === "kelvin") {
            result = Number(degrees - 273.5).toFixed(2);
            setResult(result);
        }
        else {
            result = Number((degrees - 32)*(5/9)).toFixed(2);
            setResult(result);
        }
    } 

    return (
        <main>
            <section className="container">
            <div>
                <label htmlFor="degrees">Degrees</label>
                <input type="text" id="degrees" onChange={handleDeg}/>
            </div>
            <div>
                <label htmlFor="type">Type</label>
                    <select id="type" onChange={handleOp}>
                        <option value="kelvin">Kelvin</option>
                        <option value="fahrenheit">Fahrenheit</option>
                    </select>
            </div>
            <button type="button" onClick={calcTemp}>Convert</button>
            </section>
            <section>
                <label>Result</label>
                <h3>{result} °C</h3>
            </section>
        </main>
    )
};

export default TemperatureConverter;