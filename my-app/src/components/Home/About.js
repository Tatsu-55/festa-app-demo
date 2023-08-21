/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const aboutStyles = css`
  text-align: center;
  padding: 50px 0;
`;

const headingStyles = css`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const stepStyles = css`
  margin: 20px 0;
`;

const subheadingStyles = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const descriptionStyles = css`
  font-size: 16px;

  /* 追加：リンクのスタイルを設定 */
  a {
    color: #007bff;
    text-decoration: underline;
  }
`;

const About = () => {

  const steps = [
    {
      subheading: 'Step 1:Metamask（Wallet）をインストールしよう！',
      description: (
        <>
          Metamaskは、Web3の世界で使われるウォレットです。Metamaskをインストールすることで、ブロックチェーンと対話することができます。
          今回の投票アプリでは、投票やNFTの取得に、ブロックチェーンを利用しています。
          投票する前にまずは、Metamaskをインストールしてみましょう。インストールの方法については
          <a href='https://metamask.io/download/'>こちら</a>
          をご覧ください
        </>
      ),
    },
    {
      subheading: 'Step 2:好きなアイドルに投票してNFTをゲットしよう！',
      description: (
        <>
          アプリの画面に従って、好きなアイドルに投票してみましょう。無事に投票が成功すると、自分が投票したアイドルのNFTがもらえます。
          獲得したNFTはマイページで確認できます。
        </>
      ),
    },
    {
      subheading: 'Step 3:学祭でWeb3東北のブースに遊びに来よう！',
      description: (
        <>
          学祭では、アプリでアイドルに投票してくださった皆さんに、アイドルのシールをプレゼントします。また、アイドルのランキングも発表する予定です。<br></br>見事一位になったアイドルは、来年の大学祭のミスコンに出場させる予定です！
        </>
      ),
    },
  ];

  return (
    <div css={aboutStyles}>
      <h2 css={headingStyles}>Web3 x AIでミスコンをもっと面白く</h2>
      {steps.map((step, index) => (
        <div key={index} css={stepStyles}>
          <h3 css={subheadingStyles}>{step.subheading}</h3>
          <p css={descriptionStyles}>{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
