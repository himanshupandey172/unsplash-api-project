import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID HJqYXJQwC_K7gvGwLbPAPmo4Nzk4mMN_NjvdMrarxhk",
  },
});
