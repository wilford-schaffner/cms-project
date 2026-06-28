import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../../contacts/contact.service';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-item',
  standalone: false,
  templateUrl: './message-item.html',
  styleUrl: './message-item.css',
})
export class MessageItem implements OnInit, OnDestroy {
  @Input() message!: Message;
  messageSender = '';
  private subscription!: Subscription;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.resolveSender();
    this.subscription = this.contactService.contactListChangedEvent.subscribe(
      () => {
        this.resolveSender();
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private resolveSender(): void {
    const contact = this.contactService.getContact(this.message.sender);
    this.messageSender = contact ? contact.name : '';
  }
}
