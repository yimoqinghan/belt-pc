import axios from 'axios';
import router from '../router'
// 请求超时时间
axios.defaults.timeout = 1000 * 8;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json';
// 设置公共url
axios.defaults.baseURL = 'https://svc.ipst.top'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  console.log(config);
  const token = localStorage.getItem('loginToken');        
        token && (config.headers.token = token);        
        return config; 
}, function (error) {
  console.log(error);
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  console.log(response,'res');
  if (response.status === 200) {
      if(response.data.error != null && (response.data.error.code == '1' || response.data.error.code == '2' || response.data.error.code == '3')){
        router.replace({                        
            path: '/restaurant/login',                        
            query: { 
                redirect: router.currentRoute.fullPath 
            }
        });
      }
      return Promise.resolve(response);      
  } else {            
      return Promise.resolve(response);        
  } 
//   return response;
}, (error) => {
  if (error.response.status) {            
    switch (error.response.status) {                
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。                
        case 401:                    
            router.replace({                        
                path: '/restaurant/login',                        
                query: { 
                    redirect: router.currentRoute.fullPath 
                }
            });
            break;

        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面                
        case 403:
             /* Toast({
                message: '登录过期，请重新登录',
                duration: 1000,
                forbidClick: true
            }); */
            // 清除token
            localStorage.removeItem('loginToken');
            // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
            setTimeout(() => {                        
                router.replace({                            
                    path: '/restaurant/login',                          
                    query: { 
                        redirect: router.currentRoute.fullPath 
                    }                        
                });                    
            }, 1000);                    
            break; 

        // 404请求不存在
        case 404:
            /* Toast({
                message: '网络请求不存在',
                duration: 1500,
                forbidClick: true
            }); */
            break;
        // 其他错误，直接抛出错误提示
        default:
            /* Toast({
                message: error.response.data.message,
                duration: 1000,
                forbidClick: true
            }); */
    }
    return Promise.reject(error.response);
  }
});

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
 export function get(url, params){    
    return new Promise((resolve, reject) =>{        
          axios.get(url, {            
              params: params        
          }).then(res => {
              resolve(res.data);
          }).catch(err =>{
              reject(err.data)        
      })    
    });
  }

  /** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
  }