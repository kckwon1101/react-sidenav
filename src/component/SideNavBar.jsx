import { useState } from 'react';

const SideNavBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="sidenav">
      <div className="sidenav-header">
        <h2>My App</h2>
      </div>
      <div className="sidenav-menu">
        <ul>
          <li>Dashboard</li>
          <li>
            <span>Menu 1</span>
            <span onClick={toggleCollapsed}>{collapsed ? '-' : '+'}</span>
            {collapsed && <ul className={collapsed ? 'collapsed' : ''}>
              <li>Submenu 1</li>
              <li>Submenu 2</li>
              <li>Submenu 3</li>
            </ul>}
          </li>
          <li>Menu 2</li>
          <li>Menu 3</li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavBar;
