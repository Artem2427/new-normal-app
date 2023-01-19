import { createUseStyles } from 'react-jss';
import { PALETTE } from '../../../utils/constants';

const useStyles = createUseStyles({
  root: {
    padding: '20px 24px',
    background: PALETTE.content_bg,
  },
});

export default useStyles;
