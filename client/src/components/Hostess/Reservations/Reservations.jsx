import * as React from "react";
import "./Reservations.css";
import Carousel from "react-bootstrap/Carousel";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import { ArrowsAltOutlined } from "@ant-design/icons";
import { DatePicker, Space } from "antd";

const sample = [
  ["Frozen yoghurt", 159, 6.0, 24, 4.0],
  ["Ice cream sandwich", 237, 9.0, 37, 4.3],
  ["Eclair", 262, 16.0, 24, 6.0],
  ["Cupcake", 305, 3.7, 67, 4.3],
  ["Gingerbread", 356, 16.0, 49, 3.9],
];

function createData(id, dessert, calories, fat, carbs, protein) {
  return { id, dessert, calories, fat, carbs, protein };
}

const columns = [
  {
    width: 200,
    label: "Dessert",
    dataKey: "dessert",
  },
  {
    width: 120,
    label: "Calories\u00A0(g)",
    dataKey: "calories",
    numeric: true,
  },
  {
    width: 120,
    label: "Fat\u00A0(g)",
    dataKey: "fat",
    numeric: true,
  },
  {
    width: 120,
    label: "Carbs\u00A0(g)",
    dataKey: "carbs",
    numeric: true,
  },
  {
    width: 120,
    label: "Protein\u00A0(g)",
    dataKey: "protein",
    numeric: true,
  },
];

const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <TableRow>
      <TableCell
        variant="head"
        sx={{
          backgroundColor: "background.paper",
          borderWidth: "0.2rem",
          width: "12rem",
        }}
      >
        <div className="icons-arrow">
          <div>
            <Space direction="vertical">
              <CalendarMonthIcon
                id="icons-clendar-expand"
                onChange={onChange}
              />
            </Space>
          </div>
          <div className="arrow-container">
            <ArrowsAltOutlined id="arrow-icons" />
          </div>
        </div>
      </TableCell>
      <TableCell
        variant="head"
        sx={{
          backgroundColor: "background.paper",
          borderWidth: "0.2rem",
        }}
      >
        <div className="data-calendar">
          <span className="day">LUN</span>
          <span className="date">25</span>
          <span className="months-calendar">ENE</span>
        </div>
      </TableCell>
      <TableCell
        variant="head"
        sx={{
          backgroundColor: "background.paper",
          borderWidth: "0.2rem",
        }}
      >
        <div className="data-calendar">
          <span className="day">MART</span>
          <span className="date">26</span>
          <span className="months-calendar">ENE</span>
        </div>
      </TableCell>
      <TableCell
        variant="head"
        sx={{
          backgroundColor: "background.paper",
          borderWidth: "0.2rem",
        }}
      >
        <div className="data-calendar">
          <span className="day">MIE</span>
          <span className="date">27</span>
          <span className="months-calendar">ENE</span>
        </div>
      </TableCell>
      <TableCell
        variant="head"
        sx={{
          backgroundColor: "background.paper",
          borderWidth: "0.2rem",
        }}
      >
        <div className="data-calendar">
          <span className="day">VIE</span>
          <span className="date">28</span>
          <span className="months-calendar">ENE</span>
        </div>
      </TableCell>
      <TableCell
        variant="head"
        sx={{
          backgroundColor: "background.paper",
          borderWidth: "0.2rem",
        }}
      >
        <div className="data-calendar">
          <span className="day">SAB</span>
          <span className="date">29</span>
          <span className="months-calendar">ENE</span>
        </div>
      </TableCell>
      <TableCell
        variant="head"
        sx={{
          backgroundColor: "background.paper",
          borderWidth: "0.2rem",
        }}
      >
        <div className="data-calendar">
          <span className="day">DOM</span>
          <span className="date">30</span>
          <span className="months-calendar">ENE</span>
        </div>
      </TableCell>
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <>
      <TableCell
        sx={{
          backgroundColor: "background.paper",
          borderWidth: "0rem",
          textAlign: "center",
          writingMode:
            "vertical-rl" /* Cambia la orientación del texto a vertical */,
          textOrientation:
            "mixed" /* Asegura que el texto se muestre de manera legible */,
        }}
      >
        VISITANTES
      </TableCell>
      <React.Fragment>
        <TableCell
          sx={{
            backgroundColor: "background.paper",
            borderWidth: "0.3px",
            textAlign: "center",
            borderColor: "#A4A4A4",
          }}
        >
          Ariel alegre
        </TableCell>

        <TableCell
          sx={{
            backgroundColor: "background.paper",
            borderWidth: "0.3px",
            textAlign: "center",
            borderColor: "#A4A4A4",
          }}
        >
          Ariel alegre
        </TableCell>
        <TableCell
          sx={{
            backgroundColor: "background.paper",
            borderWidth: "0.3px",
            textAlign: "center",
            borderColor: "#A4A4A4",
          }}
        >
          Ariel alegre
        </TableCell>
        <TableCell
          sx={{
            backgroundColor: "background.paper",
            borderWidth: "0.3px",
            textAlign: "center",
            borderColor: "#A4A4A4",
          }}
        >
          Ariel alegre
        </TableCell>
        <TableCell
          sx={{
            backgroundColor: "background.paper",
            borderWidth: "0.3px",
            textAlign: "center",
            borderColor: "#A4A4A4",
          }}
        >
          Ariel alegre
        </TableCell>
        <TableCell
          sx={{
            backgroundColor: "background.paper",
            borderWidth: "0.3px",
            textAlign: "center",
            borderColor: "#A4A4A4",
          }}
        >
          Ariel alegre
        </TableCell>
      </React.Fragment>
    </>
  );
}
const Reservations = () => {
  return (
    <div className="container-reservation">
      <div className="tittle">
        <h1>Las Ilusiones</h1>
      </div>

      <div className="box-reservation">
        <div className="input-reservations">
          <input type="text" className="days-input" />
          <button className="btn-reservation-search">
            <SearchRoundedIcon id="icons-search-reservtion" />
          </button>
        </div>
        <div className="year-months">
          <div className="months-carrusel">
            <div className="years">2022</div>
          </div>
          <div className="months-carrusel">
            <div className="months">Enero</div>
          </div>
        </div>

        <div className="days-container">
          <div className="days-carrusel">
            <div className="days">Ver en día </div>
          </div>
          <div className="num-carrusel">
            <div className="num-days">25</div>
          </div>
        </div>

        <Paper style={{ height: 560, width: "100%", marginTop: "2rem" }}>
          <TableVirtuoso
            data={rows}
            components={VirtuosoTableComponents}
            fixedHeaderContent={fixedHeaderContent}
            itemContent={rowContent}
          />
        </Paper>
      </div>
      <div className="length-reservation">
        <div className="length-container">
          <div className="length">10</div>
        </div>
        <div className="length-container">
          <div className="length">20</div>
        </div>
        <div className="length-container">
          <div className="length">30</div>
        </div>
        <div className="length-container">
          <div className="length">40</div>
        </div>
        <div className="length-container">
          <div className="length">50</div>
        </div>
        <div className="length-container">
          <div className="length">60</div>
        </div>
      </div>
    </div>
  );
};
export default Reservations;
