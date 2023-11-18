import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";

type Props = {
  dataList: any[];
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
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

const saleTableReport = (props: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">No</StyledTableCell>
            <StyledTableCell align="center">Billcode</StyledTableCell>
            <StyledTableCell align="center">Payment Method</StyledTableCell>
            <StyledTableCell align="center">Total</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.dataList.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row" align="center">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="center">{row.billcode}</StyledTableCell>
              <StyledTableCell align="center">{row.payMethod}</StyledTableCell>
              <StyledTableCell align="center">{row.total}</StyledTableCell>
              <StyledTableCell align="center">{row.createdAt}</StyledTableCell>
              <StyledTableCell align="center">
                <IconButton aria-label="edit">
                  <VisibilityIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default saleTableReport;
