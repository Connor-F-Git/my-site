import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private dbPath = 'https://my-site-eef59-default-rtdb.firebaseio.com/contacts.json';

  constructor(private http: HttpClient){}

  createContact(contact: Contact) {
    const headers = new HttpHeaders()
             .set('cache-control', 'no-cache')
             .set('content-type', 'application/json')
    return this.http
             .post(this.dbPath, contact, { headers: headers })
             .subscribe(res => res);
  } 
}
