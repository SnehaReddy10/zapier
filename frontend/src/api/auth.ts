import axios from 'axios';
import { BACKEND_URL } from '../../config';
import { TOKEN } from '@/constants';

export async function CreateUser({
  email,
  firstname,
  lastname,
  password,
}: {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
}) {
  try {
    const result = await axios.post(`${BACKEND_URL}/auth/signup`, {
      firstname,
      lastname,
      email,
      password,
    });
    const { success, token } = result.data;
    if (success) {
      localStorage.setItem(TOKEN, token);
    }
    return result.data;
  } catch (err: any) {
    console.log(err.response.data.error);
    return err.response.data.error;
  }
}
