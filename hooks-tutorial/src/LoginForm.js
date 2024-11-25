// 2024-11-25 로그인 입력 양식 작성
import { useState } from "react";

const LoginForm = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (userid === '' || password === '') {
      setError("ID와 비밀번호를 모두 입력해주세요!");
    } else {
      console.log("아이디 : ", userid);
      console.log("비밀번호 : ", password);

      // 로그인 처리후 초기화
      setUserid('');
      setPassword('');
    };
  };

  return (
    <form method="post" onSubmit={handleLogin}>
      <div>
        <div>
          <label htmlFor="userid">사용자 아이디 : </label>
          <input id="userid" name="userid" value={userid} onChange={(e) => setUserid(e.target.value)} size="16" />
        </div>
        <br /><br />
        <div>
          <label htmlFor="password">사용자 비밀번호 : </label>
          <input id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} size="16" />
        </div>
        <br /><hr />
        {error && <div style={{ color: "red" }}>{error}</div>}
        <input type="submit" value="로그인" />
      </div>
    </form>
  )
};

export default LoginForm;