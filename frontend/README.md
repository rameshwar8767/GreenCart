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


   # ProductCard Component

The `ProductCard` component is a reusable card component designed to display product details in the GreenCart application. It provides functionality for viewing product information, displaying ratings, and managing cart actions (add, update, or remove items).

## Features

1. **Product Display**:
   - Displays the product image, name, category, and pricing details.
   - Shows the original price and the discounted offer price with a strikethrough for the original price.

2. **Ratings**:
   - Displays a 5-star rating system with filled and unfilled stars.
   - The current implementation shows a static rating of 4 stars.

3. **Cart Management**:
   - Allows users to add products to the cart.
   - Provides buttons to increase or decrease the quantity of the product in the cart.
   - Automatically removes the product from the cart if the quantity is reduced to zero.

4. **Responsive Design**:
   - The component is styled using Tailwind CSS and adapts to different screen sizes.

5. **Hover Effects**:
   - The product image scales up slightly when hovered over, providing a smooth transition effect.

## Code Overview

### Props
- **`product`**: An object containing the product details. The expected structure includes:
  - `image`: An array of image URLs for the product.
  - `name`: The name of the product.
  - `category`: The category of the product.
  - `offerPrice`: The discounted price of the product.
  - `price`: The original price of the product.
  - `_id`: A unique identifier for the product.

### Context
The component uses the `useAppContext` hook to access shared state and functions from the `AppContext`. These include:
- **`currency`**: The currency symbol for displaying prices.
- **`cartItems`**: An object representing the current items in the cart, with product IDs as keys and quantities as values.
- **`addToCart(itemId)`**: Adds a product to the cart.
- **`updateCartItem(itemId, quantity)`**: Updates the quantity of a product in the cart.
- **`removeFromCart(itemId)`**: Removes a product from the cart.
- **`navigate`**: A function for programmatic navigation.

### JSX Structure
1. **Card Container**:
   - A bordered and rounded container with padding and a white background:
     ```jsx
     <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full">
     ```

2. **Product Image**:
   - Displays the first image from the `product.image` array.
   - Includes a hover effect to scale the image:
     ```jsx
     <img className="group-hover:scale-105 transition max-w-26 md:max-w-36" src={product.image[0]} alt={product.name} />
     ```

3. **Product Details**:
   - Displays the product category, name, and ratings:
     ```jsx
     <p>{product.category}</p>
     <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
     <div className="flex items-center gap-0.5">
       {Array(5).fill('').map((_, i) => (
         <img key={i} className='md:w-3.5 w3' src={i < 4 ? assets.star_icon : assets.star_dull_icon} alt="" />
       ))}
       <p>(4)</p>
     </div>
     ```

4. **Pricing**:
   - Displays the offer price and the original price with a strikethrough:
     ```jsx
     <p className="md:text-xl text-base font-medium text-indigo-500">
       {currency}${product.offerPrice} {" "}
       <span className="text-gray-500/60 md:text-sm text-xs line-through">
         {currency}${product.price}
       </span>
     </p>
     ```

5. **Cart Actions**:
   - If the product is not in the cart, an "Add" button is displayed:
     ```jsx
     <button className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 md:w-[80px] w-[64px] h-[34px] rounded text-indigo-600 font-medium" onClick={() => addToCart(product._id)}>
       <img src={assets.cart_icon} alt="cart" />
       Add
     </button>
     ```
   - If the product is in the cart, buttons to increase or decrease the quantity are displayed:
     ```jsx
     <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-indigo-500/25 rounded select-none">
       <button onClick={() => updateCartItem(product._id, Math.max(cartItems[product._id] - 1, 0))} className="cursor-pointer text-md px-2 h-full">
         -
       </button>
       <span className="w-5 text-center">{cartItems[product._id]}</span>
       <button onClick={() => updateCartItem(product._id, cartItems[product._id] + 1)} className="cursor-pointer text-md px-2 h-full">
         +
       </button>
     </div>
     ```

### Styling
- The component uses Tailwind CSS for styling.
- Key classes include:
  - `border`, `rounded-md`: For the card container.
  - `group-hover:scale-105`: For the hover effect on the product image.
  - `text-gray-*`, `text-indigo-*`: For text and pricing styles.
  - `flex`, `gap-*`: For layout and spacing.

## Dependencies
- **`react`**: For building the component.
- **[useAppContext](http://_vscodecontentref_/2)**: For accessing shared state and functions.
- **[assets](http://_vscodecontentref_/3)**: For importing icons and images.

## How to Use

1. Import the [ProductCard](http://_vscodecontentref_/4) component into your application:
   ```jsx
   import ProductCard from './components/ProductCard';

   