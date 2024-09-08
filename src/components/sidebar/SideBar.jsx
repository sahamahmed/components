import React from 'react';
import './SideBar.scss';
import {ReactComponent as Logo} from '../../public/icons/logo192.png.svg';

const sidebarItems = [
  {
    link: '/', text: 'New Workflow', icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.8332 5.83329H9.1665V9.16663H5.83317V10.8333H9.1665V14.1666H10.8332V10.8333H14.1665V9.16663H10.8332V5.83329ZM9.99984 1.66663C5.39984 1.66663 1.6665 5.39996 1.6665 9.99996C1.6665 14.6 5.39984 18.3333 9.99984 18.3333C14.5998 18.3333 18.3332 14.6 18.3332 9.99996C18.3332 5.39996 14.5998 1.66663 9.99984 1.66663ZM9.99984 16.6666C6.32484 16.6666 3.33317 13.675 3.33317 9.99996C3.33317 6.32496 6.32484 3.33329 9.99984 3.33329C13.6748 3.33329 16.6665 6.32496 16.6665 9.99996C16.6665 13.675 13.6748 16.6666 9.99984 16.6666Z" fill="#0E263F" />
      </svg>

    )
  },
  {
    link: '/', text: 'New Workflow (Template)', icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.8332 5.83329H9.1665V9.16663H5.83317V10.8333H9.1665V14.1666H10.8332V10.8333H14.1665V9.16663H10.8332V5.83329ZM9.99984 1.66663C5.39984 1.66663 1.6665 5.39996 1.6665 9.99996C1.6665 14.6 5.39984 18.3333 9.99984 18.3333C14.5998 18.3333 18.3332 14.6 18.3332 9.99996C18.3332 5.39996 14.5998 1.66663 9.99984 1.66663ZM9.99984 16.6666C6.32484 16.6666 3.33317 13.675 3.33317 9.99996C3.33317 6.32496 6.32484 3.33329 9.99984 3.33329C13.6748 3.33329 16.6665 6.32496 16.6665 9.99996C16.6665 13.675 13.6748 16.6666 9.99984 16.6666Z" fill="#0E263F" />
      </svg>
    )
  },
  {
    link: '/', text: 'Workflows', icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.47477 5.63332L5.19144 4.56665L0.683105 9.99998L5.19144 15.4333L6.47477 14.3667L2.84977 9.99998L6.47477 5.63332ZM5.83311 10.8333H7.49977V9.16665H5.83311V10.8333ZM14.1664 9.16665H12.4998V10.8333H14.1664V9.16665ZM9.16644 10.8333H10.8331V9.16665H9.16644V10.8333ZM14.8081 4.56665L13.5248 5.63332L17.1498 9.99998L13.5248 14.3667L14.8081 15.4333L19.3164 9.99998L14.8081 4.56665Z" fill="#0E263F" />
      </svg>


    )
  },
];

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-top">
      <div className='sidebar-item'>
        <Logo />
      </div>
      {sidebarItems.map((item, index) => (
        <div key={index} className="sidebar-item">
          {item.icon}
          <span>{item.text}</span>
        </div>
      ))}
    </div>
    <div className="sidebar-bottom">
      <div className="sidebar-user-icon">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z" fill="#E8EDF2" />
          <path d="M10.5 24.6667C12.4465 22.6021 15.0892 21.3333 18 21.3333C20.9108 21.3333 23.5535 22.6021 25.5 24.6667M21.75 14.25C21.75 16.3211 20.0711 18 18 18C15.9289 18 14.25 16.3211 14.25 14.25C14.25 12.1789 15.9289 10.5 18 10.5C20.0711 10.5 21.75 12.1789 21.75 14.25Z" stroke="#0E263F" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      </div>
    </div>
  </div>
);

export default Sidebar;
