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

  private formatDateToISO(date: Date | undefined): string {
    if (!date) return '';
    return new Date(date).toISOString().split('T')[0];
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.clienteService.obterPorId(id)
        .subscribe({
          next: (cliente) => {
            if (cliente) {
              this.cliente = {
                ...cliente,
                dataNascimento: cliente.dataNascimento ? new Date(cliente.dataNascimento).toISOString().split('T')[0] : undefined
              };
            }
          },
          error: (error) => {
            console.error('Erro ao carregar cliente:', error);
            alert('Erro ao carregar dados do cliente!');
            this.router.navigate(['/clientes']);
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
