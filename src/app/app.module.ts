import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArraysComponent,
    StringComponent,
    LinkedListComponent,
    StackComponent,
    QueueComponent,
    TreesComponent,
    HeapComponent,
    RecursionComponent,
    HashingComponent,
    GraphComponent,
    GreedyComponent,
    DpComponent,
    DcComponent,
    BacktrackingComponent,
    BitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
