import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
 /*  selector: 'app-hello-world', */
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor(private hwService:helloWorldService) { }

  ngOnInit() {
  }

  onClickOfDummy(){
    this.hwService.invokeDummyService().subscribe();
  }

}


@Injectable({
  providedIn:'root',
})
export class helloWorldService{

  constructor(private http:HttpClient){

  }

  invokeDummyService(){
    return this.http.get("/some/api").pipe(
      catchError(error=>{
        console.error(error);
        return of("some error")
      })
    )
  }
}
