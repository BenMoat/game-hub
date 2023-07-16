import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '4560e0e3efe94a7782bc6fdc92ebd322'
  }
})