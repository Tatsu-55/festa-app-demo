/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const explainStyles = css`
  text-align: center;
  margin-bottom: 30px;
`;

const headingStyles = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const descriptionStyles = css`
  font-size: 16px;
`;

const Explain = () => {
  return (
    <div css={explainStyles}>
      <h2 css={headingStyles}>推しのアイドルに投票しよう！</h2>
      <p css={descriptionStyles}>投票したいアイドルの投票ボタンを押してください</p>
    </div>
  );
};

export default Explain;
