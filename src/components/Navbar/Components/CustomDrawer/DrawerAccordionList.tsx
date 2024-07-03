import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';

type props = {
    expanded: string | false,
    index: number,
    handleChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void,
    link: {
        image: string;
        title: string;
    }
}
const DrawerAccordionList = ({ expanded, handleChange, index, link }: props) => {
    return (
        <Accordion
            expanded={expanded === index.toString()} onChange={handleChange(index.toString())}
            sx={{
                boxShadow: 'none',
                borderBottom: 'none',
                '&:before': { display: 'none' }
            }}
        >
            <AccordionSummary
                expandIcon={
                    expanded === index.toString()
                        ? <ExpandMoreIcon className='text-[#5C5C5C]' />
                        : <KeyboardArrowRightIcon className='text-[#5C5C5C]' />
                }
                aria-controls={index.toString()}
                id={index.toString()}
                sx={{ borderBottom: 'none' }}
            >
                <div className='flex flex-row items-center gap-3'>
                    {
                        link.image &&
                        <Image src={link.image} alt={link.title} width={40} height={40} className='object-contain' />
                    }
                    <h4 className='text-custom-black'>{link.title}</h4>

                </div>
            </AccordionSummary>
            <AccordionDetails sx={{ borderBottom: 'none' }} className='px-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
        </Accordion>
    )
}

export default DrawerAccordionList
