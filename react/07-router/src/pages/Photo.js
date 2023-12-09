import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Photo() {
  const [photo, setPhoto] = useState(null);
  const getPhotos = async () => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/photos?_start=0&_end=3'
    );
    const photos = await res.json();
    setPhoto(photos);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <div>상품페이지</div>
      {photo ? (
        <>
          {photo.map((value) => (
            <ul key={value.id} style={{ listStyle: 'none' }}>
              <li>번호: {value.id}</li>
              <li>사진이름: {value.title}</li>
              <li>
                <Link to={`/photo/${value.id}`}>
                  <img src={`${value.thumbnailUrl}`} alt='' />
                </Link>
              </li>
            </ul>
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
