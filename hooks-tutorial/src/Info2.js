// 2024-11-22 reducer 함수

import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    // ...state는 상태(state)를 업데이트할 때 사용되는 문법
    [action.name]: action.value
  };
};

const Info2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickName: ''
  });

  const { name, nickName } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <label htmlFor="name">이름 :</label>
        <input name="name" id="name" value={name} onChange={onChange} /> <br /> <br />
        <label htmlFor=" = nickName" >닉네임 : </label>
        <input name="nickName" id="nickName" value={nickName} onChange={onChange} />
      </div>
      <div>
        <div>
          이름: <strong>{name}</strong>
        </div>
        <div>
          닉네임 : <strong>{nickName}</strong>
        </div>
      </div>
    </div>
  )
}

export default Info2
