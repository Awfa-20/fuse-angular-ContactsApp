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
            first_Name: 'profile',
            last_Name: 'Van1',
            company: 'ITM',
            job_Title: 'Junior',
            email: 'can1@gmail.com',
            phone: '+90 111 111 88 99',
            imagePath: '/assets/images/avatars/profile.jpg',
            notes: '',
        },
        {
            // id: 2,
            first_Name: 'Barrera',
            last_Name: 'Van',
            company: 'ITM2',
            job_Title: 'Junior',
            email: 'can2@gmail.com',
            phone: '+90 222 222 88 99',
            imagePath: '/assets/images/avatars/Barrera.jpg',
            notes: '',
        },
        {
            // id: 3,
            first_Name: 'Abbott',
            last_Name: 'Van3',
            company: 'ITM',
            job_Title: 'Junior',
            email: 'can3@gmail.com',
            phone: '+90 333 333 88 99',
            imagePath: '/assets/images/avatars/Abbott.jpg',
            notes: '',
        },
        {
            // id: 4,
            first_Name: 'Trevino',
            last_Name: 'Van4',
            company: 'ITM',
            job_Title: 'Junior',
            email: 'can4@gmail.com',
            phone: '+90 444 444 88 99',
            imagePath: '/assets/images/avatars/Trevino.jpg',
            notes: '',
        },
        {
            // id: 5,
            first_Name: 'jane',
            last_Name: 'Van5',
            company: 'ITM',
            job_Title: 'Junior',
            email: 'can5@gmail.com',
            phone: '+90 555 555 88 99',
            imagePath: '/assets/images/avatars/jane.jpg',
            notes: '',
        },
        {
            // id: 6,
            first_Name: 'james',
            last_Name: 'Van6',
            company: 'ITM',
            job_Title: 'Junior',
            email: 'can6@gmail.com',
            phone: '+90 666 666 88 99',
            imagePath: '/assets/images/avatars/james.jpg',
            notes: '',
        },
        {
            // id: 7,
            first_Name: 'Christy',
            last_Name: 'Van7',
            company: 'ITM',
            job_Title: 'Junior',
            email: 'can7@gmail.com',
            phone: '+90 777 777 88 99',
            imagePath: '/assets/images/avatars/Christy.jpg',
            notes: '',
        },
        {
            // id: 8,
            first_Name: 'profile',
            last_Name: 'Van8',
            company: 'ITM',
            job_Title: 'Junior',
            email: 'can8@gmail.com',
            phone: '+90 888 888 88 99',
            imagePath: '/assets/images/avatars/profile.jpg',
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

    getContactIndex(contact: ContactsDto){
        return this.contacts.indexOf(contact);
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
