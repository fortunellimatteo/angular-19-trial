import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  imports: [MenubarModule],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent implements OnInit{
  items: any[] = [];
  isInterno: boolean = false;

  constructor(private router: ActivatedRoute){}

  ngOnInit() {

    this.router.queryParams.subscribe(params => {
      // L'operazione ternaria
      this.isInterno = (params['ruolo'] === 'interno') ? true : false;
    });

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      {
        label: 'Censimento sessioni',
        icon: 'pi pi-info-circle',
        routerLink: '/censimentoSessioni',
        visible: this.isInterno
      },
      {
        label: 'Sessioni',
        icon: 'pi pi-info-circle',
        routerLink: '/registraSessione',
        visible: !this.isInterno
      },
      {
        label: 'Contatti',
        icon: 'pi pi-envelope',
        routerLink: '/contatti'
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        items: [
          { label: 'Profilo', icon: 'pi pi-user', routerLink: '/profilo' },
          { label: 'Logout', icon: 'pi pi-sign-out', routerLink: '/logout' }
        ]
      }
    ];
  }
}
