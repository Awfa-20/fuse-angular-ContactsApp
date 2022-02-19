import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { ContactsDto } from '../contactsDto';
import { ActivatedRoute, Router } from '@angular/router';

const CONTACTS_DATA: ContactsDto[] = [
    {id: 1, first_Name: 'Can', last_Name: 'Van', company: 'ITM', job_Title: 'Junior', email: 'can@gmail.com', phone: '05556668899', notes: ''},
    {id: 2, first_Name: 'Can', last_Name: 'Van', company: 'ITM', job_Title: 'Junior', email: 'can@gmail.com', phone: '05556668899', notes: ''},
    {id: 3, first_Name: 'Can', last_Name: 'Van', company: 'ITM', job_Title: 'Junior', email: 'can@gmail.com', phone: '05556668899', notes: ''},
    {id: 4, first_Name: 'Can', last_Name: 'Van', company: 'ITM', job_Title: 'Junior', email: 'can@gmail.com', phone: '05556668899', notes: ''},
    {id: 5, first_Name: 'Can', last_Name: 'Van', company: 'ITM', job_Title: 'Junior', email: 'can@gmail.com', phone: '05556668899', notes: ''},
    {id: 6, first_Name: 'Can', last_Name: 'Van', company: 'ITM', job_Title: 'Junior', email: 'can@gmail.com', phone: '05556668899', notes: ''},
    {id: 7, first_Name: 'Can', last_Name: 'Van', company: 'ITM', job_Title: 'Junior', email: 'can@gmail.com', phone: '05556668899', notes: ''},
    {id: 8, first_Name: 'Can', last_Name: 'Van', company: 'ITM', job_Title: 'Junior', email: 'can@gmail.com', phone: '05556668899', notes: ''}
  ];
  

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
    isLoading = false;
    displayedColumns = ['select', 'id', 'full_Name', 'email', 'phone', 'jobTitle&Company', 'edit', 'delete'];
    dataSource = CONTACTS_DATA;
    // dataSource: MatTableDataSource<ContactsDto> = new MatTableDataSource();

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    allowMultiSelect = true;
    selection: SelectionModel<ContactsDto>;
  
    constructor(private route: ActivatedRoute, private router: Router) {
      this.selection = new SelectionModel<ContactsDto>(this.allowMultiSelect, []);
    }
  
    masterToggle() {
      if (this.isAllSelected()) {
        this.selection.clear();
        return;
      }
  
      this.selection.select(...this.dataSource);
    }
  
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: ContactsDto): string {
      if (!row) {
        return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
    }
  
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      if (this.dataSource) {
        const numRows = this.dataSource.length;
        // tslint:disable-next-line: triple-equals
        return numSelected == numRows;
      }
      return false;
    }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.schoolParams.school_Name = filterValue;
    // this.schoolParams.phone = filterValue;
    // this.loadSchools();
  }


}
