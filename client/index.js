import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import App from './containers/App'
import './styles/index.scss'

render(
  <App />,
  document.getElementById('root')
)
