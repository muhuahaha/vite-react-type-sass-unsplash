const UNSPLASH_URL = `${String(import.meta.env.VITE_API_URL_UNSPLASH)}`;
const UNSPLASH_TOKEN = `${String(import.meta.env.VITE_API_UNSPLASH_TOKEN)}`;

// export const getPhotos = async () => {
//   const params = new URLSearchParams({
//     query: 'seoul',
//     count: '10',
//   });
//   const response = await fetch(
//     `${UNSPLASH_URL}photos/random?${String(params)}`,
//     {
//       headers: {
//         Authorization: `Client-ID ${UNSPLASH_TOKEN}`,
//       },
//     }
//   );

//   const data = (await response.json()) as [];

//   console.log(JSON.stringify(data, null, 4));
//   return data;
// };

// Get search Results
// export const searchPhotos = async (text) => {
//   const params = new URLSearchParams({
//     query: text,
//     count: 10,
//     // per_page: 10,
//     // order_by: 'popular',
//     orientation: 'landscape',
//   });
//   const response = await fetch(
//     `${UNSPLASH_URL}/photos/random?${String(params)}`,
//     {
//       headers: {
//         Authorization: `Client-ID ${UNSPLASH_TOKEN}`,
//       },
//     }
//   );

//   console.log(response, 'response');

//   const data = await response.json();
//   return data;
// };
