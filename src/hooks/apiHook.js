// src/hooks/useApi.js
//reusable hook for post,put,get,delete 
//to use it   define the api in service/apis.js file
//  and use the hook in component like    

//   const{request:getCareers, loading,errors,data:jobs}=useApi(getCareersApi);
//   useEffect(()=>{
//     getCareers();
//   },[])

//getCareersApi this is function define in api.js file
import { useState } from 'react';

export const useApi = (apiFunction) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const request = async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiFunction(...args);
      setData(result);
      return { success: true, data: result };
    } catch (err) {
      const message = err.response?.data?.message || err.message || "Something went wrong";
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error, data };
};