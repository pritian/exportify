import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../api.service'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id;
  postResponse:any;
  postList =[];
  constructor(private activatedRoute: ActivatedRoute, private service : ApiService ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param =>{
     this.id =param.get('id');

    });


    this.service.singlePost().subscribe((resp) =>{  
      console.log(resp);
      this.postResponse = resp;
      for (let i = 0; i < this.postResponse.length; i++) {
        if (this.id == this.postResponse[i].userId) {
          this.postList.push(this.postResponse[i]);
        }
      }
      console.log(this.postList);
    })
  }

}
