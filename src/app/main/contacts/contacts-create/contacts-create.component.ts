import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsDto } from '../contactsDto';

@Component({
    selector: 'app-contacts-create',
    templateUrl: './contacts-create.component.html',
    styleUrls: ['./contacts-create.component.scss'],
})
export class ContactsCreateComponent implements OnInit {
    id!: number;
    contact: ContactsDto = {id: 0} as ContactsDto;
    email: FormControl;
    createContactForm!: FormGroup;
    editMode = false;

    constructor(private fb: FormBuilder) {}

    getErrorMessage() {
        if (this.email.hasError('required')) {
          return 'You must enter a value';
        }
    
        return this.email.hasError('email') ? 'Not a valid email' : '';
      }

    ngOnInit(): void {
        this.intitContactForm();
        this.loadForm();
    }

    onClick() {}

    private intitContactForm() {
        
        // if (this.editMode) {
        //       this.schoolsService.getSchoolById(this.id).subscribe(response=>
        //         { this.school= response;
        //           this.loadForm();
        //         });
        // } else {
        // this.loadForm();
        // }
    }

    private loadForm() {
        this.createContactForm = this.fb.group({
            'id': [this.contact.id],
            'first_Name': [this.contact.first_Name],
            'last_Name': [this.contact.last_Name],
            'company': [this.contact.company],
            'job_Title': [this.contact.job_Title],
            'email': [this.contact.email, Validators.email],
            'phone': [this.contact.phone],
            'notes': [this.contact.notes],
        });
    }

    onSubmit() {
        const contactDto: ContactsDto = this.createContactForm.value;
        console.log(contactDto);
      }
}
