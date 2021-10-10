import React from "react";
import image from "./../img/showcase.svg";
import cardPic from "./../img/bg.jpg";
import JavascriptPic from "./../img/fundamentals.svg";
import ReactPic from "./../img/react.svg";
import { InputGroup, FormControl, Button, Card } from "react-bootstrap";

const body = () => {
  return (
    <div>
      <section className="bg-dark text-light p-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex">
            <div>
              <h1>
                Welcome to my <span className="text-warning">Website</span>
              </h1>
              <p className="lead my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum temporibus qui quis officia facilis eum eligendi
                voluptatem harum quisquam fugit.
              </p>
              <button className="btn btn-primary btn-lg">Enroll Now</button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block "
              src={image}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="bg-primary p-4 text-light">
        <div className="container">
          <div className="d-md-flex align-item-between mb-3 mb-md-0 ">
            <h3 className="me-5">Start Your Journey with Us</h3>
            <InputGroup className="mb-2 m-auto  ">
              <FormControl
                placeholder="Email Address:"
                aria-label="Recipient'email"
                aria-describedby="basic-addon2"
              />
              <Button variant="btn btn-dark btn-lg" id="button-addon2">
                Button
              </Button>
            </InputGroup>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container ">
          <div className="row p-5">
            <div className="col my-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cardPic} />
                <Card.Body>
                  <Card.Title className="lead fw-bold py-2">
                    Work from Home
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Read More</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col my-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cardPic} />
                <Card.Body>
                  <Card.Title className="lead fw-bold py-2">
                    Remote Job
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Read More</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col my-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cardPic} />
                <Card.Body>
                  <Card.Title className="lead fw-bold py-2">
                    Work from Office
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Read More</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container border border-warning p-5 p-3 mb-2 bg-light text-dark ">
          <div className="row  align-items-center justify-content-between ">
            <div className="col-md">
              <h1 className="fw-bold py-3">Learn the fundamentals</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium voluptas, distinctio eum, fugit labore unde
                provident exercitationem, quasi error voluptatibus deleniti
                consequuntur dolorum rerum dolores?
              </p>
            </div>
            <div className="col-md">
              <img src={JavascriptPic} alt="" className="img-fluid lg-w-50" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container border border-warning p-5 p-3 mb-2 bg-dark text-light ">
          <div className="row  align-items-center justify-content-between ">
            <div className="col-md">
              <img src={ReactPic} alt="" className="img-fluid lg-w-50" />
            </div>
            <div className="col-md">
              <h1 className="fw-bold py-3">Learn React</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium voluptas, distinctio eum, fugit labore unde
                provident exercitationem, quasi error voluptatibus deleniti
                consequuntur dolorum rerum dolores?
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24"></svg>
          </a>
          <span className="text-muted">© 2021 Sherry, Inc</span>
        </div>
        <div className="d-flex">
          <button className="btn btn-sm btn-outline-danger  m-1">
            <div className="px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </div>
          </button>
          <button className="btn btn-sm btn-outline-warning m-1">
            <div className="px-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default body;
