import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={styles.header}>
      <strong style={styles.logo}>Cards</strong>

      <nav style={styles.nav}>
        <NavLink to="/" end style={navStyle}>
          Home
        </NavLink>

        <NavLink to="/cards" end style={navStyle}>
          Cards
        </NavLink>

        <NavLink to="/cards/new" style={navStylePrimary}>
          + Add Card
        </NavLink>
      </nav>
    </header>
  );
}

function navStyle({ isActive }) {
  return {
    ...styles.link,
    ...(isActive ? styles.activeLink : {}),
  };
}

function navStylePrimary({ isActive }) {
  return {
    ...styles.primaryLink,
    ...(isActive ? styles.primaryActive : {}),
  };
}
const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 36px",
    background: "rgba(255,255,255,0.65)",
    backdropFilter: "blur(14px)",
    borderRadius: "0 0 28px 28px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: "22px",
    fontWeight: "700",
    letterSpacing: "0.5px",
  },
  nav: {
    display: "flex",
    gap: "18px",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "#666",
    fontSize: "15px",
    padding: "8px 14px",
    borderRadius: "16px",
    transition: "all 0.25s ease",
  },
  activeLink: {
    background: "#ecebff",
    color: "#5a4fcf",
    fontWeight: "600",
  },
  primaryLink: {
    textDecoration: "none",
    fontSize: "15px",
    padding: "10px 18px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    color: "#fff",
    fontWeight: "600",
    boxShadow: "0 10px 25px rgba(161,140,209,0.35)",
  },
  primaryActive: {
    boxShadow: "0 14px 30px rgba(161,140,209,0.5)",
  },
};
