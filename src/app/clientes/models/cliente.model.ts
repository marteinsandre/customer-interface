export class Cliente {
  id?: number;
  nome?: string;
  endereco?: string;
  dataNascimento?: Date;

  constructor(init?: Partial<Cliente>) {
    Object.assign(this, init);
  }
}
