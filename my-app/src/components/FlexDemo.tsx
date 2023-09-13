import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AdAccordion from './AdAccordian';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const accordions = [
    {
        title: 'Accordion Menu 1',
        details: 'Accordion details 1',
    },
    {
        title: 'Accordion 2',
        details: 'Accordion 2 details',
    },
    {
        title: 'Disabled Accordion',
        details: 'This accordion is disabled',
        disabled: true,
    },
];

function FlexDemo() {
    return (
        <div>
            <Grid container spacing={2} height='100vh'>
                <Grid item xs={2} >
                    <AdAccordion
                        accordions={accordions}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Box
                        sx={{
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    >

                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

function Box2Content() {
    return (
        <Box
            sx={{
                padding: '16px',
                color: 'white',
            }}
        >
            <h1>hii</h1>
        </Box>
    );
}

export default FlexDemo;