import { FaArrowRight, FaAngleRight } from "react-icons/fa";
import { selectedItemColor } from "../constants/colors";
import {
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  color,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import useTrailers from "../hooks/useTrailers";
import GameTrailer from "../components/GameTrailer";
import useScreenshots from "../hooks/useScreenshots";
import GameScreenshots from "../components/GameScreenshots";
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

  const {
    data: screenshots,
    isLoading: loadingScreenshots,
    error: errorScreenshots,
  } = useScreenshots(game?.id!);

  if (!loadingScreenshots && !errorScreenshots) {
    console.log("screenshots", screenshots);
  }

  // if (slug) {
  //   const { data: game, isLoading, error } = useGame(slug);
  // }
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem colSpan={{ base: 1, md: 2 }}>
        <Breadcrumb separator={<FaAngleRight color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to="/"
              _hover={{ color: selectedItemColor }}
              textDecoration="none"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink textColor={selectedItemColor}>
              {game.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </GridItem>
      <GridItem>
        <Heading>{game.name}</Heading>
        <Divider />
        <ExpandableText
          paragraph={game.description_raw}
          limit={300}
        ></ExpandableText>
        <GameAttributes game={game}></GameAttributes>
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
