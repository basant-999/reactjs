import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  return (
    <>

<Container>
      <Row>
        <Col md={2} className='bg-primary'></Col>
        <Col md={2} className='bg-danger'></Col>
        <Col md={2} className='bg-primary'></Col>
        <Col md={2} className='bg-primary'></Col>
      
      </Row>
    </Container>

    </>
  )
}

export default App
