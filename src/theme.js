import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Override the table component element types globally.
  components: {
    MuiTable: {
      defaultProps: { component: 'div' },
    },
    MuiTableHead: {
      defaultProps: { component: 'div' },
    },
    MuiTableBody: {
      defaultProps: { component: 'div' },
    },
    MuiTableRow: {
      defaultProps: { component: 'div' },
    },
    MuiTableCell: {
      defaultProps: { component: 'span' },
    },
  },
});

export default theme;
