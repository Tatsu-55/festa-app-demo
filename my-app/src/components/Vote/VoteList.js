/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import VoteCard from './VoteCard';
import IdolData from '@/data/IdolData';

const listStyles = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const VoteList = ({ idolData }) => {
  return (
    <div css={listStyles}>
      {IdolData.map(idolData => (
        <VoteCard
          key={idolData.id}
          id={idolData.id}
          name={idolData.name}
          image={idolData.image}
          status={idolData.status}
          intro={idolData.intro}
        />
      ))}
    </div>
  );
};

export default VoteList;
