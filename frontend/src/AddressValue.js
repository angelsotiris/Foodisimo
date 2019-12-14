import { bake_cookie, read_cookie } from 'sfcookies';
class AddressValue {
    constructor() {
      this.state = {
        cookie_key : 'address'
      };
    }

    ChangeValue(value){
      bake_cookie(this.state.cookie_key, value);
    };
    
    getAddressValue = () => {
       return read_cookie(this.state.cookie_key);
    }
}
  
export default new AddressValue();
  