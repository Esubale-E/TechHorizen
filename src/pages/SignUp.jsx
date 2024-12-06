import { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div style={styles.background}>
      <div style={styles.card}>
        <h2 style={styles.header}>Create Your Account</h2>
        <p style={styles.subHeader}>Join us and start your journey!</p>
        <form style={styles.form} onSubmit={handleSignUp}>
          {/* Name Field */}
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="name">
              Name
            </label>
            <input
              style={styles.input}
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {/* Email Field */}
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
          {/* Password Field */}
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
          {/* Confirm Password Field */}
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              style={styles.input}
              type="password"
              id="confirmPassword"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {/* Submit Button */}
          <button style={styles.button} type="submit">
            Sign Up
          </button>
        </form>
        <p style={styles.signup}>
          Already have an account?{" "}
          <Link to="/signin" style={styles.link}>
            Sign In
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
    background: "linear-gradient(135deg, #6a11cb, #2575fc)", // Updated to Sign-In gradient
    fontFamily: "'Roboto', sans-serif",
  },
  card: {
    width: "400px",
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
  button: {
    padding: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)", // Updated to Sign-In gradient
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  signup: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#2575fc", // Matches the Sign-In link color
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
};

export default SignUp;
