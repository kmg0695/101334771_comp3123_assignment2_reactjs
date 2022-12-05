/* eslint-disable no-unused-vars */
import { Button, Form, Text } from "semantic-ui-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Auth() {
  const history = useNavigate();
  const [uname, setUsername] = useState("");
  const [pword, setPassword] = useState("");
  const [userEmail, setEmail] = useState("");
  const [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const login = () => {
    const creds = {
      username: uname,
      password: pword,
    };
    axios.post("http://20.2.128.239:8001/api/user/login", creds).then((res) => {
      if (res.status === 200) {
        history("/read");
      }
    });
  };

  const signup = () => {
    const creds = {
      email: userEmail,
      username: uname,
      password: pword,
    };
    axios.post("http://20.2.128.239:8001/api/user/signup", creds).then(() => {
      changeAuthMode();
    });
  };

  if (authMode === "signin") {
    return (
      <Form className="create-form" widths="equal">
        <Form.Field>
          <input
            placeholder="Username"
            inputMode="text"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <input
            placeholder="Password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={login}>
          Submit
        </Button>
        <Button onClick={changeAuthMode}>Sign Up?</Button>
      </Form>
    );
  }
  return (
    <Form className="create-form" widths="equal">
      <Form.Field>
        <input
          placeholder="Email Address"
          inputMode="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <input
          placeholder="Username"
          inputMode="text"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <input
          placeholder="Password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Field>
      <Button type="submit" onClick={signup}>
        Submit
      </Button>
      <Button onClick={changeAuthMode}>Login?</Button>
    </Form>
  );
}
