import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from "angular-webstorage-service";

const STORAGE_KEY = 'clientes';

@Injectable({
  providedIn: 'root'
})

export class DatastorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public get() {
    return this.storage.get(STORAGE_KEY) || [];
  }

  public pick(index: string) {
    const data = this.storage.get(STORAGE_KEY);
    const picked = data.reduce((data, item, idx) => {
      if (idx == index) { data = item }
      return data;
    }, {});
    return picked;
  }

  public add(item: Object): void {
    const data = this.storage.get(STORAGE_KEY) || [];

    data.push(item);
    this.storage.set(STORAGE_KEY, data);
  }

  public update(index: string, cadastro: Object):void {
    const data = this.storage.get(STORAGE_KEY);
    const dataUpdated = data.reduce((data, item, idx) => {
      if (idx == index) { data.push(cadastro) }
      else              { data.push(item) }
      return data;
    }, []);

    this.storage.set(STORAGE_KEY, dataUpdated);
  }

  public remove(index: string): void {
    const data = this.storage.get(STORAGE_KEY);
    const dataUpdated = data.reduce((data, item, idx) => {
      if (idx != index) { data.push(item) }
      return data;
    }, []);
    
    this.storage.set(STORAGE_KEY, dataUpdated);
  }
}
