import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'Learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/angular.jpg'},
    {'id':2,'name':'Learn Typescript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/typescript.jpg'},
    {'id':3,'name':'Learn Nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/nodejs.jpg'},
    {'id':4,'name':'Learn Reactjs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/reactjs.jpg'},

    {'id':5,'name':'Learn HTML','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/angular.jpg'},
    {'id':6,'name':'Learn CSS','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/typescript.jpg'},
    {'id':7,'name':'Learn Python','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/nodejs.jpg'},
    {'id':8,'name':'Learn Sql','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/reactjs.jpg'},

    ]
    
  
  
}
