import menuData from '@/data/menu.json';
import MenuItem from "@/component/MenuItem";

const SideNav = () => {

  return (
    <div>
      <div className="md:block md:w-64 md:h-screen md:bg-gray-800 md:fixed md:left-0 md:top-0">
        <div className="flex justify-between items-center md:h-24 md:px-4">
          <h1 className="text-white font-bold text-xl">DAVID</h1>
        </div>
        <div className="flex justify-between items-center md:h-8 md:px-4">
          <h1 className="text-white font-bold text-base">Catalog Dashboard</h1>
        </div>
        <nav className="mt-2 px-4 md:px-0">
          <ul className="mt-4 md:mt-0">
            {menuData.map((menu) => (
              <MenuItem menu={menu} key={menu.id} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
