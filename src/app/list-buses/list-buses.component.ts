import { Component, OnInit } from '@angular/core';
import { BusService } from '../services/services.service';
import { Bus} from '../model/bus.model';

@Component({
  selector: 'app-list-buses',
  templateUrl: './list-buses.component.html',
  styleUrls: ['./list-buses.component.css']
})
export class ListBusesComponent implements OnInit {
 buses : Bus[] =[];
 msg : String ="";
  constructor(private service : BusService) { }

  ngOnInit(): void {
    this.service.list().then(flts  => flts.subscribe(data => this.buses = data));
  }

  delete(idx : number) {
    var ans = confirm("Are you sure to delete?")
    if(ans)
      this.service.remove(idx);
  }
 
}
