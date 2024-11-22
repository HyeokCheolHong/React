// 2024-11-20 입력데이터 유효성검사 대한 코드 및 REF 속성에 대한 코드 작성 (Class Component)

import { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false
  }; // 각 상태속성값 정의 및 초기화

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    }); // 비번 입력필드값을 가져와서 상태변수 password값 변경
  }

  handleButtonClick = () => {
    alert('비밀번호 값 : ' + this.state.password);
    this.setState({
      clicked: true,
      validated: this.state.password === '7777'
    });
    this.input.focus();
    // 비밀번호 입력박스로 포커스 이동
  }

  render() {
    return (
      <div>
        <input
          ref={(ref) => this.input = ref}
          // 입력필드로 포커스 이동이 가능
          // ref 속성은 React에서 DOM 요소나 클래스 컴포넌트의 인스턴스에 직접 접근해야 할 때 사용
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder='비밀번호를 입력해주세요!'
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
        // validated가 success인지 failure인지 확인 후 clicked가 ''인지 validated 값인지 확인후 값 저장
        /> &nbsp;&nbsp;
        <button type='button' onClick={this.handleButtonClick}>검색하기</button>

      </div>
    )
  }
}

export default ValidationSample;