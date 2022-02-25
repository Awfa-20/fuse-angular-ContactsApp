import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { ContactsDto } from '../contactsDto';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-contacts-list',
    templateUrl: './contacts-list.component.html',
    styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit, OnDestroy {
    displayedColumns = [
        'select',
        'imagePath',
        'full_Name',
        'email',
        'phone',
        'jobTitle&Company',
        'edit',
        'delete',
    ];

    subscription: Subscription;
    contacts: ContactsDto[] = this.contactsService.getContacts();
    dataSource = new MatTableDataSource(this.contacts);

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    allowMultiSelect = true;
    selection: SelectionModel<ContactsDto>;

    constructor(
        private contactsService: ContactsService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.selection = new SelectionModel<ContactsDto>(
            this.allowMultiSelect,
            []
        );
    }

    ngOnInit(): void {
        this.subscription = this.contactsService.contactChanged.subscribe(
            (contacts: ContactsDto[]) => {
                this.contacts = contacts;
                this.dataSource = new MatTableDataSource(contacts);
            }
        );
        this.contacts = this.contactsService.getContacts();
    }

    onNewContact() {
        this.router.navigate(['../contact/new'], { relativeTo: this.route });
    }

    onEditContact(contact: ContactsDto) {
        const id = this.contacts.indexOf(contact) + 1;
        this.router.navigate(['../contact/edit', id], {
            relativeTo: this.route,
        });
    }

    onDeleteContact(contact: ContactsDto) {
        this.contactsService.deleteContact(contact);
    }

    getInfo(contact: ContactsDto) {
        const id = this.contacts.indexOf(contact) + 1;
        this.router.navigate(['../contact', id], { relativeTo: this.route });
    }

    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }

        this.selection.select(...this.contacts);
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: ContactsDto): string {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
            row.phone
        }`;
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        if (this.dataSource) {
            const numRows = this.contacts.length;
            // tslint:disable-next-line: triple-equals
            return numSelected == numRows;
        }
        return false;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
