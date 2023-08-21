import { useState } from 'react';
import { useOwnedNFTs, useContract, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

const ShowOwnedNFT = () => {
  const contractAddress = "0xfF147584682591e44D446Df723A586f4166E928F";
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data, isLoading, error } = useOwnedNFTs(contract, address);

  const [filter, setFilter] = useState('All'); // フィルタリング状態を管理

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredData = filter === 'All' ? data : data.filter(nft => nft.metadata.name === filter);

  const buttonStyles = css`
    margin: 4px;
    padding: 8px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #ddd;
    }
  `;

  return (
    <div>
      <h2>ShowOwnedNFT</h2>
      <div>
        <button css={buttonStyles} onClick={() => setFilter('All')}>All</button>
        {data.map((nft) => (
          <button
            key={nft.metadata.id}
            css={buttonStyles}
            onClick={() => setFilter(nft.metadata.name)}
          >
            {nft.metadata.name}
          </button>
        ))}
      </div>
      <div>
        {filteredData.map((nft, index) => (
          <div key={index}>
            <h2>{nft.metadata.name}</h2>
            <p>{nft.metadata.description}</p>
            <Image src={nft.metadata.image} alt={nft.metadata.name} width={200} height={200} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowOwnedNFT;
