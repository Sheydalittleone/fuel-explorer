import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    logo: 'items-center justify-start',
    menu: [
      'flex gap-1 md:flex-col py-3 px-4 laptop:px-0 laptop:gap-4 laptop:flex-row',
      'not-first:border-t not-first:border-border laptop:not-first:border-t-0',
    ],
    menuItem: [
      'relative h-auto text-color data-[active=true]:text-brand hover:text-brand',
      'laptop:data-[active=true]:before:content-[""]',
      'laptop:data-[active=true]:before:absolute',
      'laptop:data-[active=true]:before:block',
      'laptop:data-[active=true]:before:w-full',
      'laptop:data-[active=true]:before:h-1',
      'laptop:data-[active=true]:before:bg-brand',
      'laptop:data-[active=true]:before:top-[-24px]',
    ],
    navConnection: 'items-center',
    navNetwork: 'h-8',
    themeToggle: [
      'relative cursor-pointer flex items-center px-2 w-12 h-8 rounded-full border-border',
      'bg-gray-3 select-none',
    ],
    themeToggleIcon: [
      'absolute opacity-100 transition-all duration-200 text-icon transform',
      'aria-[label=Sun]:right-2',
      'aria-[label=Moon]:left-2',
      'dark-theme:aria-[label=Sun]:transform',
      'dark-theme:aria-[label=Sun]:opacity-0',
      'dark-theme:aria-[label=Sun]:-translate-x-full',
      'light-theme:aria-[label=Moon]:transform',
      'light-theme:aria-[label=Moon]:opacity-0',
      'light-theme:aria-[label=Moon]:translate-x-full',
    ],
    desktop: [
      'gap-8 container mx-auto flex-row items-center',
      'laptop:px-4 laptop:flex min-h-[var(--nav-height)]',
    ],
    mobile: [
      'flex-col border-b border-border',
      'laptop:hidden fuel-[NavLogo]:flex-1',
    ],
    navWrapper: 'border-b border-border min-h-[var(--nav-height)]',
    mobileContent: [
      'flex items-center py-2 px-4 border-b border-transparent',
      'transition-colors duration-200 ease-in-out',
      'min-h-[var(--nav-height)] data-[open=true]:border-border',
      'fuel-[NavLogo]:flex-1',
      'fuel-[IconButton]:ml-2 fuel-[IconButton]:text-icon',
    ],
  },
});
