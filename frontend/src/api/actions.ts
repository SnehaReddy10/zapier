import axios from 'axios';
import { BACKEND_ENGINE_URL } from '../../config';
import { TOKEN } from '@/constants';

export async function getAvailableActions() {
  try {
    const result = await axios.get(
      `${BACKEND_ENGINE_URL}/action/availableActions`,
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

export async function getAvailableEventsForActions(actionId: string) {
  try {
    const result = await axios.get(
      `${BACKEND_ENGINE_URL}/action/events/${actionId}`,
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
