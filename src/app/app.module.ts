import { NgModule } from '@angular/core';  // Import keyword is part of ES6 syntax.  NgModule is a decorator
//NgModuel is foundation for any Angular app
import { BrowserModule } from '@angular/platform-browser';//@angular is newer feature of NPM and supports namespaced packages
//Angular was designed to be cross-platform
import { AppComponent } from './app.component'


// Angular will pack BrowserModule with AppModule  
//Angular's compiler depends on decorator to map components and compose app in efficient way.

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent], //Before using a component for the first time, we'll need to add them to the declarations array
    bootstrap: [AppComponent] //The bootstrap array is a collection of top level components that acts as an entry point or the root to the application.
     
})  

export class AppModule {  //exporting so it is available in other modules   
    //Metadata is info used by angular to associate stylesheets, html templates to modules or component

}