// 2024-12-02 게시판 작성 Outlet 사용으로 인한 주석처리
// import { Link} from "react-router-dom";

// 2024-12-03 Outlet 패키지 및 NavLink(특정 스타일 적용) 패키지 사용
import { Outlet, NavLink } from "react-router-dom";

// 2024-12-03 Articles 사용예제
const Articles = () => {
  return (
    <div>
      <Outlet />
      {/* Outlet은 중첩 Route의 자식요소로 들어있는 각 게시글 내용 JSX요소를 랜더링한다.
      App.js에 설정한 자식요소인 <Route path=":id" elements={<Article />} /> 내용이 보여진다. */}
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
        {/* li 태그 하위 Article들은 공통적인 부분이 많다. 컴포넌트(ArticleItem) 처리 하자

        2024-12-03 중복되는 홈으로 이동 Link 주석처리
        <li>
          <Link to="/">홈으로</Link>
        </li>
        <li>
          ArticleItem 컴포넌트 사용으로 인한 주석처리
          <NavLink to="/articles/1" style={({ isActive }) => (isActive ? activeStyle : undefined)}>게시글1</NavLink>

          NavLink 사용으로 인한 주석처리
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          ArticleItem 컴포넌트 사용으로 인한 주석처리
          <NavLink to="/articles/2" style={({ isActive }) => (isActive ? activeStyle : undefined)}>게시글2</NavLink>

          NavLink 사용으로 인한 주석처리
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          ArticleItem 컴포넌트 사용으로 인한 주석처리
          <NavLink to="/articles/3" style={({ isActive }) => (isActive ? activeStyle : undefined)}>게시글3</NavLink>
          \
          NavLink 사용으로 인한 주석처리
          <Link to="/articles/3">게시글 3</Link>
        </li> */}
      </ul>
    </div>
  );
};

// 반복적인 li 하위 태그를 편하게 사용하기위한 컴포넌트 생성
const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <li>
      <NavLink to={`/articles/${id}`} style={({ isActive }) => (isActive ? activeStyle : undefined)}>게시글 <strong>{id}</strong> </NavLink>
    </li>
  )
}





// 2024-12-02 Articles 사용 예제
// import { Link } from "react-router-dom";
// const Articles = () => {
//   return (
//     <ul>
//       <li>
//         <Link to="/" >홈으로</Link>
//       </li>
//       <li>
//         <Link to="articles/1">게시글 1</Link>
//       </li>
//       <li>
//         <Link to="articles/2">게시글 2</Link>
//       </li>
//       <li>
//         <Link to="articles/3">게시글 3</Link>
//       </li>
//     </ul>
//   );
// };

export default Articles;