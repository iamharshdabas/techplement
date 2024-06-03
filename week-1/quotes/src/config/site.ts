export type SiteConfig = typeof siteConfig

export const siteConfig = {
  navBarItems: [
    { label: 'Home', href: '/' },
    { label: 'Authors', href: '/search' },
  ],
  navMenuItems: [
    { label: 'Profile', href: '/profile' },
    { label: 'Home', href: '/' },
    { label: 'Authors', href: '/search' },
    { label: 'Logout', href: '/logout' },
  ],
  links: {
    github: 'https://github.com/iamharshdabas/techplement/tree/main/week-1',
  },
}
