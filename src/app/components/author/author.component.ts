import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/ApiService';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  listAuthors= []
  loading= false

  constructor( private _apiService: ApiService ) { }

  ngOnInit(): void {
    this.getAuthors()
  }

  getAuthors():void{
    this._apiService.getAuthors().subscribe(data => {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.listAuthors = Object.values(data)
      }, 2000)
    })
  }

}
