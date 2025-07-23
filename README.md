# Express Router Project

This project demonstrates how to set up an Express.js application with custom routing using Express Router.

## Project Setup Steps

### Step 1: Initialize the Project
```bash
npm init -y
```
This command creates a `package.json` file with default values.

### Step 2: Install Dependencies
```bash
npm install express nodemon
```
- **express**: Web framework for Node.js
- **nodemon**: Development tool that automatically restarts the server when file changes are detected

### Step 3: Create Main Server File
Create `index.js` file as the main entry point for the application.

### Step 4: Configure Development Script
Add the following script to `package.json`:
```json
{
  "scripts": {
    "dev": "nodemon index.js"
  }
}
```

### Step 5: Create Routes
Create a `routes/` directory and add route files:
- `routes/demo1.js` - Contains sample routes for GET, POST, and DELETE operations
- `routes/birds.js` - Additional route example (commented out in main file)

### Step 6: Import and Use Routes in Main File
Import the route modules in `index.js` and mount them using `app.use()`.

## Project Structure
```
expressRouter/
├── index.js
├── package.json
├── README.md
└── routes/
    ├── birds.js
    └── demo1.js
```

## Available Routes

### Demo1 Routes (mounted at `/api`)
- `GET /api/` - Returns "get request"
- `POST /api/about` - Returns JSON object `{x: 1, y: 2, z: 3}`
- `DELETE /api/item:id` - Deletes an item with the specified ID

## How to Run the Project

1. **Development mode** (with auto-restart):
   ```bash
   npm run dev
   ```

2. **Production mode**:
   ```bash
   node index.js
   ```

The server will start on `http://localhost:3000`

## Testing the Routes

You can test the routes using:
- Browser for GET requests: `http://localhost:3000/api/`
- Postman or curl for other HTTP methods:
  ```bash
  # POST request
  curl -X POST http://localhost:3000/api/about
  
  # DELETE request
  curl -X DELETE http://localhost:3000/api/item123
  ```

## Key Concepts Demonstrated

1. **Express Router**: Modular route handlers that can be mounted on different paths
2. **Route Organization**: Separating routes into different files for better code organization
3. **Middleware**: Using `app.use()` to mount routers
4. **HTTP Methods**: Handling GET, POST, and DELETE requests
5. **Route Parameters**: Using `:id` parameter in DELETE route

## Notes

- The project uses Express Router to organize routes into separate modules
- Routes are mounted at `/api` prefix, so all demo1 routes are accessible under `/api/`
- Nodemon is used for development to automatically restart the server on file changes
