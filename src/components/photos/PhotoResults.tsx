import { useEffect } from 'react';
import axios from 'axios';

type Photo = {
  id: string;
  urls: Record<string, unknown>;
};

type GetPhotosResponse = {
  data: Photo[];
};

function PhotoResults() {
  async function getUsers() {
    try {
      // 👇️ const data: GetUsersResponse
      const params = new URLSearchParams({
        query: 'dog',
        count: '10',
      });

      const UNSPLASH_TOKEN = `${String(
        import.meta.env.VITE_API_UNSPLASH_TOKEN
      )}`;

      const { data, status } = await axios.get<GetPhotosResponse>(
        `https://api.unsplash.com/photos/random?${params}`,
        {
          headers: {
            Authorization: `Client-ID ${UNSPLASH_TOKEN}`,
          },
        }
      );

      console.log(JSON.stringify(data, null, 4));

      // 👇️ "response status is: 200"
      console.log('response status is: ', status);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      }
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return <div>PhotoResults</div>;
}

export default PhotoResults;
