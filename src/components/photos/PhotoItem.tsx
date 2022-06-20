function PhotoItem({ photo: { urls, user } }) {
  return (
    <div className="background">
      <img className="" src={urls.regular} alt="" />
      <div className="avatar">
        <div className="">
          <img src={user.profile_image.medium} alt="Profile" />
        </div>
        {/* {JSON.stringify(urls)} */}
      </div>
      <h1 className="text">{user.username}</h1>
    </div>
  );
}

export default PhotoItem;
