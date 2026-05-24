import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contacts } from './contacts';
import { ContactList } from './contact-list/contact-list';
import { ContactDetail } from './contact-detail/contact-detail';
import { ContactItem } from './contact-item/contact-item';

describe('Contacts', () => {
  let component: Contacts;
  let fixture: ComponentFixture<Contacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Contacts, ContactList, ContactDetail, ContactItem],
    }).compileComponents();

    fixture = TestBed.createComponent(Contacts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
