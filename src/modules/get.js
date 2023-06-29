import url from './api.js';

const getInfo = async () => { 
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }
    return await response.json();

  } catch (error) {
    console.log('Error:', error);
    return [];
  }
};

export default getInfo;

