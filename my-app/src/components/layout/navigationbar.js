/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import { useState } from 'react';


const navbarStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: orange;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const logoStyles = css`
  font-size: 24px;
  font-weight: bold;
`;

const linkContainerStyles = css`
  display: flex;
  align-items: center;

`;

const linkStyles = css`
  color: white;
  text-decoration: none;
  margin: 10px 10px;
  transition: color 0.3s ease;
  gap: 10px;

  &:hover {
    color: lightgray;
  }

  @media (min-width: 769px) {
    display: none;
`;

const linkStyles_2 = css`
  color: white;
  text-decoration: none;
  margin: 10px 10px;
  transition: color 0.3s ease;
  gap: 10px;

  &:hover {
    color: lightgray;
  }

  @media (max-width: 769px) {
    display: none;
`;

const hamburgerStyles = css`
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavigationBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav css={navbarStyles}>
        <div css={logoStyles}>Idol NFT</div>
      <div css={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Link href="/" css={linkStyles_2} >
              Home
            </Link>
            <Link href="/vote" css={linkStyles_2}>
              Vote
            </Link>
            <Link href="/mypage" css={linkStyles_2}>
              Mypage
            </Link>
        <div css={hamburgerStyles} onClick={toggleMobileMenu}>
          ☰
        </div>
        {isMobileMenuOpen && (
          <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div css={linkContainerStyles}>
            <Link href="/" css={linkStyles} >
              Home
            </Link>
            <Link href="/vote" css={linkStyles}>
              Vote
            </Link>
            <Link href="/mypage" css={linkStyles}>
              Mypage
            </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
