import axios from 'axios';
import { OPEN_API_KEY } from './src/utils/constant.js';

const testOpenRouterAPI = async () => {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'google/gemma-2-9b-it:free', // Updated to the correct free model
        messages: [{ role: 'user', content: 'Hello' }],
      },
      {
        headers: {
          Authorization: `Bearer ${OPEN_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

testOpenRouterAPI();