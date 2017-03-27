import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AddEventContainer from './components/AddEventContainer';
import EventList from './components/EventList';
import TopNavigation from './components/TopNavigation';

import injectTapEventPlugin from 'react-tap-event-plugin';
import NewEventNotification from './components/NewEventNotification';

import styled, {ThemeProvider} from 'styled-components';
import theme from './theme';

const AppStyle = styled.div`
  padding: 10px 10px;
`;

const Header = styled.div`
  font-family: 'Segoe UI', sans-serif;
  color: ${props => props.theme.main};
  h1 {
    display: inline;
  }
`;

class App extends Component {
  
  componentWillMount() {
    injectTapEventPlugin();      
  }

  render() {
    return (
      <MuiThemeProvider>
        <ThemeProvider theme={theme}>
          <div className="App">
            <AppStyle>
              <TopNavigation />
              <Header><h1>What's for lunch?</h1> I know this great new place that's having a soft launch.</Header>
              <NewEventNotification />
              <AddEventContainer />
              <EventList />
            </AppStyle>
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
