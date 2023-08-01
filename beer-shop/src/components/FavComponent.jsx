import React from "react";

import { Button, Table, Image } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FAVS } from "../redux/action";

import Header from "./Header";

const FavComponent = () => {
  const getData = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const RemoveFavs = (id) => {
    dispatch(REMOVE_FAVS(id));
  };

  return (
    <>
      <Header />
      {getData.length ? (
        <div className="card_details" style={{ width: "100%", padding: 10 }}>
          <Table responsive striped bordered hover size="md">
            <thead>
              <tr>
                <th>Id</th>
                <th>Beer Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Remove Fav</th>
              </tr>
            </thead>
            <tbody>
              {getData.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>
                        <Image
                          src={item.image_url}
                          style={{ height: "100px", width: "100px" }}
                          thumbnail
                        />
                      </td>
                      <td>{item.description.substring(0, 80)}</td>

                      <td>
                        <Button
                          style={{ marginTop: "20px" }}
                          variant="danger"
                          onClick={() => RemoveFavs(item.id)}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          Your card is Empty !
        </div>
      )}
    </>
  );
};

export default FavComponent;
