
//  Module '@types/sha1/index'  resolves to a non-module entity and cannot be imported using ES6 syntax.
import sha1 = require( "sha1" );

import { IMenu } from "./IMenu";
import { IMenuItem } from "../Interfaces";


class Menu implements IMenu {

  items: IMenuItem[] = [];

  constructor( private ns: string ){
  }

  clear(): void {
    this.items =  [];
    this.save();
  }

  remove( url: string ): IMenuItem[] {
    this.items =  this.items.filter(( item ) => item.url !== url );
    this.save();
    return this.items;
  }

  add( url: string, title: string ): IMenuItem[] {
    const id = <string> sha1( url );
    this.items.push({ id, url, title });
    this.save();
    return this.items;
  }

  private save(): void {
    localStorage.setItem( this.ns, JSON.stringify( this.items ) );
  }

  load(): IMenuItem[] {
    this.items = JSON.parse( localStorage.getItem( this.ns ) || "[]" );
    return this.items;
  }
}

export default Menu;
