import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
const StorageKey= 'list1';

@Injectable({
  providedIn: 'root'
})
export class Storage1Service {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
   }
  init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    this.storage.create();
    }
    getdata()
  {
     return this.storage.get(StorageKey) || [];
  }
  async addData(id)
  {
    const fav= await this.storage.get(StorageKey) || [];
    fav.push(id);
    return this.storage.set(StorageKey,fav)
  }
  async removeData(index)
  {
    const fav= await this.storage.get(StorageKey) || [];
    fav.splice(index ,1);
    return this.storage.set(StorageKey,fav)
  }
}
