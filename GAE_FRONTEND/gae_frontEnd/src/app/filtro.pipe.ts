import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  transform(estudiantes: any[], searchText: string): any[] {
    if (!estudiantes || !searchText) {
      return estudiantes;
    }
    return estudiantes.filter(estudiante =>
      estudiante.nombre.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
