import { css } from '@emotion/react';

const titleStyles = css`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 50px;
`;

const Title = () => {
  return <h1 css={titleStyles}>投票確認</h1>;
};

export default Title;
