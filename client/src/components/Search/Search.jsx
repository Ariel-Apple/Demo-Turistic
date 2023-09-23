import * as React from "react";
import Drawer from "@mui/material/Drawer";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./Search.scss";
import FilterCard from "../FilterCard/FilterCard";
import InputSearch from "../InputSearch/InputSearch";

export default function SearchMobile() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="search-container">
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="search-button">
            <button
              onClick={toggleDrawer(anchor, true)}
              sx={{}}
              className="btn-search"
            >
              Buscar por... <span className="linea">|</span>
            </button>
            <div className="input-container">
              <input type="text" placeholder="Buscar..." />
              <button>
                <SearchRoundedIcon />
              </button>
            </div>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <h3
              className="x-search"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              &times;
            </h3>
            <div>
              <InputSearch />
            </div>
            <div>
            
              <FilterCard />
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
