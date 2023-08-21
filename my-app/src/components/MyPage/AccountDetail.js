import { useAddress } from "@thirdweb-dev/react";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const AccountDetail = () => {
  const address = useAddress();

  return (
    <div css={container}>
      <h1 css={header}>Account Detail</h1>
      <div css={userInfo}>
        <label css={label}>Wallet Address:</label>
        <p css={addressText}>{address}</p>
      </div>
    </div>
  );
};

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

const header = css`
  font-size: 24px;
  margin-bottom: 20px;
`;

const userInfo = css`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const label = css`
  font-size: 16px;
  margin-right: 10px;
`;

const addressText = css`
  font-size: 16px;
`;

export default AccountDetail;
