import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactList } from './contact-list';
import { ContactItem } from '../contact-item/contact-item';

describe('ContactList', () => {
  let component: ContactList;
  let fixture: ComponentFixture<ContactList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactList, ContactItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
