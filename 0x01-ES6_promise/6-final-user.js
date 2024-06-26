import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const res = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);

    return res.map((res) => ({
      status: res.status,
      value: res.status === 'fulfilled' ? res.value : String(res.reason),
    }));
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    throw error;
  }
}
