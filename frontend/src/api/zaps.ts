import axios from 'axios';
import { BACKEND_URL } from '../../config';
import { TOKEN } from '@/constants';
import { CreateZapMapper } from '@/mapper/create-zap.mapper';

export async function getAllZaps() {
  try {
    const result = await axios.get(`${BACKEND_URL}/zap`, {
      headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
    });
    return result.data;
  } catch (err: any) {
    console.log(err.response.data.error);
    return { success: false, error: err.response.data.error };
  }
}

export async function createZap({ actions, trigger }: any) {
  try {
    const zapRequest = CreateZapMapper({ actions, trigger });
    console.log(zapRequest);
    const result = await axios.post(`${BACKEND_URL}/zap`, zapRequest, {
      headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
    });
    console.log('result', result);
    return result.data;
  } catch (err: any) {
    console.log(err.response.data.error);
    return { success: false, error: err.response.data.error };
  }
}
