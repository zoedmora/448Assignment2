import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];



@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})


export class ListingComponent implements OnInit {

  public model: any;
  public isCollapsed = false;
  public name: string = "Category";
  public names = ['assets/images/1.jpg','assets/images/2.jpg','assets/images/3.jpg','assets/images/4.jpg','assets/images/5.jpg','assets/images/6.jpg','assets/images/7.jpg','assets/images/8.jpg','assets/images/9.jpg']
  public prices = ['25', '282', '495', '1004', '99', '20', '79', '2500', '999']
  public titles = ['Momo design like new', 'Gibson rare', 'iPhone 5 64GB', 'Louis XIV slatted bed', 'Old writting machine', 'Mercedes tires', 'Fixie bike', 'Vega missile vintage rare++', 'Like a macbook but not']

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  constructor() { }

  changecity(txt) {
    this.model = txt.srcElement.value;
    localStorage.setItem('state', this.model);
  }

  changeCategory(_name: string) {
    if (this.name == _name) {
      this.name = "Category"
    }
    else
      this.name = _name;
    localStorage.setItem('category', _name);
    this.isCollapsed = false;
  }
  ngOnInit() {
    if (localStorage.getItem('state')) {
      this.model = localStorage.getItem('state');
    }
    if (localStorage.getItem('category')) {
      this.name = localStorage.getItem('category');
    }

  }

}
