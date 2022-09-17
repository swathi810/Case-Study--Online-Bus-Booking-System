import { Component, OnInit } from '@angular/core';
import { Bus } from '../model/bus.model';
import { BusService } from '../services/services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {
  bus : Bus = new Bus();
  cities : string[] = ["Mumbai","Delhi","Chennai", "Hyderabad","Banglore","Vizag"];
  travels : string[] = ["kaveri", "Morning Star", "Orange","Rajdhani"];
  constructor(private service : BusService, private router : Router) { }
  
  ngOnInit(): void {
  }
  save(){
    this.service.add(this.bus);
    this.router.navigate(['list']);
  }

}
