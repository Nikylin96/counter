import React, {useState} from 'react';
import './App.css';
import CounterObrazec from "./counter/CounterObrazec";
import SettingObrazec from "./settings/SettingObrazec";
import CounterForLocalstorage from "./counter/CounterForLocalstorage";
import {Counter} from "./counter/Counter";
import Setting from "./settings/Setting";

function App() {
    const [increm, setIncrem] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [minValue, setMinValue] = useState(0)
    const [error, setError] = useState('')


    return (
        <div className="App">
            <Counter
                increm={increm}
                setIncrem={setIncrem}
                maxValue={maxValue}
                minValue={minValue}
                error={error}
            />
            <Setting
                increm={increm}
                setIncrem={setIncrem}
                maxValue={maxValue}
                minValue={minValue}
                setMaxValue={setMaxValue}
                setMinValue={setMinValue}
                setError={setError}
            />
        </div>
    );
}

export default App;
