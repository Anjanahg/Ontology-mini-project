import { Component } from '@angular/core';
import { Tvshow } from './tvshow';
import axios from "axios";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() {
  }

  cocktails=[];
  alcoholic;
  name;
  ingredients;
  deco;
  glass;
  resultList=[];
  newList;
  basealcohol;
  secondaryalcohol;
  straw;
  softner;
  smoothness;
  country;
  price;


  ngOnInit() {
    
  }


  cocktailDetails() {
   
    this.resultList=[];
    axios.post('http://localhost:8080/getAllCocktail',
    {

      alcoholic: this.alcoholic,
      smoothness:this.smoothness,
      price:this.price,
      country:this.country
    })
    .then((response) => {
      var arraylength = response.data.results.bindings.length;
       
      
      for(var i=0; i < arraylength; i++){
        
        var obj = {
          name:"",
          basealcohol:"",
          secondaryalcohol:"",
          straw:"",
          deco:"",
          glass:"",
          softner:""
        
        };

        this.name = response.data.results.bindings[i].cocktail.value.split("#")[1];
        this.basealcohol =  response.data.results.bindings[i].basealcohol.value.split("#")[1];
        this.secondaryalcohol =  response.data.results.bindings[i].secondaryalcohol.value.split("#")[1];
        this.straw =  response.data.results.bindings[i].straw.value.split("#")[1];
        this.deco =  response.data.results.bindings[i].deco.value.split("#")[1];
        this.glass =  response.data.results.bindings[i].glass.value.split("#")[1];
        this.softner =  response.data.results.bindings[i].softner.value.split("#")[1];
       
        obj.name = this.name;
        obj.basealcohol = this.basealcohol;
        obj.secondaryalcohol = this.secondaryalcohol;
        obj.straw = this.straw;
        obj.deco = this.deco;
        obj.glass = this.glass;
        obj.softner = this.softner;
        
        this.resultList.push((obj));
        
        
        
      }
      
      
      
    
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    }
  }