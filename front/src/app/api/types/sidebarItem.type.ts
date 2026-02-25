import { Colors } from './color.type';

export type SidebarItem = {
  label: string;
  routerLink: string;
  icon: string;
  mobileOnly?: boolean;
  color?: Colors;
};
