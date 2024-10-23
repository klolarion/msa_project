// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const fetchMyData = async (apiKey: string) => {
    try {
      const response = await axios.get('http://localhost:8081/api/data', {
        params: { api_key: apiKey },
      });
      console.log('데이터:', response.data);
    } catch (error) {
      console.error('데이터 요청 오류:', error);
    }
  };
  