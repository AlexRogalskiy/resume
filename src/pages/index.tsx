import * as React from "react"

import "../styles/styles.css"
import { deskImage } from "../theme"

import useIsMobile from "../hooks/useIsMobile"
import useToggle from "../hooks/useToggle"

import PageBase from "../components/common/PageBase"
import AvatarBox from "../components/index/AvatarBox/AvatarBox"
import Navbar from "../components/common/Navbar"
import MobileMenu from "../components/index/Navbar/MobileMenu"
import DesktopMenu from "../components/index/Navbar/DesktopMenu"
import HeroSplash from "../components/common/HeroSplash"
import MyAvatar from "../components/index/AvatarBox/MyAvatar"
import TitleBlock from "../components/index/TitleBlock/TitleBlock"
import SectionGrid from "../components/index/SectionGrid/SectionGrid"
import WorkSection from "../components/index/SectionGrid/WorkSection/WorkSection"
import EducationSection from "../components/index/SectionGrid/EducationSection/EducationSection"
import SkillsSection from "../components/index/SectionGrid/SkillsSection/SkillsSection"
import Footer from "../components/index/Footer/Footer"

import avatarImage from "../images/chris.jpg"

const IndexPage = () => {
  const isMobile: boolean = useIsMobile()
  const [menuOpen, toggleMenuOpen] = useToggle()
  const splashImageHeight = isMobile ? "200px" : "100vh"
  const navbar__leftContent = isMobile ? (
    <MobileMenu open={menuOpen} toggleOpen={toggleMenuOpen} />
  ) : null
  const navbar__rightConent = !isMobile ? <DesktopMenu /> : null
  return (
    <PageBase>
      <Navbar
        floatAtTop
        color="secondary"
        leftContent={navbar__leftContent}
        rightContent={navbar__rightConent}
      />
      <HeroSplash src={deskImage} height={splashImageHeight}>
        <AvatarBox>
          <MyAvatar src={avatarImage} />
          <TitleBlock />
        </AvatarBox>
      </HeroSplash>
      <SectionGrid>
        <WorkSection />
        <EducationSection />
        <SkillsSection />
      </SectionGrid>
      <Footer />
    </PageBase>
  )
}
export default IndexPage
