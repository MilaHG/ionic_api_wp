import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {TerritoiresPage} from "../territoires/territoires";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // TODO Rajouter l'intro avec les slides
  tab1Root = HomePage;
  tab2Root = TerritoiresPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
