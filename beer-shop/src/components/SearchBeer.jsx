import React, { useEffect, useState } from "react";

import { Button, Form, InputGroup } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function SearchBeer(props) {
  const { APIData, setFilteredResults, setFlag, setAPIData } = props;

  const [searchInput, setSearchInput] = useState("");

  
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    if (searchInput.length == 0) {
      setFlag(false);
      setAPIData(APIData);
    }
  }, [searchInput]);


//search
  const searchItems = () => {
    setFlag(true);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return item.name.toLowerCase().includes(searchInput.toLowerCase());
      });

      setFilteredResults(filteredData);
    } else {
      setAPIData(APIData);

      setFlag(false);
    }
  };

  return (
    <>
      <Form style={{ maxWidth: "900px", margin: "10px" }} className="SearchBar">
        <InputGroup className="mb-3">
          <Form.Control
            style={{ marginLeft: "300px" }}
            value={searchInput}
            onChange={handleChange}
            placeholder="Search Beers"
          />
          <Button onClick={searchItems}>search</Button>
        </InputGroup>
      </Form>
    </>
  );
}
