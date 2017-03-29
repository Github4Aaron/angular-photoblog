// Import global stylesheet
import './styles/main.css';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
//This helps with debugging errors in dev; should be changed when app is deployed
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

//The bootstrap property is needed by the module to know which component will act as the base of the entire application

//ERROR: EXCEPTION: The module AppModule was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.