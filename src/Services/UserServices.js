import axios from 'axios';

class UserService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:11779',  
    });
  }

  async login(email, senha) {
    
     
      const response = await this.api.post('/login', {email, senha });      
      if (response) {
        localStorage.setItem("nome", email)
        localStorage.setItem("email", senha)
        
  
        return true
      }
  
      return
    }

    usuarioAutenticado () {
      return localStorage.getItem("token") != undefined ? true : false
    }

  
}

export default UserService;
