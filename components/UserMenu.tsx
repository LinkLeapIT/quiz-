"use client"

import Link from "next/link"
import { useState } from "react"
import { CgMenuGridO } from "react-icons/cg"

const UserMenu = () => {
  const [openUserMenu, setOpenUserMenu] = useState(false)

  const useMenuHandler = () => {
    setOpenUserMenu(!openUserMenu);
  };

  const links = [
    { name: "Introduction", path: "/introduction" },
    { name: "Shifts and rosters", path: "/shifts-rosters" },
    { name: "Team essentials", path: "/team-essentials" },
    { name: "Sequence of service", path: "/sequence-of-service" },
    { name: "Priorities", path: "/priorities" },
    { name: "Service guide", path: "/service-guide" },
    { name: "Putting orders through", path: "/putting-orders-through" },
  ];

  return (
    <div 
      className="text-md mt-1 cursor-pointer p-2"
      onMouseEnter={() => setOpenUserMenu(true)}
      onMouseLeave={() => setOpenUserMenu(false)}
    >
      <div className="relative">
        <CgMenuGridO />
        {openUserMenu && (
          <ul className="absolute w-[200px] bg-teal-600 z-[99] top-7 sm:left-[-100px] left-[-120px] p-3 text-white rounded-md text-center">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={() => setOpenUserMenu(false)}
              >
                <li className="hover:underline">
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default UserMenu
