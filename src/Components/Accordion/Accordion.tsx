import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Accordion.scss';
import SampleQuestions from '../SampleQuestions/SampleQuestions';
import { stateAccordion } from '../../store/slices/chatWithAiSlice';
import { accordionHeight } from '../../store/slices/heightComponentsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  borderRadius: '1rem',
  backgroundColor: 'transparent',
  fontSize: '2rem',
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.5rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor: '#08c',
  margin: '0px',
  borderRadius: '1rem',

  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  borderRadius: '1rem',
}));

export default function CustomizedAccordions() {
  const myRef = React.useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const isOpenAccordion = useAppSelector(
    state => state.chatWithAi.openAccordion
  );

  const changeHeight = () => {
    if (myRef.current) {
      const clientHeight = myRef.current.clientHeight;
      dispatch(accordionHeight(clientHeight));
    }
  };

  React.useEffect(() => {
    const resizeObserver = new ResizeObserver(changeHeight);
    if (myRef.current) {
      resizeObserver.observe(myRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      dispatch(stateAccordion(newExpanded));
    };

  return (
    <div ref={myRef as React.RefObject<HTMLDivElement>}>
      <Accordion
        style={{ margin: '0px' }}
        expanded={isOpenAccordion}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Sample questions to get you started</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SampleQuestions />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
