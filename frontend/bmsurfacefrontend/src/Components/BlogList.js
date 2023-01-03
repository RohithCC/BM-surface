import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {React, useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Image from "react-bootstrap/Image";
import Spinner from 'react-bootstrap/Spinner';

function BlogList() {

   var i = 0;
    
  const [currentPage, setActivePage] = useState(2);

  //const navigate = useNavigate();
  var EditedId = '';
 
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

  const [modalShow, setModalShow] = useState(false);


  const [validated, setValidated] = useState(false)
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [deleteId, setdeleteId] = useState(0);
  const [edit, setedit] = useState(0);
  const [BlogName, setBlogName] = useState('');
  const [BlogTitle, setBlogTitle] = useState('');
  const [BlogshortDesc, setBlogshortDesc] = useState('');
  const [Blogimg, setBlogimg] = useState('');





  // for Edit bloaging
  const [id_edit, set_id_edit] = useState("");
const [blog_name_edit, set_name_edit] = useState("");
const [blog_description_edit, set_blog_description_edit] = useState("");
const [blog_image_edit, set_blog_image_edit] = useState("");
const [blog_long_description_edit, set_blog_long_description_edit] = useState("");
const [author_name_edit, set_author_name_edit] = useState("");
const [author_image_edit, set_author_image_edit] = useState("");
const [blog_conclusion_edit, set_blog_conclusion_edit] = useState("");
const [Edited_id, set_Edited_id] = useState("");



 useEffect(() => {
   
    fetchData();

  }, []);

  



// 30-12-22
  const [show, setShow] = useState(false);



const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = (e) => {
      console.log(e+"---------Editing 1-12-22-----");
       axios.get('http://127.0.0.1:5000/get/'+e)
  .then(function (response) {
    console.log(response.data[0]);
    set_id_edit(response.data[0])
    set_name_edit(response.data[1]);
    set_blog_description_edit(response.data[2]);
    set_blog_image_edit(response.data[3]);

  });
    setedit(e);
    setShow1(true);
  }



  const handleClose = () => setShow(false);
  const handleShow = (e) => {
     console.log(e+"---------deleting 30-12-22-----");
       axios.get('http://127.0.0.1:5000/get/'+e)
  .then(function (response) {
    console.log(response.data);
    setBlogName(response.data[1]);
    setBlogshortDesc(response.data[2]);
    setBlogimg(response.data[3]);

  });
            setdeleteId(e);
           setShow(true);
  }



  const deleteRecord = () => {
     axios.get('http://127.0.0.1:5000/delete/'+deleteId)
    .then(function (response) {
       swal(`Blog record with  Id ${deleteId} SuccessFully`);
    console.log(response);
  });
 
     fetchData();
    setLoading(false); 
  <Spinner animation="border" />;
   setShow(false);
  }


  const  EditRecord = () => {
     axios.put('http://127.0.0.1:5000/update',{
      id: id_edit,
      name: blog_name_edit,
      description: blog_description_edit,
       url: blog_image_edit,
     })
    .then(function (response) {
       swal(`Blog record with  Id ${id_edit} edited SuccessFully`);
    console.log(response);
  });
     fetchData();
    setLoading(false); 
  <Spinner animation="border" />;
  setShow1(false);
  }

 






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

  const handleClick = (e)=>{ 
   console.log(e+"---------deleting 30-12-22-----"+deleteId);
    axios.get(''+e)
  .then(function (response) {
    console.log(response.data);
    setBlogName(response.data[1]);
    setBlogshortDesc(response.data[2]);
    setBlogimg(response.data[3]);
   
  });
  
    setVisible(!visible)
    setLoading(false);
    setdeleteId(e);
  


  }

   
  const handleClickEdit = (e) =>{
   
    console.log(e+"fetched ID 1-10-2022");
     EditedId = e;
     set_Edited_id(EditedId);
    axios.get(`http://192.81.213.186:9000/blog/getblog/`+e).then((response) => {
      console.log(response);
      

     set_blog_image_edit(response.data.message.blog_image);
     set_blog_long_description_edit(response.data.message.blog_long_description);
     set_author_name_edit(response.data.message.author_name);
     {console.log(author_name_edit)}
     set_author_image_edit(response.data.message.author_image);
     set_blog_conclusion_edit(response.data.message.blog_conclusion);
     set_Edited_id(response.data.message._id);
    });
  

    //navigate('/base/list-groups',{state: {index: e}})
  
   // .catch(error=> console.error( `Error:$(error)`));
  }













 const table_name = [
    { id: 1, name: "Blog Title" },
    { id: 2, name: "Blog Description" },
    { id: 3, name: "Image" },
    { id: 4, name: "Action Buttons .." },
    {id: 5, name: "Date created"}
  ];

  return (
    <>
 
        <Container>
            <Row>
                <Col sm={12} className="d-flex justify-content-center p-3" style={{fontsize: '24px'}}> Blog List </Col>
            </Row>
            <Table stripped bordered hover size="sm" responsive className='mt-5 p-5'>
          
      <thead>
        <tr>
          <th>Serial No</th>
           {table_name.map((user) => (
            <th>{user.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
 
                    {data.map((item, index) => (
                  <tr key={index}>
                            {console.log(data)}
                      {Array.from({ length: 6 }).map((_, index) => ( 
                        <td key={index}>
                          {(index==5) && (item[index]) }

                        </td>,
                        index == 4 ? (
                            <td key={index}>
                                      <Row  style={{width: '100%', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'nowrap', alignItems: 'center'}} >
                                       <Col xs={6} md={6}>
                                              <Button  variant="danger" 
                                                  onClick={() => 
                                                    handleShow(item[0])
                                                    && handleClick(item[0])
                                                      && setdeleteId(item._id)
                                                  }
                                                >
                                                      Delete</Button>
                                                                  
                                       </Col>
                                       <Col xs={6} md={6}>                       
                                      <Button variant="success"
                                            onClick={()=> {
                                              handleShow1(item[0])
                                        && handleClickEdit(item[0])
                                              && setedit(item._id)
                                            }}
                                    >Edit  </Button> 


                                       </Col>
        
                                     


                                      </Row>
                                     

                            </td>
                      ) : (<td key={index}>{(index ==3) ? (
                         <Image
                          src={item[index]} 
                          style={{width: '100px', height: '100px'}}
                          rounded
                            />
                              ) : (item[index])}</td>)   
                   
                  ))}
                  </tr>
                  ))}
        

        
      </tbody>
          </Table>




       {/* modal delete */}
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        <Container><Modal.Title>Blog Name: {BlogName}</Modal.Title></Container>
        </Modal.Header>
        <Modal.Body>
          
          <Row>
            <Col xs={9} md={9}>
               <h6> Blog description</h6>
              <span className='p-3 mt-5'> {BlogshortDesc} </span>
            </Col>
             <Col xs={3} md={3}>
                <h6> Image</h6> 
                 <Image
                   src={Blogimg} 
                    style={{width: '100px', height: '100px'}}
                    rounded
                  />
             </Col>
        
           

                            
                             </Row>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteRecord}>
           Delete
          </Button>
        </Modal.Footer>
      </Modal>


      {/* edit Modal */}
         
      
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Blog Edition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
               defaultValue=""
                 value={id_edit}
             onChange={(event)=> set_id_edit(event.target.value)}
                 feedbackValid="validated!"
                required
              disabled 
              />
            </Form.Group>
             <Form.Group>
             <Form.Label>Blog name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                 value = {blog_name_edit}
                   onChange={(event)=> set_name_edit(event.target.value)}
               
                autoFocus
              />
            </Form.Group>
             <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Blog Discription</Form.Label>
              <Form.Control
               as="textarea"
                value = {blog_description_edit}
            onChange={(event)=> set_blog_description_edit(event.target.value)}
                
                rows={3} />
            </Form.Group>
             <Form.Group>
            <Form.Label>Blog url</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                 value = {blog_image_edit}
                      onChange={(event)=>  set_blog_image_edit(event.target.value)}
                
                autoFocus
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary"  onClick={EditRecord}>
           Edit Changes
          </Button>
        </Modal.Footer>
      </Modal>




        </Container>
    
   
    </>
  );
}

export default BlogList;