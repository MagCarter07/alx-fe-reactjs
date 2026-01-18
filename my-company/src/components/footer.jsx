function Footer() {
  return (
    <footer
      style={{
        marginTop: "40px",
        padding: "15px",
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
