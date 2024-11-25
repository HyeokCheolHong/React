// 2024-11-25 회원가입폼 작성 1번째 방법
import { useState, useRef } from "react";

const MemberJoin = () => {
  const [mem_id, setMem_id] = useState('');
  const [mem_pwd, setMem_pwd] = useState('');
  const [pwd_chk, setPwd_chk] = useState('');
  const [mem_name, setMem_name] = useState('');
  const [mem_email, setMem_email] = useState('');
  const [mem_phone, setMem_phone] = useState('');
  // 각 입력필드에 대한 상태를 useState React Hook 토애서 관리

  const mem_idRef = useRef(null);
  const mem_pwdRef = useRef(null);
  const pwd_chkRef = useRef(null);
  const mem_nameRef = useRef(null);
  const mem_emailRef = useRef(null);
  const mem_phoneRef = useRef(null);
  //입력필드로 포커스를 이동시키기 위한 useRef React Hook 이용

  const handleMemberSubmit = (e) => {
    e.preventDefault();
    // submit이 동작했을때 페이지 새로고침을 막는 함수

    if (mem_id === "") {
      alert("아이디를 입력하세요!");
      mem_idRef.current.focus();
      return;
    };

    if (!mem_pwd) {
      alert("비밀번호를 입력하세요!");
      mem_pwdRef.current.focus();
      return;
    };

    if (!pwd_chk) {
      alert("비밀번호 확인을 입력하세요!");
      pwd_chkRef.current.focus();
      return false;
    };

    if (mem_pwd !== pwd_chk) {
      alert("비밀번호가 일치하지 않습니다!")
      setMem_pwd('');
      // 비밀번호 입력필드 초기화
      setPwd_chk('');
      // 비밀번호 확인 입력필드 초기화
      mem_pwdRef.current.focus();
      return;
    };

    if (!mem_name) {
      alert("이름을 입력해주세요!");
      mem_nameRef.current.focus();
      return;
    };

    if (!mem_email) {
      alert("이메일을 입력해주세요!");
      mem_emailRef.current.focus();
      return;
    };

    if (!mem_phone) {
      alert("휴대전화 번호를 입력해주세요!");
      mem_phoneRef.current.focus();
      return;
    };

    // form 전송 이후 콘솔모드에 출력
    console.log("아이디 : ", mem_id);
    console.log("비밀번호 : ", mem_pwd);
    console.log("회원이름 : ", mem_name);
    console.log("이메일 : ", mem_email);
    console.log("폰번호 : ", mem_phone);

    // 데이터 전송후 입력필드 초기화
    setMem_id(''); setMem_pwd(''); setPwd_chk(''); setMem_name(''); setMem_email(''); setMem_phone('');

  }; // handleMemberSubmit()


  const handleReset = () => {
    // useState로 관리하는 각 상태값 초기화
    setMem_id(''); setMem_pwd(''); setPwd_chk(''); setMem_name(''); setMem_email(''); setMem_phone('');

    mem_idRef.current.focus();
    // 아이디 입력필드로 포커스 이동
  }; // handleReset

  return (
    <div>
      <h2>회원가입</h2>
      <form method="post" onSubmit={handleMemberSubmit}>
        <div>
          <div>
            <label htmlFor="mem_id" >회원 아이디 : </label>
            <input name="mem_id" id="mem_id" value={mem_id} ref={mem_idRef} size="14" onChange={e => setMem_id(e.target.value)} /><br /><br />
          </div>

          <div>
            <label htmlFor="mem_pwd" >회원 비밀번호 : </label>
            <input name="mem_pwd" id="mem_pwd" value={mem_pwd} ref={mem_pwdRef} size="14" onChange={e => setMem_pwd(e.target.value)} /><br /><br />
          </div>

          <div>
            <label htmlFor="pwd_chk" >회원 비밀번호 확인 : </label>
            <input name="pwd_chk" id="pwd_chk" value={pwd_chk} ref={pwd_chkRef} size="14" onChange={e => setPwd_chk(e.target.value)} /><br /><br />
          </div>

          <div>
            <label htmlFor="mem_name" >회원 이름 : </label>
            <input name="mem_name" id="mem_name" value={mem_name} ref={mem_nameRef} size="14" onChange={e => setMem_name(e.target.value)} /><br /><br />
          </div>

          <div>
            <label htmlFor="mem_email" >회원 이메일 : </label>
            <input type="email" name="mem_email" id="mem_email" value={mem_email} ref={mem_emailRef} size="30" onChange={e => setMem_email(e.target.value)} /><br /><br />
          </div>

          <div>
            <label htmlFor="mem_phone" >회원 휴대폰 번호 : </label>
            <input type="tel" name="mem_phone" id="mem_phone" value={mem_phone} ref={mem_phoneRef} size="14" onChange={e => setMem_phone(e.target.value)} /><hr />
          </div>
          <button type="submit">가입</button>
          <button type="reset" onClick={handleReset}>취소</button>
        </div>
      </form>
    </div>
  );
};

export default MemberJoin;