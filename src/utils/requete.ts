import type { FetchOptions } from '@/Model/FetchOptions'
import { ref } from 'vue'

export function useFetch( url:string, options:FetchOptions | null ) {
  const data = ref(null)
  const error = ref(null)
  if (options != null){  
    
    fetch(url, options)
        .then((res) => console.log(res))
        .catch((err) => (error.value = err))
    console.log(data)
  }
  else{
    fetch(url)
        .then((res) => res.json())
        .then((json) => (data.value = json))
        .catch((err) => (error.value = err))  
  }
  return  {data, error} 
}