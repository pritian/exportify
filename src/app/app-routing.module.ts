import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListComponent } from './list/list.component';
import { PostComponent } from './post/post.component';
import { LogginComponent } from './loggin/loggin.component';

const routes: Routes = [
{path: "", component:LogginComponent},
{path: "home", component: HomeComponentComponent},
{path: "login", component: LogginComponent},
{path: "list", component: ListComponent},
{path: 'post/:id', component: PostComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
