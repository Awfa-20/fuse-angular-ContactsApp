import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactsDto } from "../contactsDto";

@Component({
    selector: "app-contacts-create",
    templateUrl: "./contacts-create.component.html",
    styleUrls: ["./contacts-create.component.scss"],
})
export class ContactsCreateComponent implements OnInit {
    id!: number;
    contact: ContactsDto = {} as ContactsDto;
    createContactForm!: FormGroup;
    editMode = false;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.intitContactForm();
    }

    onClick() {}

    private intitContactForm() {
        if (this.editMode) {
            //   this.schoolsService.getSchoolById(this.id).subscribe(response=>
            //     { this.school= response;
            //       this.loadForm();
            //     });
        } else {
            this.loadForm();
        }
    }

    private loadForm() {
        this.createContactForm = this.fb.group({
            'id': [this.contact.id, Validators.required],
            'first_Name': [this.contact.first_Name],
            'last_Name': [this.contact.last_Name],
            'company': [this.contact.company],
            'job_Title': [this.contact.job_Title],
            'email': [this.contact.email],
            'phone': [this.contact.phone],
            'notes': [this.contact.notes],
        });
    }
}
