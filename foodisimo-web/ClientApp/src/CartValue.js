import { bake_cookie, read_cookie } from 'sfcookies';

class CartValue {
    constructor() {
      this.state = {
        cookie_key : 'cart',
        cookie_key1: 'sinolikitimi'
      };
    }

    ChangeValue(cart,sinolikitimi){
      bake_cookie(this.state.cookie_key, cart);
      bake_cookie(this.state.cookie_key1, sinolikitimi);
    };
    
    getCartValue = () => {
       return read_cookie(this.state.cookie_key);
    }
    getSinolikiTimiValue = () => {
        return read_cookie(this.state.cookie_key1);
     }
}
  
export default new CartValue();
  