import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from '../../contacts/contact.service';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-item',
  standalone: false,
  templateUrl: './message-item.html',
  styleUrl: './message-item.css',
})
export class MessageItem implements OnInit {
  @Input() message!: Message;
  messageSender = '';

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    const contact = this.contactService.getContact(this.message.sender);
    this.messageSender = contact ? contact.name : '';
  }
}
