import { defineStore } from 'pinia';
import { ref,computed } from 'vue';

export const useCartStore =defineStore('cart',()=>{
    const cartList=ref([])
    const addCart=(goods)=>{
      const item=  cartList.value.find((item)=>goods.skuId===item.id)
        if (item) {
            item.count++
        }else{
            cartList.value.push(goods)
        }
    
    }
    const delCart=(skuId)=>{
      const idx=  cartList.value.findIndex((item)=>skuId===skuId)
      cartList.value.splice(idx,1)
    }
    //计算属性
    //1.数量和总价
    
     const allCount= computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
     const allPrice= computed(()=>cartList.value.reduce((a,c)=>a+c.count*c.price,0))
   
    return{
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice

    }
}, {
    persist: true,
  })