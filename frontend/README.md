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

   # Categories Component

The `Categories` component is a grid-based layout that displays various product categories for the GreenCart application. It allows users to navigate to specific product categories by clicking on the respective category cards. The component is designed to be responsive and visually appealing.

## Features

1. **Dynamic Category Rendering**:
   - The component dynamically renders category cards based on the `categories` array imported from the assets.
   - Each category card includes an image, a background color, and a label.

2. **Navigation**:
   - Clicking on a category card navigates the user to the respective category's product page.
   - The navigation path is dynamically constructed using the `path` property of the category.

3. **Smooth Scrolling**:
   - After navigating to a category page, the page scrolls to the top smoothly for a better user experience.

4. **Responsive Design**:
   - The grid layout adjusts dynamically based on the screen size:
     - 2 columns on smaller screens.
     - 3 columns on medium screens.
     - 5 columns on large screens.
     - 6 or more columns on extra-large screens.

5. **Hover Effects**:
   - On hovering over a category card, the image scales up slightly, providing a smooth transition effect.

## Code Overview

### Props and State
- The component does not use any props or state.
- It relies on the `categories` array imported from the assets for rendering the category cards.

### Functions
1. **`handleCategoryClick(path)`**:
   - Navigates the user to the category's product page.
   - Constructs the navigation path dynamically using the `path` property of the category.
   - Scrolls the page to the top after navigation:
     ```javascript
     const handleCategoryClick = (path) => {
       navigate(`/products/${path.toLowerCase()}`);
       window.scrollTo({ top: 0, behavior: 'smooth' });
     };
     ```

### JSX Structure
1. **Heading**:
   - Displays the title "Categories" at the top of the component:
     ```jsx
     <p className="text-2xl md:text-3xl font-semibold">Categories</p>
     ```

2. **Grid Layout**:
   - A responsive grid layout is used to display the category cards:
     ```jsx
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 mt-6">
       {categories.map((category, index) => (
         <div
           key={index}
           className={`group cursor-pointer rounded-lg py-5 px-3 flex flex-col items-center justify-center gap-2 transition`}
           style={{ backgroundColor: category.bgColor }}
           onClick={() => handleCategoryClick(category.path)}
         >
           <img
             src={category.image}
             alt={category.text}
             className="max-w-28 group-hover:scale-110 transition-transform"
           />
           <p className="text-sm font-medium text-center">{category.text}</p>
         </div>
       ))}
     </div>
     ```

3. **Category Cards**:
   - Each card includes:
     - A background color (`category.bgColor`).
     - An image (`category.image`).
     - A label (`category.text`).

### Styling
- The component uses Tailwind CSS for styling.
- Key classes include:
  - `grid`, `grid-cols-*`: For responsive grid layout.
  - `group`, `group-hover:*`: For hover effects.
  - `rounded-lg`, `py-5`, `px-3`: For card styling.
  - `transition`, `transition-transform`: For smooth animations.

## Dependencies
- **`react-router-dom`**:
  - Used for navigation with the `useNavigate` hook.
- **`categories`**:
  - An array of category objects imported from the assets.

## How to Use

1. Import the `Categories` component into your application:
   ```jsx
   import Categories from './components/Categories';