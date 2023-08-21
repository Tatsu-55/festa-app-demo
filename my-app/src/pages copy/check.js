import { useContract, useClaimNFT, Web3Button, useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/router";



const Check = () => {
  const router = useRouter();

  const contractAddress = "0xD770A948F5D8319488217A0457EF87f9d0d0FeB3";
  const tokenId = 2;

  const wallet_address = useAddress();
  const { contract } = useContract(contractAddress);
  const { mutateAsync: claimNft, isLoading, error } = useClaimNFT(contract);
  
  return (
    <>
    <h1>This is Check</h1>
    <Web3Button
      contractAddress={contractAddress}
      action={() =>
        claimNft({
          to: wallet_address, // address to send to
          quantity: 1,
          tokenId: tokenId,
        })
      }
      onSuccess={(result)=> {router.push(`/success/${id}`)}}
    >
      Claim NFT
    </Web3Button>
    </>
  );
}

export default Check