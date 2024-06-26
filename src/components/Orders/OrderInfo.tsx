import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

type props = {
    order: string,
}
const OrderInfo = ({ order }: props) => {
    const header = ['Order Name', 'Status', 'Order Date', 'Price'];
    const body = ['Side Folding Mirror Motor W5', order, '15 / 6 / 2024 ', '$199']
    return (
        <TableContainer className='col-span-4'>
            <Table className='flex flex-col gap-10'>
                <TableHead>
                    <TableRow className='flex flex-row items-center w-full justify-around'>
                        {
                            header.map(index => (
                                <TableCell key={index} className='w-[150px] p-0 border-0 font-bold text-black text-lg'>{index}</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        className='flex flex-row items-center w-full justify-around'
                    >
                        {
                            body.map((elem, index) => (
                                <TableCell
                                    key={index}
                                    className='w-[150px] p-0 border-0 flex flex-row items-center gap-2'
                                >
                                    {
                                        (order === 'paid' && header[index] === 'Status') &&
                                        <div className='rounded-full text-sm bg-custom-green flex items-center justify-center text-white'>
                                            <DoneIcon />
                                        </div>
                                    }
                                    {
                                        (order === 'cancelled' && header[index] === 'Status') &&
                                        <div className='rounded-full text-sm bg-[#B90000] flex items-center justify-center text-white'>
                                            <ClearIcon />
                                        </div>
                                    }
                                    <span className='text-sm font-bold text-custom-black'>{elem}</span>
                                </TableCell>
                            ))
                        }
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default OrderInfo
