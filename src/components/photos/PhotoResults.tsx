import { useEffect, useState } from 'react';
import Progress from '../layouts/Progress';
import PhotoItem from './PhotoItem';

interface Photo {
  id: string;
  urls: {
    small: string;
  };
}

function PhotoResults() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPhotos = async () => {
    const UNSPLASH_TOKEN = `${String(import.meta.env.VITE_API_UNSPLASH_TOKEN)}`;
    const params = new URLSearchParams({
      query: 'dog',
      count: '10',
    });
    const response = await fetch(
      `https://api.unsplash.com/photos/random?${params}`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_TOKEN}`,
        },
      }
    );

    const data = (await response.json()) as [];

    console.log(JSON.stringify(data, null, 4));
    setPhotos(data);
    setLoading(false);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  if (!loading) {
    return (
      <div className="photoResults">
        {photos?.map((photo: Photo) => (
          <PhotoItem key={photo.id} photo={photo} />
        ))}
      </div>
    );
  }
  return <Progress done="100" />;
}

export default PhotoResults;
