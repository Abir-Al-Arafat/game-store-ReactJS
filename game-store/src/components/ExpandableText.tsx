import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  paragraph: string;
  limit: number;
}

const ExpandableText = ({ paragraph, limit }: Props) => {
  const [expanded, setExpanded] = useState(false);
  //   const limit = 300;

  if (!paragraph) return null;

  if (paragraph.length <= limit) return <Text>{paragraph}</Text>;

  const summary = expanded ? paragraph : paragraph.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
