import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SessioniService } from '../../services/sessioni.service';
import { SessioneDTO } from '../../DTO/SessioneDTO';
import { TopMenuComponent } from "../top-menu/top-menu.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-sessioni',
  imports: [CommonModule,TopMenuComponent, InputTextModule,DataViewModule,TagModule, ButtonModule, CardModule, DialogModule,ReactiveFormsModule],
  templateUrl: './sessioni.component.html',
  styleUrl: './sessioni.component.css'
})
export class SessioniComponent implements OnInit{

  addSessioneShow: boolean = false;
  sessioni: SessioneDTO[] = [];
  sessioneForm: FormGroup;

  constructor(private fb: FormBuilder,private sessionService: SessioniService,private cdr: ChangeDetectorRef) {
    this.sessioneForm = this.fb.group({
      nome: ['', [Validators.required]],
      descrizione: ['', [Validators.required]],
      durata: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.sessionService.getSessioni().subscribe(res => {
      this.sessioni=res;
    });
  }

  addSession() {
    this.addSessioneShow = true;
  }

  getSeverity(_t12: any): "success"|"secondary"|"info"|"warn"|"danger"|"contrast"|undefined {
    throw new Error('Method not implemented.');
  }

  onSubmitSessione() {
    this.sessionService.addSessione(this.sessioneForm.value).subscribe(res => {
      this.sessionService.getSessioni().subscribe(res2 => {
        this.sessioni=res2;
      });
    });
    this.addSessioneShow=false;
  }

  deleteSession(item: SessioneDTO) {
    this.sessionService.deleteSession(item.id).subscribe(res => {
      this.sessionService.getSessioni().subscribe(res2 => {
        this.sessioni=res2;
      });
    });
  }
}
