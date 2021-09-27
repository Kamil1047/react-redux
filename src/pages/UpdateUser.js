import React, { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { useHistory, useParams } from "react-router-dom";
import { addUser, getSingleUser } from "../redux/actions/constants/action-type";

const UpdateUser = () => {
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
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { name, email } = formState;

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

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
    setError("");
    // }
  };

  return (
    <Fragment>
      <h2>Edit User</h2>
      {/* {error && <h3 style={{ color: "red" }}>{error}</h3>} */}
      <form name="form" onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Name: </label>
            <input
              autoComplete="name"
              name="name"
              type="text"
              value={name}
              onChange={handleTextChange}
              autoFocus
            />
          </div>
          <div>
            <label>Email : </label>
            <input
              autoComplete="email"
              name="email"
              value={email}
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
          <Button type="submit">Submit</Button>
          <Button onClick={() => history.push("/")}>Cancel</Button>
        </div>
      </form>
    </Fragment>
  );
};

export default UpdateUser;
