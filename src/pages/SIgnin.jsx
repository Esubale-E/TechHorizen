import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add sign-in logic here (e.g., API call)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div style={styles.background}>
      <div style={styles.card}>
        <h2 style={styles.header}>Welcome Back</h2>
        <p style={styles.subHeader}>Sign in to continue</p>
        <form style={styles.form} onSubmit={handleSignIn}>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">
              Email
            </label>
            <input
              style={styles.input}
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="password">
              Password
            </label>
            <input
              style={styles.input}
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button style={styles.button} type="submit">
            Sign In
          </button>
          <p style={styles.forgotPassword}>
            <a href="#" style={styles.link}>
              Forgot Password?
            </a>
          </p>
        </form>
        <p style={styles.signup}>
          Don’t have an account?{" "}
          <Link to="/signup" style={styles.link}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  background: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    fontFamily: "'Roboto', sans-serif",
  },
  card: {
    width: "350px",
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    textAlign: "center",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  subHeader: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "14px",
    color: "#555",
    marginBottom: "5px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    outline: "none",
    transition: "border-color 0.2s",
  },
  inputFocus: {
    borderColor: "#2575fc",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  buttonHover: {
    background: "linear-gradient(135deg, #2575fc, #6a11cb)",
  },
  forgotPassword: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#777",
  },
  signup: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#2575fc",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
  linkHover: {
    color: "#6a11cb",
  },
};

export default SignIn;
