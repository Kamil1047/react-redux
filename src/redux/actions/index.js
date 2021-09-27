import * as type from "./constants/action-type";
import axios from "axios";

export const getUsers = (users) => ({
  type: type.getUsers,
  payload: users,
});

export const userAdded = (user) => ({
  type: type.addUser,
  payload: user,
});

export const userDeleted = () => ({
  type: type.deleteUser,
});

export const getUser = (user) => ({
  type: type.getSingleUser,
  payload: user,
});

export const loadUsers = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/users`)
      .then((response) => {
        console.log("response", response);
        dispatch(getUsers(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then((response) => {
        console.log("response delete", response);
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const addUser = (user) => {
  console.log(user);
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/users`, user)
      .then((response) => {
        console.log("response add", response);
        dispatch(userAdded(user));
        // dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const getSingleUser = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((response) => {
        console.log("response single", response);
        dispatch(getUser(response.data));
      })
      .catch((error) => console.log(error));
  };
};
