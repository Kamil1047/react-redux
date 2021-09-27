import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { addUser } from "../redux/actions/constants/action-type";

const AddUser = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    country: "",
    password: "",
  });

  const [error, setError] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const { name, email } = formState;

  const handleTextChange = (event) => {
    let { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    // if (name !== "" || email !== "" || ) {
    //   setError("Please input all input field.");
    // } else {
    dispatch(addUser(formState));
    history.push("/");
    // setError("");
    // }
  };

  return (
    <Fragment>
      <h2>Add User</h2>
      {/* {error && <h3 style={{ color: "red" }}>{error}</h3>} */}
      <form name="form" onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Name: </label>
            <input
              autoComplete="name"
              name="name"
              type="text"
              onChange={handleTextChange}
              autoFocus
            />
          </div>
          <div>
            <label>Email : </label>
            <input
              autoComplete="off"
              name="email"
              type="email"
              onChange={handleTextChange}
            />
          </div>
          {/* <div>
            <label>Phone : </label>
            <input
              autoComplete="phone"
              name="phone"
              value={phone}
              type="number"
              onChange={handleTextChange}
            />
          </div>
          <div>
            <label>Age : </label>
            <input
              autoComplete="age"
              name="age"
              value={age}
              type="number"
              onChange={handleTextChange}
            />
          </div>
          <div name="gender" autoComplete="gender" onChange={handleTextChange}>
            <label>Gender : </label>
            <input type="radio" name="gender" value="Male" />
            <label>Male</label>
            <input type="radio" name="gender" value="Female" />
            <label>Female</label>
          </div>

          <div
            name="country"
            autoComplete="country"
            onChange={handleTextChange}
          >
            <label>Country: </label>
            <select id="country" selected={country} name="country">
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="London">London</option>
            </select>
          </div>
          <div>
            <label>Password: </label>
            <input
              name="password"
              autoComplete="password"
              type="password"
              onChange={handleTextChange}
            />
          </div> */}
          <Button
            type="submit"
            style={{ marginRight: "10px", marginTop: "10px" }}
          >
            Submit
          </Button>
          <Button
            style={{ marginTop: "10px" }}
            onClick={() => history.push("/")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default AddUser;
