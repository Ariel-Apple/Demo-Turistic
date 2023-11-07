

import * as React from "react";
import Card from 'react-bootstrap/Card';
import './Historial.css';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
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
      label: "No. Resevación",
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
              backgroundColor: 'background.paper',
            }}
          >
            <h3>

            No. Resevación
            </h3>
          </TableCell>
          <TableCell
            variant="head"
            sx={{
              backgroundColor: 'background.paper',
            }}
          >
            <h3>

            Fecha
            </h3>
          </TableCell>
          <TableCell
            variant="head"
            sx={{
              backgroundColor: 'background.paper',
            }}
          >
            <h3>

            Nombre
            </h3>
          </TableCell>
          <TableCell
            variant="head"
            sx={{
              backgroundColor: 'background.paper',
            }}
          >
            <h3>

            Total
            </h3>
          </TableCell>
      </TableRow>
    );
  }
  
  function rowContent(_index, row) {
    return (
      <>
           <React.Fragment>
        <TableCell
            sx={{
                backgroundColor: 'background.paper',
              }}
        >
      55
        </TableCell>
        <TableCell
        >
      15 mar. 2024 20:30
        </TableCell>
        <TableCell
        >
      Ariel alegre
        </TableCell>
        <TableCell
        >
      $200.00
        </TableCell>
    </React.Fragment>
      </>
    );
  }
function Historial() {
  return (
<>
    <Card className='card-container'>
      <h1>Historial de reservas, reembolso. </h1>
      <div className='months-years'>

      <div className="carrusel-months" >
            <div className="days-month">25</div>
          </div>
          <div className="carrusel-months" >
            <div className="days-month">25</div>
          </div>
          <div className="input-months" >
            <input type="date" />
          </div>
      </div>
    </Card>
    <Card className='card2'>

        <div className='box-card2'>
   <div>
   <CalendarMonthIcon id="icons-clendar-expand" />

   </div>
   <div>
    <h2>Todas las reservaciones</h2>
   </div>
   <div>
    <h2>Reembolso</h2>
   </div>
   <div>
    <h2>Buscar nombre</h2>
   </div>
        </div>
    </Card>

    <Card >

      
   <Paper style={{ height: 560, width: "100%", marginTop: "2rem",  }}>
   <h3 >

   Marzo 17 de 2024
</h3>
          <TableVirtuoso
            data={rows}
            components={VirtuosoTableComponents}
            fixedHeaderContent={fixedHeaderContent}
            itemContent={rowContent}
          />
        </Paper>
    </Card>
</>
  );
}

export default Historial;