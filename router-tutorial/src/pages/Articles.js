import { Link } from "react-router-dom";

// 2024-1202 Article 사용 예제

const Articles = () => {
  return (
    <ul>
      <li>
        <Link to="/" >홈으로</Link>
      </li>
      <li>
        <Link to="articles/1">게시글 1</Link>
      </li>
      <li>
        <Link to="articles/2">게시글 2</Link>
      </li>
      <li>
        <Link to="articles/3">게시글 3</Link>
      </li>
    </ul>
  );
};

export default Articles;