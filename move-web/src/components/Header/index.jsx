import "./Header.css";

const Header = (props) => {
  const pages = [
    { title: "Sobre Nós" },
    { title: "Ajuda" },
  ];

  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="header-logo">
          <img src="./logo.jpg" alt="Logo" className="logo" />
          <p>MOVE</p>
        </div>
        <div className="header-links">
          <ul className="header-list">
            {pages.map((page) => {
              return (
                <li key={page.title} className="header-item">
                  <p>{page.title}</p>
                </li>
              );
            })}
            <li className="header-item">
              <input type="button" value="Login" className="login-button" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
