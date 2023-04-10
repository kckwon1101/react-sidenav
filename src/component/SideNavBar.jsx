import { useState } from 'react';

const SideNavBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="sidenav">
      <div
        className={`${
          collapsed ? 'block' : 'hidden'
        } md:block md:w-64 md:h-screen md:bg-gray-800 md:fixed md:left-0 md:top-0`}
      >
        <div className="flex justify-between items-center md:h-16 md:px-4">
          <h1 className="text-white font-bold text-xl">My Sidebar</h1>
        </div>
        <nav className="mt-2 px-4 md:px-0">
          <ul className="mt-4 md:mt-0">
            <li>
              <a
                href="#"
                className="block py-2 text-white font-bold hover:text-gray-500"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-white font-bold hover:text-gray-500"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-white font-bold hover:text-gray-500"
              >
                <span>Menu 1</span>
                <span onClick={toggleCollapsed}>{collapsed ? '-' : '+'}</span>
              </a>
              {collapsed &&
              <ul className={collapsed ? 'collapsed' : ''}>
                <li className="block py-2 text-white font-bold hover:text-gray-500">Submenu 1</li>
                <li className="block py-2 text-white font-bold hover:text-gray-500">Submenu 2</li>
                <li className="block py-2 text-white font-bold hover:text-gray-500">Submenu 3</li>
              </ul>}
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-white font-bold hover:text-gray-500"
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNavBar;
