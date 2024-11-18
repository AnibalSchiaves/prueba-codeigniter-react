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


    public function react(): string 
    {
        return view('reactapp');
    }
    
- en app/Config/Routes.php agrego:

	$routes->get('/react', 'Home::react');
	
- cd ..

- php spark serve

- en http://localhost:8080 responde codeigniter y en http://localhost:8080/react responde la app react
