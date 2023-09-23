import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./InputSearch.scss";

export default function InputSearch() {
  return (
    <div className="input-search5">
        <div>

      <input type="text" placeholder="Buscar..." />
      <button className="inputsearch-icon5" >
        <SearchRoundedIcon  className="icons-searchinput5" />
      </button>
        </div>
    </div>
  );
}
