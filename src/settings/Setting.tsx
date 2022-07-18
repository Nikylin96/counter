import React, {ChangeEvent, useState} from 'react';
import s from "./Settings.module.css";
import {Simulate} from "react-dom/test-utils";

type PropsType = {
    maxValue: number
    minValue: number
    increm: number
    setIncrem: (value: number) => void
    setMaxValue: (value: number) => void
    setMinValue: (value: number) => void
    setError: (value:string)=> void
}

const Setting = (props: PropsType) => {
    const [maxValueSetting, setMaxValueSetting] = useState(props.maxValue)
    const [minValueSetting, setMinValueSetting] = useState(props.minValue)

    const setValue = () => {
        props.setMaxValue(maxValueSetting)//6
        props.setMinValue(minValueSetting)//5
        props.setIncrem(minValueSetting)// 4
    }

    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValueSetting(+e.currentTarget.value)
       if(!(+e.currentTarget.value <= minValueSetting)){
           return props.setError('')
       }
       props.setError('Error')
    }
    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValueSetting(+e.currentTarget.value)
        if(!(+e.currentTarget.value >= maxValueSetting)){
            return props.setError('')
        }
        props.setError('Error')
    }


    return (
        <div className={s.containerSettings}>
            <div>
                <h4> max value <input type="number" value={maxValueSetting} onChange={onChangeMax}/></h4>
                <h4> min value <input type="number" value={minValueSetting} onChange={onChangeMin}/></h4>
            </div>
            <div>
                <button className={s.button} onClick={setValue}>set</button>
            </div>
        </div>
    );
};

export default Setting;