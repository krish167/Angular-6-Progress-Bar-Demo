import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

	buttons: any;
    buttonsOptions: any;
    barOptionsDropDown: any;
    bars: any;
    barOptions: any;
    apiMax = 100;
    curSelBar = 0;
    limitWidth:any;

    ngOnInit(){

        fetch('http://pb-api.herokuapp.com/bars')
        .then((response) =>  response.json())
        .then(myJSON => {
            	console.log(myJSON);
                this.apiMax =  myJSON.limit;
                this.buttons =  myJSON.buttons;
                this.bars = myJSON.bars;
                this.barOptions =  myJSON.bars.map((bar, index) => ({ key: index, name: `#progress${index+1}`, value: bar, isExceed: false}));
                this.barOptionsDropDown = this.barOptions;
                this.buttonsOptions = myJSON.buttons.map((btn, index) => ({ key: index, value: btn }));
        })
    }

    // dropdown change
    onChange = (event) => {
        const val = event.target.value;
        this.curSelBar = parseInt(val, 10)
    }

    // new baroption values
    getNewBarValues = (curVal, changeVal) => {
        const newVal = curVal + changeVal;
        if (newVal < 0) return 0;
        if (newVal > this.apiMax) return this.apiMax;
        return newVal;
    }

    // setting exceeded key value for hightlight as red
    getNewBarExceededValue = (curVal, changeVal) => {
    	const newVal = curVal + changeVal;
    	if(newVal > 100) return true
    	return false
    }

    // progress bar button click
    buttonClick = (val) => {
        const newBarOptions = [ ...this.barOptions ].map(bo => {
            if ( bo.key === this.curSelBar ) {
                return { ...bo, value: this.getNewBarValues(bo.value, val), isExceed: this.getNewBarExceededValue(bo.value, val) }
            }
            return bo;
        });
        this.barOptions = newBarOptions;
    }


}
