import Link from "next/link"

const Success = () => {
    return (
        <>
            <h1>投票が完了しました！</h1>
            <p>投票していただき、ありがとうございました！<br></br>マイページで投票したアイドルのNFTを確認してみましょう！</p>
            <p><Link href="https://forms.gle/Yr9A7QnMtnFoyVNn8" target="_brank">アンケートはこちらから</Link></p>
            
        </>
    )
}

export default Success