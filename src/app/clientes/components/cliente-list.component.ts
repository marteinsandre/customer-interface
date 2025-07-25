import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/models/cliente.model';
import { ClienteService } from '../../clientes/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.scss'
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.clienteService.listar().subscribe(clientes => this.clientes = clientes);
  }

  novoCliente(): void {
    this.router.navigate(['clientes/novo']);
  }

  editarCliente(id: string | undefined): void {
    if (id) {
      this.router.navigate(['/clientes/editar', id]);
    } else {
      console.error('ID inválido para edição:', id);
    }
  }

  excluirCliente(id: string | undefined): void {
    if (id && confirm('Deseja realmente excluir este cliente?')) {
      this.clienteService.excluir(id).subscribe(() => this.carregarClientes());
    }
  }
}
