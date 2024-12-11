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
import EditStudentModal from "../mod/editStudentModal";
import EditSpecialty from "../mod/editSpecialty";
import { getSpecialtyByNum } from "../../../func/filterSpecialitys";
import "./finalResult.css";

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

export default function FinalResult({
  changeAlert,
  changeLoading,
  data,
  changeData,
  giveMeNew,
}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Order</StyledTableCell>
            <StyledTableCell>Student</StyledTableCell>
            <StyledTableCell align="center">moyenne general</StyledTableCell>
            <StyledTableCell align="center">1st choice</StyledTableCell>
            <StyledTableCell align="center">2nd choice</StyledTableCell>
            <StyledTableCell align="center">3rd choice</StyledTableCell>
            <StyledTableCell align="center">4th choice</StyledTableCell>
            <StyledTableCell align="center">result</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.students
            .sort((a, b) => b.moyGeneral - a.moyGeneral)
            .map((row, i) => (
              <StyledTableRow key={row.numE}>
                <StyledTableCell align="center">{i + 1}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.nom} {row.prenom}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.moyGeneral}
                </StyledTableCell>
                {row.choices
                  .sort((a, b) => a.ordreChoix - b.ordreChoix)
                  .map((e) => (
                    <StyledTableCell align="center">
                      {getSpecialtyByNum(
                        data?.speciality ?? null,
                        e?.numSpec ?? null
                      )?.nomSpec ?? null}
                    </StyledTableCell>
                  ))}

                <StyledTableCell
                  align="center"
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "#620160 " : "#bce4ff",
                  }}
                >
                  {getSpecialtyByNum(
                    data?.speciality ?? null,
                    row?.result ?? null
                  )?.nomSpec ?? null}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
