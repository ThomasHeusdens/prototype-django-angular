# prototype-django-angular
Timeless Film Reviews is a web application for sharing and viewing spoiler-free movie reviews. This project uses Django for the backend and Angular for the frontend, providing a modern, full-stack solution for users interested in movie discussions. For accademic purposes only.

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
4.1 Starting the Django Server
- From the backend folder, start the Django development server: python manage.py runserver
The backend API should now be running at http://127.0.0.1:8000.

4.2 Starting the Angular Development Server
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
install pip and python: https://www.w3schools.com/django/django_getstarted.php
pip installation: https://pip.pypa.io/en/stable/installation/
python installation: https://www.python.org/
Setup of auth system: https://www.youtube.com/watch?v=k5Xf8EJbSjo&list=PLMya0JgwP7RyqmUa3pg_LknK-12NQIGqB&ab_channel=OSTechHelp