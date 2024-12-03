// 2024-12-03 공통페이지 만들기 및 경로이동(navigate) 코드
import { Link, Outlet, useNavigate } from "react-router-dom";


const Layout = () => {
  const navigate = useNavigate();
  // useNavigate Hook은 Link 컴포넌트를 사용하지 않고 다른 페이지로 이동해야 하는경우 사용한다.

  const goBack = () => {
    // 이전 페이지로 이동(이전 방문한 페이지를 브라우저가 기억하고 있어야함)
    navigate(-1); // -1: 이전 페이지로 이동
    // history.go(-1) : history.go() 함수는 router v5 이전 버전에서 사용했던 함수라 v6버전이상 부터는 navigate(-1)을 사용함
  };

  const goArticles = () => {
    // 게시글(판) 목록인 articles 라우팅주소로 이동
    navigate("/articles", { replace: true });
    // replace:true : 페이지를 이동할 때 현재 페이지를 페이지 기록에 남기지 않는다.
  };
  return (
    <div>
      <header style={{
        background: "lightgray",
        padding: 6,
        fontSize: 24,
        width: 960,
        height: 100,
      }}>
        {/* {{}} 두 개의 중괄호를 사용하는 것은 JSX에서 JS 객체 전달 */}
        <p style={{ fontSize: 16 }}>
          <Link to="/">홈으로</Link>
        </p>
        <button type="button" onClick={goBack}>
          뒤로가기
        </button> &nbsp;
        <button type="button" onClick={goArticles}>
          게시글목록
        </button>
      </header>
      <main>
        <Outlet />
        {/* Outlet은 App.js에 설정한 중첩 Route의 자식요소로 들어있는 안쪽 Route에 해당하는
        컴포넌트 JSX요소를 랜더링 해준다. */}
      </main>

      <footer
        style={{
          background: 'gold',
          padding: 6,
          fontSize: 16,
          width: 960,
          height: 100,
        }}>
        하단 영역 : 서울시 종로구 OO
      </footer>
    </div>
  );
}

export default Layout;