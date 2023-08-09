import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { AllGamesComponent } from './all-games/all-games.component';
import { MatchesRoutingModule } from './matches-routing.module';
import { NewMatchComponent } from './new-match/new-match.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatchDetailComponent } from './match-detail/match-detail.component';



@NgModule({
  declarations: [
    AllGamesComponent,
    NewMatchComponent,
    MatchDetailComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatchesRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class MatchesModule { }
