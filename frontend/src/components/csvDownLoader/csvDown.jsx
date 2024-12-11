import React from "react";
import { unparse } from "papaparse";
import { getSpecialtyByNum } from "../../../func/filterSpecialitys";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});


const CsvDownloader = ({ data }) => {
  let listStudent = [];

  data?.students
    .sort((a, b) => b.moyGeneral - a.moyGeneral)
    .map((e, i) => {
      listStudent[i] = {
        order:i+1,
        ID: e.numE,
        nom: e.nom,
        prenom: e.prenom,
        moyenne_S1: e.moyS1,
        moyenne_S2: e.moyS2,
        moyenne_S3: e.moyS3,
        moyenne_S4: e.moyS4,
        moyenne_general: e.moyGeneral,
      };
      e.choices = e.choices.sort((a, b) => a.ordreChoix - b.ordreChoix);
      listStudent[i].choix_1 = getSpecialtyByNum(
        data?.speciality,
        e.choices[0]?.numSpec
      )?.nomSpec;

      listStudent[i].choix_2 = getSpecialtyByNum(
        data?.speciality,
        e.choices[1]?.numSpec
      )?.nomSpec;

      listStudent[i].choix_3 = getSpecialtyByNum(
        data?.speciality,
        e.choices[2]?.numSpec
      )?.nomSpec;

      listStudent[i].choix_4 = getSpecialtyByNum(
        data?.speciality,
        e.choices[3]?.numSpec
      )?.nomSpec;

      listStudent[i].result = getSpecialtyByNum(
        data?.speciality,
        e?.result
      )?.nomSpec;
    });

  const handleDownload = () => {
    // Define the CSV listStudent
    // Convert the listStudent to CSV format
    const csv = unparse(listStudent);

    // Create a Blob and a URL for it
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    // Trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = "listStudent.csv";
    link.click();

    // Clean up the URL object
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudDownloadIcon />}
      onClick={handleDownload}
    >
      Download CSV file
      <VisuallyHiddenInput
        multiple
      />
    </Button>
  );
};

export default CsvDownloader;
