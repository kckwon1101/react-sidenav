import menuData from '@/data/menu.json';
import MenuItem from "@/component/MenuItem";

const SideNav = () => {

  return (
    <div className="flex">
      <div className="flex flex-auto justify-center bg-gray-800">
        <div className="w-[210px]">
          {/* Logo & Main Title*/}
          <div className="flex justify-center items-center h-[80px]">
            <div className="flex justify-center items-center w-[60px]">
              <div>IMG</div>
            </div>
            <div className="flex justify-center items-center w-[150px]">
              <span className="text-white text-2xl font-bold">DAVID</span>
            </div>
          </div>

          {/* Sub Title */}
          <div className="flex justify-center items-start h-[70px]">
            <h1 className="text-white text-[21px]">Catalog Dashboard</h1>
          </div>

          {/* Menu */}
          <nav className="">
            <ul className="">
              <div className="divide-y divide-gray-500">
                {menuData.map((menu) => (
                  <MenuItem menu={menu} key={menu.id}/>
                ))}
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
