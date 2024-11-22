// 2024-11-22 UseInputs.js 를 받아와서 실행
import UseInputs from "./UseInputs";

const Info3 = () => {
  const [state, onChange] = UseInputs({
    name: "",
    address: ""
  });

  const { name, address } = state;

  //React 컴포넌트는 반드시 하나의 부모 요소로 모든 하위 요소
  return (
    <div>
      <div>
        <label htmlFor="name">이름 : </label>
        <input name="name" id="name" value={name} onChange={onChange} size="14" />
      </div> <br />
      <div>
        <label htmlFor="address">주소 : </label>
        <input name="address" id="address" value={address} onChange={onChange} size="14" />
      </div> <br />
      <div>
        <div>
          이름 : <b>{name}</b> <br />
          주소 : <b>{address}</b>
        </div>
      </div>
    </div>
  )
}

export default Info3;