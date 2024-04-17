import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore(
    (select) => select.gameQuery.genreId
  );
  const setGenreId = useGameQueryStore((select) => select.setGenreId);

  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginY={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              {" "}
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />{" "}
              <Button
                onClick={() => setGenreId(genre.id)}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
