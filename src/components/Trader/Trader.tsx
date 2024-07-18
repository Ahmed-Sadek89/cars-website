"use client"
import { TextField, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Input = styled('input')({
    display: 'none',
});

const Trader = () => {

    return (
        <aside className='py-10 flex items-center justify-center'>

            <div className='w-5/6 lg:w-2/3  gap-8 flex flex-col items-center justify-center'>
                <Box className="p-6 bg-white shadow-md rounded-lg ">
                    <Typography variant="h6" className="mb-4">Upload Required Images and Enter Personal Information</Typography>
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                        <TextField
                            label="Full Name"
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Mobile Number 1"
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Mobile Number 2"
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Address"
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <div>
                            <Input
                                id="id-card-photo-upload"
                                type="file"
                                accept="image/*"
                            />
                            <label htmlFor="id-card-photo-upload">
                                <Button variant="contained" component="span">
                                    Upload ID Card Photo
                                </Button>
                            </label>
                        </div>
                        <div>
                            <Input
                                id="store-photo-upload"
                                type="file"
                                accept="image/*"
                            />
                            <label htmlFor="store-photo-upload">
                                <Button variant="contained" component="span">
                                    Upload Store Photo
                                </Button>
                            </label>
                        </div>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Submit
                        </Button>
                    </form>

                </Box>
            </div>
        </aside>
    );
};

export default Trader;
