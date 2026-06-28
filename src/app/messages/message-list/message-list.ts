import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../contacts/contact.service';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-list',
  standalone: false,
  templateUrl: './message-list.html',
  styleUrl: './message-list.css',
})
export class MessageList implements OnInit {
  messages: Message[] = [];

  constructor(
    private messageService: MessageService,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.contactService.getContacts();
    this.messages = this.messageService.getMessages();
    this.messageService.messageChangedEvent.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    );
  }
}
