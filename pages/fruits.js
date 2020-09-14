import { useRouter } from "next/router";
import { Button, Container, Table } from "react-bootstrap";

export const fruits = [
  {
    name: "Apple",
    color: "red",
    price: "$1.00",
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
