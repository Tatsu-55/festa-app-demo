import Title from "@/components/MyPage/Title";
import AccountDetail from "@/components/MyPage/AccountDetail";
import ShowOwnedNFT from "@/components/MyPage/ShowOwnedNFT";
import { ConnectWallet } from "@thirdweb-dev/react";

const MyPage = () => {
    
    return (
        <>
            <Title />
            <ConnectWallet />
            <AccountDetail />
            <ShowOwnedNFT />       
          
        </>
    )
}

export default MyPage