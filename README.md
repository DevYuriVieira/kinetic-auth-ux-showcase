# Interactive Authentication UI

<div align="center">

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React%20Router-7.11.0-F44250?style=flat-square&logo=react-router)](https://reactrouter.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

A cutting-edge, interactive authentication interface featuring animated characters that respond to user interactions with expressive eye tracking, dynamic mouth animations, and gesture-based feedback. Built with modern React, CSS Modules, and a focus on exceptional UX/DX.

[Live Demo](#) • [Features](#-features) • [Architecture](#-architecture) • [Getting Started](#-getting-started)

</div>

---

## 📸 Live Demo

![UXWebsite Demo](./assets/LiveDemo.png)

---

## 🎯 Overview

**UXWebsite** is a sophisticated React-based authentication system that combines functional form validation with playful, interactive character animations. The project demonstrates advanced React patterns, state management, CSS animations, and responsive design principles—perfect for understanding modern frontend architecture.

### Key Highlights
- 🎭 **4 Animated Characters** with state-driven expressions and gestures
- 👀 **Mouse-tracking eye system** with real-time pupil positioning
- 🎨 **Dark/Light Theme Toggle** with CSS Variables and persistence
- 📱 **Fully Responsive Design** (mobile-first, tested down to 320px)
- ✅ **Form Validation** with real-time character feedback
- 🚀 **SPA Navigation** using React Router v7
- ⚡ **Performance Optimized** with Vite bundling and CSS Modules

---

## ✨ Features

### Interactive Character System
Each character responds dynamically to user interactions:

| Reaction | Visual State | Trigger |
|----------|--------------|---------|
| **idle** | Eyes tracking mouse, neutral mouth | Default state, blur events |
| **typing** | Eyes tracking, typing mouth (circle) | Text field focus/input |
| **closed** | Eyes closed (8px bar), closed mouth | Password field input |
| **side** | Eyes shifted left (-8px), scared mouth (diagonal) | Password field mouse hover |
| **surprise** | Large white eyes (36px), open mouth (circle) | Form validation failure |
| **submit** | Happy eyes (white with small pupils), smiling mouth | Form submission success |

### Character Variants
- **Rectangle (Blue)** - 140×300px, positioned back-left
- **Box (Red)** - 90×180px, positioned back-center
- **Semicircle (Orange)** - 170×100px, positioned front-left
- **Cylinder (Yellow)** - 100×150px, positioned front-right

### Authentication Pages
1. **SignIn** (`/`) - Email + Password login with 4-character ensemble
2. **SignUp** (`/signup`) - Full registration with name, email, and password confirmation
3. **ForgotPassword** (`/forgot`) - Email-based password recovery with success state

### Responsive Design
```
Desktop    (1024px+) → Full layout with side-by-side split
Tablet     (768px)   → Adjusted spacing, scaled characters (-20%)
Mobile     (480px)   → Stacked layout, scaled characters (-40%)
Tiny       (320px)   → Minimal sizing, optimized touch targets
```

---

## 🏗️ Architecture

### Project Structure
```
src/
├── components/
│   ├── characters/
│   │   ├── Character.jsx        # Main character container, reaction state handler
│   │   ├── Eye.jsx              # Eye component with mouse tracking logic
│   │   └── character.module.css # Character shapes, mouth animations, responsiveness
│   └── ui/
│       ├── Button.jsx           # Reusable button component
│       ├── Input.jsx            # Input with password toggle functionality
│       ├── ThemeToggle.jsx       # Dark/light mode switcher
│       └── ui.module.css        # UI component styling with responsive scaling
├── context/
│   └── ThemeContext.jsx         # Theme provider (dark/light) with localStorage
├── pages/
│   ├── SignIn.jsx               # Login page with validation and 4 characters
│   ├── SignUp.jsx               # Registration page with form fields
│   └── ForgotPassword.jsx        # Password reset flow with confirmation state
├── styles/
│   ├── auth.module.css          # Authentication pages layout, form styling, media queries
│   └── global.css               # Theme variables, eye animations, global styles
├── App.jsx                      # Router configuration, main entry
└── main.jsx                     # React DOM mount point
```

### Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend Framework** | React 19.2.0 | Component-based UI |
| **Routing** | React Router 7.11.0 | Client-side navigation |
| **Build Tool** | Vite 7.2.4 | Fast ES module bundling |
| **Styling** | CSS Modules + CSS Variables | Scoped styles, theme management |
| **State Management** | React Hooks (useState) | Local component state |
| **Linting** | ESLint 9.39.1 | Code quality |

---

## 🎨 Design System

### Color Palette
```css
/* Light Mode (Default) */
--bg-page: #f3f4f6        /* Background */
--bg-panel: #ffffff       /* Form panels */
--text-main: #1f2937      /* Primary text */
--text-muted: #6b7280     /* Secondary text */
--input-border: #e5e7eb   /* Input borders */

/* Dark Mode */
--bg-page: #0f1419        /* Background */
--bg-panel: #1a2332       /* Form panels */
--text-main: #e5e7eb      /* Primary text */
--text-muted: #9ca3af     /* Secondary text */
--input-border: #374151   /* Input borders */
```

### Character Design
- **Shapes**: Simple geometric forms (rectangle, box, semicircle, cylinder)
- **Eyes**: 30px circles with 10px pupils, smooth tracking animation
- **Mouth**: Context-sensitive animations (20 states across all animations)
- **Shadows**: Subtle drop-shadow for depth perception

### Animation Specifications
```css
/* Eye Tracking */
.pupil { 
  transform: translate(${Math.cos(angle) * 5}px, ${Math.sin(angle) * 5}px);
  /* Uses real-time angle calculation from mouse position */
}

/* Mouth Transitions */
transition: all 0.2s ease-in-out;

/* Tilt Animation (Validation Failure) */
@keyframes tilt-shake {
  0%, 100% { transform: rotate(-5deg); }
  25% { transform: rotate(-8deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(-2deg); }
}
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18.x
- **npm** ≥ 9.x or **yarn** ≥ 3.x

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd UXwebsite

# Install dependencies
npm install

# Start development server
npm run dev
```

Development server runs at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Fix linting issues automatically
npm run lint -- --fix
```

---

## 📋 Component API

### Character Component

```jsx
<Character 
  reaction="idle|typing|closed|side|surprise|submit"  // Current reaction state
  color="#4f46e5"                                      // Hex color
  variant="rectangle|box|semicircle|cylinder"          // Shape variant
  tilted={false}                                       // Enable tilt animation
/>
```

**Reaction States:**
- `idle`: Default, eyes track mouse
- `typing`: Eyes track, typing mouth
- `closed`: Eyes closed, closed mouth (password input)
- `side`: Eyes left, scared mouth (password hover)
- `surprise`: Large eyes, open mouth (validation error)
- `submit`: Happy eyes, smiling mouth (form success)

### Input Component

```jsx
<Input
  type="text|email|password"                    // Input type
  placeholder="Enter..."                        // Placeholder text
  isPassword={false}                            // Enable password toggle
  showPassword={false}                          // Show/hide password text
  onTogglePassword={() => {}}                   // Password toggle handler
  value=""                                      // Controlled input value
  onChange={(e) => {}}                          // Change handler
  onFocus={() => {}}                            // Focus handler
  onBlur={() => {}}                             // Blur handler
/>
```

**Features:**
- Conditional eye/lock icon for password fields
- Smooth icon hover animations
- Touch-friendly click area (42px right padding)
- iOS zoom prevention (16px base font-size)

### Button Component

```jsx
<Button 
  type="submit|button|reset"
  onClick={() => {}}
>
  Click me
</Button>
```

**Styling:**
- 12px padding, 8px border-radius
- Indigo primary (#4f46e5)
- Hover scale(1.05) with smooth transition
- Active scale(0.95)

### ThemeToggle Component

```jsx
<ThemeToggle />
```

**Behavior:**
- Floating position (top: 25px, right: 25px)
- Toggles `.dark` class on root element
- Persists preference (can be extended to localStorage)

---

## 🔧 State Management

### Form State Pattern

```jsx
// SignIn.jsx
const [reaction, setReaction] = useState("idle");
const [showPassword, setShowPassword] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [tilted, setTilted] = useState(false);
const [errorMessage, setErrorMessage] = useState("");
```

### Validation Logic

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  
  if (!email.trim() || !password.trim()) {
    // Validation failed
    setReaction("surprise");
    setTilted(true);
    setErrorMessage("Please fill in all fields");
    
    // Auto-reset after 3 seconds
    setTimeout(() => {
      setReaction("idle");
      setTilted(false);
      setErrorMessage("");
    }, 3000);
    return;
  }
  
  // Validation passed
  setReaction("submit");
};
```

---

## 🎯 Event Handlers

### Password Field Interactions
```jsx
// On typing in password field
onChange={() => setReaction("closed")}     // Eyes close

// On mouse enter (SignIn only)
onMouseEnter={() => setReaction("side")}   // Eyes shift left

// On toggle click
onTogglePassword={() => {
  setShowPassword(!showPassword);
  setReaction("closed");                   // Eyes close briefly
}}
```

### Button Interactions
```jsx
// On mouse enter
onMouseEnter={() => setReaction("submit")}  // Happy face

// On mouse leave
onMouseLeave={() => setReaction("idle")}    // Back to normal
```

---

## 📱 Responsive Design Details

### Layout Breakpoints

**Desktop (1024px+)**
- Split-screen: 50% artSide | 50% formSide
- Full character sizes
- Eye size: 30px

**Tablet (768px)**
```css
.container { flex-direction: column; }
.scene > div { transform: translateY(40px); }
.character (all variants) { scale: 0.75; }
.eye { width: 24px; height: 24px; }
```

**Mobile (480px)**
```css
.scene > div { transform: translateY(60px); }
.character (all variants) { scale: 0.5; }
.eye { width: 20px; height: 20px; }
.input { font-size: 16px; } /* iOS zoom prevention */
```

**Tiny Phones (320px)**
```css
.character (all variants) { scale: 0.4; }
.input { font-size: 14px; }
```

### Touch Optimizations
- Button padding: 12px (minimum 44×44px touch target)
- Input height: 44px
- Eye toggle: 42px right padding for easier clicking
- Dark mode for reduced eye strain on mobile

---

## 🔐 Security Considerations

### Current Implementation
- Client-side validation only (frontend UX feedback)
- Password fields use HTML `type="password"` when not toggled
- No actual backend integration (demo/prototype)

### Production Recommendations
1. **Server-side validation** - Never trust client-side validation alone
2. **HTTPS only** - Encrypt data in transit
3. **Password hashing** - Use bcrypt or similar on backend
4. **Rate limiting** - Prevent brute force attacks
5. **CSRF protection** - Add token-based CSRF prevention
6. **Input sanitization** - Sanitize all inputs before processing
7. **CORS headers** - Restrict API access appropriately

---

## 🧪 Testing Scenarios

### Manual Testing Checklist

**Authentication Flow:**
- [ ] Submit empty form → Surprise animation triggers for 3s
- [ ] Fill email only → Error on submit
- [ ] Fill password only → Error on submit
- [ ] Fill both → Success animation
- [ ] Toggle password → Eyes briefly close

**Character Animations:**
- [ ] Hover password field (SignIn) → Eyes shift left
- [ ] Type in password field → Eyes close
- [ ] Hover submit button → Happy face
- [ ] Leave form area → Idle state

**Responsive Design:**
- [ ] Desktop view → 4 characters visible (SignIn)
- [ ] Tablet (768px) → Characters scaled, positioned lower
- [ ] Mobile (480px) → Stacked layout, further scaled
- [ ] Tiny (320px) → Minimal sizing, readable text

**Theme Toggle:**
- [ ] Click theme icon → Colors invert smoothly
- [ ] Light mode → Light backgrounds, dark text
- [ ] Dark mode → Dark backgrounds, light text
- [ ] Preference persists → (can extend with localStorage)

**Navigation:**
- [ ] SignIn → SignUp → Works
- [ ] SignUp → SignIn → Works
- [ ] SignIn → ForgotPassword → Works
- [ ] Direct URL access → Page loads correctly

---

## 🚨 Known Limitations

1. **No Backend Integration** - Form submissions don't persist data
2. **No Email Validation** - Basic required-field checks only
3. **No Password Strength Meter** - Could enhance with Zxcvbn
4. **Theme Persistence** - Currently not saved to localStorage
5. **No Accessibility Focus Management** - Could improve keyboard navigation
6. **No Error Boundary** - Could add React Error Boundary
7. **No Loading States** - No async operation feedback

---

## 🎓 Learning Resources

### Key Concepts Demonstrated

**React Patterns:**
- Functional components with hooks
- Controlled form inputs
- Event handler delegation
- Conditional rendering
- Component composition
- State lifting

**Advanced Techniques:**
- Mouse position tracking (real-time angle calculation)
- CSS-in-JS with Modules
- Theme switching with CSS Variables
- Responsive design with media queries
- Animation timing with setTimeout
- Dynamic className management

**Best Practices:**
- Single Responsibility Principle (small components)
- DRY (reusable Input/Button components)
- Semantic HTML structure
- Accessible button/form elements
- Mobile-first design approach
- Performance optimization (Vite)

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Use ESLint configuration provided
- Follow React best practices (hooks over class components)
- Use CSS Modules for scoped styling
- Keep components small and focused
- Add descriptive comments for complex logic

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Feedback

- 🐛 **Bug Reports**: Open an issue with detailed reproduction steps
- 💡 **Feature Requests**: Suggest enhancements with use cases
- 📧 **Questions**: Check existing issues before asking

---

## 🙏 Acknowledgments

- Inspired by modern UX design principles
- Built with React, Vite, and modern web standards
- Character animation concepts from playful UI design

---

<div align="center">

**Made with ❤️ by Yuri Vieira**

⭐ If you find this project helpful, please give it a star!

</div>

---

## 📚 Additional Resources

### React Documentation
- [React Hooks API](https://react.dev/reference/react/hooks)
- [React Router Documentation](https://reactrouter.com)
- [Controlled Components](https://react.dev/learn/forms)

### CSS & Animation
- [CSS Variables (Custom Properties)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Web Animations Performance](https://web.dev/animations-guide/)

### Performance & Build
- [Vite Documentation](https://vitejs.dev/guide/)
- [Web Vitals](https://web.dev/vitals/)
- [Bundle Analysis](https://vitejs.dev/guide/build.html)

### Accessibility
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Testing Accessibility](https://www.a11ybites.dev/)

---

**Last Updated:** December 2025 
**Version:** 1.0.0  

