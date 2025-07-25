import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/models/cliente.model';
import { ClienteService } from '../../clientes/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.scss'
})
export class ClienteFormComponent implements OnInit {
  cliente: Cliente = new Cliente();
  isEdit = false;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.clienteService.obterPorId(Number(id)).subscribe(cliente => {
        if (cliente) {
          this.cliente = { ...cliente };
        } else {
          alert('Cliente não encontrado!');
          this.router.navigate(['../'], { relativeTo: this.route });
        }
      });
    }
  }

  salvar(): void {
    if (this.isEdit) {
      this.clienteService.atualizar(this.cliente).subscribe(() => {
        alert('Cliente atualizado com sucesso!');
        this.router.navigate(['/clientes']);
      });
    } else {
      this.clienteService.criar(this.cliente).subscribe(() => {
        alert('Cliente cadastrado com sucesso!');
        this.router.navigate(['/clientes']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/clientes']);
  }
}
