# Netshow

## Backend

## Technologies Used:

- PHP 8.2
- Laravel 12
- PostgreSQL
- Docker and Docker Compose
- Nginx
- DDD (Domain-Driven Design)
- Hexagonal Architecture (Ports & Adapters)
- Repository Pattern

---

## 📁 Project Structure:

```
backend/
├── app/
│   ├── Application/              # Application Layer (Use Cases)
│   │   ├── Commands/
│   │   ├── UseCases/
│   │   └── Queries/
│   │
│   ├── Domain/                   # Domain Layer (Business Logic)
│   │   ├── Entities/
│   │   ├── Exceptions/
│   │   └── Repositories/
│   │
│   ├── Infrastructure/           # Infrastructure Layer (DB, Repositories, etc.)
│   │   ├── Persistence/
│   │   └── Providers/
│   │
│   └── Interfaces/                # Interface Adapters (HTTP, CLI, WebSocket)
│       └── Http/
│           ├── Actions/
│           └── Resources/
│
├── routes/
│   └── api.php                   # API routes definitions
│
├── Dockerfile                    # Dockerfile for Laravel environment
├── docker-compose.yml            # Docker services configuration
└── .env                          # Environment variables
```

---

## **Installation and Execution**

### 1️⃣ Clone the repository:

```bash
git clone git@github.com:Lerooks/netshow.git
```

### 2️⃣ Copy the `.env.example` file to `.env` and adjust the variables:

```bash
cp .env.example .env
```

**.env** (database settings already configured for Docker Compose):

```
DB_CONNECTION=pgsql
DB_HOST=db
DB_PORT=5432
DB_DATABASE=netshow
DB_USERNAME=postgres
DB_PASSWORD=postgres
```

### 3️⃣ Start the Docker containers:

```bash
docker-compose up -d --build
```

### 4️⃣ Install dependencies:

Inside the Laravel container:

```bash
docker-compose exec app composer install
```

### 5️⃣ Generate the application key:

```bash
docker-compose exec app php artisan key:generate
```

### 6️⃣ Run the migrations and seeders:

```bash
docker-compose exec app php artisan migrate --seed
```

---

## **Available Endpoints**

| Method  | Endpoint                   | Description                                                           |
| ------- | -------------------------- | --------------------------------------------------------------------- |
| `GET`   | `/api/v1/videos`           | Returns the list of videos (pagination and filters available)         |
| `GET`   | `/api/v1/videos/{id}`      | Returns the details of a specific video and increments the view count |
| `PATCH` | `/api/v1/videos/{id}/like` | Updates the video likes                                               |

---

## Frontend

# Frontend Project - Next.js with Clean Architecture

## 📋 Project Overview

Next.js 15 frontend application built with TypeScript following Clean Architecture principles. The project includes modern tools and libraries like Axios for HTTP requests, Luxon for date handling, MobX for state management, and React Player for media playback.

## Technologies

- **Next.js 15** - React framework for server-rendered applications
- **TypeScript** - Static typing for JavaScript
- **Clean Architecture** - Separation of concerns with clear layers
- **Axios** - HTTP client for API requests
- **Luxon** - Modern date/time handling
- **ESLint** - JavaScript/TypeScript linter
- **MobX** - State management library
- **React Player** - Media player component

## Getting Started

### Prerequisites

- Node.js (version 20 or higher recommended)
- npm or yarn
- Next.js 15

### Installation

1. **Clone the repository**

   ```bash
   git clone git@github.com:Lerooks/netshow.git
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**

   - Copy the `.env.example` file to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update the API URL in the `.env` file:
     ```
     NEXT_PUBLIC_API_URL="http://localhost:8000/api/v1"
     ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open the application**
   The app should now be running at [http://localhost:3000](http://localhost:3000)

## Project Structure (Clean Architecture)

```
src/
├── app/                          # Application layer (use cases)
├── domain/                       # Business logic and entities
│   └── entities/                 # Business entities
│       ├── category.entity.ts
│       ├── file.entity.ts
│       └── video.entity.ts
├── application/                  # External interfaces and implementations
├── infrastructure/               # External interfaces and implementations
├── presentation/                 # UI components
│   ├── components/               # Shared components
│   ├── config/                   # Configuration
│   ├── contexts/                 # React contexts
│   ├── hooks/                    # Custom hooks
│   ├── icons/                    # Icon assets
│   └── editorconfig              # Editor configuration
```

## Available Scripts

- `dev`: Runs the app in development mode
- `build`: Builds the app for production
- `start`: Starts the production server
- `lint`: Runs ESLint to check code quality
