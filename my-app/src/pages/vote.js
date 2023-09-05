import Explain from "@/components/Vote/Explain";
import VoteList from "@/components/Vote/VoteList";
import idolData from "@/data/IdolData";

  const Vote = () => {
   
    return (
      <>
        <Explain />
        <VoteList idolData={idolData} />
      </>
    );
  };
  
  export default Vote;