import useGenres, { Genre } from "../hooks/useGenres";
import {
  List,
  ListItem,
  HStack,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}
const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading } = useGenres();

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
                onClick={() => onSelectGenre(genre)}
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
