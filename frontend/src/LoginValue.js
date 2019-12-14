import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

class LoginValue {
    constructor() {
      this.state = {
        cookie_key : 'loggedin'
      };
    }

    ChangeValue(value){
      bake_cookie(this.state.cookie_key, value);
      if(value===true){
        bake_cookie('address', 'lol');
      }else{
        delete_cookie('address');
      }
      window.location.href = "/";
    };
    
    getLoginValue = () => {
       return read_cookie(this.state.cookie_key);
    }
}
  
export default new LoginValue();
  