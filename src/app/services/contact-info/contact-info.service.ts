import { Injectable } from '@angular/core';

type ContactMap = {
  href: string;
  value: string;
};

export interface ContactInfo {
  mail: ContactMap;
  phone: ContactMap;
  address: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactInfoService {
  public readonly contactInfo: ContactInfo = {
    mail: {
      href: 'mailto:hello@createx.com',
      value: 'hello@createx.com',
    },
    phone: {
      href: '74055550128',
      value: '(405) 555-0128',
    },
    address: '2464 Royal Ln. Mesa, New Jersey 45463, USA',
  };
}
