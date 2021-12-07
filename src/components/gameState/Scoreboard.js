import { useScoreboardAPI } from "../../hooks/useScoreboardAPI";
import Score from "./Score";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export const Scoreboard = () => {
  const topTen = useScoreboardAPI();
  return (
    <div className="scoreboard">
      <h1>High Scores</h1>
      {topTen.map((scoreData) => (
        <Score
          key={scoreData._id}
          userName={scoreData.user}
          score={scoreData.score}
        />
      ))}

      <Button className = "scorebtn" component={Link} to="/game" variant="contained" color="primary">
        Play
      </Button>

      <Button className = "scorebtn" component={Link} to="/home" variant="contained" color="primary">
        Logout
      </Button>
    </div>
  );
};
