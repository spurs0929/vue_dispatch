import counterReducer from '../reducers/counter';
import { PLUS, MINUS } from '../actions/counter';

export default (ctx) => {
  const { plus, minus } = counterReducer(ctx.$data);

  return function(action, ...args){
    switch(action){
      case PLUS: 
        ctx.result = plus(...args);
        break;
      case MINUS: 
        ctx.result = minus(...args);
        break;
      default:  
        break;    
    }
  }
}