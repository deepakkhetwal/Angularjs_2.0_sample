///<reference path="modules/angular2.d.ts" />
import{Component, View, bootstrap} from 'angular2/angular2';
@Component({
	selector: 'my-app'	
})
@View({
	templateUrl: 'modules/view/display-list.html'
})
class MyAppComponent{
	name: string;
	constructor()
	{
		this.name = 'Deepak';
	}
}
bootstrap(MyAppComponent);
