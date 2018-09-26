import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sectionValidate'
})
export class SectionValidatePipe implements PipeTransform {

  transform(items: any[]): any {
  
    if (!items) {
      return items;
    }
  
    return items.filter(item =>  !item["hide"] && this.checkFields(item.fields));
  }

  checkFields(fields) {
 
    for (let field of fields) {
      if (!field.value && !field.hide) {
        return true;
      }
    }
  }

}
