import { useState, useCallback, useEffect } from "react";
export default function useVote(
  initialVotes,
  voteCallApi,
  failMsg = "Vote failed. please try again later"
) {
  const [votes, setVotes] = useState(initialVotes);
  useEffect(() => {
    setVotes(initialVotes);
  }, [initialVotes]);

  const vote = useCallback(
    (inc) => {
      setVotes((prev) => prev + inc);

      voteCallApi(inc)
        .then((response) => {
          const updatedVotes = response.data.updatedArticle?.votes;
          if (typeof updatedVotes === "number") {
            setVotes(updatedVotes); // sync to backend value
          }
        })
        .catch(() => {
          setVotes((prev) => prev - inc);
          alert(failMsg);
        });
    },
    [voteCallApi, failMsg]
  );
  return [votes, vote];
}
