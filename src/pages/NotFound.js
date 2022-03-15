import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container fluid="md" className="mt-5">
      <Row>
        <Col>
          <div className="card">
            <div className="card-header">404</div>
            <div className="card-body">
              <h5 className="card-title">Not Found</h5>
              <p className="card-text">
                The page you're looking for is not found
              </p>
              <Link to="/">
                <button className="btn btn-primary">Home</button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
