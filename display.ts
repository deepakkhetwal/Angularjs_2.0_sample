///<reference path="modules/angular2.d.ts" />
import {Component, View, bootstrap, For} from 'angular2/angular2';
@Component({selector:'display'})
@View({
	templateUrl: 'modules/view/display-list.html',
	directives: [For]
})
class Display
{
	myName: string;
	friendNames: Array<string>;
	constructor(){
		this.myName = "Deepak Khetwal";
		this.friendNames = ['Neeraj', 'Falgun', 'Laxman'];
	}
}
bootstrap(Display);