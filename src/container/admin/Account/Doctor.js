import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "../../../components/CustomButtons/Button";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Doctor(props) {
    const classes = useStyles();
    const { listDoctor } = props;
    console.log(listDoctor)

    return (
        <TableContainer component={Paper}>

            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" >STT</TableCell>
                        <TableCell align="center">Tên</TableCell>
                        <TableCell align="center">Giới Tính</TableCell>
                        <TableCell align="center">SĐT</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Địa chỉ</TableCell>
                        <TableCell align="center">Trạng thái</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        listDoctor.map((row)=>{
                            return(
                                <TableRow key={row.id}>
                                    <TableCell component="th" align="center" scope="row">{row.id}</TableCell>
                                    <TableCell align="center">{row.fullName}</TableCell>
                                    <TableCell align="center">{row.gender}</TableCell>
                                    <TableCell align="center">{row.phoneNumber}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">{row.photo}</TableCell>
                                    <TableCell align="center">
                                        <Button color="success" size="sm">Cập nhật</Button>
                                        <Button color="danger" size="sm">Khoá</Button>
                                    </TableCell>

                                </TableRow>
                            )

                        })
                    }


                </TableBody>
            </Table>
        </TableContainer>
    );
}


