import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import {React, useState} from 'react';
import swal from 'sweetalert';
import axios from 'axios';

function BlogCreate() {


// set state for form data 
const [blog_name, setblog_name] = useState("");
const [blog_short_description, setblog_short_description] = useState("");
const [img_url, setimg_url] = useState("");
const [Id, setId] = useState("");

const [validated, setValidated] = useState(false)
 // const navigate = useNavigate();

  const handleSubmit = async (event) => {
  //console.log(event);
  event.preventDefault();
  const form = event.currentTarget
  if (form.checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
  }
  setValidated(true)
  let rest =  JSON.stringify({
    name: blog_name,
    description: blog_short_description,
    url: img_url,
   
  });
  console.log(rest);


  axios.post("http://127.0.0.1:5000/insert", 
 {
    name: blog_name,
    description: blog_short_description,
    url: img_url,
  }, {
    headers: {
   // "Content-Type": "multipart/form-data",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
  })
  .then((res) => {
    console.log(res);
    swal("new Blog created SuccessFully");
   // navigate('/base/blogList');
    
  })
  .catch((err) => {
    console.log(err);
  });
  //console.log(response);
  console.log(Id);
   
  
}

  return (
    <Container>
      <div className="h-100 d-flex align-items-center justify-content-center">
         <Row>
            <span className='d-flex justify-content center mt-2' style={{ fontSize: '24px'}}>Blog Creation</span>
            <Col sm={12}>
                    <Card  className="mb-4 p-3 mt-5 d-flex justify-content-center" style={{ width: '40rem' }}>
                        <Container className='d-flex justify-content-center'>
                                 <Form  
                                  className="row g-3 needs-validation"
                                   noValidate
                                    validated={validated}
                                    onSubmit={handleSubmit}
                                    >
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Blog Name</Form.Label>
                                        <Form.Control
                                         type="text" 
                                         name='blog_name'
                                          placeholder="Blog Name"
                                           defaultValue=""
                                            value={blog_name}
                                          onChange={(event)=> setblog_name(event.target.value)}
                                                  feedbackValid="validated!"
                                             required
                                           />
                                               <Form.Control.Feedback type="invalid">
                                            Please fill a Blog Name.
                                            </Form.Control.Feedback>
                                        
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Blog Description</Form.Label>
                                          <Form.Control 
                                          as="textarea"
                                           rows={4}
                                            name='blog_description'
                                             placeholder='blog_description'
                                                 defaultValue=""
                                            value={blog_short_description}
                                            onChange={(event)=> setblog_short_description(event.target.value)}
                                                        feedbackValid="validated!"
                                             required
                                             />
                                             <Form.Control.Feedback type="invalid">
                                            Please fill a Blog Description
                                            </Form.Control.Feedback>
                                    </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Imge Url</Form.Label>
                                        <Form.Control
                                         type="text"
                                          name='img_url' 
                                          placeholder="Image URl"
                                          defaultValue=""
                                         value={img_url}
                                    onChange={(event)=> setimg_url(event.target.value)}
                                         feedbackValid="validated!"
                                             required
                                           />
                                             <Form.Control.Feedback type="invalid">
                                            Please fill a Image Url
                                            </Form.Control.Feedback>
                                    </Form.Group>
                                   
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                    </Form>

                        </Container>
                           
                    </Card>
                    
            </Col>
        </Row>
        


      </div>
       
    </Container>
   
  );
}

export default BlogCreate;