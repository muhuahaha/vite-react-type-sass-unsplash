/* eslint-disable camelcase */
type PhotoItemProps = {
  photo: {
    urls: { regular: string };
    description: string;
    alt_description: string;
    location: { title: string };
  };
  index: number;
};

function PhotoItem({
  photo: { urls, description, alt_description, location },
  index,
}: PhotoItemProps) {
  return (
    <div className="background container">
      <img className="" src={urls.regular} alt="" />

      {/* <div className="profile">
          <img src={user.profile_image.medium} alt="Profile" />
        </div> */}
      <div className="centered text background">
        {index + 1}. {description || alt_description}
        <div className="text" style={{ backgroundColor: 'lightgray' }}>
          {' '}
          {location.title}
        </div>
      </div>
    </div>
  );
}

export default PhotoItem;
