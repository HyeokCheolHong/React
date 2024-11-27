// 2024-11-27 CSS Module 관련 코드 작업
import classNames from "classnames/bind"

// classNames 라이브러리 하위에 bind 를 읽어옴 (scss 적용을 위한 주석처리)
// import styles from "./CSSModule.module.css";

import styles from "./CSSModule.module.scss"

// classNames 라이브러리 설치 후 작성 코드
const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <>
      {/* classNames 패키지 라이브러리 적용 전 Code */}
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        {/* js표현식으로 class 이름을 지정 및 복수개의 스타일을 지정하기위해 `(템플릿 리터럿)을 이용 */}
        안녕하세요. 저는 <span className="something">CSS Module</span>
      </div>

      {/* classNames 패키지 라이브러리 작성 후 Code */}
      <div className={cx("wrapper", "inverted")}>
        안녕하세요. 저는 <span className="something">CSS Module</span>
      </div>
    </>
  );
};

export default CSSModule;