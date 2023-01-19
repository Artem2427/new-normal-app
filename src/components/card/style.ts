import { createUseStyles } from 'react-jss';
import { PALETTE } from '../../utils/constants';

const useStyles = createUseStyles({
  root: {
    background: PALETTE.white,
    borderRadius: '8px',
    width: '100%',

    '&.small': {
      cursor: 'pointer',

      '& .color': {
        height: '140px',
      },
    },

    '&.large': {
      '& .color': {
        height: '300px',
      },

      '& .color-hex': {
        fontSize: '28px',
      },
    },

    '& .color': {
      borderRadius: '8px',
    },

    '& .color-hex': {
      padding: '8px 6px',
    },
  },
});

export default useStyles;
