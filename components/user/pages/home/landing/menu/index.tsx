"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import cls from "classnames";
import { HambergerMenu } from "iconsax-react";

const Menu = () => {
  const [showStickyMenu, setShowStickyMenu] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) setShowStickyMenu(true);
      else setShowStickyMenu(false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={cls(
          `inset-0 bottom-auto flex items-center justify-center z-20 transition-all box-border`,
          showStickyMenu ? "fixed bg-white" : "absolute"
        )}
      >
        <div className="container md:!px-0 relative">
          <div
            style={{
              height: toggleMenu ? 4 * 36 + 24.8 + "px" : "0px",
            }}
            className="hidden md:flex justify-start items-start flex-col text-lg absolute inset-x-0 
          top-full bg-white border-t-[1px] border-zinc-200 overflow-hidden transition-all duration-300 ease-in-out"
          >
            <Link
              className={cls(
                `mr-3 py-1`,
                showStickyMenu ? "text-slate-600" : "text-zinc-500 pt-3"
              )}
              href={"/"}
            >
              خانه
            </Link>
            <Link
              className={cls(
                `mr-3 py-1`,
                showStickyMenu ? "text-slate-600" : "text-zinc-500"
              )}
              href={"/"}
            >
              خانه
            </Link>
            <Link
              className={cls(
                `mr-3 py-1`,
                showStickyMenu ? "text-slate-600" : "text-zinc-500"
              )}
              href={"/"}
            >
              خانه
            </Link>
            <Link
              className={cls(
                `mr-3 py-1`,
                showStickyMenu ? "text-slate-600" : "text-zinc-500 pb-3"
              )}
              href={"/"}
            >
              خانه
            </Link>
          </div>
          <div
            className="flex justify-between 
        items-center border-b-[1px] border-white/20 py-5 md:px-3"
          >
            <div className="ml-3 relative">
              <Image
                src={
                  showStickyMenu
                    ? "/images/logo-dark.png"
                    : "/images/logo-light.png"
                }
                width={showStickyMenu ? 100 : 150}
                height={50}
                alt="logo"
              />
            </div>
            <HambergerMenu
              onClick={() => setToggleMenu(!toggleMenu)}
              className={cls(
                `cursor-pointer hidden md:inline-block`,
                showStickyMenu ? "text-primary" : "text-white"
              )}
            />
            <div className="flex justify-center items-center  md:hidden">
              <Link
                className={cls(
                  `mr-5`,
                  showStickyMenu ? "text-slate-600" : "text-white"
                )}
                href={"/"}
              >
                خانه
              </Link>
              <Link
                className={cls(
                  `mr-5`,
                  showStickyMenu ? "text-slate-600" : "text-white"
                )}
                href={"/"}
              >
                اتاق ها
              </Link>
              <Link
                className={cls(
                  `mr-5`,
                  showStickyMenu ? "text-slate-600" : "text-white"
                )}
                href={"/"}
              >
                رستوران
              </Link>
              <Link
                className={cls(
                  `mr-5`,
                  showStickyMenu ? "text-slate-600" : "text-white"
                )}
                href={"/"}
              >
                کافی شاپ
              </Link>
              <Link
                className={cls(
                  `mr-5`,
                  showStickyMenu ? "text-slate-600" : "text-white"
                )}
                href={"/"}
              >
                درباره ما
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
