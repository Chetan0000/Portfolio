import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link } from "react-scroll";

const DropdownMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div className="border-none focus-visible:outline-none z-30 relative">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild className="outline-none border-none ">
          <button
            className="  w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-zinc-800 hover:shadow-[0_2px_10px] hover:shadow-black outline-none "
            aria-label="Customise options"
          >
            <HamburgerMenuIcon />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="w-[100px] text-white bg-black rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
          >
            {links.map((item, index) => {
              return (
                <Link
                  activeClass="active"
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <DropdownMenu.Item
                    key={index}
                    className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 cursor-pointer "
                  >
                    <a
                      className="group hover:text-yellow-500
                 transition-all duration-300 ease-in-out"
                      href={`#${item}`}
                    >
                      <span>{item}</span>
                    </a>
                    {/* New Tab{" "} */}
                  </DropdownMenu.Item>
                </Link>
              );
            })}

            <DropdownMenu.Arrow className="fill-yellow-500" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default DropdownMenuDemo;
