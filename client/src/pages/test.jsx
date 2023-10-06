import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default UncontrolledExample;