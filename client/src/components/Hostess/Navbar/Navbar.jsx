import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>

      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
            srcSet={require('../../../assets/logo/Nudo.png')}
              alt="Not found"
              width="80"
              height="80"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;