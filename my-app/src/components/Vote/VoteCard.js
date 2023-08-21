/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

const cardStyles = css`
  width: 450px;
  background-color: rgba(255, 255, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

const imageStyles = css`
  border-radius: 50%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const nameStyles = css`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
`;

const statusStyles = css`
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
`;

const customStyles = {
  // 任意のスタイルを追加できます
};

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
  width: 100%;

  &:hover {
    background-color: #e64a19;
  }
`;

const VoteCard = ({ id, name, image, status, intro }) => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleVoteClick = () => {
    router.push(`/check/${id}`);
  };

  return (
    <>
      <div css={cardStyles}>
        <div  onClick={openModal} >
          <div css={imageStyles}>
            <Image
              css={imageStyles}
              src={image}
              alt={name}
              width={150}
              height={150}
            />
          </div>
          <p css={nameStyles}>{name}</p>
          <p css={statusStyles}>{status}</p>
          <button css={buttonStyles} onClick={handleVoteClick}>Vote</button>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel={name}
          ariaHideApp={false}
          style={customStyles}
        >
          <div css={imageStyles}>
            <Image
              src={image}
              alt={name}
              width={150}
              height={150}
            />
          </div>
          <p css={nameStyles}>{name}</p>
          <p css={statusStyles}>{status}</p>
          <p>{intro}</p>
          <div>
          <button css={buttonStyles} onClick={handleVoteClick}>Vote</button>
            </div>
        </Modal>
      </div>
    </>
  );
};

export default VoteCard;
