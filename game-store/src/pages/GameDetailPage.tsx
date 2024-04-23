import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import useTrailers from "../hooks/useTrailers";
import GameTrailer from "../components/GameTrailer";
const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const {
    data: trailer,
    isLoading: loadingTrailer,
    error: errorTrailer,
  } = useTrailers(game?.id!);

  if (!loadingTrailer && !errorTrailer) {
    console.log("trailer", trailer);
  }

  // if (slug) {
  //   const { data: game, isLoading, error } = useGame(slug);
  // }
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText
        paragraph={game.description_raw}
        limit={300}
      ></ExpandableText>
      <GameAttributes game={game}></GameAttributes>
      <GameTrailer gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
