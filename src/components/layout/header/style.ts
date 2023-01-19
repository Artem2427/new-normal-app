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
  },
});

export default useStyles;
