/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
// import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmail] = useState("");
  const [empGender, setGender] = useState("");
  const [empSalary, setSalary] = useState(0);
  const [id, setID] = useState("");

  const updateData = () => {
    const updateEmp = {
      first_name: firstName,
      last_name: lastName,
      email: emailAddress,
      gender: empGender,
      salary: empSalary,
    };
    axios
      .put(`httpp://20.2.128.239:8001/api/emp/employees/${id}`, updateEmp)
      .then(() => {
        navigate("/read");
      });
  };

  useEffect(() => {
    setID(sessionStorage.getItem("ID"));
    setFirstName(sessionStorage.getItem("First Name"));
    setLastName(sessionStorage.getItem("Last Name"));
    setEmail(sessionStorage.getItem("Email Address"));
    setGender(sessionStorage.getItem("Gender"));
    setSalary(sessionStorage.getItem("Salary"));
  }, []);

  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          inputMode="text"
          required
          value={firstName}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          inputMode="text"
          required
          value={lastName}
        />
      </Form.Field>
      <Form.Field>
        <label>Email Address</label>
        <input
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          inputMode="email"
          required
          value={emailAddress}
        />
      </Form.Field>
      <Form.Field>
        <label>Gender</label>
        <select
          required
          onChange={(e) => setGender(e.target.value)}
          value={empGender}
        >
          <option disabled selected>
            Select gender here
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </Form.Field>
      <Form.Field>
        <label>Salary</label>
        <input
          placeholder="Salary"
          onChange={(e) => setSalary(parseFloat(e.target.value))}
          inputMode="numeric"
          value={empSalary}
        />
      </Form.Field>
      <Button type="submit" onClick={updateData}>
        Submit
      </Button>
    </Form>
  );
}
