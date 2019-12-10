import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort, MatDialog} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { GamesService }  from '../../services/games.service';
import { gamesList }  from '../../sportsDraft.model';
import { ErrorComponent } from '../errors/error.component';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  loading = true;
  games: gamesList[];
  displayedColumns: string[] = ['select','teamLogoID','teamID', 'gameDate', 'gameDayofWk', 'gameTime'];
  pageSize = 4;
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<gamesList>(false, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private gamesService:GamesService, private dialog: MatDialog) {}
    ngOnInit() {
      this.fetchGames();

    }

    fetchGames() {
      this.gamesService.getGames()
      .subscribe((data: gamesList[]) => {
        this.games = data;
        console.log(this.games);
        this.dataSource = new MatTableDataSource(this.games);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.loading  = false;
    });
    }

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      };
    }

    selectedTicket(event: any, row: any) {
      console.log(row);
      this.dialog.open(ErrorComponent,{ data: {
          message:  "You have selected " + row.teamID + " on " + row.gameDate
      }});
      event ? this.selection.toggle(row) : null;
      var Obj = {
        userID: 'ezmaac',
        teamID: 'Winnipeg Jets'
      };
      this.gamesService.gameSelected(Obj).subscribe(
        (srty: {
          userID: string[],
          teamID: string[],
        }) => {
          console.log('return call');
          console.log(srty);
        }
      );

    }
}
