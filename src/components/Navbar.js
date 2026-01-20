import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={styles.header}>
      <strong style={styles.logo}>Card App</strong>

      <nav style={styles.nav}>
        <NavLink
          to="/"
          end
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/cards"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          All Cards
        </NavLink>

        <NavLink
          to="/cards/new"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Add Card
        </NavLink>
      </nav>
    </header>
  );
}
const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 28px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #eaeaea",
    boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
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
    gap: "22px",
  },
  link: {
    textDecoration: "none",
    color: "#666",
    fontSize: "15px",
    padding: "6px 10px",
    borderRadius: "6px",
    transition: "all 0.2s ease",
  },
  activeLink: {
    textDecoration: "none",
    color: "#ffffff",
    backgroundColor: "#2a743b",
    fontSize: "15px",
    padding: "6px 12px",
    borderRadius: "6px",
    fontWeight: "600",
  },
};

