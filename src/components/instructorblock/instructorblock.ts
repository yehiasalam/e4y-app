import { Component, Input, OnInit } from '@angular/core';

import { InstructorPage } from '../../pages/instructor/instructor';

import { ConfigService } from '../../services/config';
@Component({
  selector: 'instructorblock',
  templateUrl: 'instructorblock.html'
})
export class InstructorBlock implements OnInit{

	shortbio:string='';
	showFull:boolean=false;
  	instructorPage = InstructorPage;
    
    @Input('instructor') instructor;
  	constructor(private config:ConfigService) {
  		
  	}

  	ngOnInit() {

  	}



}
