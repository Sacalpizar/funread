import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./MyLibrary.css";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Stack from "react-bootstrap/Stack";
import logo from "../../placeholderBook.jpg";

function MyLibrary(props) {
  const [myView, setMyView] = useState("1");
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  const booksList = [
    { name: "Libro 1", type: "Historia", pages: "12", date: "Enero 20" },
    { name: "Libro 2", type: "Historia", pages: "13", date: "Enero 20" },
    { name: "Libro 3", type: "Historia", pages: "50", date: "Enero 20" },
    { name: "Libro 4", type: "asd", pages: "12", date: "Enero 20" },
    { name: "Libro 5", type: "Historia", pages: "12", date: "Enero 20" },
    { name: "Libro 6", type: "asd", pages: "12", date: "Diciembre 19" },
    { name: "Libro 7", type: "Historia", pages: "785", date: "Enero 21" },
    { name: "Libro 8", type: "Historia", pages: "785", date: "Enero 21" },
    { name: "Libro 9", type: "Historia", pages: "785", date: "Enero 21" },
    { name: "Libro 10", type: "Historia", pages: "785", date: "Enero 21" },
    { name: "Libro 11", type: "Historia", pages: "785", date: "Enero 21" },
    { name: "Libro 12", type: "Historia", pages: "785", date: "Enero 21" },
    { name: "Libro 13", type: "Historia", pages: "785", date: "Enero 21" },
    { name: "Libro 14", type: "Historia", pages: "785", date: "Enero 21" },
  ];

  function changeView(view) {
    setMyView(view);
  }

  function setRecentViews(userRecentViews) {
    const recentViewsList = [];

    if (userRecentViews.length > 0) {
      for (let i = 0; i < userRecentViews.length; i++) {
        recentViewsList.push(
          <ListGroup.Item key={i}>{userRecentViews[i]}</ListGroup.Item>
        );
      }
    }

    return recentViewsList;
  }

  function View1() {
    return (
      <div className="my-library-all-books-view-1">
        <Table className="books-table">
          <thead>
            <tr>
              <th style={{ width: "60%", paddingLeft: 20 }}>Book Title</th>
              <th style={{ width: "15%" }}>Class</th>
              <th style={{ width: "10%" }}>Pages</th>
              <th style={{ width: "15%" }}>Date</th>
            </tr>
          </thead>
          <tbody>{setBooksTableData(booksList)}</tbody>
        </Table>
      </div>
    );
  }

  function setBooksTableData(data) {
    const booksList = [];

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        booksList.push(
          <tr key={i}>
            <td style={{ width: "60%", paddingLeft: 20 }}>{data[i].name}</td>
            <td style={{ width: "15%" }}>{data[i].type}</td>
            <td style={{ width: "10%" }}>{data[i].pages}</td>
            <td style={{ width: "15%" }}>{data[i].date}</td>
          </tr>
        );
      }
    }

    return booksList;
  }

  function View2() {
    return (
      <div className="my-library-all-books-view-2">
        {setSmallBookCardsData(booksList)}
      </div>
    );
  }

  function setSmallBookCardsData(data) {
    const booksList = [];

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        booksList.push(
          <Card className="small-book-card" key={i}>
            <Card.Img
              variant="top"
              src={logo}
              alt={logo}
              height="115px"
              width="120px"
            />
            <Card.Body>
              <Card.Title>{data[i].name}</Card.Title>
            </Card.Body>
          </Card>
        );
      }
    }

    return booksList;
  }

  function View3() {
    return (
      <div className="my-library-all-books-view-3">
        <Carousel className="carousel-books" indicators={false}>
          <Carousel.Item className="carousel-books-item">
            <Stack direction="horizontal" className="carousel-books-stack">
              {setLargeBookCardsData(booksList)}
            </Stack>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }

  function setLargeBookCardsData(data) {
    const booksList = [];

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        booksList.push(
          <Card className="large-book-card" key={i}>
            <Card.Img variant="top" src={logo} alt={logo} height="470px" />
            <Card.Body className="large-book-card-body">
              <Card.Title>{data[i].name}</Card.Title>
            </Card.Body>
            <Card.Text className="large-book-card-description">
              {data[i].type}
            </Card.Text>
          </Card>
        );
      }
    }

    return booksList;
  }

  return (
    <>
      <div className="my-library">
        <div className="my-library-banner">
          <h2>My Library</h2>
        </div>
        <Navbar bg="transparent" className="my-library-navbar">
          <Nav>
            <div className="my-library-options">
              <Nav.Link className="my-library-options-content">
                Create Book
              </Nav.Link>
              <Nav.Link className="my-library-options-content">
                Import Book
              </Nav.Link>
              <Nav.Link className="my-library-options-content">
                Filters
              </Nav.Link>
            </div>
          </Nav>
          <Nav className="me-auto"></Nav>
          <Nav className="my-library-options">
            <Navbar.Text className="my-library-select-view">
              Select View
            </Navbar.Text>
          </Nav>
          <Nav>
            <div className="my-library-options">
              <Nav.Link
                className="my-library-options-content"
                onClick={() => {
                  changeView("1");
                }}
              >
                1
              </Nav.Link>
              <Nav.Link
                className="my-library-options-content"
                onClick={() => {
                  changeView("2");
                }}
              >
                2
              </Nav.Link>
              <Nav.Link
                className="my-library-options-content"
                style={{ marginRight: "0px" }}
                onClick={() => {
                  changeView("3");
                }}
              >
                3
              </Nav.Link>
            </div>
          </Nav>
        </Navbar>
        <div className="my-library-body">
          <div className="my-library-recent-views">
            <p className="my-library-recent-views-title">Recent Views</p>
            <ListGroup className="recent-views">
              {setRecentViews(arr)}
            </ListGroup>
          </div>
          <div className="my-library-all-books">
            {myView === "1" ? View1() : myView === "2" ? View2() : View3()}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyLibrary;
