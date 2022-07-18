import React, {useEffect, useState} from 'react';
import s from './Counter.module.css'

type PropsType = {
    increm: number
    setIncrem: (value:number)=>void
    maxValue: number
    minValue:number
    error:string
}

export const Counter = (props:PropsType) => {

    const increment = () => {
        props.setIncrem(props.increm+1)
        localStorage.setItem('counterValue', JSON.stringify(props.increm+1))
    }

    useEffect(()=> {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            props.setIncrem(newValue)
        }
    }, [])

    return (
        <div className={s.container}>
            <div className={s.increm}><span className={props.increm===props.maxValue ? s.red : ''}>{props.error ? props.error : props.increm}</span></div>
            <div className={s.buttonCountainer}>
                <button disabled={props.increm===props.maxValue} className={s.button} onClick={increment}>inc</button>
                <button disabled={props.increm===props.minValue} className={s.button} onClick={()=>{props.setIncrem(props.minValue)}}>reset</button>
            </div>

        </div>
    );
};
