import axios from 'axios';
const ApiFetch = async () => {
    try {
      let apiValue = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return apiValue;
  } catch (error) {
    return error;
  }
};
export default ApiFetch;