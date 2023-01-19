import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
  },
});

export default useStyles;
