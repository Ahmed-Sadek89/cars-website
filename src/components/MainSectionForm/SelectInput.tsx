"use client"
import { FormControl, MenuItem, OutlinedInput, Select } from '@mui/material';
import * as React from 'react';
import { MenuProps, selectStyle } from './selectStyles';





export default function SelectInput({data}: {data: string[]}) {
    const [selectValue, setSelectValue] = React.useState<string>(data[0]);

    return (
        <FormControl className='w-full border-0'>
            <Select
                sx={selectStyle}
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                input={<OutlinedInput />}
                MenuProps={MenuProps}
            >
                {data.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl >
    );
}
