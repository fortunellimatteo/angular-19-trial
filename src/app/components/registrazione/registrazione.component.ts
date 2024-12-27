import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { v4 as uuidv4 } from 'uuid';
import { RegistrazioneUtenteService } from '../../services/registrazione-utente.service';
import * as L from 'leaflet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  imports: [CommonModule,ButtonModule,ReactiveFormsModule,InputTextModule,CardModule,DropdownModule,CheckboxModule,DialogModule,PanelModule
  ],
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.css'
})
export class RegistrazioneComponent implements OnInit, AfterViewInit {
  dialoShow: boolean = false;
  dialogErrorShow: boolean = false;
  errorLoginShow: boolean = false;
  userForm: FormGroup;
  loginForm: FormGroup;
  ruoli = [
    { label: 'Interno', value: 'interno' },
    { label: 'Fornitore', value: 'fornitore' },
    { label: 'Cliente', value: 'cliente' },
  ];

  // leaflet
  map: any;
  varCheckControlUser: any;

  constructor(private fb: FormBuilder, private userService: RegistrazioneUtenteService,private router: Router) {
    this.userForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      azienda: ['', Validators.required],
      ruolo: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      allergie: [false],
      trattamentoDati: [false],
      qrcodeUUID: ['']
    });
    this.loginForm = this.fb.group({
      emailLogin: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.initMap();
    this.dialoShow = false;
    this.errorLoginShow = false;
    this.dialogErrorShow = false;
  }

  ngAfterViewInit(): void {
  }

  onSubmit() {
    if (this.userForm.valid) {
      const guid = uuidv4();
      this.userForm.patchValue({
        qrcodeUUID: guid
      });
      this.userService.checkUser(this.userForm.get('email')?.value).subscribe(res => {
        if(res.length>0) {
          this.dialogErrorShow = true;
        } else {
          this.userService.addUser(this.userForm.value).subscribe(data => {
          });
          this.userForm.reset();
          this.dialoShow = true;
        }
      });

    } else {
      console.log('Il modulo non è valido.');
    }
  }

  goScanner() {
    this.router.navigate(['/scanner']);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [45.4087, 9.1478],
      zoom: 15
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Via Giuseppe di Vittorio, 6 20057 Assago (MI)'
    }).addTo(this.map);

    // Aggiungi un marker per Forum Assago
    const marker = L.marker([45.4087, 9.1478]).addTo(this.map);
    marker.bindPopup('Forum Assago').openPopup();
  }

  onSubmitLogin() {
    if (this.loginForm.valid) {
      this.userService.checkUser(this.loginForm.get('emailLogin')?.value).subscribe(data => {
        this.varCheckControlUser = data
        if(this.varCheckControlUser.length!=0) {
          if(this.varCheckControlUser[0].ruolo==="interno") {
            this.router.navigate(['/scanner'],{ queryParams: { ruolo: this.varCheckControlUser[0].ruolo} });
          } else{
            this.router.navigate(['/home'],{ queryParams: { ruolo: this.varCheckControlUser[0].ruolo} });
          }
        }
        this.errorLoginShow=true;
        this.loginForm.reset();
      });
    } else {
      console.log('Il modulo non è valido.');
    }
  }
}
