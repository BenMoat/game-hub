import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let colour =
    score > 75 ? "green" : score > 60 ? "yellow" : score > 90 ? "red" : "";
  return (
    <Badge colorScheme={colour} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
