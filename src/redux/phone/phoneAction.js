import { BUY_PHONE, BUY_RANDOM_PHONE } from "./phoneType"

export const buyPhone = () => {
    return {
        type: BUY_PHONE,
    }
}

export const buyRandomPhone = (count) => {
    return {
        type: BUY_RANDOM_PHONE,
        payload: count
    }
}