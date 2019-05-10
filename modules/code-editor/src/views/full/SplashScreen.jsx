import React from 'react'

import { MdCode } from 'react-icons/md'

import style from './style.scss'

const hotKey = navigator.platform.toUpperCase().indexOf('MAC') >= 0 ? 'cmd' : 'ctrl'

export default () => (
  <div className={style.splashScreen}>
    <div>
      <MdCode />
      <h1>Code Editor</h1>
      <p>
        Code editor allows you to create and edit actions without leaving botpress studio. It features typings and
        intelligent code completion.
      </p>
      <p>
        Save file&nbsp;
        <kbd>{hotKey}</kbd>
        &nbsp;+&nbsp;
        <kbd>s</kbd>
      </p>
      {/* <p>
        New file&nbsp;
        <kbd>{hotKey}</kbd>
        &nbsp;+&nbsp;
        <kbd>shift</kbd>
        &nbsp;+&nbsp;
        <kbd>n</kbd>
      </p> */}
    </div>
  </div>
)