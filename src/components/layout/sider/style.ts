import { createUseStyles } from 'react-jss';
import { PALETTE } from '../../../utils/constants';

const useStyles = createUseStyles({
  root: {
    '&.ant-layout-sider': {
      backgroundColor: PALETTE.sider,
      width: '200px',
      padding: '20px 10px',
      display: 'flex',
      flexDirection: 'column',
    },

    '& .button': {
      width: '100%',
    },

    '& .menu': {
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      justifyContent: 'left',

      '& .menu-item': {
        marginLeft: '0px',
      },
    },
  },
});

export default useStyles;
