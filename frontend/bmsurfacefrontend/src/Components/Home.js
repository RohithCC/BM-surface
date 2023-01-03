import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import {React, useState, useEffect} from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';


export default function Home() {
 const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
   
    fetchData();

  }, []);


  const fetchData = async () =>{
 
    setLoading(true);
      <Spinner animation="border" />;
    
    try {
      let {data} = await axios.get('http://127.0.0.1:5000/list');
      console.log(data);
      
      setData(data);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  }

  return (
    <div>
      
    <Container>
      <div className="h-100 d-flex align-items-center justify-content-center">
                        <Row>
                            <span className='d-flex justify-content center mt-3 p-3' style={{ fontSize: '24px'}}>All Blog Description</span>
                            <Col sm={12}>
                                <Row xs={1} md={2} className="g-4">
                                            {data.map((Item, idx) => (
                                          <Col>
                                            <Card>
                                                 <Card.Img variant="top" src= {Item[3]} />
                                              <Card.Body>
                                                <Card.Title>Blog Name {Item[1]} </Card.Title>
                                                <Card.Text>
                                                  {Item[2]}
                                                </Card.Text>
                                              </Card.Body>
                                            </Card>
                                          </Col>
                                            ))}
                                </Row>
                            </Col>
                        </Row>
      </div>
       
    </Container>
    </div>
  )
}
