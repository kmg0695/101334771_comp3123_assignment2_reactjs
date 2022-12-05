/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import { Button, Form } from "semantic-ui-react";
// import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const redirect = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmail] = useState("");
  const [empGender, setGender] = useState("");
  const [empSalary, setSalary] = useState(0);

  const postData = () => {
    const newEmployee = {
      first_name: firstName,
      last_name: lastName,
      salary: empSalary,
      email: emailAddress,
      gender: empGender,
    };
    axios
      .post("http://localhost:8001/api/emp/employees", newEmployee)
      .then((res) => {
        if (res.status === 201) {
          redirect("/read");
        } else {
          console.log(`Error: ${res.status}`);
        }
      });
  };

  return (
    <Form className="create-form" widths="equal">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          inputMode="text"
          required
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          inputMode="text"
          required
        />
      </Form.Field>
      <Form.Field>
        <label>Email Address</label>
        <input
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          inputMode="email"
          required
        />
      </Form.Field>
      <Form.Field>
        <label>Gender</label>
        <select required onChange={(e) => setGender(e.target.value)}>
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
          onChange={(e) => setSalary(e.target.value)}
          inputMode="numeric"
        />
      </Form.Field>
      <Button type="submit" onClick={postData}>
        Submit
      </Button>
      <Button type="button" onClick={() => redirect("/read")}>
        Back
      </Button>
    </Form>
  );
}
