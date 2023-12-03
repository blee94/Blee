import { useState, useRef } from 'react';

function UserInfo() {
  const userInfo = [{ id: 1, name: '', title: '' }];
  const [userList, setUserList] = useState(userInfo);
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const inputRef = useRef();
  // const focusInput = () => {
  //   input.current.focus();
  // };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      userSubmit();
    }
  };
  const userSubmit = () => {
    inputRef.current.focus();
    const newObj = {
      id: userList.length + 1,
      name: userName,
      title: title,
    };

    const newUserList = userList.concat(newObj);

    setUserList(newUserList);

    setUserName('');
    setTitle('');
  };

  const deleteUserInfo = (id) => {
    const newUserList = userList.filter((value) => value.id !== id);
    setUserList(newUserList);
  };

  return (
    <>
      <div
        style={{
          border: '1px solid black',
          display: 'flex',
          width: '530px',
          height: '30px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        작성자:{' '}
        <input
          type='text'
          required
          ref={inputRef}
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
        제목:{' '}
        <input
          type='text'
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onKeyDown={handleEnter}
        ></input>
        <button onClick={userSubmit}>작성</button>
        <br />
        {userList.map((value) => {
          return (
            <div
              key={value.id}
              style={{ cursor: 'pointer' }}
              onDoubleClick={() => {
                deleteUserInfo(value.id);
              }}
            >
              {/* {value.name} */}
              {/* {value.email}/ */}
            </div>
          );
        })}
        <br />
        {/* {userName} */}
        {/* {title} */}
      </div>
      <br />
      <div
        style={{
          display: 'flex',
          width: '530px',
          alignItems: 'center',
        }}
      >
        <select>
          <option>작성자</option>
          <option>제목</option>
        </select>
        <input type='text' style={{ marginLeft: '20px' }}></input>
        <button style={{ marginLeft: '20px' }}>검색</button>
        <button>전체</button>
      </div>
      {/* 정보 저장 테이블 */}
      <br />
      <table
        style={{
          width: '800px',
          border: '1px solid black',
        }}
      >
        <thead>
          <tr>
            <th style={{ border: '1px black solid' }}>번호</th>
            <th style={{ border: '1px black solid' }}>제목</th>
            <th style={{ border: '1px black solid' }}>작성자</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((value) => (
            <tr key={value.id}>
              <td
                style={{
                  border: '1px black solid',
                  height: '40px',
                  alignItems: 'center',
                }}
              >
                {value.id}
              </td>
              <td
                style={{
                  border: '1px black solid',
                  height: '40px',
                  alignItems: 'center',
                }}
              >
                {value.title}
              </td>
              <td
                style={{
                  border: '1px black solid',
                  height: '40px',
                  alignItems: 'center',
                }}
              >
                {value.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* 정보 검색 테이블 */}
      {/* <div>
        <ul>
          <li>번호</li>
        </ul>
        <ul>
          <li>제목</li>
        </ul>
        <ul>
          <li>작성자</li>
        </ul>
      </div> */}
    </>
  );
}

export default UserInfo;
