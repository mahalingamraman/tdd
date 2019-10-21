Jasmine - Test framework
https://www.techiediaries.com/jasmine-testing-tutorial/


Jasmine-Jquery for dom loading and testing
https://www.npmjs.com/package/jasmine-jquery

Axios - httpclient
https://www.npmjs.com/package/axios

Rewire - mock dependency
https://www.npmjs.com/package/babel-plugin-rewire

template literals for building html in js
https://gist.github.com/wiledal/3c5b63887cc8a010a330b89aacff2f2e


Routing for SPA
https://www.npmjs.com/package/vanilla-ui-router

## Dropdown

**cc-dropdown* are exported as an es module thus you would need a bundler to use it. It is also written in
Typescript so it can be directly used with a typescript project as well

### DropdownContext 

To render conditionally an item can get the context which contains the following attributes:

| property   |      type      |  description |
|------------:|-------------:|------:|
| id | string  | id of the Dropdwon |
| label | string  | Dropdwon Label/placeholder|
| dataSource | array  | Dropdown Items  |
| placementPosition | top/bottom  | Options display placement  |
| selectionChange | event | Dropdwon selected item Call back events to Application  |
| disabled | disabled  | Dropdown disable option |
| required | boolean  | Required validation |
| multipleWithButton | {applyLabel:'Apply',cancelLabel:'Cancel'} | Apply label/Cancel label | 
| expanded | array | Selected Item array|
| typeahead | boolean  | Typeahead filter enabled/disabled|
| typeaheadFilterType | startsWith/wildcard  | Dropdown filter type  |

## Below is an example on how to use it Single Dropdown.

```html
    <cc-dropdown [id]="'single-dropdown'" 
        name="checkbox" [label]="'Select a option'" 
        [dataSource]='car' 
        [placementPosition]="placementPosition[0].value" 
        [(ngModel)]="selectedItem" 
        (selectionChange)="onValueget($event)"
        [disabled]="disabled"
        [required]="required">
    </cc-dropdown>
```
## Below is an example on how to use it Multiple Dropdown.

```html
<cc-dropdown name="checkbox" 
    [label]="'Select Multiple Car'" 
    [dataSource]='car' 
    [placementPosition]="placementPosition[0].value" 
    [(ngModel)]="selectedMultipleItem" 
    (selectionChange)="onMultipleValueget($event)"
    [disabled]="disabled" 
    [required]="required" 
    [multiple]="true">
</cc-dropdown>
```
## Below is an example on how to use it  Dropdown with button.

```html
<cc-dropdown name="checkbox" 
    [label]="'Select Multiple With Button'" 
    [dataSource]='car' 
    [placementPosition]="placementPosition[0].value" 
    [(ngModel)]="selectedMultipleWithBtn" 
    (selectionChange)="onMultipleBtnValuegetBtn($event)"
    [disabled]="disabled" 
    [required]="required" 
    [multipleWithButton]="{applyLabel:'Apply',cancelLabel:'Cancel'}">
</cc-dropdown>
```

## Below is an example on how to use it  Dropdown button selected option .

```html
<cc-dropdown name="checkbox" 
    [label]="'Select Multiple Option'" 
    [dataSource]='car' 
    [placementPosition]="placementPosition[0].value" 
    [(ngModel)]="selectedMultipleExpandedItem" 
    (selectionChange)="onMultipleBtnValueget($event)"
    [disabled]="disabled" 
    [required]="required" 
    [multiple]="true" 
    [expanded]="'selected'" 
    [clearAllLabel]="'Clear All'">
</cc-dropdown>
```
## Below is an example on how to use it  Dropdown with Typeahead Filter.

```html
<cc-dropdown 
    [id]="'dropdown-typeahead'" 
    name="checkbox" 
    [label]="'Type Ahead'" 
    [dataSource]='car'
    [placementPosition]="placementPosition[0].value" 
    [(ngModel)]="selectedTypeAheadItem" 
    (selectionChange)="onTypeAheadValueget($event)"
    [disabled]="disabled" 
    [required]="required" 
    [typeahead]="true" 
    [typeaheadFilterType]="'wildcard'">
</cc-dropdown>
```

## Sample dataSource 
```javascript
public car = [
    {label: 'Audi', value: 'Audi'},
    {label: 'BMW', value: 'BMW',disabled:true},
    {label: 'Ford', value: 'Ford'},
    {label: 'Honda', value: 'Honda'},
    {label: 'Jaguar', value: 'Jaguar'},
    {label: 'Mercedes', value: 'Mercedes'},
    {label: 'Renault', value: 'Renault'},
    {label: 'VW', value: 'VW'},
    {label: 'Volvo', value: 'Volvo'},
    {label: 'Fiat', value: 'Fiat'}
];
```
