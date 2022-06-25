import {IconName, IconPrefix} from "@fortawesome/fontawesome-svg-core";

export interface MenuLi {
    url: string,
    name: string,
    icon:IconName,
    prefix: IconPrefix
}

export interface ArrayMenuLi{
    lstMenuLi: Array<MenuLi>
}
