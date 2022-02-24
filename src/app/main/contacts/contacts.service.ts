import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ContactsDto } from './contactsDto';
import { SnackBarService } from './snack-bar.service';

@Injectable({
    providedIn: 'root',
})
export class ContactsService {
    contactChanged = new Subject<ContactsDto[]>();
    private contacts: ContactsDto[] = [
        {
            // id: 1,
            first_Name: 'Can1',
            last_Name: 'Van',
            company: 'ITM',
            job_Title: 'Junior',
            email: 'can@gmail.com',
            phone: '05556668899',
            notes: '',
        },
        {
            // id: 2,
            first_Name: 'Can2',
            last_Name: 'Van',
            company: 'ITM',
            job_Title: 'Junior',
            email: 'can@gmail.com',
            phone: '05556668899',
            notes: '',
        },
        {
            // id: 3,
            first_Name: 'Can3',
            last_Name: 'Van',
            company: 'ITM',
            job_Title: 'Junior',
            email: 'can@gmail.com',
            phone: '05556668899',
            notes: '',
        },
        {
            // id: 4,
            first_Name: 'Can4',
            last_Name: 'Van',
            company: 'ITM',
            job_Title: 'Junior',
            email: 'can@gmail.com',
            phone: '05556668899',
            notes: '',
        },
        {
            // id: 5,
            first_Name: 'Can5',
            last_Name: 'Van',
            company: 'ITM',
            job_Title: 'Junior',
            email: 'can@gmail.com',
            phone: '05556668899',
            notes: '',
        },
        {
            // id: 6,
            first_Name: 'Can6',
            last_Name: 'Van',
            company: 'ITM',
            job_Title: 'Junior',
            email: 'can@gmail.com',
            phone: '05556668899',
            notes: '',
        },
        {
            // id: 7,
            first_Name: 'Can7',
            last_Name: 'Van',
            company: 'ITM',
            job_Title: 'Junior',
            email: 'can@gmail.com',
            phone: '05556668899',
            notes: '',
        },
        {
            // id: 8,
            first_Name: 'Can8',
            last_Name: 'Van',
            company: 'ITM',
            job_Title: 'Junior',
            email: 'can@gmail.com',
            phone: '05556668899',
            notes: '',
        },
    ];

    constructor(private _snackBar: SnackBarService) {}

    
    getContacts() {
        return this.contacts.slice();
    }

    getContact(index: number) {
        return this.contacts[index];
    }

    addContact(contact: ContactsDto) {
        this.contacts.push(contact);
        this.contactChanged.next(this.contacts.slice());
        this._snackBar.openSnackBar('Contact is added');
    }

    updateContact(index: number, newContact: ContactsDto) {
        this.contacts[index] = newContact;
        this.contactChanged.next(this.contacts.slice());
    }

    deleteContact(contact: ContactsDto){
        console.log(this.contacts.indexOf(contact));
        this.contacts.splice(this.contacts.indexOf(contact), 1);
        this.contactChanged.next(this.contacts);
    }
}
