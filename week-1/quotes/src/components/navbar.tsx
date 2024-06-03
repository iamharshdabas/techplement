import { Avatar } from '@nextui-org/avatar'
import { Link } from '@nextui-org/link'
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from '@nextui-org/navbar'
import { link } from '@nextui-org/theme'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import { GithubIcon, LogoIcon } from '@/components/icons'
import { ThemeSwitch } from '@/components/theme-switch'
import { siteConfig } from '@/config/site'

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="max-w-fit gap-3">
          <Link
            className="flex items-center justify-start gap-1"
            color="foreground"
            href="/"
          >
            <LogoIcon />
            <p className="font-bold text-inherit">Quotes</p>
          </Link>
        </NavbarBrand>
        <div className="ml-2 hidden justify-start gap-4 sm:flex">
          {siteConfig.navBarItems.map((item) => (
            <NavbarItem key={`${item.label}-${item.href}`}>
              <NavLink
                className={({ isActive }) =>
                  clsx(
                    link({ color: 'foreground' }),
                    isActive ? 'font-medium text-primary' : ''
                  )
                }
                color="foreground"
                to={item.href}
              >
                {item.label}
              </NavLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex items-center">
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon />
          </Link>
        </NavbarItem>
        <NavbarItem className="flex items-center">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Avatar
            isBordered
            radius="lg"
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          />
        </NavbarItem>
        <NavbarMenuToggle className="h-8 w-8 sm:hidden" />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${item.href}`}>
              <NavLink
                className={({ isActive }) =>
                  clsx(
                    index === siteConfig.navMenuItems.length - 1
                      ? link({ color: 'danger' })
                      : link({ color: 'foreground' }),
                    isActive ? 'font-medium text-primary' : ''
                  )
                }
                color="foreground"
                to={item.href}
              >
                {item.label}
              </NavLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  )
}
