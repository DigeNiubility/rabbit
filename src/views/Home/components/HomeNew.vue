<script setup>
import HomePanel from './HomePanel.vue';
import {findNewAPI} from "@/apis/home";
import {ref,onMounted,reactive} from 'vue'
const newList=ref([])
const getNewList= async ()=>{
   const res=await findNewAPI()
   newList.value=res.reslut
   
}
onMounted(() => {
  getNewList()  
  
})

const list=[
    {
        "id": "4026116",
        "name": "探险者黑胶防晒防雨遮阳伞户外钓鱼伞",
        "desc": "防雨遮阳隔绝紫外线",
        "price": "169.00",
        "picture": "https://yanxuan-item.nosdn.127.net/66090c5de391e43e4516601e14870842.jpg",
        "orderNum": 1103
    },
    {
        "id": "4019874",
        "name": "麦瑞克家用轻音智能多功能彩屏跑步机S450",
        "desc": "多功能跑步机，畅享彩屏",
        "price": "2089.00",
        "picture": "https://yanxuan-item.nosdn.127.net/a5d745bbe067ca2468cdb2948f4f10ca.jpg",
        "orderNum": 880
    },
    {
        "id": "4033959",
        "name": "3秒快速拆琴轻松保养odin奥丁12半音阶口琴",
        "desc": "易吹性好按键灵敏音色优美全黑琴身",
        "price": "329.00",
        "picture": "https://yanxuan-item.nosdn.127.net/937a8e46a9284e8f7e00e13911ecfbe7.png",
        "orderNum": 2511
    },
    {
        "id": "4023738",
        "name": "舒适软弹，糖果色儿童网孔透气运动鞋25-30",
        "desc": "防踢鞋头，透气网孔更舒适",
        "price": "139.00",
        "picture": "https://yanxuan-item.nosdn.127.net/c437179bc1d0d5ad77a79f15a5c6f166.png",
        "orderNum": 1305
    }
]

</script>

<template>
  <HomePanel title="新鲜好物" sub-title="新鲜好物 好多商品"> 
    <ul class="goods-list">
    <li v-for="item in list" :key="item.id">
      <RouterLink :to="`/detail/${item.id}`">
        <img v-img-lazy="item.picture" alt="" />
        <p class="name">{{ item.name }}</p>
        <p class="price">&yen;{{ item.price }}</p>
      </RouterLink>
    </li>
  </ul>
  </HomePanel>
 
  <!-- 下面是插槽主体内容模版
  <ul class="goods-list">
    <li v-for="item in newList" :key="item.id">
      <RouterLink to="/">
        <img :src="item.picture" alt="" />
        <p class="name">{{ item.name }}</p>
        <p class="price">&yen;{{ item.price }}</p>
      </RouterLink>
    </li>
  </ul>
  -->
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>