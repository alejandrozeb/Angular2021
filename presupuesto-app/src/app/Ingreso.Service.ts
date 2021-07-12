import { Ingreso } from './ingresos.model';
export class IngresoService {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 4000),
    new Ingreso('Venta coche', 500),
  ];

  total() {
    let total: number = this.sumar();
    return total;
  }

  agregarIngreso(ingreso:Ingreso){
    this.ingresos.push(ingreso);
  }

  private sumar(): number {
    let sumatoria: number = 0;
    this.ingresos.forEach((ingreso) => {
      sumatoria = sumatoria + ingreso.cantidad;
    });
    return sumatoria;
  }

  eliminar(ingreso:Ingreso){
    let index:number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(index, 1);
  }
}
