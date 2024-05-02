import axios from "axios";

const url = 'http://localhost:5000/users';
export const createUser = (user) => axios.post(url, user).then((res)=> res.data).catch((error) => console.log(error.message));