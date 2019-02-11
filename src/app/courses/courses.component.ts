import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
Nama = 'Bahrudin Cholid Rizky Pambudi';
Alamat = 'JL.Kapi Anala 1 15M 4-5 sawojajar 2';
getNama(){
  return 'Nama :'+this.Nama;
}
getAlamat(){
  return 'Nama :'+this.Alamat;
}
title='Angular';
getTitle(){
    return this.title;
}
judul='Ini tugas pertama Biodata';
getJudul(){
  return this.judul;
}
Hobby;
Courses;
Length;

 constructor(private service:CoursesService) {
   this.Hobby=service.getHobby();
   this.Courses=service.getAuthor();
   this.Length=service.getAuthor().length;
  }

  ngOnInit() {
    this.tanggal = new Date().getTime();
  }

}
