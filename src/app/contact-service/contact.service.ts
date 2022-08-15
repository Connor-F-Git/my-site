import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private dbPath = '/contacts';
  contactsRef!: AngularFireList<Contact>;

  contactRef!: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.contactsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Contact> {
    return this.contactsRef;
  }

  create(contact: Contact): any {
    return this.contactsRef.push(contact);
  }

  update(key: string, value: any): Promise<void> {
    return this.contactsRef.update(key, value);
  }
  delete(key: string): Promise<void> {
    return this.contactsRef.remove(key);
  }
  deleteAll(): Promise<void> {
    return this.contactsRef.remove();
  }
}
