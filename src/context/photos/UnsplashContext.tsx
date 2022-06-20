import { createContex } from 'react';

const UnsplashContext = createContex();

const UNSPLASH_URL = `${String(import.meta.env.VITE_API_URL_UNSPLASH)}`;
const UNSPLASH_TOKEN = `${String(import.meta.env.VITE_API_UNSPLASH_TOKEN)}`;

export const UnsplashProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialState = {
    photos: [],
    user: {},
    loading: false,
  };

  const getPhotos = async () => {
    const params = new URLSearchParams({
      query: 'dog',
      count: '10',
    });
    const response = await fetch(
      `${UNSPLASH_URL}photos/random?${String(params)}`,
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
  return (
    <UnsplashContext.Provider
      value={{
        photos: state.photos,
        loading: state.loading,
        user: state.user,
        searchPhotos,
        clearPhotos,
        getUser,
      }}
    >
      {children}
    </UnsplashContext.Provider>
  );
};

export default UnsplashContext;
