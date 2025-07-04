export default async function initialLectureFetch() {
  const initialURL = 'http://localhost:3001/saleitem';

  try {
    const res = await fetch(initialURL, {
      method: 'GET',
    });
    if (!res.ok) {
      throw new Error(`API 요청 에러: ${res.status}`);
    }
    const result = await res.json();
    return result;
  } catch (err) {
    console.error('가져오기 실패:', err);
    throw err;
  }
}

initialLectureFetch();
