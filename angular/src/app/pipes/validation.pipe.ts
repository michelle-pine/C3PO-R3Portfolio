import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "validationFilter"
})
export class ValidationPipe implements PipeTransform {
  transform(items: any[]): any {
    if (!items) {
      return items;
    }

    return items.filter(item => !item.value && !item["hide"]);
  }
}
