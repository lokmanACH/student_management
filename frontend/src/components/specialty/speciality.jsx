import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import AddSpeciality from "../addStudent/addSpeciality";
import EditSpecialtyInfo from "../mod/editSpecialtyInfo";
import { deleteRequest } from "../../../API/request";
import "./speciality.css";
import Asking from "../asking/asking";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Speciality({
  changeAlert,
  changeLoading,
  data,
  changeData,
  giveMeNew,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // for confirmation
  const [openDeleteConfirm, setOpenDeleteConfirm] = React.useState(false);

  const handleClickOpenDeleteConfirm = () => {
    setOpenDeleteConfirm(true);
  };
  const handleCloseDeleteConfirm = () => {
    setOpenDeleteConfirm(false);
  };
  return (
    <>
      <div className="upTable">
        <AddSpeciality
          changeAlert={changeAlert}
          changeLoading={changeLoading}
          data={data}
          changeData={changeData}
          giveMeNew={giveMeNew}
        />
        <div className="addButton"></div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Speciality</StyledTableCell>
              <StyledTableCell align="center">Number Of Places</StyledTableCell>
              <StyledTableCell align="center">Edit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.speciality?.map((row) => (
              <StyledTableRow key={row.numSpec}>
                <StyledTableCell component="th" scope="row">
                  {row.nomSpec}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.nbrPlaces}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    onClick={() => {
                      data.specID = row.numSpec;
                      changeData(data);
                      handleOpen();
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    onClick={async () => {
                      data.url = `/speciality/${row.numSpec}/delete`;
                      changeData(data);
                      handleClickOpenDeleteConfirm();
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditSpecialtyInfo
        open={open}
        handleClose={handleClose}
        changeAlert={changeAlert}
        changeLoading={changeLoading}
        data={data}
        changeData={changeData}
        giveMeNew={giveMeNew}
      />

      <Asking
        handleClose={handleCloseDeleteConfirm}
        open={openDeleteConfirm}
        changeAlert={changeAlert}
        changeLoading={changeLoading}
        giveMeNew={giveMeNew}
        data={data}
      />
    </>
  );
}
