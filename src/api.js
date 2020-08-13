import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

const api = {
  vicafe: {
    login : (user, pass)=>{
      return axios
      .post(BASE_URL+'/login',{
        nickname: user,
        password: pass,
        gettoken: true
      })
      .then((response) =>{
        localStorage.setItem('token', response.data.token)
        console.log(response)
        return response;
      })
    },
    getMemebers : ()=>{
      return axios
      .get(BASE_URL+'/farmer/all')
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    },
    getOneMember: (id)=>{
      return axios
      .get(BASE_URL+`/farmer/${id}`)
      .then((response)=>{
        console.log(response);
        return response;
      })
      .catch((err)=>{
        console.log(err.response)
      })
    }

  },
};

export default api;