import {useState} from 'react';
import {NavLink} from "react-router-dom";

const MenuItem = (props) => {
  const {menu} = props

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const active = "flex justify-center items-center border-l-2 border-slate-50 h-[55px] bg-gray-600 text-white text-sm"
  const notActive = "flex justify-center items-center border-2 border-gray-800 h-[55px] text-white text-sm hover:border-gray-500 active:border-gray-900"


  return (
    <li>
      <div className="flex justify-between items-center h-10">
        {/*<Link*/}
        {/*  to={props.menu.link}*/}
        {/*  className="block py-2 text-white text-2xl font-bold hover:text-gray-500"*/}
        {/*>*/}
        <span className="text-[18px] text-white">{menu.label}</span>
        {/*</Link>*/}
        {menu.subMenu &&
        <span className="block px-2 text-white text-3xl hover:text-gray-500"
              onClick={toggleCollapsed}>{collapsed ? '+' : '-'}</span>
        }
      </div>
      {menu.subMenu && !collapsed &&
      <ul>
        {menu.subMenu.map((subMenu) => (
          <li key={subMenu.id}>
            <NavLink
              to={subMenu.link}
              className={({isActive}) => isActive ? active : notActive}
            >
              {subMenu.label}
            </NavLink>
          </li>
        ))}
      </ul>}
    </li>
  );
};

export default MenuItem;
