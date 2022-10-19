import Styles from './styles.module.scss'

import {useSideMenu} from '../../hooks/useSideMenu'

import Menu from '../Menu'


const Sidebar = () => {

  const {isOpen, closeSide} = useSideMenu()

  return (
    <>
      {/* Layer */}
      <div className={
        `${isOpen !== true
          ? Styles.Layer
          : (Styles.Layer + ' ' + Styles.isOpen)
        }`
      }></div>

      {/* Sidebar Container */}
      <div
        className={
          `${isOpen !== true
          ? Styles.Sidebar
          : (Styles.Sidebar + ' ' + Styles.Open)
          }`
        }
      >

        {/* Sidebar */}
        <div>
          {/* Header */}
          <header>
            <span>SisMant</span>
            <button
              onClick={closeSide}
            >
              X
            </button>
          </header>

          {/* User Info */}
          <div className={Styles.UserInfo}>
            <picture>
              <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
            </picture>
            <h5>Usuario Admin Domingues Tecnico</h5>
            <span>Técnico Informático I</span>
          </div>

          {/* Compromise Info */}

          {/* Menu */}
          <Menu />

          {/* Footer */}
          <footer className={Styles.Footer}>
            <picture>
              <span>Fiscalia</span>
              <svg width="32" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path xmlns="http://www.w3.org/2000/svg" d="M46.6832 23.0669H51.3212C67.5095 23.0669 67.5095 0.962769 51.3212 0.962769H38.5668V32.0111H46.7055V23.0669H46.6832ZM46.6832 7.92188H50.1171C56.9848 7.92188 56.9848 16.1077 50.1171 16.1077H46.6832V7.92188ZM27.1056 0.962769H34.3747V32.0111H26.236V13.0966L17.4506 22.5538L8.66523 13.0966V32.0111H0.526489V0.962769H7.81791L17.4729 11.3345L27.1056 0.962769ZM42.5581 40.4423L43.227 39.6617H44.2527L43.2493 40.4423H42.5581ZM11.9876 40.6431H12.7012V44.9925H11.9876V40.6431ZM20.5946 40.6431H23.0474V41.2899H21.3082V42.4944H23.0474V43.1412H21.3082V44.3457H23.0474V44.9925H20.5946V40.6431ZM16.0235 42.6951C16.5587 43.2081 16.581 44.078 16.0458 44.6133L16.0235 44.6356C15.4661 45.1932 14.5742 45.1932 14.0167 44.6356C13.7938 44.4126 13.66 44.1226 13.6154 43.8103V43.7211L14.3066 43.4758L14.3289 43.6096C14.3289 43.8327 14.4181 44.0334 14.5519 44.2118C14.6857 44.3457 14.8418 44.4126 15.0424 44.4126C15.2208 44.4126 15.3992 44.3457 15.533 44.2118C15.6668 44.078 15.756 43.8773 15.7337 43.6988C15.7337 43.4981 15.6668 43.3196 15.533 43.1858C15.3769 43.0297 15.1985 42.9182 15.0201 42.8289C14.7303 42.7397 14.485 42.5836 14.262 42.3828C14.0613 42.1821 13.9498 41.9367 13.9721 41.6691C13.9721 41.4014 14.0836 41.1338 14.2843 40.933C14.485 40.7323 14.7749 40.6208 15.0647 40.6208C15.3546 40.6208 15.6445 40.7323 15.8452 40.933C15.979 41.0669 16.0681 41.223 16.1127 41.4014L16.135 41.4906L15.4884 41.736L15.4438 41.6468C15.4215 41.5576 15.3769 41.4683 15.31 41.3791C15.1985 41.2453 14.9755 41.223 14.8418 41.3568C14.8195 41.3568 14.8195 41.3791 14.8195 41.3791C14.7526 41.446 14.708 41.5576 14.708 41.6691C14.708 41.7806 14.7526 41.8921 14.8195 41.959C14.931 42.0706 15.0647 42.1375 15.1985 42.2044C15.4884 42.2936 15.7783 42.4498 16.0235 42.6951ZM17.0716 40.6431H19.7696V41.2899H18.7885V44.9925H18.075V41.2899H17.0716V40.6431ZM10.2038 40.6431H10.9173V44.9925H10.1815L8.04089 41.959V44.9925H7.32736V40.6431H7.99629L10.2261 43.7657L10.2038 40.6431ZM5.54352 40.6431H6.25706V44.9925H5.54352V40.6431ZM3.80428 40.6431H4.51782V44.9925H3.80428V41.8029L2.5333 43.4758L1.26232 41.8029V44.9925H0.526489V40.6431H1.24002L2.5333 42.3382L3.80428 40.6431ZM57.7207 43.855L58.2335 44.3011L58.1443 44.368C57.7207 44.7918 57.1409 45.0371 56.5389 45.0371C55.9368 45.0371 55.3571 44.8141 54.9334 44.3903C54.0638 43.5427 54.0638 42.1375 54.9111 41.2676C54.9111 41.2676 54.9111 41.2676 54.9334 41.2453C55.3571 40.7992 55.9368 40.5761 56.5389 40.5761C57.1409 40.5761 57.7207 40.8215 58.1443 41.2453L58.2335 41.3122L57.7207 41.7583L57.6538 41.6914C57.3639 41.4014 56.9625 41.223 56.5389 41.2007C56.1375 41.2007 55.7362 41.3568 55.4686 41.6468C55.1787 41.9367 55.0226 42.3382 55.0226 42.762C55.0003 43.1858 55.1787 43.5873 55.4686 43.8773C55.7585 44.1672 56.1375 44.3234 56.5389 44.3234C56.9625 44.3011 57.3639 44.1449 57.6538 43.8327L57.7207 43.855ZM26.3029 43.1858C26.5928 42.9182 26.7488 42.5167 26.7488 42.1375C26.7488 41.736 26.5928 41.3568 26.3029 41.0892C26.0576 40.8438 25.7231 40.6877 25.3664 40.6431H24.0954V44.9925H24.8089V43.6319H25.1434L26.013 44.9925H26.8603L25.9015 43.4981C26.0576 43.4312 26.1914 43.3196 26.3029 43.1858ZM24.8089 41.2899H25.2326C25.4556 41.2899 25.6563 41.3791 25.79 41.5353C26.1245 41.8698 26.1245 42.4051 25.79 42.7397C25.634 42.8959 25.4333 42.9851 25.2326 42.9851H24.8089V41.2899ZM47.9765 42.2713C48.1103 42.0929 48.1995 41.8921 48.1772 41.6691C48.1772 41.4014 48.0657 41.1338 47.865 40.9553C47.6643 40.7546 47.3967 40.6431 47.1069 40.6431H45.6798V44.9925H47.2183C47.5751 44.9479 47.8873 44.7918 48.1326 44.5464C48.4224 44.2788 48.5785 43.8996 48.5785 43.4981C48.5785 43.0966 48.4224 42.7174 48.1549 42.4498C48.1103 42.3828 48.0434 42.3159 47.9765 42.2713ZM46.4379 42.6505H47.1069C47.3298 42.6505 47.5305 42.7397 47.6643 42.8959C47.8204 43.052 47.9096 43.275 47.9096 43.4981C47.9096 43.7211 47.8204 43.9442 47.6643 44.1003C47.5082 44.2564 47.3075 44.3457 47.1069 44.3457H46.4379V42.6505ZM47.3521 41.9144C47.3075 41.959 47.2406 41.9814 47.1515 42.0037H46.4156V41.2899H47.1069C47.1961 41.2899 47.2629 41.3345 47.3298 41.4014C47.3967 41.4683 47.4413 41.5576 47.4413 41.6691C47.4636 41.7583 47.419 41.8475 47.3521 41.9144ZM61.1769 40.5761C60.5748 40.5761 59.9951 40.8215 59.5714 41.2453C58.7018 42.0929 58.7018 43.4981 59.5491 44.368L59.5714 44.3903C60.4633 45.2602 61.8904 45.2602 62.7823 44.3903C63.6519 43.5427 63.6519 42.1375 62.8046 41.2676L62.7823 41.2453C62.3809 40.8215 61.8012 40.5761 61.1769 40.5761ZM61.1769 44.3903C60.7755 44.3903 60.3741 44.2341 60.0843 43.9219C59.4822 43.2973 59.4822 42.3159 60.0843 41.6914C60.3741 41.4014 60.7532 41.223 61.1769 41.223C61.5782 41.223 61.9796 41.3791 62.2695 41.6914C62.8715 42.3159 62.8715 43.2973 62.2695 43.9219C61.9796 44.2341 61.6005 44.3903 61.1769 44.3903ZM43.9406 40.6431H44.6541V43.6765C44.6095 44.0334 44.4534 44.3457 44.2081 44.591C43.6061 45.1709 42.6473 45.1709 42.0452 44.591C41.7554 44.3234 41.5993 43.9442 41.5993 43.5427V40.6431H42.3128V43.5427C42.3128 43.7657 42.402 43.9888 42.5581 44.1449C42.7142 44.3011 42.9148 44.3903 43.1378 44.3903C43.3608 44.3903 43.5615 44.3011 43.6953 44.1449C43.8514 43.9888 43.9406 43.7657 43.9406 43.5427V40.6431ZM52.5922 40.6431H53.3057V44.9925H52.5922V40.6431ZM50.2063 44.3457H51.7002V44.9925H49.4927V40.6431H50.2063V44.3457ZM31.6098 40.5761C31.0078 40.5761 30.428 40.8215 30.0043 41.2453C29.1347 42.0929 29.1347 43.4981 29.982 44.368L30.0043 44.3903C30.8963 45.2602 32.3233 45.2602 33.2152 44.3903C34.0849 43.5427 34.0849 42.1375 33.2375 41.2676L33.2152 41.2453C32.8139 40.8215 32.2341 40.5761 31.6098 40.5761ZM31.6098 44.3903C31.2084 44.3903 30.8071 44.2341 30.5172 43.9219C29.9152 43.2973 29.9152 42.3159 30.5172 41.6914C30.8071 41.4014 31.1861 41.223 31.6098 41.223C32.0112 41.223 32.4125 41.3791 32.7024 41.6914C33.3044 42.3159 33.3044 43.2973 32.7024 43.9219C32.4125 44.2341 32.0335 44.3903 31.6098 44.3903ZM27.7077 40.6431H28.4212V44.9925H27.7077V40.6431ZM39.3249 40.6431H38.0316V44.9925H38.7451V43.6319H39.1688C39.5702 43.6319 39.9715 43.4758 40.2614 43.1858C40.5513 42.9182 40.7074 42.539 40.7074 42.1375C40.7074 41.736 40.5513 41.3568 40.2614 41.0892C39.9938 40.8438 39.6817 40.6877 39.3249 40.6431ZM39.1688 42.9851H38.7451V41.2899H39.1688C39.3918 41.2899 39.5925 41.3791 39.7262 41.5353C40.0607 41.8698 40.0607 42.4051 39.7262 42.7397C39.5925 42.8959 39.3918 42.9851 39.1688 42.9851Z" fill="white"/>
              </svg>
            </picture>
            KodePrint 2022
          </footer>

        </div>

      </div>
    </>
  );
}

export default Sidebar;