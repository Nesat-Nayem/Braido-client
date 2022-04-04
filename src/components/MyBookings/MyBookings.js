import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "./../../hooks/useFirebase";
const MyBookings = () => {
  const { user } = useFirebase();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`https://salty-reaches-02915.herokuapp.com/myOrder/${user?.email}`)
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setBooks(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`https://salty-reaches-02915.herokuapp.com/myOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("deleted");
          const remaining = books.filter((book) => book._id !== id);
          setBooks(remaining);
        }
      });
  };

  return (
    <div className="row container">
      <h1 className="text-start">All Orders</h1>

      {books.map((book) => (
        <div key={book._id}>
          <div className="card">
            <div className="card-body">
              <p>Name: {book?.name}</p>
              <p>Price: ${book?.Price}</p>
              <div>
                <Link to={`/myBookings/${book._id}`}>
                  <button className="btn btn-success">pay</button>
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(book._id)}
                >
                  delete book
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
