import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import VideoDetail from './components/VideoDetail';
import SearchFeed from './components/SearchFeed';
import './app.css';
import ChannelDetail from './components/ChannelDetail';

const App = () => {
  return (
    <Router>
      <Box sx={{ p: 1 }}>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Feed} />
          <Route path='/video/:id' component={VideoDetail} />
          <Route path='/channel/:id' component={ChannelDetail} />
          <Route path='/search' component={SearchFeed} />
        </Switch>
      </Box>
    </Router>
  );
};

export default App;
