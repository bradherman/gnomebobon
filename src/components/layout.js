import * as React from "react"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div
        className="m-0 p-0 w-screen h-screen flex flex-row items-center justify-center bg-gray-100"
      >
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
