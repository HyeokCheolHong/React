// 2024-11-21 함수컴포넌트로 Iterator 사용 작성
// react Hook 함수인 useState를 사용하여 항목 기능 추가

import { useState } from "react";

const IterationSample2 = () => {

  // 복수개의 배열 정의
  const [names, setNames] = useState([
    { id: 1, text: '눈사람3' },
    { id: 2, text: '얼음3' },
    { id: 3, text: '눈3' },
    { id: 4, text: '바람3' }
  ]);
  // 4개의 배열을 가진 names배열 원소값 초기화

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);
  // id:5 로 초기화 (새로운 항목을 추가할 때 배열 원소값(id))

  // 이벤트 처리함수 정의
  const onChange = (e) => {
    setInputText(e.target.value);
    // 입력필드 입력값을 가져온다.
  }

  // 두 개의 배열을 합쳐서 새로운 배열을 만드는 concat()메서드
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    })
    setNextId(nextId + 1);
    // setNextId로 인해 nextId 값을 +1 실행한다. 
    // 즉 onClick() 함수가 실행 될때 마다 Id값이 1씩 올라가서 배열 Id가 중복되지 않게 실행
    setNames(nextNames);
    // setNames()로 nextNames 배열을 set
    setInputText('');
    // inputText 초기화 (새로운 항목을 추가할 때)
  };

  // 배열에 원소를 추가하는 push() 메서드
  // const onClick = () => {
  //   const nextNames = names.push({
  //     id: nextId,
  //     text: inputText
  //   })
  //   setNextId(nextId + 1);
  //   setNextId로 인해 nextId 값을 +1 실행한다. 
  //   // 즉 onClick() 함수가 실행 될때 마다 Id값이 1씩 올라가서 배열 Id가 중복되지 않게 실행
  //   setNames(nextNames);
  //   // setNames()로 nextNames 배열을 set
  //   setInputText('');
  //   // inputText 초기화 (새로운 항목을 추가할 때)
  // };
  // concat과 push차이점
  // concat은 앞배열 뒤 뒷배열을 합쳐서 새로운 배열을 생성
  // push는 앞배열 원소에 새로운 원소를 추가

  const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>)
  // names배열 원소(name)을 li 태그로 그리고 key값(id)를 설정하여 map() 함수로 JSX로 변환 하여 nameList 배열에 넣는다.
  // li tag에 key속성 값을 넣는 이유 : 
  //    1. DOM 업데이트 최적화 
  //    2. 렌더링 성능 향상
  //    3. 예상치 못한 UI 문제 방지

  // 문제) 항목입력필드에 항목을 입력하고 엔터키를 치면 추가되게 만들어 보자.
  // 입력필드에서 Enter 키 입력시 항목 추가 함수 작성
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
      // enter key를 입력하면 onClick() 함수 호출
    }

    // if (e.keyCode === 13) {
    //   onClick();
    //   // enter key를 입력하면 onClick() 함수 호출
    // }

    // e.keyCode : 숫자 표현방식 ex) 'Enter'는 keyCode 13 'But Deprecated 이므로 e.key를 사용하자'
    // e.key : 문자열 표현방식 ex) 'Enter'는 'Enter'
  }

  // 항목제거 함수 작성
  const onRemove = (id) => {
    const delNames = names.filter(name => name.id !== id);
    // filter()는 주어진 조건(name.id !== id)이 true인 항목만 새로운 배열에 포함합니다.
    // 즉 onRemove 함수가 실행 되면서 전달받은 id와 다른 name.id만 남겨서 delNames 배열에 저장합니다.
    setNames(delNames);
    // 삭제 후 남은 항목들로 구성된 delNames 배열로 상태를 업데이트합니다.
  }

  return (
    <div>
      <label for="itemName">항목이름</label><br />
      <input type="text" id="itemName" name="itemName" value={inputText} onChange={onChange} onKeyDown={onKeyPress} placeholder="항목이름을 입력해주세요!" />&nbsp;
      <button type="button" onClick={onClick} >추가</button>
      <ul>{nameList}</ul>;
    </div>
  )
}

export default IterationSample2;
