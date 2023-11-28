import image from "./ReactLogo.png";

const FunctionComponent = () => {
  const text = "hello";
  const name = "blee";
  const nameAnimal = "둘리";
  const Animal = "말티즈";
  function math(a, b) {
    a = 3;
    b = 5;
    const result = a + b;
    console.log(result);
    return result;
  }
  const a = 5;
  const b = 6;
  const compare = () => {
    if (a > b) {
      return "a가 b보다 큽니다";
    } else {
      return "a가 b보다 작습니다";
    }
  };

  const title = "Hello World";

  const ifRenderTest = () => {
    if (name === "blee") {
      return "안녕!";
    } else if (name === "duly") {
      return "안뇽";
    } else {
      return "누구?";
    }
  };

  return (
    <>
      <div>FunctionComponent 입니다1</div>
      <div>FunctionComponent 입니다2</div>

      <h3>{text}</h3>

      {/* if문,for문 사용불가. 3항 연산자는 사용가능. (조건 ? 'true' : 'false') */}
      <h4>{name === "blee" ? "안녕하세요" : "누구세요?"}</h4>

      {/* 복잡한 조건을 이요하고 싶다면 위에서 함수로 생성 후 아래에서 사용가능. */}
      <h4>{ifRenderTest()}</h4>

      {/* 조건에 따른 렌더링.  && 이전 조건이 참일경우에만 && 뒤에 결과를 렌더링 함. */}
      <h5>{name === "blee" && "안녕~"}</h5>

      {/* inline style 적용 방법 = style 속성 값으로 객체를 전달 */}
      <div style={{ fontSize: "20px", color: "lightblue" }}>{name}</div>

      {/* class와 onclick을 jsx에서 사용하기 */}
      <div className="test-css">jsx에서 css 사용하기</div>
      {/* onclick: html에서는 함수를 호출했지만 jsx에서는 함수를 선언한다. */}
      <button
        onClick={() => {
          console.log("HELLO");
        }}
      >
        버튼
      </button>

      {/* 종료 태그 필수 */}
      <br />
      {/* 기본 경로는 public폴더 안 */}
      <img src="/logo192.png" alt="LogoImg" />
      {/* components내에 이미지를 위에서 import로 불러와서 선언 후 여기서 바로 사용가능 */}
      <img src={image} alt="ReactLogo"></img>

      <hr />
      <div className="prac1">
        제 반려 동물의 이름은 <span className="underline">{nameAnimal}</span>입니다.
        <span className="underline">{nameAnimal}</span>는 <span className="underline">{Animal}</span>입니다.
      </div>

      <hr />
      <div>{math() === 8 ? "정답입니다!" : "오답입니다!"}</div>

      <hr />
      <div>{compare() && "a가 b보다 큽니다"}</div>

      <hr />
      <div className="container">
        <h1 className="header">{title}</h1>
        <span>아이디: </span>
        <input type="text"></input>
        <br />
        <br />
        <span>비밀번호: </span>
        <input type="password"></input>
      </div>
    </>
  );
  //   return은 꼭 하나의 태그로만 작성해야함. 태그 안에는 다른 태그가 들어가도 됨. 형제태그x. 태그가 비어있어도 됨.
  //   js문법 사용 가능함. {}안에 선언한 변수 작성
};

export default FunctionComponent;
