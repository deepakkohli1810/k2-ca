import React, { Children, createContext, useState } from 'react'

const NavContext = ({children}) => {

  const NavbarContext = createContext()
  const [NavOpen, setNavOpen] = useState(false)
  return (
    <div>
        <NavbarContext.Provider value={{ NavOpen, setNavOpen }} >
          {children}
        </NavbarContext.Provider>
    </div>
  )
}

export default NavContext