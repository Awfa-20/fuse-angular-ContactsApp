import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { ContactsDto } from '../contactsDto';

@Component({
    selector: 'app-contacts-create',
    templateUrl: './contacts-create.component.html',
    styleUrls: ['./contacts-create.component.scss'],
})
export class ContactsCreateComponent implements OnInit {
    id!: number;
    contact: ContactsDto = {
        imagePath: '/assets/images/avatars/profile.jpg',
    } as ContactsDto;
    createContactForm!: FormGroup;
    editMode = false;

    constructor(
        private contactsService: ContactsService,
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.intitContactForm();
        });
    }

    intitContactForm() {
        if (this.editMode) {
            this.contact = this.contactsService.getContact(this.id - 1);
            this.loadForm();
        } else {
            this.loadForm();
        }
    }

    private loadForm() {
        this.createContactForm = this.fb.group({
            // 'id': [this.contact.id],
            first_Name: [this.contact.first_Name],
            last_Name: [this.contact.last_Name],
            company: [this.contact.company],
            job_Title: [this.contact.job_Title],
            email: [this.contact.email, Validators.email],
            phone: [this.contact.phone],
            imagePath: [this.contact.imagePath],
            notes: [this.contact.notes],
        });
    }

    onSubmit() {
        const contactDto: ContactsDto = this.createContactForm.value;
        console.log(contactDto);
        if (this.editMode) {
            this.contactsService.updateContact(this.id - 1, contactDto);
        } else {
            this.contactsService.addContact(contactDto);
        }
    }
}
