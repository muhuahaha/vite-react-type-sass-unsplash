const initialState = { photos: [] };

type ACTIONTYPE =
  | { type: 'GET_PHOTOS'; payload: object }
  | { type: 'GET_USER'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'CLEAR_PHOTOS'; payload: boolean };

const UnsplashReducer = (state: typeof initialState, action: ACTIONTYPE) => {
  console.log(state, 'STATE');
  console.log(action, 'ACTION');
  switch (action.type) {
    case 'GET_PHOTOS':
      return { ...state, photos: action.payload, loading: false };
    case 'GET_USER':
      return { ...state, user: action.payload, loading: false };
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'CLEAR_PHOTOS':
      return { ...state, photos: [] };
    default:
      return state;
  }
};

export default UnsplashReducer;
