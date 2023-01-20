import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',

    '& .wrapper': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: '20px',

      '@media screen and (max-width: 768px)': {
        gridTemplateColumns: '1fr 1fr 1fr',
      },

      '@media screen and (max-width: 478px)': {
        gridTemplateColumns: '1fr 1fr',
      },

      '@media screen and (max-width: 375px)': {
        gridTemplateColumns: '1fr',
      },

      '&.open': {
        '@media screen and (max-width: 668px)': {
          gridTemplateColumns: '1fr 1fr',
        },

        '@media screen and (max-width: 525px)': {
          gridTemplateColumns: '1fr',
        },
      },
    },

    '& .pagination': {
      display: 'flex',
      marginTop: '20px',
      justifyContent: 'center',
    },
  },
});

export default useStyles;
