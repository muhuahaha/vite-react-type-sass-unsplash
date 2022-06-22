/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
import { createContext, useMemo, useReducer, useState } from 'react';
import UnsplashReducer from './UnsplashReducer';

const UnsplashContext = createContext('');

const UNSPLASH_URL = `${String(import.meta.env.VITE_API_URL_UNSPLASH)}`;
const UNSPLASH_TOKEN = `${String(import.meta.env.VITE_API_UNSPLASH_TOKEN)}`;

type UnsplashProviderProps = { children: React.ReactNode };

export const UnsplashProvider = ({ children }: UnsplashProviderProps) => {
  const initialState = { photos: [], loading: false };
  const [state, dispatch] = useReducer<any>(UnsplashReducer, initialState);

  const clearPhotos = () => dispatch({ type: 'CLEAR_PHOTOS' });

  // Set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  const itemsArr: string[] = [
    'korea pattern',
    'hangeul',
    'korean food',
    'travel korea',
    'seoul',
  ];

  function random_item(items: string[]) {
    return items[Math.floor(Math.random() * items.length)];
  }

  // get Photos
  const [query, setQuery] = useState(String(random_item(itemsArr)));

  const getPhotos = async () => {
    setLoading();

    const params = new URLSearchParams({
      query,
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
    dispatch({ type: 'GET_PHOTOS', payload: data });
    console.log(data, 'daattaa');
  };

  // Get search Results
  const searchPhotos = async (text: string) => {
    setLoading();
    const params = new URLSearchParams({
      query: text,
      count: 10,
      // per_page: 10,
      // order_by: 'popular',
      // orientation: 'landscape',
    });
    const response = await fetch(
      `${UNSPLASH_URL}/photos/random?${String(params)}`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_TOKEN}`,
        },
      }
    );

    console.log(response, 'response');

    const data = await response.json();
    dispatch({ type: 'GET_PHOTOS', payload: data });
  };

  return (
    <UnsplashContext.Provider
      value={useMemo(() => ({
        ...state,
        getPhotos,
        searchPhotos,
        clearPhotos,
      }))}
    >
      {children}
    </UnsplashContext.Provider>
  );
};

export default UnsplashContext;
