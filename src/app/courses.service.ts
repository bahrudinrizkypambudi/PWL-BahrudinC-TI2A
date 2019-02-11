import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  getAuthor(){
    return[
      'Author 1',
      'Author 2',
      'Author 3',
    ];
  }  
  getHobby(){
      return[
      {no:1,hobi:'renang',keterangan:'Renang 30 menit'},
      {no:2,hobi:'Travelling',keterangan:'Pada saat Weekend'},
      {no:3,hobi:'tidur',keterangan:'tidur jam siang'},
    ]  
  }
}
