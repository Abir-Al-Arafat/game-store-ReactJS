import { Button, Collapse } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  paragraph: string;
  limit?: number;
}
const ExpandCollapseText = ({ paragraph, limit = 100 }: Props) => {
  const [show, setShow] = useState(false);

  if (!paragraph) return null;

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Collapse startingHeight={limit} in={show}>
        {paragraph}
      </Collapse>
      <Button size="sm" onClick={handleToggle} mt="1rem">
        Show {show ? "Less" : "More"}
      </Button>
    </>
  );
};

export default ExpandCollapseText;
