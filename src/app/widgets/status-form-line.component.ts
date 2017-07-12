import { Component } from '@angular/core';

import { FormLineComponent } from 'angularm';

@Component({
    selector: 'div [mgFormLine]',
    template:
        `<label for="{{propertyType.entityType.singular}}_{{propertyType.name}}"
            >{{propertyType.name | titleCase}}</label>
        <datalist id="{{propertyType.entityType.singular}}_{{propertyType.name}}_list">
          <option *ngFor="let status of configuration.statusList" value="{{ status }}">
        </datalist>
        <input
          [attr.list]="propertyType.entityType.singular + '_' + propertyType.name + '_list'"
          id="{{propertyType.entityType.singular}}_{{propertyType.name}}">
        <br>`,
})
export class StatusFormLineComponent extends FormLineComponent { }
