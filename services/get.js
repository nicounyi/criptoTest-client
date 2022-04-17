import { getBlock, getTransaction, getAddress, getEthPrice } from '../services/api'

export async function getNewBlock(number) {
    const res = number ? number : "";
    const { data } = await getBlock(res)
    return data
}

export async function getTsx(number) {
    const { data } = await getTransaction(number)
    return data
}

export async function getAddressByHash(address) {
    const { data } = await getAddress(address)
    return data
}

export async function getPrice() {
    const  {data}  = await getEthPrice()
    return data
}