import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './productcomp/product.component';
import  {ProductComponentNew} from './Allaboutcomponents/productnew.component'
import { TheIfComponent } from './directivedemos/TestIF/testngif.component';
import { EmployeeListComponent } from './directivedemos/TestFor/employeeList.component';
import {TheSwitchComponent} from './directivedemos/Testswitch/personList.component'
import { DemoAttrComponents } from './directivedemos/attrdemo/attrdemo.component';
import { HighlightDirective } from './directivedemos/CusrAttrDemo/highlight.directive';
import { DemoBindingsComponent } from './DataBindingDemos/databinding.component';
import{DemoTwoWayComponent} from './DataBindingDemos/twoway.component'
import { SimplecurdProduct } from './productcomp/crud_operation.component';
import { TestPipes } from './DemoPipes/testpipes';
import { ApplyPipe, ApplyPurePipe } from './DemoPipes/pipetype.pipe';
import {PipeComponent} from './DemoPipes/pipetype.component';
import { BarCodePipe } from './DemoPipes/pipetype1.pipe';
import { CustomdemoDirective } from './directivedemos/customhost.directive';
import { LoginComponent } from './Allaboutcomponents/Login.component';
import { ConatctFormComponent } from './FormsDemos/contact.component';
import { ValidFormComponent } from './FormsDemos/validForm.component';
import { CustomValidatorComp } from './FormsDemos/CustomValidator/customvalid.component';
@NgModule({
  declarations: [
    AppComponent,ProductComponent,TheIfComponent,EmployeeListComponent,TheSwitchComponent,
    DemoAttrComponents,HighlightDirective,DemoBindingsComponent,
    DemoTwoWayComponent,SimplecurdProduct,TestPipes,ApplyPipe,ApplyPurePipe,PipeComponent,
    BarCodePipe,ProductComponentNew,CustomdemoDirective,LoginComponent,
    ConatctFormComponent,ValidFormComponent,CustomValidatorComp

  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
