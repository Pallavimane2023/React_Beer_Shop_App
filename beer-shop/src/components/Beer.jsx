import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col,Image, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { ADD_TO_FAVS } from "../redux/action";
import SearchBeer from "./SearchBeer";

export default function Beer() {
  
  const [filteredResults, setFilteredResults] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [page, setPage] = useState(1);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    //get method to display beer data
    const getBeerData = async () => {
      return await axios
        .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)
        .then((response) => {
          setAPIData(response.data);
        })
        .catch((err) => console.log(err));
    };
    getBeerData();
  }, [page, flag]);

  

  const dispatch = useDispatch();

  const getData = useSelector((state) => state.carts);

  //adding card as a favourite
  const AddToFav = (e) => {
    const item = getData.find((item) => {
     
      return item?.id === e.id;
    });

    if (!item) {
      dispatch(ADD_TO_FAVS(e));
    }
  };

  const incrementCount = () => {
    setPage(page + 10);
  };

  const decrementCount = () => {
    setPage(page - 10);
  };

  const ShowData = flag ? filteredResults : APIData;
  return (
    <>
      <SearchBeer
        APIData={APIData}
        setFilteredResults={setFilteredResults}
        setFlag={setFlag}
        setAPIData={setAPIData}
      />
      <Container>
        <Row>
          {ShowData?.map((item, index) => {
            return (
              <Col sm={3} key={item.id}>
                <div className="holder">
                  
                  <Card
                    key={item.id}
                    style={{ width: "18rem", marginTop: "10px" }}
                  >
                    <div className="button_div d-flex justify-content-center">
                      <Button
                        variant="info"
                        id={item.id}
                        onClick={() => AddToFav(item)}
                        style={{ marginTop: "10px" }}
                        className="col-lg-6"
                      >
                       AddToFavs
                      </Button>
                    </div>
                    <div>
                    <Image
                      
                      src={item.image_url}
                      style={{marginLeft:"60px",marginTop:"10px", height: "160px", width: "160px" }}
                      thumbnail
                    ></Image></div>
                    <Card.Body>
                      <Card.Title style={{ fontSize: 20, color: "red" }}>
                        {item.name}
                      </Card.Title>
                      <Card.Text>
                        {" "}
                        {item.description.substring(0, 80)}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
        <div style={{ float: "right" }}>
          <Button onClick={decrementCount}>
          <span aria-hidden='true'>«</span> Prev</Button>
          <Button style={{ marginLeft: "10px" }} onClick={incrementCount}>
          Next  <span aria-hidden='true'>»</span>
          </Button>
        </div>
      </Container>
    </>
  );
}
