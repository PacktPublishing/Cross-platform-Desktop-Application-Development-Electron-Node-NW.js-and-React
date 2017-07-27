import { IMenuItem } from "../Interfaces";

export interface IMenu {
  items: IMenuItem[];
  clear(): void;
  remove( url: string ): IMenuItem[];
  add( url: string, title: string ): IMenuItem[];
  load(): IMenuItem[];
}

