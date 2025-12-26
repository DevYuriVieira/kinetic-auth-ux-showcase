import { useState } from "react";
import { Link } from "react-router-dom";
import Character from "../components/characters/Character";
import styles from "../styles/auth.module.css";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import ThemeToggle from "../components/ui/ThemeToggle";

export default function SignIn() {
  const [reaction, setReaction] = useState("idle");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tilted, setTilted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
    setReaction("closed");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
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
      
      <div className={styles.floatingToggle}>
        <ThemeToggle />
      </div>

      <div className={styles.artSide}>
        <div className={styles.scene}>
          
          {/* 1. AZUL */}
          <div style={{ position: 'absolute', bottom: '300px', left: '30px', zIndex: 1 }}>
            <Character reaction={reaction} color="#4f46e5" variant="rectangle" tilted={tilted} />
          </div>

          {/* 2. VERMELHO */}
          <div style={{ position: 'absolute', bottom: '210px', left: '170px', zIndex: 2 }}>
            <Character reaction={reaction} color="#ff0505ff" variant="box" tilted={tilted} />
          </div>

          {/* 3. LARANJA */}
          <div style={{ position: 'absolute', bottom: '100px', left: '50px', zIndex: 3 }}>
            <Character reaction={reaction} color="#f97316" variant="semicircle" tilted={tilted} />
          </div>

          {/* 4. AMARELO */}
          <div style={{ position: 'absolute', bottom: '150px', left: '220px', zIndex: 4 }}>
            <Character reaction={reaction} color="#facc15" variant="cylinder" tilted={tilted} />
          </div>

        </div>
      </div>

      <div className={styles.formSide}>
        <div className={styles.formContent}>
          <h2>Welcome back!</h2>
          <p>Please enter your details</p>
          
          {errorMessage && (
            <div className={styles.errorMessage}>
              {errorMessage}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            
            <div className={styles.inputGroup}
                 onMouseEnter={() => reaction !== 'typing' && reaction !== 'side' && setReaction("typing")}
                 onMouseLeave={() => reaction === 'typing' && setReaction("idle")}>
              <label>Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
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
                onMouseEnter={() => setReaction("side")}
                onMouseLeave={() => setReaction("idle")}
                onFocus={() => setReaction("closed")}
                onBlur={() => setReaction("idle")}
              />
            </div>

            <div className={styles.actions}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}>
                <input type="checkbox" /> Remember for 30 days
              </label>
              <Link to="/forgot" style={{ color: '#6b7280', textDecoration: 'none' }}>Forgot password?</Link>
            </div>

            <div onMouseEnter={() => setReaction("submit")} onMouseLeave={() => setReaction("idle")}>
              <Button type="submit">Log in</Button>
            </div>

            <div className={styles.signupLink}>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
