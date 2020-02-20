import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutHomeComponent } from './RoutingDemos/abouthome.component';
import { AboutComponent } from './RoutingDemos/about.component';
import { AboutItemComponent } from './RoutingDemos/aboutItem.component';
import { MessagesComponent } from './RoutingDemos/Messages/messages.component';
import { PhotosComponent } from './RoutingDemos/Photos/photos.component';
import { NotFoundComponent } from './RoutingDemos/not-found.component';
import { HomeComponent} from './RoutingDemos/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
        path: 'about', component: AboutComponent,
        children: [
          { path: '', component: AboutHomeComponent },
          { path: 'item/:id', component: AboutItemComponent }
        ]
  },
  { path: 'messages', component: MessagesComponent },
  { path: 'photos', component: PhotosComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
