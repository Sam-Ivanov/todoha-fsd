/* eslint-disable i18next/no-literal-string */
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './DropdownMenu.module.scss';

interface DropdownMenuProps {
  type: string;
}

export const DropdownMenu = (props: DropdownMenuProps) => {
  const { type } = props;

  const links = [
    { href: '/settings', label: 'Settings', type: 'link' },
    { href: '/license', label: 'License', type: 'link' },
    { href: '/logout', label: 'Sign out', type: 'action' },
  ];

  return (
    <Menu as='div' className={s.menu}>
      <Menu.Button className={s.button}>Ava</Menu.Button>
      <Transition
        enter={s.enter}
        enterFrom={s.enterFrom}
        enterTo={s.enterTo}
        leave={s.leave}
        leaveFrom={s.leaveFrom}
        leaveTo={s.leaveTo}
        as={Fragment}
      >
        <Menu.Items className={s.items}>
          {links.map((link) => (
            <Menu.Item key={link.href} as={Fragment}>
              {({ active }) => {
                if (link.type === 'link') {
                  return (
                    <a
                      href={link.href}
                      className={classNames(s.item, { [s.active]: active }, [])}
                    >
                      {link.label}
                    </a>
                  );
                }
                return (
                  <button
                    type='button'
                    onClick={() => {
                      console.log('qwe');
                    }}
                    className={classNames(s.item, { [s.active]: active }, [s.clearBtn])}
                  >
                    click
                  </button>
                );
              }}
            </Menu.Item>
          ))}
        </Menu.Items>

      </Transition>
    </Menu>
  );
};
