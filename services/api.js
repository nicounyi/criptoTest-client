import axios from 'axios';

const serverUrl = 'http://localhost:8080';

const getBlock = (blockNumber) => axios.get(`${serverUrl}/blocks/${blockNumber}`)

const getTransaction = (txsNumber) => axios.get(`${serverUrl}/transaction/${txsNumber}`)

const getAddress = (address) => axios.get(`${serverUrl}/address/${address}`)

const getEthPrice = () => axios.get(`${serverUrl}/ethprice`)



module.exports = {
    getBlock,
    getEthPrice,
    getTransaction,
    getAddress
}