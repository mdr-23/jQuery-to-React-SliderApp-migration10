# Slider App - jQuery to React Migration

This is a migration of the Slider App from jQuery to React. The original implementation used jQuery for handling the image slider functionality, and now it has been migrated to React, utilizing React's state and components.

## Technologies Used

- React
- JavaScript
- CSS

## Migration Process

The migration involved the following steps:

1. Set up a new React project using `create-react-app`.
2. Created a new `App` component as the entry point of the application.
3. Refactored the HTML structure of the slider using React components and JSX syntax.
4. Replaced the jQuery code with React state and event handlers.
5. Created a new `useState` hook to manage the current image index.
6. Implemented the functionality to display the current image based on the current index.
7. Created event handlers to handle the "Prev" and "Next" button clicks, updating the current image index accordingly.
8. Added CSS styles to achieve the desired slider layout and appearance.
9. Tested the application to ensure that the slider functionality works as expected.

## Usage

To use the Slider App, follow these steps:

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Run the application using `npm start`.
4. Open the application in your browser at `http://localhost:3000`.

## Acknowledgements

This migration was done as a learning exercise to understand the process of migrating from jQuery to React. The original Slider App was created using jQuery and served as a basis for the migration process.

## Conclusion

The migration from jQuery to React has allowed us to take advantage of the benefits of a modern JavaScript framework, such as improved performance, better organization of code, and easier maintenance. The React components and hooks provide a more structured and declarative approach to building interactive UIs.

By completing this migration, we have successfully transformed the original jQuery-based application into a more scalable, maintainable, and efficient React application.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this code as you wish.