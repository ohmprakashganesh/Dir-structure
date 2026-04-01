// Classes or functions for API calls. Keep your business logic and fetch/axios calls here instead of inside components.

//give the proper name for the file, like this  is implementing the apis services of user
 
//get example
export const getInternsApi = async () => {
  try {
    const response = await api.get('/api/intern'); 
    return response.data; 
  } catch (error) {
    throw error;
  }
};

//post example
export const submitApplyForm = async (payload) => {
  // axios throws an error automatically for non-2xx responses
  const response = await api.post('/api/job', payload);
  return response.data;
};