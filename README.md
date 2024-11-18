# prototype-django-angular
CineCritique is a web application for sharing and viewing spoiler-free movie reviews. This project uses Django for the backend and Angular for the frontend, providing a modern, full-stack solution for users interested in movie discussions. For accademic purposes only.

# Prerequisites
Before you begin, make sure you have the following installed:

- Python 3.8+
- Node.js and npm (for Angular)
- Git

# How to run
1. Clone the Repository
- Open your terminal.
- Clone the repository with: git clone https://github.com/ThomasHeusdens/prototype-django-angular
- Navigate to the project directory: cd prototype_django_angular

2. Backend Setup - Django
- Create and activate a virtual environment: python -m venv venv
- Activate the virtual environment:
Windows: venv\Scripts\activate
macOS/Linux: source venv/bin/activate

- Install required Python packages: pip install -r requirements.txt
- Set up the database: python manage.py migrate

3. Frontend Setup - Angular
- Navigate to the frontend folder: cd frontend
- Install Angular dependencies: npm install

4. Running the Application
- Starting the Django Server
  - From the backend folder, start the Django development server: python manage.py runserver
The backend API should now be running at http://127.0.0.1:8000.

- Starting the Angular Development Server
  - Open a new terminal, navigate to the frontend folder, and start the Angular development server: ng serve
The Angular app should now be running at http://localhost:4200.

5. Connecting Frontend and Backend
Ensure that the Angular app makes requests to the Django backend. You might need to configure the API endpoints in Angular’s environment files (e.g., environment.ts in frontend/src/environments/).
- For example, set API_URL in environment.ts to:
export const environment = {
  production: false,
  apiUrl: 'http://127.0.0.1:8000/api'
};

# Docs
- install pip and python: https://www.w3schools.com/django/django_getstarted.php
- pip installation: https://pip.pypa.io/en/stable/installation/
- python installation: https://www.python.org/
- Setup of auth system: https://www.youtube.com/watch?v=k5Xf8EJbSjo&list=PLMya0JgwP7RyqmUa3pg_LknK-12NQIGqB&ab_channel=OSTechHelp
- django models: https://docs.djangoproject.com/en/5.1/topics/db/models/
- model feilds reference: https://docs.djangoproject.com/en/5.1/ref/models/fields/
- serializers: https://www.django-rest-framework.org/api-guide/serializers/
- serializers relations: https://www.django-rest-framework.org/api-guide/relations/
- serializers fields: https://www.django-rest-framework.org/api-guide/fields/
- class-based views: https://www.django-rest-framework.org/api-guide/views/
- django responses: https://www.django-rest-framework.org/api-guide/responses/
- permissions: https://www.django-rest-framework.org/api-guide/permissions/
- status codes: https://www.django-rest-framework.org/api-guide/status-codes/
- making queries: https://docs.djangoproject.com/en/5.1/topics/db/queries/
- validators: https://www.django-rest-framework.org/api-guide/validators/
- frequently used modules: https://angular.dev/guide/ngmodules/frequent
- ngFor: https://angular.fr/directives/ng-for // https://v17.angular.io/api/common/NgFor
- ng-form: https://angular.fr/old/forms/ng-form
- routerlink: https://v17.angular.io/api/router/RouterLink // https://www.delftstack.com/fr/howto/angular/angular-routerlink/
- ngFor and ngIf for beginners: https://www.freecodecamp.org/news/angular-ngfor-and-ngif-explained/ // https://www.geeksforgeeks.org/use-of-ngif-and-ngfor-directives-in-angular/
- angular routing: https://blog.codewise.fr/angular-routing
- built-in directives; https://v17.angular.io/guide/built-in-directives
- custom directives: https://dev.to/manthanank/creating-custom-directives-in-angular-a-step-by-step-guide-5bel
- ng-template: https://angular.dev/api/core/ng-template
- http send data to server: https://v17.angular.io/guide/http-send-data-to-server
- httpClient and RxJS: https://plainenglish.io/blog/handle-errors-in-angular-with-httpclient-and-rxjs
- angular http: https://blog.angular-university.io/angular-http/
- how to shuffle an array: https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/ // https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
- rxJS observable: https://rxjs.dev/guide/observable
- array.slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice