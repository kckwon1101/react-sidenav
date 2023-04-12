import { useState } from 'react';
import {Link} from "react-router-dom";

const MenuItem = (props) => {
  const { menu } = props

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <li>
      <div className="flex justify-center items-center">
        <Link
          to={props.menu.link}
          className="block py-2 text-white text-2xl font-bold hover:text-gray-500"
        >
          <span>{menu.label}</span>
        </Link>
        {menu.subMenu &&
        <span className="block px-2 text-white text-3xl hover:text-gray-500" onClick={toggleCollapsed}>{collapsed ? '-' : '+'}</span>
        }
      </div>
      {menu.subMenu && collapsed &&
      <ul>
        {menu.subMenu.map((subMenu) => (
          <li key={subMenu.id} className="block py-2 text-white font-bold hover:text-gray-500">
            <Link to={subMenu.link}>
              {subMenu.label}
            </Link>
          </li>
        ))}
      </ul>}
    </li>
  );
};

export default MenuItem;
