import axios from 'axios';
//const API_BASE = process.env.REACT_APP_API_BASE_A9;
const API_BASE = "http://127.0.0.1:8000/api";
const TUITS_API = `${API_BASE}/tuits`;
console.log(TUITS_API)

export const createTuit = async (tuit) => {
    const response = await axios.post(`${API_BASE}/create/tuits`, tuit)
    return response.data;
   }
   

export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
   }
   

   export const deleteTuit = async (tid) => {
    const response = await axios
      .delete(`${TUITS_API}/delete/${tid}`)
    return response.data
  }
  

  export const updateTuit = async (tuit) => {
    const response = await axios
      .put(`${TUITS_API}/${tuit.id}`, tuit);
    return tuit;
  }
  