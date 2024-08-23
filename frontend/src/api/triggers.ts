import { TOKEN } from '@/constants';
import axios from 'axios';
import { BACKEND_URL } from '../../config';

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

export async function getAvailableEventsForTrigger(triggerId: string) {
  try {
    const result = await axios.get(
      `${BACKEND_URL}/trigger/events/${triggerId}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
      }
    );
    return result.data;
  } catch (err: any) {
    console.log(err.response.data.error);
    return { success: false, error: err.response.data.error };
  }
}
