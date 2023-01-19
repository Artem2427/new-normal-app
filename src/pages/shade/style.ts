import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    height: '100%',
    position: 'relative',

    '& .wrapper': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      marginTop: '20px',
      gap: '20px',
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
