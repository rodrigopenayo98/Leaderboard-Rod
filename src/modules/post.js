import { url } from './api.js';

const newGame = async (user, score) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: user,
        score: score,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
};

export { newGame };
