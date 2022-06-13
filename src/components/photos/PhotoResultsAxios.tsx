import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../layouts/Spinner';

interface Photo {
  id: string;
  urls: {
    small: string;
  };
}

type GetPhotosResponse = {
  data: Photo[];
};

function PhotoResults() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPhotos = async () => {
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
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      }
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  if (!loading) {
    return (
      <div className="photoResults">
        {photos?.map((photo: Photo, index: number) => (
          <div key={index.toString()}>
            <h2>{photo.id}</h2>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <Spinner />
    </div>
  );
}

export default PhotoResults;
