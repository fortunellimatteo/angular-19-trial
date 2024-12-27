import { Routes } from '@angular/router';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { HomeComponent } from './components/home/home.component';
import { SessioniComponent } from './components/sessioni/sessioni.component';
import { RegistraSessioneComponent } from './components/registra-sessione/registra-sessione.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'registrazione',
        pathMatch:'full'
    },
    {
        path:'registrazione',
        component:RegistrazioneComponent
    },
    {
        path:'scanner',
        component:ScannerComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'censimentoSessioni',
        component:SessioniComponent
    },
    {
        path:'registraSessione',
        component:RegistraSessioneComponent
    }
];
