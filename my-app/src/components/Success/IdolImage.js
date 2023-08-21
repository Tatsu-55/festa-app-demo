/** @jsxImportSource @emotion/react */
// components/Success/IdolImage.js
import Image from 'next/image'
import { css } from '@emotion/react'

const containerStyle = css`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
`

const IdolImage = ({ src, alt }) => (
  <div css={containerStyle}>
    <Image src={src} alt={alt} width={300} height={300} />
  </div>
)

export default IdolImage
