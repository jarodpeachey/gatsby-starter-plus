import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBolt,
  faQuestionCircle,
  faFeather,
  faCog,
  faGlobe,
  faTimes,
  faChevronDown,
  faUser,
  faDollarSign,
  faBell,
  faCheck,
  faHeart,
  faExclamationCircle,
  faChevronRight,
  faChevronLeft,
  faBoxes,
  faPalette,
  faMousePointer,
  faFlask,
  faAward,
  faPencilRuler,
  faEnvelope,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import MenuItem from '../system-components/MenuItem';
import SubMenuItem from '../system-components/SubMenuItem';
import SubMenu from '../system-components/SubMenu';
import Tablet from '../system-components/Tablet';
import Mobile from '../system-components/Mobile';
import Menu from '../system-components/Menu';
import MobileSubMenuItem from '../system-components/MobileSubMenuItem';
import MobileMenuItem from '../system-components/MobileMenuItem';
import MobileMenu from '../system-components/MobileMenu';
import MobileSubMenu from '../system-components/MobileSubMenu';
import MobileMenuToggle from '../system-components/MobileMenuToggle';
import Header from '../system-components/Header';
import { theme } from './theme';
import Heading from '../system-components/Heading';
import './style.css';

library.add(
  faQuestionCircle,
  faFeather,
  faCog,
  faGlobe,
  faTimes,
  faCheck,
  faChevronDown,
  faUser,
  faBell,
  faDollarSign,
  faHeart,
  faExclamationCircle,
  faChevronRight,
  faChevronLeft,
  faBoxes,
  faPalette,
  faMousePointer,
  faFlask,
  faAward,
  faBolt,
  faPencilRuler,
  faEnvelope,
  faArrowRight,
);

const GlobalStyles = createGlobalStyle`
  p {
    color: ${(props) => props.theme.color.gray.three};
    line-height: 1.7;
    font-size: ${(props) => props.theme.fontSize.p}px;
    font-weight: 400;
  }
  .dark p, .dark code, .dark span, .dark {
    color: ${(props) => props.theme.color.gray.seven};
  }
  .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
    color: ${(props) => props.theme.color.gray.eight};
  }
  pre {
    border-radius: 6px;
    overflow-x: scroll;
    background: props.theme.color.gray.eight;
    font-family: monospace;
    code {
      font-family: monospace;
      line-height: 21px;
      font-size: 16px;
    }
  }
  .dark pre {
    background: ${(props) => props.theme.color.gray.two};
    padding: 12px;
    overflow-x: scroll;
  }
`;

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Header fixed color="transparent">
          <Link to="/" className="no-styling">
            <Heading
              type="h1"
              customStyles={'z-index: 999;'}
              className="m-none ml-2"
            >
              JP
            </Heading>
          </Link>

          <Mobile customStyles={'margin-left: auto;'}>
            <MobileMenuToggle
              open={mobileMenuOpen}
              toggleFunction={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </Mobile>
          <Tablet>
            <Menu>
              <MenuItem>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/blog">Blog</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/#projects">Projects</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/#values">Values</Link>
              </MenuItem>
              {/* <MenuItem submenu>
              <Link to="/components">Components</Link>
              <SubMenu>
                <SubMenuItem>
                  <Link to="/components/layout">Layout</Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link to="/components/inputs">Inputs</Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link to="/components/display">Display</Link>
                </SubMenuItem>
              </SubMenu>
            </MenuItem> */}
              {/* <MenuItem square>
              <a href="/">
                <FontAwesomeIcon
                  icon="heart"
                  style={{ width: 20, height: 20, fontSize: 24 }}
                />
              </a>
            </MenuItem> */}
            </Menu>
          </Tablet>

          <MobileMenu open={mobileMenuOpen}>
            <MobileMenuItem closeFunction={() => setMobileMenuOpen(false)}>
              <Link to="/">Home</Link>
            </MobileMenuItem>
            <MobileMenuItem closeFunction={() => setMobileMenuOpen(false)}>
              <Link to="/blog">Blog</Link>
            </MobileMenuItem>
            <MobileMenuItem closeFunction={() => setMobileMenuOpen(false)}>
              <Link to="/#projects">Projects</Link>
            </MobileMenuItem>
            <MobileMenuItem closeFunction={() => setMobileMenuOpen(false)}>
              <Link to="/#values">Values</Link>
            </MobileMenuItem>
            {/* <MobileMenuItem submenu>
              <Link to="/#projects">Components</Link>
              <MobileSubMenu>
                <MobileSubMenuItem>
                  <Link to="/components/layout">Layout</Link>
                </MobileSubMenuItem>
                <MobileSubMenuItem>
                  <Link to="/components/inputs">Inputs</Link>
                </MobileSubMenuItem>
                <MobileSubMenuItem>
                  <Link to="/components/display">Display</Link>
                </MobileSubMenuItem>
              </MobileSubMenu>
            </MobileMenuItem> */}
          </MobileMenu>
        </Header>
        {children}
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  color: ${(props) => props.theme.color.gray.five};
  background ${(props) => props.theme.color.gray.nine};
`;

export default Layout;
