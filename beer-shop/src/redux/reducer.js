export const INIT_STATE = {
  carts: [],
  isFav:false
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
     
        const temp = { ...action.payload };
       
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      

    case "RMV_CART":
     
      const data = state.carts.filter((item) => item.id !== action.payload);

      return {
        ...state,
        carts: data,
      };

    default:
      return state;
  }
};

export default cartreducer;


