import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

// Destructure the Props interface here and pass the game object as a prop
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="1xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
