import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tableData:any;
  name: string;
  
  constructor( private service : ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getList().subscribe((resp) =>{
      console.log(resp);
      this.tableData = resp;
    })

    

 
  }

  search(e){
    console.log(e);
    this.tableData = this.tableData.filter(resp =>{
      return resp.name.match(this.name);
    })

  }

  

}
