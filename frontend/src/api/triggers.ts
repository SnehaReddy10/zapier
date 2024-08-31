import { TOKEN } from '@/constants';
import axios from 'axios';
import { BACKEND_ENGINE_URL, BACKEND_HOOKS_URL } from '../../config';

export async function getAvailableTriggers() {
  try {
    const result = await axios.get(
      `${BACKEND_ENGINE_URL}/trigger/availableTriggers`,
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

export async function getAvailableEventsForTrigger(triggerId: string) {
  try {
    const result = await axios.get(
      `${BACKEND_ENGINE_URL}/trigger/events/${triggerId}`,
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

export async function testTrigger(triggerId: string) {
  try {
    const result = await axios.get(
      `${BACKEND_HOOKS_URL}/test-trigger/${triggerId}`,
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

export async function findNewRecords(triggerId: string) {
  try {
    const result = await axios.get(
      `${BACKEND_HOOKS_URL}/find-new-records/${triggerId}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
      }
    );
    console.log({ result: result });
    return result.data;
  } catch (err: any) {
    console.log(err.response.data.error);
    return { success: false, error: err.response.data.error };
  }
}
