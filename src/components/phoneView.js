import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyPhone, buyRandomPhone } from '../redux/phone/phoneAction';

export const PhoneView = () => {
    const numOfPhone = useSelector(state => state.phone.countOfPhone)
    const numOfMac = useSelector(state => state.mac.countOfMac)
    const dispatch = useDispatch()
    const inpRef = useRef()

    return (
        <>
            <div>
                <h1>Phone count - {numOfPhone}</h1>
                <button onClick={() => dispatch(buyPhone())}>Buy Phone</button>
                <div>
                    <input ref={inpRef} type="text" />
                    <button onClick={() => dispatch(buyRandomPhone(inpRef.current.value))}>Buy Phone</button>
                </div>
            </div>
        </>
    )
}
