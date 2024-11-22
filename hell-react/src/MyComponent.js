
import PropTypes from "prop-types";
import { Component } from "react";

// 2024-11-19 클래스 컴포넌트 (렌더링을 통한 출력)
class MyComponent extends Component { // 구조 분해 할당(비구조화 문법)으로 함수 파라미터를 사용
  static defaultProps = {
    name: '기본이름'
  };
  static propTypes = {
    name: PropTypes.string,
    //
    favoriteNumber: PropTypes.number.isRequired
    // isRequred는 필수옵션으로 지정
  };

  render() {
    const { name, children, favoriteNumber } = this.props;
    return (
      <div>
        안녕하세요.제 이름은 {name} 입니다. < br />
        children 값은 {children} <br />

        가장 좋아하는 숫자는 {favoriteNumber} 입니다. < br />
      </div>
    );
  }
}

// 2024-11-18 작성 내용
// const MyComponent = R({name,favoriteNumber,children}) => {
//     // 구조 분해 할당 (ES6에서 추가된 문법)
//     // const { name, children } = props;

//     return (
//         <div>
//             안녕하세요. 제 이름은 {name} 입니다. <br/>
//             children 값은 {children} 입니다. <br/>
//             test는 {test} 입니다. <br/>
//             가장 좋아하는 숫자는 {favoriteNumber} 입니다.
//         </div>
//     );
// };

// // 부모 컴포넌트로부터 전달받은 props가 없을 때 설정되는 값
// MyComponent.defaultProps = {
//     name: "기본 이름",
//     test: "test"
// };

MyComponent.protoTypes = {
  // 전달되는 props의 타입을 지정할 수 있음
  name: PropTypes.string,
  // name 속성에 대한 값은 String 타입으로 들어와야 웹 브라우저 콘솔창에 Warning 메시지가 뜨지 않음
  favoriteNumber: PropTypes.number.isRequired
  // number 타입만 저장될 수 있으며 필수적으로 저장되어야 한다.
};

export default MyComponent;