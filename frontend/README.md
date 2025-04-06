# Navbar Component

The `Navbar` component is a responsive navigation bar for the GreenCart application. It provides navigation links, user authentication options, and additional features like a search bar and a cart icon. The component is designed to work seamlessly across desktop and mobile devices.

## Features

1. **Logo and Branding**:
   - Displays the application logo, which links to the homepage.
   - Clicking the logo collapses the mobile menu if it is open.

2. **Navigation Links**:
   - Includes links to the following pages:
     - Home
     - All Products
     - Contact
   - For logged-in users, an additional "My Orders" link is displayed.

3. **Search Bar**:
   - A search bar is available on larger screens (desktop view).
   - Allows users to search for products.

4. **Cart Icon**:
   - Displays a cart icon with a badge showing the number of items in the cart.
   - Clicking the cart icon navigates to the cart page.

5. **User Authentication**:
   - If the user is not logged in, a "Login" button is displayed.
   - If the user is logged in:
     - A profile icon is displayed.
     - A dropdown menu appears on hover, providing options to view "My Orders" or "Logout".

6. **Responsive Design**:
   - On smaller screens (mobile view), a hamburger menu is displayed.
   - The mobile menu includes navigation links and login/logout options.

## Code Overview

### State Management
- **`open`**: A `useState` hook is used to manage the visibility of the mobile menu.
- **Context Values**:
  - `user`: Represents the current logged-in user.
  - `setUser`: Updates the user state (used for logout functionality).
  - `showUserLogin` and `setShowUserLogin`: Manage the visibility of the login modal.
  - `navigate`: A function to programmatically navigate between routes.

### Logout Functionality
- The `logout` function clears the user state and redirects to the homepage.

### JSX Structure
1. **Logo**:
   ```jsx
   <NavLink to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
       <img className="h-9" src={assets.logo} alt="logo" />
   </NavLink># Navbar Component

The `Navbar` component is a responsive navigation bar for the GreenCart application. It provides navigation links, user authentication options, and additional features like a search bar and a cart icon. The component is designed to work seamlessly across desktop and mobile devices.

## Features

1. **Logo and Branding**:
   - Displays the application logo, which links to the homepage.
   - Clicking the logo collapses the mobile menu if it is open.

2. **Navigation Links**:
   - Includes links to the following pages:
     - Home
     - All Products
     - Contact
   - For logged-in users, an additional "My Orders" link is displayed.

3. **Search Bar**:
   - A search bar is available on larger screens (desktop view).
   - Allows users to search for products.

4. **Cart Icon**:
   - Displays a cart icon with a badge showing the number of items in the cart.
   - Clicking the cart icon navigates to the cart page.

5. **User Authentication**:
   - If the user is not logged in, a "Login" button is displayed.
   - If the user is logged in:
     - A profile icon is displayed.
     - A dropdown menu appears on hover, providing options to view "My Orders" or "Logout".

6. **Responsive Design**:
   - On smaller screens (mobile view), a hamburger menu is displayed.
   - The mobile menu includes navigation links and login/logout options.

## Code Overview

### State Management
- **`open`**: A `useState` hook is used to manage the visibility of the mobile menu.
- **Context Values**:
  - `user`: Represents the current logged-in user.
  - `setUser`: Updates the user state (used for logout functionality).
  - `showUserLogin` and `setShowUserLogin`: Manage the visibility of the login modal.
  - `navigate`: A function to programmatically navigate between routes.

### Logout Functionality
- The `logout` function clears the user state and redirects to the homepage.

### JSX Structure
1. **Logo**:
   ```jsx
   <NavLink to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
       <img className="h-9" src={assets.logo} alt="logo" />
   </NavLink>