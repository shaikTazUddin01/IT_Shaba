"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import React from "react";
import icon from "../../assets/icons/IT SHEBA P-03.png";
import Image from "next/image";


const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["About Us", "Services", "Qualification", "Client","Portfolio","Our Team"];
  return (
    <div className="text-white fixed z-50 w-full">
      <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" className="px-0">
        <NavbarContent className="px-0">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />
          <NavbarBrand>
            {/* <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p> */}
            <Image
              src={icon.src}
              alt="Main logo"
              width={150}
              height={100}
              className="hidden lg:flex"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" href="#">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="lg:hidden flex">
          <Image
            src={icon.src}
            alt="Main logo"
            width={150}
            height={100}
            
          />
        </NavbarContent>
        <NavbarMenu className="text-white">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                // size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
