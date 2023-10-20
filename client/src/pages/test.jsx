import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WithHeaderStyledExample() {
  return (
    <Card>
      <Card.Header as="h5">Sobre mi</Card.Header>
      <Card.Body>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderStyledExample;