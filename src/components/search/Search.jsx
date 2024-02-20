import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.css";
import { fas } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className="input">
      <input type="text" placeholder="Search for product, brand and more..." />
      <FontAwesomeIcon icon={fas.faMagnifyingGlass} />
    </div>
  );
}

export default Search;
