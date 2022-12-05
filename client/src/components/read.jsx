/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";

export default function Read() {
  const cancelToken = axios.CancelToken.source();
  const [API, setAPIData] = useState([]);

  const getData = () => {
    cancelToken.cancel();
    axios.get(`http://20.2.128.239:8001/api/emp/employees`).then((res) => {
      setAPIData(res.data);
    });
  };

  const setData = (empData) => {
    const { _id, first_name, last_name, email, gender, salary } = empData;
    sessionStorage.setItem("ID", _id);
    sessionStorage.setItem("First Name", first_name);
    sessionStorage.setItem("Last Name", last_name);
    sessionStorage.setItem("Email Address", email);
    sessionStorage.setItem("Gender", gender);
    sessionStorage.setItem("Salary", salary);
  };

  const onDelete = (id) => {
    cancelToken.cancel();
    axios
      .delete(`http://20.2.128.239:8001/api/emp/employees/${id}`)
      .then(() => {
        getData();
      });
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email Address</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>Salary</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {API.map((employee) => (
          // eslint-disable-next-line no-underscore-dangle
          <Table.Body>
            <Table.Row>
              <Table.Cell>{employee.first_name}</Table.Cell>
              <Table.Cell>{employee.last_name}</Table.Cell>
              <Table.Cell>{employee.email}</Table.Cell>
              <Table.Cell>{employee.gender}</Table.Cell>
              <Table.Cell>{employee.salary}</Table.Cell>
              <Link to="/view">
                <Table.Cell>
                  <Button color="blue" onClick={() => setData(employee)}>
                    View
                  </Button>
                </Table.Cell>
              </Link>
              <Link to="/update">
                <Table.Cell>
                  <Button color="yellow" onClick={() => setData(employee)}>
                    Update
                  </Button>
                </Table.Cell>
              </Link>
              <Button
                color="red"
                // eslint-disable-next-line dot-notation
                onClick={() => onDelete(employee._id)}
              >
                Delete
              </Button>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
      <Link to="/create">Add an Employee</Link>
      <Link to="/">Logout</Link>
    </>
  );
}
