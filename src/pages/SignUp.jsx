import { useState } from "react";
import { Link } from "react-router-dom";
import Character from "../components/characters/Character";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import styles from "../styles/auth.module.css";

export default function SignUp() {
  const [reaction, setReaction] = useState("idle");
  const [showPassword, setShowPassword] = useState(false);
  const [tilted, setTilted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
    setReaction("closed");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validação: se algum campo está vazio
    if (!fullName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setReaction("surprise");
      setTilted(true);
      setErrorMessage("Please fill in all fields");
      setTimeout(() => {
        setReaction("idle");
        setTilted(false);
        setErrorMessage("");
      }, 3000);
      return;
    }
    // Se validou, faz submit
    setReaction("submit");
  };

  return (
    <div className={styles.container}>
      {/* --- LADO ESQUERDO (BONECO) --- */}
      <div className={styles.artSide}>
        <div style={{ position: 'relative', width: '250px', height: '350px', marginBottom: '0px' }}>
          <Character reaction={reaction} color="#10b981" variant="semicircle" tilted={tilted} />
        </div>
      </div>

      {/* --- LADO DIREITO (FORM) --- */}
      <div className={styles.formSide}>
        <div className={styles.formContent}>
          <h2>Create Account</h2>
          <p>Join us now!</p>

          {errorMessage && (
            <div className={styles.errorMessage}>
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <Input
                type="text"
                placeholder="Your Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onFocus={() => setReaction("typing")}
                onBlur={() => setReaction("idle")}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Email</label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setReaction("typing")}
                onBlur={() => setReaction("idle")}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isPassword={true}
                showPassword={showPassword}
                onTogglePassword={handleTogglePassword}
                onFocus={() => setReaction("closed")}
                onBlur={() => setReaction("idle")}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Confirm Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                isPassword={true}
                showPassword={showPassword}
                onTogglePassword={handleTogglePassword}
                onFocus={() => setReaction("closed")}
                onBlur={() => setReaction("idle")}
              />
            </div>

            <div onMouseEnter={() => setReaction("submit")} onMouseLeave={() => setReaction("idle")}>
              <Button type="submit">Sign Up</Button>
            </div>

            <div className={styles.signupLink}>
              Already have an account? <Link to="/">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}