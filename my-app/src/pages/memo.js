import { useContract, useClaimNFT, Web3Button, useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/router";



const Memo = () => {
  const router = useRouter();

  const contractAddress = "0xD770A948F5D8319488217A0457EF87f9d0d0FeB3";
  const tokenId = 1;

  const wallet_address = useAddress();
  const { contract } = useContract(contractAddress);
  const { mutateAsync: claimNft, isLoading, error } = useClaimNFT(contract);
  
  return (
    <>
    <h1>This is Memo</h1>
    <Web3Button
      contractAddress={contractAddress}
      action={() =>
        claimNft({
          to: wallet_address, // Use useAddress hook to get current wallet address
          quantity: 1,
          tokenId: tokenId,
        })
      }
      onSuccess={(result)=> {router.push("/mypage")}}
    >
      Claim NFT
    </Web3Button>
    </>
  );
}

export default Memo