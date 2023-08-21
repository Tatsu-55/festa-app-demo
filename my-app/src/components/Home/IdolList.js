/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';

const idolListStyles = css`
  text-align: center;
  background-image: url('image/bg-automn.jpg'); /* 背景画像のパスを適切に指定 */
  background-size: cover;
  background-position: center;
  padding: 50px 0;
  color: white;
`;

const heading2Styles = css`
  color: inherit;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const heading3Styles = css`
  color: inherit;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15x;
`;


const idolContainerStyles = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const idolCardStyles = css`
  flex: 0 0 calc(33.33% - 20px);
  background-color: rgba(255, 255, 255, 0.2);
  padding: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const idolImageStyles = css`
  border-radius: 50%;
  margin-bottom: 10px;
`;

const idolNameStyles = css`
  font-size: 20px;
  font-weight: bold;
  color: inherit;
  `;

const IdolList = () => {
  const idols = [
        { name: 'かや', image: '/image/アイドルテスト1.png'},
        { name: 'メイ', image: '/image/アイドルテスト2.png'},
        { name: '奈菜', image: '/image/アイドルテスト3.png'},
        { name: '晴美', image: '/image/アイドルテスト4.png'},
        { name: 'アン', image: '/image/アイドルテスト5.png'},
        { name: 'ミドリ', image: '/image/アイドルテスト6.png'},
    ];
    return (
       <div css={idolListStyles}>
      <h2 css={heading2Styles}>Idols Comming Up</h2>
      <h3 css={heading3Styles}>推しのアイドルに投票して、特別なNFTとシールをゲットしよう！</h3>
      <div css={idolContainerStyles}>
        {idols.map((idol, index) => (
          <div key={index} css={idolCardStyles}>
            <Image 
             css={idolImageStyles}
             src={idol.image}
             alt={idol.name}
             width={200}
             height={200} />
            <p css={idolNameStyles}>{idol.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdolList;
