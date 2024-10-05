import { inject } from '@angular/core/testing';
import { Restaurant } from './restaurant.model';
import { SortedListOfImmutables } from './sorted-list-of-immutables.model';

describe('Restaurant: addShipmentToInventory', function () { 
  it('Debe agregar un envío correctamente al inventario si hay suficiente efectivo', inject([Restaurant], (service: Restaurant) => { 
    const restaurant = new Restaurant('Restaurante 1', 5000); // 50 dólares (5000 centavos)
    const shipment = new SortedListOfImmutables(null);
    spyOn(shipment, 'getWholesaleCost').and.returnValue(1000); // 10 dólares

    expect(restaurant.addShipmentToInventory(shipment)).toBe(true);
    expect(restaurant.getInventory().getSize()).toBe(1); 
    expect(restaurant.getCash()).toBe(4000); // 40 dólares
  }));

  it('No debe agregar el envío si el coste excede el efectivo disponible', inject([Restaurant], (service: Restaurant) => { 
    const restaurant = new Restaurant('Restaurante 1', 500); // Solo 5 dólares
    const shipment = new SortedListOfImmutables(null);
    spyOn(shipment, 'getWholesaleCost').and.returnValue(1000); // 10 dólares

    expect(restaurant.addShipmentToInventory(shipment)).toBe(false);
    expect(restaurant.getInventory().getSize()).toBe(0); 
  })); 
});

