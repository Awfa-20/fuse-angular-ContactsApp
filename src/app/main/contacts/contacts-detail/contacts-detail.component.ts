import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { ContactsDto } from '../contactsDto';

@Component({
    selector: 'app-contacts-detail',
    templateUrl: './contacts-detail.component.html',
    styleUrls: ['./contacts-detail.component.scss'],
})
export class ContactsDetailComponent implements OnInit {
    id!: number;
    editMode = false;
    contact: ContactsDto;

    constructor(
        private contactsService: ContactsService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.contact = this.contactsService.getContact(this.id + 1);
        });
    }
}
