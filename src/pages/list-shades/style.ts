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
    },

    '& .pagination': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
});

export default useStyles;
