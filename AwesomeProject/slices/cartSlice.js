//alışveriş sepetini yöentme
import { createSlice } from '@reduxjs/toolkit'
//sepetin başlıngıç durumu boş
const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  //bu dilimin neler yapacağını tanımladık
  reducers: {
    addToCart: (state,  action) => {
      state.items=[...state.items, action.payload];
    },
    removeFromCart: (state,  action) => {
        let newCart=[...state.items];
        let itemIndex=state.items.findIndex(item=> item.id==action.payload.id);
        if(itemIndex>=0){
            newCart.splice(itemIndex, 1);
        }else{
            console.log("sepete ürün eklenemedi");
        }
        state.items=newCart;
    },
    emptyCart: (state,  action) => {
        state.items=[];
    },
  },
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems= state=> state.cart.items;

export const selectCartItemsById=(state, id)=>state.cart.items.filter(item=>item.id==id);

export const selectTotal= state=> state.cart.items.reduce((total, item)=> total+=item.price, 0);
//sepet durumunu günceller
export default cartSlice.reducer