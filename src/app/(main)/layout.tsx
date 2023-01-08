"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC, PropsWithChildren } from "react";
import { ArticleIcon } from "src/components/Icon/ArticleIcon";
import { DiaryIcon } from "src/components/Icon/DiaryIcon";
import { HomeIcon } from "src/components/Icon/HomeIcon";
import { ProfileIcon } from "src/components/Icon/ProfileIcon";
import { useScroll } from "src/hook/useScroll";
import { pagesPath } from "src/lib/$path";

const HEADER_MENUS = [
  {
    Icon: HomeIcon,
    href: pagesPath.$url(),
    label: "Home",
  },
  {
    Icon: ProfileIcon,
    href: pagesPath.about.$url(),
    label: "About",
  },
  {
    Icon: ArticleIcon,
    href: pagesPath.article.$url(),
    label: "Article",
  },
  {
    Icon: DiaryIcon,
    href: pagesPath.diary.$url(),
    label: "Diary",
  },
] as const;

const Header: FC = () => {
  const scroll = useScroll();
  const isOver = scroll > 60;
  const pathname = usePathname();
  return (
    <header
      className={`transition-all lg:px-44 md:px-32 sm:px-12 px-10 fixed block top-0 w-full z-50 ${
        isOver ? "backdrop-blur py-2" : "py-8"
      }`}
    >
      <nav>
        <ul className="flex items-center justify-start gap-6">
          {HEADER_MENUS.map(({ Icon, href, label }) => {
            const isCurrentPage =
              href.pathname !== "/" && pathname?.includes(href.pathname);
            return (
              <li key={href.pathname}>
                <Link href={href}>
                  <div
                    className={`transition-all neumorphism-container-preset neumorphism-container-md rounded-full before:rounded-full ${
                      isOver ? "h-12 w-12" : "h-16 w-16"
                    } ${
                      isCurrentPage
                        ? "before:shadow-[inset_-4px_-4px_4px_rgba(255,_255,_255,_0.9),_inset_4px_4px_4px_rgba(174,_174,_192,_0.15)] shadow-none active:before:shadow-[inset_-4px_-4px_4px_rgba(255,_255,_255,_0.9),_inset_4px_4px_4px_rgba(174,_174,_192,_0.15)]"
                        : ""
                    }`}
                  >
                    <div className={`neumorphism-inner rounded-full`}>
                      <Icon
                        className={`transition-all ${
                          isOver ? "text-xl" : "text-3xl"
                        }`}
                        fill={isCurrentPage ? "currentColor" : "#808B9F"}
                      />
                    </div>
                  </div>
                  {!isOver && (
                    <p
                      className={`text-center text-sm pt-2 ${
                        isCurrentPage ? "font-bold" : "font-medium"
                      }`}
                    >
                      {label}
                    </p>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="lg:px-44 md:px-32 sm:px-12 px-10 mt-40 mb-40">
        {children}
      </main>
    </div>
  );
};

export default Layout;
