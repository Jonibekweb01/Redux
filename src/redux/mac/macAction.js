import { BUY_MAC, BUY_RANDOM_MAC } from "./macType"

export const buyMac = () => {
    return {
        type: BUY_MAC,
    }
}

export const buyRandomMac = (count) => {
    return {
        type: BUY_RANDOM_MAC,
        payload: count
    }
}