import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsCreateComponent } from './contacts-create/contacts-create.component';

const routes = [
    { path: 'contact-list', component: ContactsListComponent },
    { path: 'contact-create', component: ContactsCreateComponent },
];

@NgModule({
    declarations: [
        // ContactsListComponent,
        // ContactsCreateComponent,
    ],

    imports: [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule
    ],
    exports: [
        // ContactsListComponent,
        // ContactsCreateComponent,
    ]
})


export class ContactModule {}
