/** @jsxImportSource @emotion/react */
// components/Success/Title.js
import { css } from '@emotion/react'

const titleStyle = css`
  text-align: center;
  font-size: 2em;
  margin-bottom: 1em;
`

const descriptionStyle = css`
  text-align: center;
  font-size: 1.2em;
  color: #888;
`

const Title = () => (
  <div>
    <h1 css={titleStyle}>投票完了！</h1>
    <p css={descriptionStyle}>投票が成功しました！アイドルに投票してくれてありがとうございます！<br></br>マイページで投票したアイドルのNFTをチェックしてみましょう。</p>
  </div>
)

export default Title

