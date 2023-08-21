import Title from "@/components/Success/Title"
import IdolImage from "@/components/Success/IdolImage"
import Button from "@/components/Success/Button"
import { useRouter } from "next/router";
import IdolData from "@/data/IdolData";

const Success = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log(id);

    const selectedIdol = IdolData.find(idol => idol.id.toString() === id);
    console.log(selectedIdol);

    return (
        <>
            <Title />
            <IdolImage
            src={selectedIdol ? selectedIdol.image : ''} alt='IdolImage' />
            <Button />
       
        </>
    )
}

export default Success