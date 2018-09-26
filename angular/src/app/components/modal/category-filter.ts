export class CategoryFilter {
  cat1: string[];
  cat2: string[];
  cat3: string[];
  filterCat1: string[];
  filterCat2: string[];
  filterCat3: string[];

  constructor(cat1:string[], cat2:string[], cat3:string[]) {
      this.cat1 = cat1;
      this.cat2 = cat2;
      this.cat3 = cat3;
      this.assignCopy();
  }

  assignCopy() {
    this.filterCat1 = Object.assign([], this.cat1);
    this.filterCat2 = Object.assign([], this.cat2);
    this.filterCat3 = Object.assign([], this.cat3);
  }
  filterItem(value) {
    if (!value) this.assignCopy();
    this.filterCat1 = Object.assign([], this.cat1).filter(
      item => item.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    this.filterCat2 = Object.assign([], this.cat2).filter(
      item => item.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    this.filterCat3 = Object.assign([], this.cat3).filter(
      item => item.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  }
}
