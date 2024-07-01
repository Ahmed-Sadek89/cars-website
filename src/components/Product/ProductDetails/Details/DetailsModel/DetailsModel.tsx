import Image from 'next/image'
import { Backdrop, Divider, Fade, Modal } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';

type props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const DetailsModel = ({ open, setOpen }: props) => {
    return (
        <Modal
            open={open}
            onClose={() => {
                setOpen(false)
            }}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <div className='z-[100] border-none outline-none'>
                    <div className='absolute top-[50%] left-0 w-full md:w-3/4 overflow-hidden h-full  border-none outline-none flex flex-col gap-3' style={{ transform: "translate(-0%, -50%)" }}>
                        <div className='p-10 bg-white rounded flex flex-col justify-start items-start gap-24 min-h-screen overflow-y-scroll relative' >
                            <div onClick={() => setOpen(false)} className='absolute right-3 top-3 cursor-pointer'>
                                <ClearIcon />
                            </div>

                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

export default DetailsModel
