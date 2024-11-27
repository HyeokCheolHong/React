import { Component } from 'react';

// 2024-11-25 Sass를 사용한 css 디자인 functional Component
// import SassComponent from './SassComponent';
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <SassComponent />
//       </div>
//     );
//   };
// }

// 2024-11-27 CSS Module을 사용한 Styling functional Component
// import CSSModule from './CSSModule';
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <CSSModule />
//       </div>
//     );
//   };
// }

// 2024-11-27 SCSS Module을 이용한 Styleing
import StyledComponent from './StyledComponent';
class App extends Component {
  render() {
    return (
      <div>
        <StyledComponent />
      </div>
    );
  };
}

export default App;