import { useState } from "react";
import { Link } from "react-router-dom";
import Character from "../components/characters/Character";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import styles from "../styles/auth.module.css";

export default function ForgotPassword() {
  const [reaction, setReaction] = useState("idle");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setReaction("submit");
    setSent(true);
  };

  return (
    <div className={styles.container}>
      {/* --- LADO ESQUERDO (BONECO) --- */}
      <div className={styles.artSide}>
        <div style={{ position: 'relative', width: '250px', height: '350px', marginBottom: '0px' }}>
          <Character reaction={reaction} color="#f59e0b" variant="cylinder" />
        </div>
      </div>

      {/* --- LADO DIREITO (FORM) --- */}
      <div className={styles.formSide}>
        <div className={styles.formContent}>
          <h2>Reset Password</h2>
          <p>Don't worry, we'll help!</p>

          {!sent ? (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  onFocus={() => setReaction("typing")}
                  onBlur={() => setReaction("idle")}
                  onChange={() => setReaction("typing")}
                  required
                />
              </div>

              <div onMouseEnter={() => setReaction("submit")} onMouseLeave={() => setReaction("idle")}>
                <Button type="submit">Send Reset Link</Button>
              </div>

              <div className={styles.signupLink}>
                <Link to="/">Back to Sign In</Link>
              </div>
            </form>
          ) : (
            <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <div style={{
                width: "60px",
                height: "60px",
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                fontSize: "32px",
                boxShadow: "0 4px 15px rgba(16, 185, 129, 0.3)"
              }}>
                ✓
              </div>
              <h3 style={{ color: "var(--text-main)", marginBottom: "10px", fontSize: "1.3rem", fontWeight: "600" }}>
                Email Sent!
              </h3>
              <p style={{ marginBottom: "30px", color: "var(--text-muted)", lineHeight: "1.6" }}>
                Check your inbox and click the link to reset your password.
              </p>
              <Link to="/" style={{ 
                display: "inline-block",
                padding: "12px 24px",
                background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(79, 70, 229, 0.3)"
              }}>
                Back to Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}