import { BrowserRouter } from 'react-router-dom';
import Routes from './router';
import useStyles from './style';

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
