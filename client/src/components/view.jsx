import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";

export default function View() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmail] = useState("");
  const [empGender, setGender] = useState("");
  const [empSalary, setSalary] = useState(0);

  useEffect(() => {
    setFirstName(sessionStorage.getItem("First Name"));
    setLastName(sessionStorage.getItem("Last Name"));
    setEmail(sessionStorage.getItem("Email Address"));
    setGender(sessionStorage.getItem("Gender"));
    setSalary(sessionStorage.getItem("Salary"));
  }, []);

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

      <Table.Body>
        <Table.Row>
          <Table.Cell>{firstName}</Table.Cell>
          <Table.Cell>{lastName}</Table.Cell>
          <Table.Cell>{emailAddress}</Table.Cell>
          <Table.Cell>{empGender}</Table.Cell>
          <Table.Cell>{empSalary}</Table.Cell>
          <Button
            color="red"
            // eslint-disable-next-line dot-notation
            onClick={() => navigate("/read")}
          >
            Back
          </Button>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
