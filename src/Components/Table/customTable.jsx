import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const CustomTable = ({ rows }) => {
  const keys = Object.keys(rows[0]);
  console.log(keys);

  return (
    <Box
      sx={{
        boxShadow: "2px 1px 20px 2px rgba(210,210,210,0.75) ",
        margin: "1rem 0.5rem",
      }}
    >
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {keys.map((item) => {
                return <TableCell align="center">{item}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {Object.values(row).map((value, colIndex) => (
                  <TableCell key={colIndex} align="center">
                    {value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomTable;
