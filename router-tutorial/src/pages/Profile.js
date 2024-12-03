import { useParams } from "react-router-dom";
// URL 파라미터는 리액트 Hook인 useParams를 사용

// 2024-12-03 Link 중복내용으로 인한 주석처리
// import { useParams, Link } from "react-router-dom";


// 2024-12-02 React Router Component 및 URL 파라미터 연습 코드

const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공",
  },
  // velopert 및 gildong는 사용자 정의 이름
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  // username URL 파라미터를 통하여 프로필 조회
  // params.username 접근시 velopert와 gildong 을 조회가능하다

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
      {/* 삼항조건 연산자로 profile이 존재하면 ?뒤 괄호가 실행 존재하지 않는다면 : 뒤에 괄호 실행 */}

      {/* 2024-12-03 중복되는 홈으로 이동 Link 주석처리
      <p><Link to="/">홈으로</Link></p> */}
    </div>
  )
};

export default Profile;

