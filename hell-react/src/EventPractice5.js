// 2024-11-20 작성 입력필드가 무수히 많을 경우 Functional Components에서 함수를 하나씩 만들어야 하는 불편함을 없애보자

import { useState } from "react";

const EventPractice5 = () => {
  const [form, setForm] = useState({
    title: '',
    content: ''
    // 상태 속성 정의 및 초기화
  });

  const { title, content } = form;
  // 구조분해 할당

  const onChange = (e) => {
    const nextForm = {
      ...form,
      // 기존 form 내용을 복사
      [e.target.name]: e.target.value,
      // e.target.name(input name)에 해당하는 input value를 nextForm[e.target.name] 에 표기
      // 즉 e.target.name 을 key값으로 e.target.value 값을 가져온다고 생각하면 된다.
    };
    setForm(nextForm);
    // setter()함수를 호출하면서 form입력 필드 전체 값을 저장
  }

  const onClick = () => {
    alert('제목 : ' + title + ", 내용 : " + content);
    setForm({
      title: '',
      content: ''
      // form 내용을 초기화
    });
  }

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  }

  return (
    <div>
      <h1>Functional Component에서 입력필드가 많을 경우 이벤트 연습</h1>
      <label for="title">제목 : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="text" name="title" id="title" value={title} onChange={onChange} placeholder="글 제목 입력" />
      <br /><br />
      <label for="content">글내용 : </label>&nbsp;
      <textarea name="content" id="content" rows="10" cols="36" placeholder="내용입력" value={content} onChange={onChange} onKeyDown={onKeyPress}></textarea>
      <hr />
      <input type="button" value="확인" onClick={onClick} />
    </div>
  )
}

export default EventPractice5;