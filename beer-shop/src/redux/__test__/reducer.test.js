
import { ADD_TO_FAVS,REMOVE_FAVS } from '../action';
import { INIT_STATE } from '../reducer';
import store from '../../store';


it('should dispatch the `AddtoFavs` action successfully', () => {
 const data = {
    id:'fake-id',
    name:'beer',
    description:" welcome to Beer shop"
 }

 store.dispatch(ADD_TO_FAVS(data));

  const expectedState = {
    ...INIT_STATE,
    carts: [
     data
    ],
  };

  expect(store.getState()).toEqual(expectedState);
  
});


it('should dispatch the `RemoveFavs` action successfully', () => {
    const data = {
       id:'fake-id',
       name:'beer',
       description:" welcome to Beer shop"
    }
   
    store.dispatch(REMOVE_FAVS(data.id));
   
     const expectedState = {
       ...INIT_STATE
       
     };
   
     expect(store.getState()).toEqual(expectedState);
    
    
   });