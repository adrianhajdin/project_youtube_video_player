import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components'

const App = () => (
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

export default App;