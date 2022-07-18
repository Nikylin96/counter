import React, {ChangeEvent, useState} from 'react';
import s from "./Settings.module.css";

type PropsSettingsType = {
    maxValue: number
    minValue: number
    setMaxValue: (value: number) => void
    setMinValue: (value: number) => void
    setIncrem: (value: number) => void
    setError: (value: string) => void
}

const SettingObrazec = (props: PropsSettingsType) => {
    const [maxValueSettings, setMaxValueSettings] = useState(props.maxValue)
    const [minValueSettings, setMinValueSettings] = useState(props.minValue)

    const setValue = () => {
        props.setMaxValue(maxValueSettings)//6
        props.setMinValue(minValueSettings)//5
        props.setIncrem(minValueSettings)// 4
    }

    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValueSettings(+e.currentTarget.value)
        if (!(+e.currentTarget.value <= minValueSettings)) {
            return props.setError("")
        }
            props.setError('Неверное значение')

    }
    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValueSettings(+e.currentTarget.value)
        if (!(+e.currentTarget.value >= maxValueSettings)) {
           return props.setError("")
        }
            props.setError('Неверное значение')
    }

    return (
        <div className={s.containerSettings}>
            <div>
                <h4>MAX VALUE <input type="number" value={maxValueSettings}
                                     onChange={onChangeMax}/></h4>
                <h4>MIN VALUE <input type="number" value={minValueSettings}
                                     onChange={onChangeMin}/></h4>
            </div>
            <div>
                <button onClick={setValue}>SET</button>
            </div>

        </div>
    );
};

export default SettingObrazec;