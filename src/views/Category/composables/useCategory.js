import { getCategoryAPI } from '@/apis/category';
import {ref,onMounted} from 'vue'
import { useRoute,onBeforeRouteUpdate } from "vue-router";
export function useCategory(){
    const categoryData=ref({})
const route=useRoute()
const getCategory=async (id=route.params.id)=>{
    const res =await getCategoryAPI(id)
    categoryData.value=res.result
}
onMounted(() => {
    getCategory()
})
//目标：路由参数变化时，重新发送接口数据
onBeforeRouteUpdate((to)=>{
    getCategory(to.params.id)
})

return{
    categoryData
}
}