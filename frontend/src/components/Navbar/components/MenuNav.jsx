import { menusNav } from '../../../utils/constants'
import { MenuNavItem } from './index'

export const MenuNav = () => {
  return (
    <ul className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
      {
        menusNav.map(menu => (
          <MenuNavItem key={menu.id} menu={menu} />
        ))
      }
    </ul>
  )
}
