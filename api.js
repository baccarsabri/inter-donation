import axios from 'axios'

export default {
    login: ({email,password}) =>{
    const userObject = {
        email: email,
        password: password
    };

   axios.post('http://localhost:3001/signin', userObject).then((res) => {
        console.log(res);
        if (res) {
          
          return res;
        }
    })
}
}