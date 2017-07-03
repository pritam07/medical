import { Component, OnInit, HostListener, HostBinding, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './search.service';
import { HeroService } from '../addlisting/addlisting.service';
import { List } from '../list';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MdSnackBar} from '@angular/material';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {isUndefined} from "util";



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  host: {
    '(document:click)': 'clickout($event)',
  },
  providers: [SearchService]

})
@HostListener('document:click', ['$event'])
export class SearchComponent implements OnInit {
  // heroes: Observable<List[]>;
  public loading: any;
  heroes: any;
  lists: any;
  private searchTerms = new Subject<string>();
  selectedHero: List;
  serviceCalled: any;
  showloader: any;
  isShowList: any;
  checkAlphabet: any;
  isShowSearch: any;

  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.isShowList = true;
    } else {
      this.isShowList = false;
    }
  }
  constructor(
    private heroService: HeroService,
    private heroSearchService: SearchService,
    private router: Router, private eRef: ElementRef,
    public snackBar: MdSnackBar) {
  //  this.loading = null;
    this.serviceCalled = function () {
      this.heroes =  this.searchTerms
        .debounceTime(100)        // wait 300ms after each keystroke before considering the term
        .distinctUntilChanged()
        .do(_ => this.loading = true)// ignore if next search term is same as previous
        .switchMap(term => term   // switch to new observable each time the term changes
          // return the http search observable
          ? this.heroSearchService.search(term)
          // or the observable of empty heroes if there was no search term
          : Observable.of<List[]>([]))
        .debounceTime(1300)
        .do(_ => this.loading = false)
        .catch(error => {
          // TODO: add real error handling
          console.log(error);
          return Observable.of<List[]>([]);
        });
    };

  }


  // Push a search term into the observable stream.


  ngOnInit(): void {
    this.serviceCalled();
  }
  search(term: string, event) {
    if (term.match(/^([A-Za-z])/)) {
      this.checkAlphabet = true;
    } else if (term.match(/^[0-9]+$/)) {
      this.checkAlphabet = false;
    }
    this.showloader = false;
    this.isShowSearch = true;
    if (this.eRef.nativeElement.contains(event.target)) {
     // this.isShowList = true;
    }  else {
      this.isShowList = false;
    }
    this.searchTerms.next(term);
   /* setTimeout(() => {
      if(this.heroes) {
        setTimeout(() => {
        this.heroes.subscribe(val => {this.lists = val; console.log(JSON.stringify(this.lists)); });
    tTimeout(() => {
      }
    }, 2500);*/
    // }
  }
/*  addMore(term: string, getlimit: number) {
    this.heroSearchService.getLimit(getlimit);
    this.searchTerms.next();
    this.searchTerms.next(term);
  }*/
  onScrollDown (term: string, getlimit: number) {
    this.heroSearchService.getLimit();
    // this.searchTerms.next('b');
    this.searchTerms.next('');
    this.showloader = true;
/*
    setInterval(() => {
      this.loading = true;
    }, 1200);
*/

    setTimeout(() => {
      this.searchTerms.next(term);
        this.showloader = false;
    }, 500);
    // this.searchTerms.next(term);
  //  this.searchTerms.next(term);

    // add another 20 items
  /*  const start = this.sum;
    this.sum += 20;
    this.addItems(start, this.sum);*/
  }

  delete(hero: List, term: string): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.snackBar.open('Delete Sucessfully', 'close', {
          duration: 2000,
        });
       // if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

  gotoDetail(hero: List): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}

/*function init() {
  document.getElementById('search-box').onkeyup = function () {
    document.getElementById('isShow').style.display = "block";
  };

  document.getElementById('isShow').onclick = function () {
    document.getElementById('isShow').style.display = "block";
  };
  document.addEventListener('click', function () {
    document.getElementById('isShow').style.display = "none";
  });
}
window.onload = init;*/
