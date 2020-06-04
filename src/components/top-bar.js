import React from "react"

import topBarStyles from "./top-bar.module.css"

export default function TopBar({ logo }) {
  return <div className={topBarStyles.topBar}>
    <img src={logo} className="hmt-centered-image" height="90" alt="Logo" />
  </div>
}