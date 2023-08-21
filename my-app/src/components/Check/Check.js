import { useRouter } from 'next/router';
import IdolData from '@/data/IdolData';
import Title from './Title';
import IdolCheck from './IdolCheck';

const Check = () => {

  console.log(process.env.API_KEY)
  const router = useRouter();
  const { id } = router.query; // ダイナミックルーティングで渡されるidを取得

  // idに該当するアイドル情報を検索
  const selectedIdol = IdolData.find((idol) => idol.id === parseInt(id));

  if (!selectedIdol) {
    // 該当するアイドルが見つからない場合の処理
    return <p>アイドルが見つかりません</p>;
  }

  return (
    <div>
      <Title />
      <IdolCheck
        id={selectedIdol.id}
        name={selectedIdol.name}
        image={selectedIdol.image}
      />
    </div>
  );
};

export default Check;
