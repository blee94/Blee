import { useState, useEffect } from 'react';
import {
  useNavigate,
  useParams,
  //   useSearchParams,
  //   Link,
} from 'react-router-dom';

export default function PhotoPage() {
  const [photo, setPhoto] = useState();
  const { id } = useParams();
  const [error, setError] = useState('Loading...');
  const navigator = useNavigate();

  const getPhotos = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      if (res.ok) {
        const pho = await res.json();
        setPhoto(pho);
      } else {
        throw Error('존재하지 않는 페이지');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <>
      <div>사진페이지</div>
      {photo ? (
        <>
          <ul>
            <li>번호: {photo.id}</li>
            <li>앨범번호: {photo.albumId}</li>
            <li>사진제목: {photo.title}</li>
            <img src={`${photo.url}`} alt='' />
          </ul>
        </>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
}
