import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { App } from './components/app'

window.React = React

render(
  <App />,
  document.getElementById('react-container')
)
