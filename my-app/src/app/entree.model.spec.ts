import { inject, TestBed } from '@angular/core/testing';
import { Entree } from './entree.model';
import { SortedListOfImmutables } from './sorted-list-of-immutables.model';

describe('Entree: equals', function () { 
  it('Debe retornar true cuando los nombres de dos objetos Entree son iguales', inject([Entree], (service: Entree) => { 
    const entree1 = new Entree('Pasta', new SortedListOfImmutables(null));
    const entree2 = new Entree('Pasta', new SortedListOfImmutables(null));
    expect(entree1.equals(entree2)).toBe(true); 
  })); 

  it('Debe retornar false cuando los nombres de dos objetos Entree son diferentes', inject([Entree], (service: Entree) => { 
    const entree1 = new Entree('Pizza', new SortedListOfImmutables(null));
    const entree2 = new Entree('Pasta', new SortedListOfImmutables(null));
    expect(entree1.equals(entree2)).toBe(false); 
  })); 
});

describe('Entree: toString', function () {
  const testCases = [
    { foodList: new SortedListOfImmutables(null), expected: '< >' },
    { foodList: new SortedListOfImmutables(null), expected: '< Bacon, Waffle >' },  // Supón que la lista tiene estos elementos
    { foodList: new SortedListOfImmutables(null), expected: '< Pancakes, Coffee >' }
  ];
});

describe('Entree: toString', function () {
  const testCases = [
    { foodList: ['Bacon', 'Waffle'], expected: '< Bacon, Waffle >' }, 
    { foodList: ['Pancakes', 'Coffee'], expected: '< Pancakes, Coffee >' },
    { foodList: [], expected: '< >' }
  ];

  testCases.forEach(testCase => {
    it(`Debe retornar la representación correcta de la lista de alimentos para ${testCase.expected}`, inject([Entree], (entree: Entree) => {
      const mockFoodList = jasmine.createSpyObj('SortedListOfImmutables', ['get', 'getSize']);

      // Devolvemos objetos Food (u otra clase que implemente Listable) en lugar de strings
      mockFoodList.get.and.callFake((index: number) => {
        return { toString: () => testCase.foodList[index] };  // Aseguramos que devuelva un Listable con un método toString()
      });
      mockFoodList.getSize.and.returnValue(testCase.foodList.length);

      entree = new Entree('TestEntree', mockFoodList);
      expect(entree.toString()).toBe(testCase.expected);
    }));
  });
});