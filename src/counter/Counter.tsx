import React, {useState} from 'react';
import s from './Counter.module.css'

const Counter = () => {
    let [increm, setIncrem] = useState(0)

    function reset() {
        return 0
    }

    return (
        <div className={s.container}>
            <div className={s.increm}><span className={increm === 5? s.red : ''}>{increm}</span></div>
            <div className={s.buttonCountainer}>
                <button disabled={increm===5} onClick={()=>{setIncrem(increm+1)}}>INC</button>
                <button disabled={increm===0} onClick={()=>{setIncrem(reset)}}>RESET</button>
            </div>
        </div>
    );
};

export default Counter;

// <div className={s.contur}>
//     <span className={s.ishod}>{increm}</span>
//     <div className={s.secondContur}>
//         <button disabled={increm===5}
//                 onClick={ ()=>{setIncrem(increm+1)}  } className={s.firstButton}>inc</button>
//         <button disabled={increm === 0} onClick={()=> {setIncrem(reset)} } className={s.secondButton}>recet</button>
//     </div>
// </div>