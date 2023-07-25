import { useIntersectionObserver } from '@vueuse/core'
//插件优化
export const lazyPlugin={
    install(app){
        app.directive('img-lazy',{
            mounted(el,binding){
        
             
               const {stop} =useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                      //进入视口区
                    
                     if (isIntersecting) {
                        el.src=binding.value
                        stop()
                     }
                     
                    },
                  )
            }
        })   
    }
}