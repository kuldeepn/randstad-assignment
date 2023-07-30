import "./Header.css";

const Header = (props) => {
  return (
    <nav>
      <ul>
        <li className="logo">Logo</li>
        <li className="search-bar">
          <input type="search" placeholder="Search"></input>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
