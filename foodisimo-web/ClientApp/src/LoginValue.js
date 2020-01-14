import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

class LoginValue {
    constructor() {
      this.state = {
        cookie_key : 'loggedin'
      };
    }

    ChangeValue(value){
        
        if (typeof value === "string") {
            bake_cookie('address', value);
            bake_cookie(this.state.cookie_key, true);
      }else{
            delete_cookie('address');
            bake_cookie(this.state.cookie_key, false);
      }
        window.location.href = "/";
    };
    
    getLoginValue = () => {
       return read_cookie(this.state.cookie_key);
    }
}
  
export default new LoginValue();
  