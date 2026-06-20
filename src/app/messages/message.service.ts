import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './message.model';

const FIREBASE_URL = 'https://wdd430-cms-2adbf-default-rtdb.firebaseio.com';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Message[] = [];
  maxMessageId: number = 0;
  messageChangedEvent = new EventEmitter<Message[]>();

  constructor(private http: HttpClient) {}

  getMaxId(): number {
    let maxId = 0;
    for (const message of this.messages) {
      const currentId = parseInt(message.id, 10);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  getMessages(): Message[] {
    this.http.get<Message[]>(FIREBASE_URL + '/messages.json').subscribe(
      (messages: Message[]) => {
        this.messages = messages ?? [];
        this.maxMessageId = this.getMaxId();
        this.messageChangedEvent.emit(this.messages.slice());
      },
      (error: any) => {
        console.error(error);
      }
    );
    return this.messages.slice();
  }

  storeMessages() {
    this.http
      .put(FIREBASE_URL + '/messages.json', JSON.stringify(this.messages), {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .subscribe(() => {
        this.messageChangedEvent.emit(this.messages.slice());
      });
  }

  getMessage(id: string): Message | null {
    for (const message of this.messages) {
      if (message.id === id) {
        return message;
      }
    }
    return null;
  }

  addMessage(message: Message): void {
    this.maxMessageId++;
    message.id = String(this.maxMessageId);
    this.messages.push(message);
    this.storeMessages();
  }
}
