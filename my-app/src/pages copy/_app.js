import Head from 'next/head';
import Layout from '@/components/layout/layout';
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '@/utils/firebase/firebase';
import { currentUserState } from '@/lib/atoms/currentUser';
import { useEffect } from 'react';



const AppInit = () => {
  const setCurrentUser = useSetRecoilState(currentUserState)
  const fetchSetUser = async () => {
    try {
      onAuthStateChanged(firebaseAuth, async (user) => {
        if (!user) {
          signInAnonymously(firebaseAuth)
            .then(async (e) => {
              if (e.user) {
                setCurrentUser({
                  uid: e.user.uid,
                  displayName: e.user.displayName,
                  isAnonymus: e.user.isAnonymous,
                })
              }
              // eslint-disable-next-line no-console
            })
            .catch(() => {
               console.log(error)
            })
        } else {
          setCurrentUser({
            uid: user.uid,
            displayName: user.displayName,
            isAnonymus: user.isAnonymous,
          })
        }
      })
    } catch {
      setCurrentUser(null)
    }
  }
  useEffect(() => {
    fetchSetUser()
  }, [])
  return null
}

function MyApp(props) {
  
  const activeChain = "mumbai"
  const clientId = "57012872b0d8c21e607fb36431b70655"
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>Idol NFT</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/ファビコン.png" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThirdwebProvider 
      activeChain={activeChain} 
      clientId={clientId}
      autoConnect={true}
      desiredChainId={ChainId.Mumbai}
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl: "https://api.defender.openzeppelin.com/autotasks/b29565e2-9bc8-4920-b670-f7a0d0b5bbd1/runs/webhook/ba64daf5-7d9f-4828-aa82-0bc8446874b5/U6ZYGqaMvWNywoQa3nGnD4",
          }
        }
      }}
       >
        <RecoilRoot>
          <AppInit />
          <Layout>
        <Component {...pageProps} />
          </Layout>
      </RecoilRoot>
      </ThirdwebProvider>
    </>

  );
}

export default MyApp;