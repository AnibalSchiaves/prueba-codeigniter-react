# CodeIgniter 4 + React

## Pasos para la creación

- composer create-project codeigniter4/appstarter prueba-codeigniter-react #me falló la instalación por la falta de la extensión ext-dom

- se quitó "phpunit/phpunit": "^10.5.16" de require-dev en composer.json

- cd prueba-composer-react

- composer install

- npx create-react-app react-app

- cd react-app

- npm run build

- cp build/index.html ../app/Views/reactapp.php

- cp -r build/static ../public/

- cp build/manifest.json ../public/

- cp build/logo192.png ../public/

- en app/Controller/Home.php agrego

```php
public function react(): string 
{
    return view('reactapp');
}
```
    
- en app/Config/Routes.php agrego:

```php
$routes->get('/react', 'Home::react');
```
	
- cd ..

- php spark serve

- en http://localhost:8080 responde codeigniter y en http://localhost:8080/react responde la app react

## Agregado de routing en react-app

- cd react-app

- npm install react-router-dom

- cree Home.js con

```javascript
export function Home() {
    return <p>Bienvenido a la aplicación React embebida</p>
}
```

- cree Info.js con:

```javascript
export function Info() {
    return <p>Este es un subcomponente dentro de la aplicación embebida de React</p>
}
```

- edite App.js para agregar dos rutas: "/" y "/info, a las cuales responde con el componente Home e Info respectivamente:

```javascript
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <BrowserRouter>
          <Routes>
            <Route path="/react" element={<Home></Home>}></Route>
            <Route path="/react/info" element={<Info></Info>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
```
- npm run build

- rm -r ../public/static

- cp build/index.html ../app/Views/reactapp.php

- cp -r build/static ../public/

- edite app/Config/Routes.php agregando:

```php
$routes->get('/react/info', 'Home::react');
```

- cd ..

- php spark serve

- en http://localhost:8080 responde codeigniter 

- en http://localhost:8080/react responde la app react con su componente Home

- en http://localhost:8080/react/info responde la app react con su componente Info

