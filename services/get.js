import { getBlock, getEthPrice } from '../services/api'

export async function getNewBlock(number) {
    const res = number ? number : "";
    const { data } = await getBlock(res)
    return data
}

export async function getPrice() {
    const  {data}  = await getEthPrice()
    return data
}