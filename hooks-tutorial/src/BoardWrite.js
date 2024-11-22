import { useState, useRef } from "react";

const BoardWrite = () => {
  // 상태속성 지정 및 초기화를 위한 useState 사용
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [pwd, setPwd] = useState('');
  const [content, setContent] = useState('');

  // **필드로 포커스 이동시키기 위한 useRef Hook 사용
  const nameInputRef = useRef(null);
  const titleInputRef = useRef(null);
  const pwdInputRef = useRef(null);
  const contentInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // form의 기본 제출 동작(페이지 새로고침)을 방지하여 상태나 입력값이 초기화되지 않도록 처리합니다.

    // 2024-11-22 원래 코드 리팩토링후 주석처리
    // if (name === '') {
    //   alert(`글쓴이를 입력하세요!`);
    //   nameInputRef.current.focus();
    //   return;
    // };
    // if (!title) {
    //   alert('제목을 입력하세요!');
    //   titleInputRef.current.focus();
    //   return;
    // };
    // if (!pwd) {
    //   alert('비밀번호를 입력하세요!');
    //   pwdInputRef.current.focus();
    //   return;
    // };
    // if (!content) {
    //   alert('내용을 입력하세요!');
    //   content.current.focus();
    //   return;
    // };
    const fields = [
      { value: name, message: "글쓴이를 입력하세요!", ref: nameInputRef },
      { value: title, message: "제목을 입력하세요!", ref: titleInputRef },
      { value: pwd, message: "비밀번호를 입력하세요!", ref: pwdInputRef },
      { value: content, message: "내용을 입력하세요!", ref: content },
    ];

    for (const field of fields) {
      if (!field.value) {
        alert(field.message); // 필수 입력 메시지
        field.ref.current.focus(); // 해당 입력 필드로 포커스 이동
        return; // 함수 종료
      }
    };

    // 전송 값 콘솔로그로 남기기
    console.log("글쓴이:", name);
    console.log("글제목:", title);
    console.log("비밀번호:", pwd);
    console.log("글내용:", content);

    // 상태 초기화 및 첫 번째 필드로 포커스 이동
    handleReset();
  };
  const handleReset = () => {
    // 데이터 전송후 상태 속성값 초기화
    setName('');
    setTitle('');
    setPwd('');
    setContent('');

    // 첫 번째 입력 필드로 포커스 이동
    nameInputRef.current.focus();
  };

  return (
    <div>
      <h2>리액트 게시판 입력폼</h2>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">글쓴이 : </label>
          <input name="name" id="name" value={name} onChange={(e) => { setName(e.target.value) }} ref={nameInputRef} size="14" />
        </div> <br />
        <div>
          <label htmlFor="title">글제목 : </label>
          <input name="title" id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} ref={titleInputRef} size="20" />
        </div> <br />
        <div>
          <label htmlFor="pwd">비밀번호 : </label>
          <input name="pwd" id="pwd" value={pwd} onChange={(e) => { setPwd(e.target.value) }} ref={pwdInputRef} size="14" />
        </div> <br />
        <div>
          <label htmlFor="content">글내용 : </label>
          <textarea name="content" id="content" value={content} onChange={(e) => { setContent(e.target.value) }} ref={contentInputRef} rows="10" cols="20" ></textarea>
        </div> <br />
        <div>
          <button type="submit" > 글등록 </button>
          <button type="reset" onClick={handleReset}>취소</button>
        </div>
      </form>
    </div>
  )
}

export default BoardWrite;