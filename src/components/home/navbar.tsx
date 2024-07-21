"use client"
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { ThemeSwitch } from "../theme/theme-switch";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/slices/modalSlice";
import { MODAL_KEYS } from "@/types";
import GlobalModal from "../common/modal/global-modal";
import LoginForm from "../auth/login-form";
import RegisterForm from "../auth/register-form";

export const Navbar = () => {
  const dispatch = useDispatch();
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={"Search"}
      type="search"
    />
  );

  return (
    <>
      <NextUINavbar maxWidth="xl" position="sticky" isBordered>
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Image src="./logo.svg" height={150} width={150} alt="logo" />
            </NextLink>
          </NavbarBrand>
          <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <ThemeSwitch />
          </NavbarItem>

          <NavbarItem className="hidden md:flex gap-3">
            <Button
              color="primary"
              variant="light"
              onClick={() =>
                dispatch(
                  openModal({
                    id: MODAL_KEYS.REGISTER_MODAL,
                    size: "md",
                  })
                )
              }
            >
              Register
            </Button>
            <Button
              variant="flat"
              color="primary"
              onClick={() =>
                dispatch(
                  openModal({
                    id: MODAL_KEYS.LOGIN_MODAL,
                    size: "md",
                  })
                )
              }
              startContent={
                <Icon icon={"mingcute:user-4-line"} fontSize={15} />
              }
            >
              Login
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          {searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>

      <GlobalModal title="Login User" id={MODAL_KEYS.LOGIN_MODAL}>
        <LoginForm />
      </GlobalModal>

      <GlobalModal title="Register User" id={MODAL_KEYS.REGISTER_MODAL}>
        <RegisterForm />
      </GlobalModal>
    </>
  );
};
