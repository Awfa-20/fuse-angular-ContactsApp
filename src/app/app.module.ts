import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { TranslateModule } from '@ngx-translate/core';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { ContactsListComponent } from './main/contacts/contacts-list/contacts-list.component';
import { ContactsCreateComponent } from './main/contacts/contacts-create/contacts-create.component';
import { ContactModule } from './main/contacts/contact.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './main/contacts/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'sample'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        ContactsListComponent,        
        ContactsCreateComponent,

    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material    
        MaterialModule,


        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        FlexLayoutModule,
        SampleModule,
        ContactModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
