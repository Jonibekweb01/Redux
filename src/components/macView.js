import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyMac, buyRandomMac } from '../redux/mac/macAction';

export const MacView = () => {
    const numOfMac = useSelector(state => state.mac.countOfMac)
    const dispatch = useDispatch()
    const inpRef = useRef()

    return (
        <>
            <div>
                <h1>Mac count - {numOfMac}</h1>
                <button onClick={() => dispatch(buyMac())}>Buy mac</button>
                <div>
                    <input ref={inpRef} type="text" />
                    <button onClick={() => dispatch(buyRandomMac(inpRef.current.value))}>Buy mac</button>
                </div>
            </div>
        </>
    )
}
