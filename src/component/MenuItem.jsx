import { useState } from 'react';

const MenuItem = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <li>
      <a
        // href={props.menu.link}
        href="#"
        className="block py-2 text-white text-2xl font-bold hover:text-gray-500"
      >
        <span>{props.menu.label}</span>
        {props.menu.subMenu &&
        <span onClick={toggleCollapsed}>{collapsed ? '-' : '+'}</span>
        }
      </a>
      {props.menu.subMenu && collapsed &&
      <ul>
        {props.menu.subMenu.map((subMenu) => (
          <li key={subMenu.id} className="block py-2 text-white font-bold hover:text-gray-500">
            <a href={subMenu.link}>
              {subMenu.label}
            </a>
          </li>
        ))}
      </ul>}
    </li>
  );
};

export default MenuItem;
