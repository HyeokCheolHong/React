// 2024-11-22 useReducer 을 사용해서 사용자 입력폼(로그인) 작성
import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

export default function UseInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}