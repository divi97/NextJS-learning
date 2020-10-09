import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import fetch from 'isomorphic-unfetch';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function Vehicles({ list }) {
    const classes = useStyles();

    return (<>
        <h1>Vehicles List</h1>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell className={classes.cell}>Id</StyledTableCell>
                        <StyledTableCell className={classes.cell} align="right">Brand</StyledTableCell>
                        <StyledTableCell className={classes.cell} align="right">Model</StyledTableCell>
                        <StyledTableCell className={classes.cell} align="right">OwnerId</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((row) => (
                        <TableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                {row.id}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.brand}</StyledTableCell>
                            <StyledTableCell align="right">{row.model}</StyledTableCell>
                            <StyledTableCell align="right">{row.ownerId}</StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
    )

}

Vehicles.getInitialProps = async () => {
    const resp = await fetch('http://localhost:3000/api/vehicles');
    const json = await resp.json();
    return { list: json }
}