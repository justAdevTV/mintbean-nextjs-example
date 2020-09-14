import { useRouter } from "next/router";
import { Button, Container, Table } from "react-bootstrap";

export const fruits = [
  {
    name: "Apple",
    color: "red",
    price: "$1.00",
    img:
      "data:image/jpeg;base64,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",
  },
  { name: "Banana", color: "yello", price: "$1.50" },
  { name: "Orange", color: "orange", price: "$1.25" },
  { name: "Grapes", color: "purple", price: "$2.00" },
];

function Fruits() {
  const router = useRouter();
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Fruit Name</th>
            <th>Color</th>
            <th>Price</th>
            <th>Link to Fruit</th>
          </tr>
        </thead>
        <tbody>
          {/* Map the Fruits array to table rows */}
          {fruits.map((fruit) => (
            <tr>
              <td>{fruit.name}</td>
              <td>{fruit.color}</td>
              <td>{fruit.price}</td>
              <td>
                <Button
                  onClick={() => router.push(`/fruits/${fruit.name}`)}
                  variant="primary"
                >
                  View {fruit.name}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Fruits;
