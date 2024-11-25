// 2024-11-25 회원가입폼 작성 2번째 방법
import { useState, useRef } from "react";

const MemberInsert = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullName: "",
    email: "",
    // useState React Hook으로 상태 속성값 초기화
  });

  const [errors, setErrors] = useState({});

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  //입력필드로 포커스를 이동시키기 위한 useRef React Hook 이용

  const handleChange = (e) => {
    const { name, value } = e.target;
    // name 파라미터 의 입력필드 값(value)을 가져온다
    setFormData({
      ...formData,
      [name]: value,
      /// 각 네임파라미터 값을 폼데이터로 한꺼번에 저장
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.username) {
      newErrors = { ...newErrors, username: "사용자 이름을 입력하세요!" };
      usernameRef.current.focus();
    };

    if (!formData.password) {
      newErrors = { ...newErrors, password: "비밀번호를 입력하세요!" };
      if (Object.keys(newErrors).length === 0) {
        // Object.keys() 메서드는 객체의 **키(key)**들을 배열로 반환합니다.
        // 즉 newErrors가 {} 즉 비어있으므로 length의 길이가 0이다
        passwordRef.current.focus();
      }
    };

    if (!formData.fullName) {
      newErrors = { ...newErrors, fullName: "전체 이름을 입력하세요!" }
      fullNameRef.current.focus();
    };

    if (!formData.email) {
      newErrors = { ...newErrors, email: "이메일을 입력하세요!" }
      emailRef.current.focus();
    };

    if (Object.keys(newErrors).length === 0) {
      // 여기까지 에러 실행된다면 newErrors에 {} 빈공백만 존재하게 되므로 유효성 검사 통과
      alert("회원 가입이 완료 되었습니다.");
    } else {
      setErrors(newErrors);
    };
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <h2>회원 가입</h2>

      <div>
        <label htmlFor="username">사용자 이름(아이디) : </label>
        <input name="username" id="username" value={formData.username} onChange={handleChange} ref={usernameRef} size="16" />
        {errors.username && (<div style={{ color: 'red' }}>{errors.username}</div>)} <br /><br />
        {/* errors.username이 존재하면(즉 빈 문자열이 아니라면), 뒤쪽의 <div> 태그가 렌더링됩니다. */}
        {/* 렌더링된 div는 글자색이 red색상이며 {errors.username}의 내용을 출력한다. */}
      </div>
      <div>
        <label htmlFor="password">비밀번호 : </label>
        <input name="password" id="password" value={formData.password} onChange={handleChange} ref={passwordRef} size="16" />
        {errors.password && (<div style={{ color: 'red' }}>{errors.password}</div>)} <br /><br />
      </div>
      <div>
        <label htmlFor="fullName">전체 이름 : </label>
        <input type="fullName" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} ref={fullNameRef} size="16" />
        {errors.fullName && (<div style={{ color: 'red' }}>{errors.fullName}</div>)} <br /><br />
      </div>
      <div>
        <label htmlFor="email">이메일 : </label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} ref={emailRef} size="30" />
        {errors.email && (<div style={{ color: 'red' }}>{errors.email}</div>)} <br /><br />
      </div>
      <button type="submit">가입하기</button>
    </form>
  )
};

export default MemberInsert;