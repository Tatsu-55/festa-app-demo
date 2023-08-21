/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import { ConnectWallet } from '@thirdweb-dev/react';

const fvStyles = css`
  margin: 60px 0 60px 0;
  position: relative;
  height: 100vh;
  background-image: url('/image/example14.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const headingStyles = css`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;


const buttonStyles = css`
  background-color: #ff5722;
  color: white;
  padding: 10px 20px;
  margin: 5px 5px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

  &:hover {
    background-color: #e64a19;
  }
`;

const Button = () => {
    return (
      <button css={buttonStyles} >
        <Link href="/vote" css={buttonStyles} >Go to Vote</Link>
      </button>
    );
  };

const FV = () => {
  return (
    <>
    <section css={fvStyles}>
      <h1 css={headingStyles}>未来への歓声、AIアイドル投票アプリが贈る<br></br>新時代エンターテイメント！</h1>
      <Button />
      <p css={css`margin: 5px 0`}>Metamaskをまだインストールされていない方はこちらから</p>
      <ConnectWallet css={buttonStyles}/>
  
    </section>
    </>
  );
};

export default FV;
