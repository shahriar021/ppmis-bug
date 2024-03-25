import axios from 'axios';

const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get('http://application.iwmbd.com:5011/api/ppmis/wmg-hhs', {
      params: {
        api_token: 'p2lbgicTWkFrykA4QyiwmUmpHihzmc5BNzIABqUsm'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API: ', error);
    throw error;
  }
};

export { fetchDataFromAPI };
