import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monetario'
})
export class MonetarioPipe implements PipeTransform {

  transform(valor: string): unknown {
    return 'R$ '+ parseFloat(valor).toLocaleString('pt-BR');
  }

}
