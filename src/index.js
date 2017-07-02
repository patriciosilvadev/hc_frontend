import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css'

injectTapEventPlugin()
ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('root'))
registerServiceWorker()
