import { url } from './api.js';

const getInfo = async () => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
};

export default getInfo;

