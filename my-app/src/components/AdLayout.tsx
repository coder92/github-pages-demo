import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AdAccordion from './AdAccordian';
import Card from '@mui/material/Card';


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

function AdLayout() {
    return (
        <div>
            <Grid container spacing={2} height='100vh'>
                <Grid item xs={2} >
                    <AdAccordion
                        accordions={accordions}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Box2Content />
                </Grid>
            </Grid>
        </div>
    );
}

function Box2Content() {
    return (
        <div>
            <Box
                sx={{
                    padding: '1px',
                    color: 'red',
                }}
            >
                <h1>hii</h1>
            </Box>
        </div>

    );
}

export default AdLayout;