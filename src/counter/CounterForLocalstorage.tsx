import React, {useEffect, useState} from 'react';

const CounterForLocalstorage = () => {

    const [value, setValue] = useState(0)

    useEffect(()=> {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    useEffect(()=> {
        localStorage.setItem('counterValue', JSON.stringify(value))
    },[value])

    const incHandler = () => {
        setValue(value + 1)
    }

    // const setToLocalstorageHandler = () => {
    //     localStorage.setItem('counterValue', JSON.stringify(value))
    //     setValue(value)
    // }
    // const getFromLocalstorageHandler = () => {
    //     let valueAsString = localStorage.getItem('counterValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setValue(newValue)
    //     }
    // }
    // const clearLocalstorageHandler = () => {
    //     localStorage.clear()
    //     setValue(0)
    // }
    // const removeItemLocalstorageHandler = () => {
    //     localStorage.removeItem('counterValue +1')
    // }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            {/*<button onClick={setToLocalstorageHandler}>setToLocalstorage</button>*/}
            {/*<button onClick={getFromLocalstorageHandler}>getFromLocalstorage</button>*/}
            {/*<button onClick={clearLocalstorageHandler}>clear</button>*/}
            {/*<button onClick={removeItemLocalstorageHandler}>remove</button>*/}
        </div>
    );
};

export default CounterForLocalstorage;