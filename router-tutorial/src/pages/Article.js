import { useParams, Link } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  // useParams 훅을 사용해서 url 파라미터 값을 구함, 구조분해 할당 문법

  return (
    <div>
      <h2>게시글 {id}</h2>
      <Link to="/articles">게시판 목록</Link>
    </div>
  );
};

export default Article;