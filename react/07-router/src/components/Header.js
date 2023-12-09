import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className='Header'>
        <div className='logo'>Router</div>
        <nav>
          <div>
            {/* a태그는 페이지 이동시 페이지를 새로고침 하지만 Link 컴포넌트는 해당 컴포넌트만 그 페이지에서 렌더링함. */}
            <Link to='/'>Home</Link>
          </div>
          <div>
            <Link to='/products'>Product</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
