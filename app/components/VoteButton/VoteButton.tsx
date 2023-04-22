import Up from "./Up";
import Down from "./Down";

type Props = {
  vote: "up" | "down";
  onClick: (vote: "up" | "down") => void;
};

const VoteButton = ({ vote, onClick }: Props) => {
  return (
    <button type="button" onClick={() => onClick(vote)}>
      {vote === "up" ? <Up /> : <Down />}
    </button>
  );
};

export default VoteButton;
