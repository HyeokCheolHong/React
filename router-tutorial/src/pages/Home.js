import { Link } from "react-router-dom";

// 2024-12-02 React Router Component 연습 코드

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이쥐지쥐쥐 베베베베베~</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/velopert">velopert의 프로필</Link>
          {/* 경로는 app.js에서 Route path로 지정한다. */}
        </li>
        <li>
          <Link to="/profiles/gildong">gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
      {/* a tag를 사용하지 않는 이유는 a tag는 페이지 전체를 새로고침하게 되는 태그
      React의 싱글 페이지 이므로 전체 페이지를 새로고침하면 안되므로 Link 를 사용함 */}
    </div>
  );
};

export default Home;