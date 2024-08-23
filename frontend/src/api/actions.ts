import axios from 'axios';
import { BACKEND_URL } from '../../config';
import { TOKEN } from '@/constants';

export async function getAvailableActions() {
  try {
    const result = await axios.get(`${BACKEND_URL}/action/availableActions`, {
      headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
    });
    return result.data;
  } catch (err: any) {
    console.log(err.response.data.error);
    return { success: false, error: err.response.data.error };
  }
}

export async function getAvailableTriggers() {
  try {
    const result = await axios.get(`${BACKEND_URL}/trigger/availableTriggers`, {
      headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
    });
    return result.data;
  } catch (err: any) {
    console.log(err.response.data.error);
    return { success: false, error: err.response.data.error };
  }
}
