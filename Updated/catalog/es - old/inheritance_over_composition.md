# Inheritance over composition
## Description
En el desarrollo de aplicaciones Angular, es común reutilizar lógica compartida entre componentes. 

Este *code smell* se da cuando esta reutilización acaba formando una arquitectura rígida y difícil de mantener, dicho de otro modo cuando varios componentes heredan de uno base. Para solucionar esto se propone el uso de componentes reutilizables los cuales empleen servicios intercambiables de manera que se ajusten a las necesidades de cada uso. 

De esta manera se logra una arquitectura más flexible, modular y reutilizable.

## Why is a code smell
- **Acoplamiento rígido**: La herencia crea una relación fuerte entre la clase base y las derivadas, lo que dificulta la modificación o reutilización de componentes en contextos diferentes.
- **Reutilización limitada**: Los componentes derivados heredan toda la funcionalidad de la clase base, incluso si solo necesitan una parte, lo que puede llevar a una sobrecarga innecesaria.
- **Dificultad en pruebas**: Las dependencias compartidas en la clase base pueden complicar las pruebas unitarias de los componentes derivados.
- **Problemas de mantenimiento**: Cambios en la clase base pueden tener efectos colaterales en todos los componentes que la extienden, aumentando el riesgo de introducir errores.

---
## Non-Compliant code example

Cuestionario html empleados en ambos componentes
```html
<form [formGroup]="myform" (ngSubmit)="save()">
  <h1>Recovery password</h1>
  <input type="text" formControlName="email" />
  <button>Save</button>
  <span *ngFor="let error of errors">{{ error }}</span>
</form>
```
Componente base e hijos
```typescript
import { FormBuilder, Validators } from '@angular/forms';

export class BaseForm {
  errors = [];
  myform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}
  save() {
    if (!this.myform.valid) {
      this.showErrors();
    } else {
      this.errors = [];
      console.log('saving data!');
    }
  }

  showErrors() {
    const emailError = this.myform.get('email').errors;
    console.log(emailError);
    Object.keys(emailError).forEach((value) => {
      this.errors = [...value];
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseForm } from '../../core/baseForm';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
})
export class NewsletterComponent extends BaseForm {
  constructor(public fb: FormBuilder) {
    super(fb);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseForm } from '../../core/baseForm';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css'],
})
export class RecoveryPasswordComponent extends BaseForm {
  constructor(public fb: FormBuilder) {
    super(fb);
  }
}
```

En este ejemplo, `UserFormComponent` hereda toda la lógica de `BaseFormComponent`, incluso si solo necesita una parte de ella, lo que puede llevar a una sobrecarga innecesaria y a un acoplamiento rígido.

---
## Compliant code example

### Servicio con lógica compartida

```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseForm } from './baseForm';

@Injectable()
export class FormWrapperService {
  public myform: FormGroup;

  public get errors(): string[] {
    return this._baseForm.errors;
  }
  private _baseForm: BaseForm;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this._baseForm = new BaseForm(this.fb, this.http, 'A');
    this.myform = this._baseForm.myform;
  }
  save(form: FormGroup): boolean {
    this._baseForm.myform = form;
    this._baseForm.save();
    return this._baseForm.errors.length === 0;
  }
}

```

### Componente que utiliza el servicio
```typescript
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormWrapperService } from '../../core/form-wrapper.service';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
})
export class WaitingListComponent {
  myform: FormGroup;
  errors = [];
  constructor(private formWrapper: FormWrapperService) {
    this.myform = formWrapper.myform;
  }
  save() {
    if (!this.formWrapper.save(this.myform)) {
      this.errors = this.formWrapper.errors;
    }
  }
}
```

>[!tip]
>Para agregar aún más flexibilidad, otra recomendación es la la sustitución de una implementación directa al servicio por una abstracción y su respectiva implementación, de esta manera se deja abierto a otros posibles servicios que, en caso de querer usarse en ese componente, solo será necesario especificar el cambio en el proveedor que queremos inyectar


[1]:https://danywalls.com/understand-composition-and-inheritance-in-angular
[2]:https://github.com/danywalls/how_handle_constructor_dependecies_in_components/
[3]:https://dev.to/vixero/common-mistakes-that-backend-programmers-make-in-angular-434d
---
## Sources
- https://levelup.gitconnected.com/refactoring-angular-applications-be18a7ee65cb section 1.1
- https://danywalls.com/understand-composition-and-inheritance-in-angular 
- https://dev.to/this-is-angular/you-dont-want-a-basecomponent-in-your-app-23hn 
- https://dev.to/vixero/common-mistakes-that-backend-programmers-make-in-angular-434d section 5