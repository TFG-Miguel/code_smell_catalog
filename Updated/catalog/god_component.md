# God Component
## Descripction
Un *God Component* es un componente de Angular que asume una cantidad excesiva de responsabilidades. Suele encargarse de obtener datos, gestionar el estado, manejar eventos, contener lógica de negocio compleja y renderizar la interfaz de usuario en un mismo lugar. Esto viola el *Principio de Responsabilidad Única* y dificulta la escalabilidad y capacidad de prueba del código.

> [!Note]
> Este code smell muy probablemente aparezca junto con [`Mixing Smart and Dumb Components`](mixing_smart_and_dump_components.md), debido a su alta similitud y conexión. 
> 
> La principal diferencia es que este se centra en el abuso de responsabilidades y el otro se centra en el mal uso de los componentes juntando en uno solo, componentes reutilizables que manejen lógica simple de interfaz (dumb) con componentes organizativos que obtienen los datos de los servicios y se encargan de organizar y disponer las componentes visuales (smart).

## Why is a code smell
- Dificulta la reutilización del código.
- Hace que las pruebas unitarias sean más complejas y lentas.
- Obstaculiza la mantenibilidad y la comprensión del componente.
- Viola el principio de responsabilidad única (*Single Responsibility Principle*).
- Aumenta el acoplamiento entre lógica de negocio y presentación.
- Puede llevar a errores difíciles de rastrear en aplicaciones grandes.

----
## Non-Compliant code example
```ts
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  searchTerm = '';
  isLoading = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.http.get<User[]>('/api/users').subscribe(data => {
      this.users = data;
      this.isLoading = false;
    });
  }

  search(): void {
    this.isLoading = true;
    this.http.get<User[]>(`/api/users?q=${this.searchTerm}`).subscribe(data => {
      this.users = data;
      this.isLoading = false;
    });
  }

  goToDetail(userId: number): void {
    this.router.navigate(['/users', userId]);
  }

  trackById(index: number, user: User): number {
    return user.id;
  }
}
```

---
## Compliant code example
```ts
// user.service.ts
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(query: string = ''): Observable<User[]> {
    return this.http.get<User[]>(`/api/users${query ? `?q=${query}` : ''}`);
  }
}
```

```ts
// dashboard.component.ts
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  users$: Observable<User[]>;
  searchTerm = '';
  isLoading = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.users$ = this.userService.getUsers(this.searchTerm).pipe(
      finalize(() => this.isLoading = false)
    );
  }

  goToDetail(userId: number): void {
    this.router.navigate(['/users', userId]);
  }

  trackById(index: number, user: User): number {
    return user.id;
  }
}
```

----
## Sources
- https://dev.to/this-is-angular/7-deadly-sins-of-angular-1n2j 4º sin
- https://codeburst.io/angular-bad-practices-eab0e594ce92 1º section (*Not making a REAL use of Angular’s components*)
- https://javascript-conference.com/blog/angular-code-smells/ 5º section (*Injecting services*)
- https://medium.com/codex/avoid-these-bad-practices-when-you-are-an-angular-developer-135323db74c7 1º section (*Write external system interactions inside component*)
- https://www.freecodecamp.org/news/best-practices-for-a-clean-and-performant-angular-application-288e7b39eb6f/ 13º practice
- https://www.tatvasoft.com/outsourcing/2021/07/top-angular-developer-pitfalls.html 1.2º section
