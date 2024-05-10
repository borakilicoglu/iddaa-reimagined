import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  themeSelector,
  setAppearMobileMenu
} from '../../state/slices/themeSlice'
import useIsMobile from '../../hooks/useIsMobile'
import HeaderTop from './HeaderTop'
import HeaderMenu from './HeaderMenu'
import HeaderMobileMenu from './HeaderMobileMenu'
import { AppDispatch } from 'store'

const Header = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { isMobileMenuOpen } = useSelector(themeSelector)
  const [dark, setDark] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    !isMobile && dispatch(setAppearMobileMenu(false))
  }, [isMobile, dispatch])

  const toggleDark = () => {
    document.body.classList.toggle('dark')
    setDark(!dark)
  }

  return (
    <div className="z-50 bg-gradient-to-tl from-[#059669] to-[#059669]">
      <HeaderTop toggleDark={toggleDark} />
      {isMobileMenuOpen && isMobile && <HeaderMobileMenu />}
      <HeaderMenu toggleDark={toggleDark} />
    </div>
  )
}

export default Header
