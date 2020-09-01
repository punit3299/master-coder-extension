import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArraysComponent } from './components/arrays/arrays.component';
import { StringComponent } from './components/string/string.component';
import { LinkedListComponent } from './components/linked-list/linked-list.component';
import { StackComponent } from './components/stack/stack.component';
import { QueueComponent } from './components/queue/queue.component';
import { TreesComponent } from './components/trees/trees.component';
import { HeapComponent } from './components/heap/heap.component';
import { RecursionComponent } from './components/recursion/recursion.component';
import { HashingComponent } from './components/hashing/hashing.component';
import { GraphComponent } from './components/graph/graph.component';
import { GreedyComponent } from './components/greedy/greedy.component';
import { DpComponent } from './components/dp/dp.component';
import { DcComponent } from './components/dc/dc.component';
import { BacktrackingComponent } from './components/backtracking/backtracking.component';
import { BitsComponent } from './components/bits/bits.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'arrays',component:ArraysComponent},
  {path:'string',component:StringComponent},
  {path:'linked-list',component:LinkedListComponent},
  {path:'stack',component:StackComponent},
  {path:'queue',component:QueueComponent},
  {path:'trees',component:TreesComponent},
  {path:'heap',component:HeapComponent},
  {path:'recursion',component:RecursionComponent},
  {path:'hashing',component:HashingComponent},
  {path:'graph',component:GraphComponent},
  {path:'greedy',component:GreedyComponent},
  {path:'dp',component:DpComponent},
  {path:'dc',component:DcComponent},
  {path:'backtracking',component:BacktrackingComponent},
  {path:'bits',component:BitsComponent},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
