import { Component, ElementRef, ViewChild } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-edit',
  standalone: false,
  templateUrl: './message-edit.html',
  styleUrl: './message-edit.css',
})
export class MessageEdit {
  @ViewChild('subject') subjectRef!: ElementRef<HTMLInputElement>;
  @ViewChild('msgText') msgTextRef!: ElementRef<HTMLInputElement>;

  currentSender = '7';

  constructor(private messageService: MessageService) {}

  onSendMessage(): void {
    const subject = this.subjectRef.nativeElement.value;
    const msgText = this.msgTextRef.nativeElement.value;
    const newMessage = new Message('', subject, msgText, this.currentSender);
    this.messageService.addMessage(newMessage);
  }

  onClear(): void {
    this.subjectRef.nativeElement.value = '';
    this.msgTextRef.nativeElement.value = '';
  }
}
