import { useState } from "react";
import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import Other from "./Other.js";
function App() {
  const [user, setuser] = useState({
    Name: "",
    Email: "",
    phone: "",
    Address: "",
  });
  const [data, setdata] = useState([]);
  const [sh, setsh] = useState(false);
  const abc = (e) => {
    const name1 = e.target.name;
    const value = e.target.value;

    setuser({ ...user, [name1]: value });
  };
  const xyz = (e) => {
    e.preventDefault();
    const newRecord = { ...user, id: new Date().getTime().toString() };
    setdata([...data, newRecord]);
    setuser({
      Name: "",
      Email: "",
      phone: "",
      Address: "",
    });
  };
  const show = () => {
    setsh(!sh);
  };

  return (
    <div className="App">
      <h1>Fitness Club Registeration</h1>

      <div className="form1">
        <form action="" onSubmit={xyz}>
          <div>
            <input
              className="pq"
              type="text"
              placeholder="Name"
              value={user.Name}
              onChange={abc}
              name="Name"
            />
          </div>
          <div>
            <input
              className="pq"
              type="text"
              placeholder="Email"
              value={user.Email}
              onChange={abc}
              name="Email"
            />
          </div>
          <div>
            <input
              className="pq"
              type="text"
              placeholder="Phone Number"
              value={user.phone}
              onChange={abc}
              name="phone"
            />
          </div>
          <div>
            <input
              className="pq"
              type="text"
              placeholder="Address"
              value={user.Address}
              onChange={abc}
              name="Address"
            />
          </div>
          <button type="submit">Add member</button>
        </form>
      </div>
      <div className="down">
        <button onClick={show} className="but2">
          View Member List
        </button>
        <div className="header">
          <span>Name</span>
          <span>Email</span>
          <span>Phone No</span>
          <span>Address</span>
        </div>
        {sh ? (
          data.map((da) => {
            return (
              <div className="header" key={da.id}>
                <span>{da.Name}</span>
                <span>{da.Email}</span>
                <span>{da.phone}</span>
                <span>{da.Address}</span>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
