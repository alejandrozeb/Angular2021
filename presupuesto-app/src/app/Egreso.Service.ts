import { Egreso } from './egreso.model';

export class EgresoService {
  egresos: Egreso[] = [
    new Egreso('Renta departamento', 900),
    new Egreso('Ropa', 200),
  ];

  total() {
    let total: number = this.sumar();
    console.log(total);
    
    return total;
  }
  
  agregarEgreso(egreso:Egreso){
    this.egresos.push(egreso);
  }
  private sumar(): number {
    let sumatoria: number = 0;
    this.egresos.forEach((egreso) => {
      sumatoria = sumatoria + egreso.cantidad;
    });
    return sumatoria;
  }
}
