import {ref,onMounted} from 'vue'
import {getBannerAPI} from '@/apis/home'
 export function useBanner(){
    const bannerList = ref([])

    const getBanner= async ()=>{
   const res=await getBannerAPI({
    distributionSite:'2'
   })
   bannerList.value=res.result
  
}
onMounted(()=>getBanner())

return{
    bannerList
}
}

//声明use打头的逻辑函数
//将独立的业务逻辑封装到各个函数内部
//将用到的数据return出去
//原组件调用方法