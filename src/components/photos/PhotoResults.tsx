import { useEffect, useContext } from 'react';
import UnsplashContext from '../../context/photos/UnsplashContext';
import Progress from '../layouts/Progress';
import PhotoItem from './PhotoItem';

interface Photo {
  id: string;
  urls: {
    small: string;
  };
}

function PhotoResults() {
  const { photos, loading, getPhotos } = useContext(UnsplashContext);

  useEffect(() => {
    getPhotos();
  }, []);

  if (!loading) {
    return (
      <div className="photoResults grid-container">
        {photos?.map((photo: Photo, index: number) => (
          <PhotoItem key={photo.id} photo={photo} index={index} />
        ))}
      </div>
    );
  }
  return <Progress done="100" />;
}

export default PhotoResults;
