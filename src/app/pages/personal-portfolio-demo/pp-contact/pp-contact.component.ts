import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/contact-service/contact.service';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-pp-contact',
  templateUrl: './pp-contact.component.html',
  styleUrls: ['./pp-contact.component.scss']
})
export class PpContactComponent implements OnInit {

  contact: Contact = new Contact();
  submitted = false;

  //TODO: figure out how to get the crudAPI and formbuilder (fb) to initialize in the constructor

  constructor(private contactService: ContactService ) {}

  ngOnInit(): void {
  }

  onReset(form: NgForm): void {
    form.reset();
  }

  saveContact(): void {
    this.contactService.create(this.contact).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }
  newTutorial(): void {
    this.submitted = false;
    this.contact = new Contact();
  }

}
