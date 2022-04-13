import axios from 'axios';

const serverUrl = 'http://localhost:8080';

const getBlock = (blockNumber) => axios.get(`${serverUrl}/blocks/${blockNumber}`)

const getEthPrice = () => axios.get(`${serverUrl}/ethprice`)


module.exports = {
    getBlock,
    getEthPrice
}