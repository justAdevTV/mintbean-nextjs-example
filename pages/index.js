import { Container, Table } from "react-bootstrap";

export default function Home({ countries }) {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Subregion</th>
            <th>Country Name</th>
            <th>Capital</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {/* Map out countries to table rows */}
          {countries.map((country) => (
            <tr>
              <td>{country.subregion}</td>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.population}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      countries,
    },
  };
}
