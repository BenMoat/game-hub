import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c0d67b5e0e9244bea141a45487025bed'
  }
})