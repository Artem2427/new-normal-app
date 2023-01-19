import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& .container': {
      maxWidth: '113rem',
      padding: '0 1rem',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative',

      '@media only screen and (max-width: 576px)': {
        padding: '0 1.5rem',
      },
    },
  },
});

export default useStyles;
