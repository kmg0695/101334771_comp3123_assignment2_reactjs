import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";

export default function View() {
  return (
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
  );
}
