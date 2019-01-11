import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BmiProvider } from '../../providers/bmi/bmi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  height:number;
  weight:number;
  bmivalue:number;

  constructor(private bmiRest:BmiProvider, public navCtrl: NavController) {

  }

  CalculateBMI(){
    console.log(this.height);
    console.log(this.weight);
    this.bmivalue=this.bmiRest.bmiCalculate(this.height,this.weight);
  }

}
