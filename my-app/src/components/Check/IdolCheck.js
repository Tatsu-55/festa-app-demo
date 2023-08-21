/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useContract, useClaimNFT, Web3Button, useAddress } from "@thirdweb-dev/react";
import { useState, useEffect } from 'react';
import { getLastRunDate, setLastRunDate } from "@/utils/firebase/db";
import { useCurrentUser } from '@/lib/hooks/useCurrentUser';

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const imageStyles = css`
  border-radius: 50%;
  margin-bottom: 10px;
`;

const nameStyles = css`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
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


const IdolCheck = ({ id, name, image }) => {
  const { currentUser } = useCurrentUser()
  

  const router = useRouter();

  const [hasVotedToday, setHasVotedToday] = useState(null);

  useEffect(() => {
    // ユーザーのFirebase Auth IDを取得
    const userId = currentUser.uid;
    console.log(userId);  

    // ユーザーの投票履歴をFirebaseから取得
    const fetchVoteStatus = async () => {
      const lastRunDate = await getLastRunDate(userId);

      // 今日の日付を取得
      // 現在の日本時間を取得する
      const japanStandardTime = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' });
      const year = new Date(japanStandardTime).getFullYear();
      const month = new Date(japanStandardTime).getMonth() + 1;
      const date = new Date(japanStandardTime).getDate();
      const today = `${year}/${month}/${date}`;
      console.log(today)

      if (lastRunDate === today) {
        setHasVotedToday(true);
      } else {
        setHasVotedToday(false);
      }
    };

    fetchVoteStatus();
  }, []);
  

  const handleVoteClick = async () => {
    // ユーザーの投票履歴を更新
    const userId = currentUser.uid;
    
    const japanStandardTime = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' });
    const year = new Date(japanStandardTime).getFullYear();
    const month = new Date(japanStandardTime).getMonth() + 1;
    const date = new Date(japanStandardTime).getDate();
    const today = `${year}/${month}/${date}`;

    await setLastRunDate(userId, today);

    // 投票後の処理
    router.push(`/success/${id}`);
  };

  const handleVoteError = () => {
    router.push(`/error/`);
  }

  const Button = () => {
    return (
      <button css={buttonStyles}>
        <Link href="/vote" css={buttonStyles} >Back to Vote</Link>
      </button>
    );
  };

const contractAddress = "0xfF147584682591e44D446Df723A586f4166E928F";
const tokenId = id - 1;
const wallet_address = useAddress();
const { contract } = useContract(contractAddress);
const { mutateAsync: claimNft, isLoading, error } = useClaimNFT(contract);


if (hasVotedToday === null) {
  return <div>Loading...</div>;  // 判定が完了するまでローディング状態
}

if (isLoading) return <div>Claiming NFT…</div>;
if (error) return <div>Error claiming NFT</div>;

  return (
    <>
    {hasVotedToday ? (
      <p>本日の投票は終了しました！また明日投票していただけるとうれしいです！</p>
    ) : (
    <div css={containerStyles}>
      <Image css={imageStyles} src={image} alt={name} width={150} height={150} />
      <p css={nameStyles}>{name}</p>
      <Web3Button
      contractAddress={contractAddress}
      action={() =>
        claimNft({
          to: wallet_address, // address to send to
          quantity: 1,
          tokenId: tokenId,
        })
      }
      onSuccess={(result)=> handleVoteClick()}
      onError={(error) => handleVoteError()}
    >
      投票する
    </Web3Button>
    <Button />
    </div>
    )}
    </>
  );
};

export default IdolCheck;
