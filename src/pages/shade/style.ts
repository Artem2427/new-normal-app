import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    height: '100%',
    position: 'relative',

    '& .wrapper': {
      display: 'grid',
      marginTop: '20px',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: '20px',

      '@media screen and (max-width: 768px)': {
        gridTemplateColumns: '1fr 1fr',
      },

      '&.open': {
        '@media screen and (max-width: 525px)': {
          gridTemplateColumns: '1fr',
        },
      },
    },

    '& .button-block': {
      marginTop: '20px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  },
});

export default useStyles;
