import {
      Component
    , OnInit
} from "@angular/core";

import {
    Http
} from "@angular/http";

import dialogs = require("ui/dialogs");
import "rxjs/Rx";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
    public pokemon: Array<any>;

    constructor(private http: Http) { 
        this.pokemon = [];
    }

    public ngOnInit() {

        this.http.get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .map( result => result.json())
        .flatMap(result => result.results)
        .subscribe(
            result => {
                this.pokemon.push(result);
            },
            error => {
                console.error(error);
            }
        );
     
    }

    public showInformation(index: number) { 

        this.http.get("https://pokeapi.co/api/v2/pokemon/" + index)
        .map( result => result.json())
        .flatMap(result => result.types)
        .map( result => 
            (<any> result).type.name
        )
        .toArray()
        .subscribe(
            result => {
                this.showDialog(result)
            });

    }

    public showDialog(data: Array<any>) { 

        dialogs.alert({title: "Information", message: "Pokemon of type(s) " + data.join(","),okButtonText: "OK"});

    }
}
