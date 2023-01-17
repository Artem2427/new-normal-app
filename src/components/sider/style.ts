import { createUseStyles } from 'react-jss';
import { PALETTE } from '../../utils/constants';

const useStyles = createUseStyles({
  root: {
    '&.ant-layout-sider': {
      backgroundColor: PALETTE.sider,
      width: '200px',
      padding: '20px 10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
});

export default useStyles;
