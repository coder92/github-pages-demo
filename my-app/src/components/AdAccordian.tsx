import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionItem {
  title: string;
  details: string;
  disabled?: boolean;
}

interface AdAccordionProps {
  accordions: AccordionItem[];
}

const defaultProps: AdAccordionProps = {
  accordions: [
    {
      title: 'Default Accordion Title 1',
      details: 'Default Accordion Details 1',
    },
    {
      title: 'Default Accordion Title 2',
      details: 'Default Accordion Details 2',
    },
  ],
};

export default function AdAccordion({ accordions }: AdAccordionProps) {
  return (
    <div>
      {accordions.map((accordion, index) => (
        <Accordion key={index} disabled={accordion.disabled}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{accordion.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{accordion.details}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

AdAccordion.defaultProps = defaultProps;