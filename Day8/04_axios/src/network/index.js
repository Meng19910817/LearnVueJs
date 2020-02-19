import axios from "axios"

export function request(config){
  // export function request(config, success, failure){
  // return new Promise((resolve, reject)=>{
   
  //   const instance = axios.create({
  //     baseURL:"http://106.54.54.237:8000/api/hy",
  //     timeout:5000
  //   })

  //   instance(config).then(res=>{
  //     resolve(res)
  //   }).catch(error=>{
  //     console.log(error)
  //   })
  // })
  // const instance = axios.create({
  //       baseURL:"http://106.54.54.237:8000/api/hy",
  //       timeout:5000
  // })
  
  // instance(config).then(res=>{
  //  success(res)
  // }).catch(error=>{
  //   failure(error)
  // })

  const instance = axios.create({
    baseURL:"http://106.54.54.237:8000/api/hy",
    timeout:5000
  })

  instance(config).then(res=>{
    config.success(res)
  }).catch(error=>{
    config.failure(error)
  })

}

