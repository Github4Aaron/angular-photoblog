import { Component } from '@angular/core';

@Component({ // This is a Component decorator
    selector: 'app-root',// This inserts this component into the app-root placeholder found in the index.html file
    template: '<h2>Hello World</h2>', 
    styles: [
        'h2 {font-family: sans-serif; font-size: 1.2em}'
    ]
})
export class AppComponent {

}
