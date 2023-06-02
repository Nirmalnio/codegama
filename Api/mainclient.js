import axios from "axios";


function MainClient() {
    const instance = axios.create({
      baseURL: "https://fakestoreapi.com",
    });
  
    const post = (url, data) => {
      return instance.post(url, data);
    };
    const get = (url) => {
      return instance.get(url);
    };
  
    const del = (url) => {
      return instance.delete(url);
    };
  
    const put = (url, data) => {
      return instance.put(url, data);
    };
  
    return { get, post, del, put };
  }
  
  export default MainClient;
  
  export const { get, post, del, put } = MainClient();
  