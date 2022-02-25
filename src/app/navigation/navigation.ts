import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }, 
            {
                id       : 'add_Contact',
                title    : 'Add Contact',
                translate: 'NAV.Add Contact.TITLE',
                type     : 'item',
                icon     : 'add',
                url      : '/contact/new',
            },
            {
                id       : 'contacts',
                title    : 'Contacts',
                translate: 'NAV.Contacts.TITLE',
                type     : 'item',
                icon     : 'person',
                url      : '/contacts',
            }, 
            {
                id       : 'import',
                title    : 'Import',
                translate: 'NAV.Import.TITLE',
                type     : 'item',
                icon     : 'file_download',
                url      : '/sample',
            }, 
            {
                id       : 'export',
                title    : 'Export',
                translate: 'NAV.Export.TITLE',
                type     : 'item',
                icon     : 'file_upload',
                url      : '/sample',
            }
        ]
    }
];
