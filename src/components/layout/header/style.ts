import { createUseStyles } from 'react-jss';
import { PALETTE } from '../../../utils/constants';

const useStyles = createUseStyles({
  root: {
    width: '100%',

    '&.ant-layout-header': {
      padding: '0',
      background: PALETTE.header,
    },

    '& .logo': {
      fontSize: '28px',
      fontWeight: '700',
      color: PALETTE.white,
      cursor: 'pointer',
    },

    '& .container': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '20px',
    },

    '& .left': {
      display: 'flex',
      alignItems: 'center',
    },

    '& .burger': {
      left: '-200px',
      position: 'relative',
      transition: 'all 0.3s ease',
    },

    '@media screen and (max-width: 768px)': {
      '& .burger': {
        transition: 'all 0.3s ease',
        left: '0',
        zIndex: '9999',
        marginRight: '10px',
        width: '2rem',
        height: '1.5rem',
        cursor: 'pointer',

        '& span, &::before, &::after': {
          left: '0',
          position: 'absolute',
          width: '100%',
          height: '12%',
          transition: 'all 0.3s ease 0s',
          backgroundColor: PALETTE.black,
          borderRadius: '0.2rem',
        },

        '&::before, &::after': {
          content: '""',
        },

        '&::before': {
          height: '14%',
          top: '0',
          borderRadius: '0.2rem',
        },

        '&::after': {
          bottom: '0',
        },

        '& span': {
          top: '50%',
          transform: 'scale(1) translate(0px, -50%)',
        },

        '&.active span': {
          transform: 'scale(0) translate(0px, -50%)',
        },

        '&.active::before': {
          top: '50%',
          transform: 'rotate(-45deg)',
        },

        '&.active::after': {
          height: '14%',
          top: '50%',
          transform: 'rotate(45deg)',
        },
      },
    },
  },
});

export default useStyles;
