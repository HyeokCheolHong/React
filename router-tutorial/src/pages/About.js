import { useLocation, useSearchParams } from "react-router-dom";

// 2024-12-03 Link 중복내용으로 인한 주석처리
// import { Link, useLocation, useSearchParams } from "react-router-dom";
/*
userLocation React Hook 특징
  1. location 객체를 반환하고 현재 사용자가 보고 있는 페이지 정보를 담고있다.
    1-1 pathname : 현재 주소경로 (?뒤의 쿼리스트링 제외)
    1-2 search : ? 문자를 포함한 쿼리스트링의 값
  2. 
*/
/*
useSearchParams React Hook 특징
  1. 쿼리 스트링 값을 쉽게 파싱 즉 문자를 분리하게 해준다.
*/


// 2024-12-02 React Router Component 연습 코드

const About = () => {
  const location = useLocation(); // useLocation Hook을 이용하여 location 객체를 받아옴

  const [searchParams, setSearchParams] = useSearchParams(); // 배열 구조 분해 할당
  const detail = searchParams.get("detail"); // URL의 "detail" 쿼리 파라미터 값 읽기
  const mode = searchParams.get("mode"); // URL의 "mode" 쿼리 파라미터 값 읽기
  /* searchParams.get("key")로 특정 키의 값을 가져옵니다
      URL이 /path?detail=true&mode=2일 때:
      detail의 값은 "true".
      mode의 값은 "2".
  */

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null || isNaN(parseInt(mode)) ? parseInt(1) : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  }

  return (
    <div style={{ marginBottom: "2px" }}>
      <h1>소개</h1>

      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>쿼리 스트링을 제외한 현재 주소 경로 : {location.pathname}</p>
      <p>?를 포함한 쿼리스트링 값 : {location.search}</p>
      {/* http://localhost:3000/about?page=7&keyword=react 로 페이지 경로에 입력시
      -> ?를 포함한 쿼리스트링 값 : ?page=7&keyword=react 라고 출력 */}
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button type="button" onClick={onToggleDetail}>Toggle detail</button>&nbsp;
      <button type="button" onClick={onIncreaseMode}>Increase mode</button>
    </div>
  );

  // 2024-12-03 반복적인 내용 주석처리
  // return (
  //   <div>
  //     <h1>소개</h1>

  //     2024-12-03 중복되는 홈으로 이동 Link 주석처리
  //     <p><Link to="/">홈으로</Link></p>

  //     <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
  //     <p>쿼리 스트링을 제외한 현재 주소 경로 : {location.pathname}</p>
  //     <p>?를 포함한 쿼리스트링 값 : {location.search}</p>
  //     {/* http://localhost:3000/about?page=7&keyword=react 로 페이지 경로에 입력시
  //     -> ?를 포함한 쿼리스트링 값 : ?page=7&keyword=react 라고 출력 */}
  //     <p>detail : {detail}</p>
  //     <p>mode : {mode}</p>
  //     <button type="button" onClick={onToggleDetail}>Toggle detail</button>&nbsp;
  //     <button type="button" onClick={onIncreaseMode}>Increase mode</button>
  //   </div>
  // );
};

export default About;