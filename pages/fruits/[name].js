import { Card, Container } from "react-bootstrap";
import { useRouter } from "next/router";
import { fruits } from "../fruits";

function Fruit() {
  const router = useRouter();
  const { query } = router;
  // Find the fruit and list it here
  const currentFruit = fruits.filter((fruit) => fruit.name === query.name)[0];

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{currentFruit.name}</Card.Title>
          <Card.Text>
            {currentFruit.price}
            <br />
            {currentFruit.color}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export async function getStaticPaths() {
  return { paths: fruits.map((fruit) => fruit.name), fallback: false };
}

export default Fruit;
