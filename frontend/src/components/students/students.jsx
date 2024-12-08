import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchBar from "../searchBar/searchBar";
import AddStudent from "../addStudent/addStudent";
import EditStudentModal from "../mod/editStudentModal";
import EditSpecialty from "../mod/editSpecialty";
import "./student.css";
import { getSpecialtyByNum } from "../../../func/filterSpecialitys";
import { deleteRequest } from "../../../API/request";
// /student/2121.../delete

function Row(props) {
  const {
    row,
    handleOpen,
    handleOpen2,
    changeAlert,
    changeLoading,
    data,
    changeData,
  } = props;

  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.nom} {row.prenom}
        </TableCell>
        <TableCell align="right">{row.moyS1}</TableCell>
        <TableCell align="right">{row.moyS2}</TableCell>
        <TableCell align="right">{row.moyS3}</TableCell>
        <TableCell align="right">{row.moyS4}</TableCell>
        <TableCell align="center">
          {
            <Tooltip title="Edit">
              <IconButton
                onClick={async () => {
                  data.uid = row.numE;
                  await changeData(data);
                  handleOpen();
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          }
        </TableCell>

        <TableCell align="center">
          {
            <Tooltip
              title="Edit"
              onClick={async () => {
                changeLoading(true);
                const res = await deleteRequest(
                  `/student/${row.numE}/delete`,
                  null
                );
                if (res.status == 200) {
                  changeAlert(true, "success");
                } else {
                  changeAlert(true, "filled");
                }
                changeLoading(false);
              }}
            >
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          }
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Specialtys
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Specialty Number</TableCell>
                    <TableCell align="left">Specialty Name</TableCell>
                    <TableCell align="left">Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.choices
                    .sort((a, b) => a.ordreChoix - b.ordreChoix)
                    .map((e) => (
                      <TableRow key={e?.numSpec ?? null}>
                        <TableCell align="left">
                          Choice Number : {e?.ordreChoix ?? null}
                        </TableCell>
                        <TableCell align="left" component="th" scope="row">
                          {getSpecialtyByNum(
                            data?.speciality ?? null,
                            e?.numSpec ?? null
                          )?.nomSpec ?? null}
                        </TableCell>
                        <TableCell align="left">
                          {
                            <Tooltip title="Edit">
                              <IconButton
                                onClick={() => {
                                  handleOpen2();
                                }}
                              >
                                <EditIcon />
                              </IconButton>
                            </Tooltip>
                          }
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    edit: null,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export default function Students(props) {
  const { changeAlert, changeLoading, data, changeData } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  return (
    <>
      <div className="upTable">
        <SearchBar />
        <AddStudent
          changeAlert={changeAlert}
          changeLoading={changeLoading}
          data={data}
          changeData={changeData}
        />
        <div className="addButton"></div>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Student Name</TableCell>
              <TableCell align="right">1st Semester</TableCell>
              <TableCell align="right">2nd Semester</TableCell>
              <TableCell align="right">3rd Semester</TableCell>
              <TableCell align="right">4th Semester</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.students &&
              data?.students.map((row) => (
                <Row
                  key={row.numE}
                  row={row}
                  handleOpen={handleOpen}
                  handleOpen2={handleOpen2}
                  changeAlert={changeAlert}
                  changeLoading={changeLoading}
                  data={data}
                  changeData={changeData}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditStudentModal
        open={open}
        handleClose={handleClose}
        uid={data.uid}
        changeAlert={changeAlert}
        changeLoading={changeLoading}
      />
      <EditSpecialty open={open2} handleClose={handleClose2} />
    </>
  );
}

// numE: 1
// numSpec: 1
// ordreChoix: 3
