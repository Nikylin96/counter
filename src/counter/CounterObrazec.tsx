import React, {useState} from 'react';
import s from './Counter.module.css'
import CounterForLocalstorage from "./CounterForLocalstorage";
import SettingObrazec from "../settings/SettingObrazec";

type PropsIncremType = {
    increm:number
    setIncrem:(value:number)=>void
    maxValue:number
    minValue:number
    error: string
}

const CounterObrazec = (props:PropsIncremType) => {

    return (
        <div className={s.container}>
            <div className={s.increm}><span className={props.increm===props.maxValue ? s.red : ''}>{props.error ? props.error : props.increm}</span></div>
            <div className={s.buttonCountainer}>
                <button disabled={props.increm===props.maxValue} onClick={()=>props.setIncrem(props.increm+1)}>INC</button>
                <button disabled={props.increm===props.minValue} onClick={()=>props.setIncrem(props.minValue)}>RESET</button>
            </div>
        </div>
    );
};

export default CounterObrazec;

// function App() {
//     const [increm, setIncrem] = useState(0);// 4
//     const [maxValue, setMaxValue] = useState(10);//5
//     const [minValue, setMinValue] = useState(0);//6
//     const [error, setError] = useState<string>('')
//     console.log(error,'error')
//     return (
//         <div className="App">
//             <CounterForLocalstorage/>
//             <CounterObrazec
//                 increm={increm}
//                 setIncrem={setIncrem}
//                 maxValue={maxValue}
//                 minValue={minValue}
//                 error={error}
//             />
//             <SettingObrazec
//                 maxValue={maxValue}
//                 minValue={minValue}
//                 setMaxValue={setMaxValue}
//                 setMinValue={setMinValue}
//                 setIncrem={setIncrem}
//                 setError={setError}
//
//             />
//         </div>
//     );
// }