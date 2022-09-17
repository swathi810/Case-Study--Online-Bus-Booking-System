import { Component, OnInit } from '@angular/core';
import { Bus } from '../model/bus.model';
import { BusService } from '../services/services.service';
@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {
  src : string ="";
  msg : string ="";
  id : number =0;
  destiny : string ="";
  source : string[] = ["Mumbai","Delhi","Chennai", "Hyderabad","Banglore","Vizag"];
  destination : string[] = ["Mumbai","Delhi","Chennai", "Hyderabad","Banglore","Vizag"];

  buses : Bus[] =[];
  constructor(private service : BusService) { }

  ngOnInit(): void {
  }
  find(){
    this.service.route(this.src, this.destiny).then(flts => flts.subscribe(data => this.buses = data));
 }
 book(c :number, co:number) : void {
  if(co<=0){
    this.msg="Sorry!.. Seats are not available for the selected bus";
  }
  else{
    this.id=c;
    this.service.updateSeats(this.id);
    this.msg="Your seat will be confirmed after successfull payment";
  }
  
}

}
