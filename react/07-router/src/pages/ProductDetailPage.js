import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProductDetailPage() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const [error, setError] = useState('Loading...');
  //   console.log(id);

  //   쿼리를 가져오고 싶을때!(~~~?id=2&name=blee)
  //   const [query, setQuery] = useSearchParams();
  //   console.log(query) -> SearchParams의 객체가 표시됨.
  // console.log(query.get(name)) -> 지정한 값이 표시됨.

  //   Link컴포넌트를 이용하지 않고, js함수 내부에서 페이지를 이동하고 싶을때 사용.
  const navigator = useNavigate();

  const getProduct = async () => {
    try {
      // 오류가 날수도 있는 코드는 try안에 넣으면 됌. 오류가 발생하면 catch로 이동함.
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (res.ok) {
        const prod = await res.json();
        setProduct(prod);
      } else {
        throw Error('존재하지 않는 페이지');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div>상품 상세페이지</div>
      {/* -----------setQuery----------- */}
      {/* <button onClick={() => setQuery({ name: 'codee' })}>
        setQuery테스트
      </button> */}
      {/* -----------useNavigate--------- */}
      <button onClick={() => navigator(-1)}>목록으로 이동</button>
      <button onClick={() => navigator('/')}>홈으로 이동</button>
      {product ? (
        <>
          <ul>
            <li>번호: {product.id}</li>
            <li>상품명: {product.title}</li>
          </ul>
        </>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
}
