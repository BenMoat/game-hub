import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '269317d699334d31863fbdb38b2d9886'
  }
})