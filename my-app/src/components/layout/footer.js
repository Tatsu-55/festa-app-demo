/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

const footerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: orange;
  color: white;
`;

const copyRightStyles = css`
  text-align: center;
`;

const logoImageStyles = css`
  max-width: 50px;
`;

const snsLinksStyles = css`
  display: flex;
  align-items: center;
`;

const snsIconStyles = css`
  font-size: 24px;
  margin: 0 10px;
  color: white;
`;

const emailStyles = css`
  text-align: center;
`;

const Footer = () => {
  return (
    <footer css={footerStyles}>
      <div css={copyRightStyles}>
        &copy; 2023 Web3東北
      </div>
      <div css={emailStyles}>
        Contact us: web3tohoku@gmail.com
      </div>
      <div css={snsLinksStyles}>
        <a href="https://twitter.com/web3tohoku" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon css={snsIconStyles} icon={faTwitter} />
        </a>
        <a href="https://t.co/eOvDLIVVrP" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon css={snsIconStyles} icon={faDiscord} />
        </a>       
      </div>
    </footer>
  );
};

export default Footer;
