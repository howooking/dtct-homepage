"use client";

import Link from "next/link";
import Submenu from "./submenu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_MENUS } from "@/constants/constants";

export default function Menu({ isScrollTop }: { isScrollTop: boolean }) {
  const path = usePathname();

  return (
    <ul className="flex gap-10 items-center h-full">
      {NAV_MENUS.map((menu) => {
        const currentPage = menu.submenu
          ? menu.route === `/${path.split("/")[1]}`
          : menu.route === path;
        return (
          <li key={menu.label} className="h-full">
            {menu.submenu ? (
              <Submenu
                isScrollTop={isScrollTop}
                submenu={menu.submenu}
                menuLabel={menu.label}
                mainRoute={menu.route}
                currentPage={currentPage}
              />
            ) : (
              <Link
                href={menu.route}
                className={cn(
                  isScrollTop && "text-white",
                  currentPage && "border-b-2 border-olive-drab-600",
                  "font-semibold px-2 py-2 hover:text-olive-drab-600 transition text-xl h-full flex items-center"
                )}
              >
                {menu.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
