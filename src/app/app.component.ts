import { Component } from '@angular/core';

@Component({ // This is a Component decorator
    selector: 'app-root',// This inserts this component into the app-root placeholder found in the index.html file
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
   emoji: string[] = ['🎉', '😍', '😜', '👍']; //If you delete this declaration, an error of "Property emoji does not exist..."
    //TS can infer type defintions, when a property is assigned a value, no need to specify that it is an array of strings
    }


//Component has two required properties: selector and template
//Once the array has been set once, you can do away with the constructor.
