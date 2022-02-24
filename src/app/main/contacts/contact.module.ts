import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsCreateComponent } from './contacts-create/contacts-create.component';
import { MaterialModule } from './material.module';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';

const routes = [
    { path: 'contacts', component: ContactsListComponent},
    { path: 'contact', component: ContactsCreateComponent},
    { path: 'contact/new', component: ContactsCreateComponent },
    { path: 'contact/edit/:id', component: ContactsCreateComponent },
    { path: 'contact/:id', component: ContactsDetailComponent}

];

@NgModule({
    declarations: [

    ContactsDetailComponent],

    imports: [
        RouterModule.forChild(routes),

        TranslateModule,
        MaterialModule,

        FuseSharedModule,
    ],
    exports: [
        // ContactsListComponent,
        // ContactsCreateComponent,
    ]
})


export class ContactModule {}
