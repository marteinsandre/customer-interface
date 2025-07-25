export class Cliente {
  id?: string;  // Mudando para string pois o backend usa Guid
  nome?: string;
  endereco?: string;
  dataNascimento?: string;

  constructor(init?: Partial<Cliente>) {
    Object.assign(this, init);
  }
}
