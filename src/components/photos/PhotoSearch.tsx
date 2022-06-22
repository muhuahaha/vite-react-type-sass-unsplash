import React, { useState, useContext } from 'react';
import UnsplashContext from '../../context/photos/UnsplashContext';
import AlertContext from '../../context/alert/AlertContext';

function PhotoSearch() {
  const [text, setText] = useState('');

  const { photos, searchPhotos, clearPhotos } = useContext(UnsplashContext);
  const { setAlert } = useContext(AlertContext);

  type InputProps = {
    target: {
      value: string;
    };
  };

  type TestProps = {
    e: React.ChangeEvent<HTMLInputElement>;
    setText: (value: string) => void;
    searchPhotos: () => void;
  };

  const handleChange = (e: InputProps) => setText(e.target.value);
  const handleSubmit = (e: TestProps) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'error');
    } else {
      // todo search photo

      searchPhotos(text);

      setText('');
    }
  };
  console.log(photos, 'photos');

  return (
    <div className="">
      <div className="form-control text">
        <div className="input-field d-flex">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              className="border-customized-input rounded-input"
              value={text}
              onChange={handleChange}
            />
            <button type="submit" className="" onClick={handleSubmit}>
              GO
            </button>
          </form>
        </div>
      </div>
      <div className="m">
        {photos.length}
        {photos.length > 0 && (
          <button
            type="button"
            className="btn-ghost btn-lg"
            onClick={clearPhotos}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default PhotoSearch;
