import { useState } from "react";
import styles from "./Report.module.css";
import VoteButton from "./components/VoteButton/VoteButton";
import VoteResults from "./components/VoteResults/VoteResults";

type Props = {
  onVote?: (vote: "up" | "down") => void;
};

const Report = ({ onVote }: Props) => {
  const [page, setPage] = useState<"report" | "result">("report");
  const onClick = (vote: "up" | "down") => {
    setPage("result");
  };

  if (page === "report") {
    return (
      <div className={styles.container}>
        <VoteButton vote="up" onClick={onClick} />
        <VoteButton vote="down" onClick={onClick} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <VoteResults />
    </div>
  );
};

export default Report;
