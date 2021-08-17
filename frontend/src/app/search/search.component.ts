import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SearchService } from '../services/search.service';

import { Card } from '../models/card.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  loggedIn = false

  pokemon = ''
  cards: Card[] = []
  
  tempCard = {
    pokemon: '',
    types: [],
    value: 0,
    img: '',
    logo: ''
  }

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    // check login status
  }
  
  // find cards
  onFindCards(form: NgForm) {
    this.pokemon = form.value.pokemon

    //Search Service
    this.searchService.cardSearchHandler(this.pokemon)
      .subscribe((response: any) => {
        response.forEach((element: any) => {
          
          // Assign name to card
          if (element.name) {
            this.tempCard.pokemon = element.name
          } else { this.tempCard.pokemon = '' }
          // Assign type to card
          if (element.types) {
            this.tempCard.types = element.types
          } else { this.tempCard.types = [] }
          // Assign value to card
          // if (element.tcgplayer.prices.holofoil) {
          //   this.tempCard.value = element.tcgplayer.prices.holofoil.market
          // } else { this.tempCard.value = 0 }
          // Assign img url to card
          if (element.images.small) {
            this.tempCard.img = element.images.small
          } else {
            this.tempCard.img = ''
          }
          // Assign logo
          if (element.set.images.symbol) {
            this.tempCard.logo = element.set.images.logo
          } else {
            this.tempCard.logo = ''
          }
          
          // push card to cards
          this.cards.push(this.tempCard)
          // init temp card
          this.tempCard = {
            pokemon: '',
            types: [],
            value: 0,
            img: '',
            logo: ''
          }
      })
        form.resetForm()
    });
    this.cards = []
  }

  onCardInfo(cardIndex: any) {
    console.log(this.cards[cardIndex])
  }
}
