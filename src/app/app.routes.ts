import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MemberpageComponent } from './memberpage/memberpage.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PracticeComponent } from './practice/practice.component';
import { TabledataComponent } from './tabledata/tabledata.component';


export const routes: Routes = [
    {
         path:'',component:HomepageComponent
    },
    {
        path:'details',component: RegisterComponent
    } ,
    {
        path:'login',component:LoginpageComponent
    },
    {
        path:'memeber',component:MemberpageComponent
    },
    {
        path:'register',component:RegisteruserComponent
    },
    {
        path:'dashboard',component:DashboardComponent
    },
    {
        path:'practice',component:PracticeComponent
    },{
        path:'tabledata',component:TabledataComponent
    }
];

