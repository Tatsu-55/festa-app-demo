/** @jsxImportSource @emotion/react */
// components/Success/Button.js
import Link from 'next/link'
import { css } from '@emotion/react'

const buttonContainer = css`
  display: flex;
  justify-content: center;
  gap: 1em;
  margin-bottom: 1em;
`

const buttonStyle = css`
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

const Button = () => (
  <div css={buttonContainer}>
    <Link href="/" css={buttonStyle}>Home</Link>
    <Link href="/mypage" css={buttonStyle}>Mypage</Link>
    <Link href="https://forms.gle/Yr9A7QnMtnFoyVNn8" css={buttonStyle} target='_brank'>アンケート</Link>
  </div>
)

export default Button
