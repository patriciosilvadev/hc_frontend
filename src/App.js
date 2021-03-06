import React from 'react'
import './styles.css'

import { Tabs, Tab } from 'material-ui'
import SwipeableViews from 'react-swipeable-views'

import Resources from './pages/Resources'
import Communication from './pages/Communication'
import Press from './pages/Press'

import Settings from './components/Settings'
import SettingsButton from './components/SettingsButton'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      slideIndex: 0,
      open: false,
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleChange = (value) => {
    this.setState({
      slideIndex: value
    })
  }
  handleToggle = () => this.setState({open: !this.state.open})
  render () {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Res" value={0} />
          <Tab label="Comm" value={1} />
          <Tab label="Press" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <Resources />
          <Communication />
          <Press />
        </SwipeableViews>
        <Settings
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        />
        <SettingsButton handleToggle={this.handleToggle}/>
      </div>
    );
  }
}

export default App;
