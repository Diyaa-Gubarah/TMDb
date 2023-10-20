# React Native Movie App

This React Native application allows users to explore and view popular movies from The Movie Database (TMDb). The app provides a user-friendly interface, responsive design, and integrates with TMDb's API to fetch movie data.

## Project Overview

- **Project Name:** TMDb
- **Project Duration:** 5 days

## Table of Contents

1. [Installation](/#installation)
2. [Development Timeline](/#development-timeline)
3. [Tasks and Solutions](/#tasks-and-solutions)
4. [Best Practices and Clean Code](/#best-practices-and-clean-code)
5. [Challenges and Issue Resolution](/#challenges-and-issue-resolution)
6. [Resources Used](/#resources-used)
7. [Final Remarks](/#final-remarks)

## 1. Installation

To run this React Native Movie App on your local machine, follow these steps:

1. Clone this repository to your local machine using Git:

   ```bash
   git clone https://github.com/Diyaa-Gubarah/TMDb.git

2. ```cd TMDb```

3. ```npm install```

4. After the installation is complete, you can run the application on an Android emulator using: ```npm run android```

## Development Timeline

The development of this React Native Movie App was carried out over a 4-day timeline. Below is a detailed account of the development phases:

### Day 1

- **Project Setup:** The initial day involved setting up the React Native project structure, including managing dependencies, components, TypeScript integration, and navigation. 

- **API Integration:** The integration of the TMDb API was initiated to fetch popular movie data. This process included obtaining the API key and understanding the data returned.

- **Reusable Components:** The creation of reusable components, such as `NativeText.tsx` and `NativeIcon.tsx`, was executed to ensure that these components adhered to best practices and clean code standards. Additionally, a custom theme was developed using ContextAPI and a reducer.

- **Creating Custom Hook:** The creation of a custom hook, `useMovieQuery`, was implemented using React Query to fetch popular movies from the "getMovie" API. This process also involved the definition of response and movie types.

- **UI Design:** The initial user interface design commenced, encompassing both the movie list and detail screens. During this phase, a simple list was constructed to represent the API data and validate the functionality.

### Day 2

- **UI Design:** The refinement of the user interface for the movie list continued on this day, drawing inspiration from design concepts found on Dribbble.

- **Adding Animation:** While seeking design inspiration, a unique animation feature was discovered in a YouTube application. As a result, the decision was made to incorporate similar animations into the app.

- **Animation Issue:** A significant portion of the day was dedicated to resolving animation-related issues. After an exhaustive investigation, it was determined that the problem lay in the source code of a similar application from three years ago. This issue was successfully resolved, coinciding with the development of the detail screen.

- **State Management:** State management for tracking selected movie details was initiated. Zustand was chosen for its simplicity, in conjunction with React Query.

### Day 3

- **UI Design:** The design of the detail screens was initiated, culminating in the creation of a simple screen to represent the selected movie ID and validate the functioning of the state management.

- **Resolving Animation Issues:** The animation issue was revisited and resolved effectively. This included studying the source code of the aforementioned YouTube application, leading to a comprehensive understanding of the problem and its solution. Concurrently, the detail screen was developed.

- **Styling UIs:** Extensive styling work was undertaken on both the list and detail components. Atom components were introduced to enhance their visual appeal.

- **Optimizing UI Performance:** Measures were taken to optimize UI performance. This included switching to `FastImage` for improved performance, wrapping functions with `useCallback`, and using `useMemo` to optimize the calculation of expensive values.

### Day 4

- **Responsive Design:** A strong emphasis was placed on ensuring responsive design principles were applied uniformly across both Android and iOS devices. This entailed the creation of utility functions within `responsive.ts`.

- **Loading Indicator:** The implementation of a loading component, `Loading.tsx`, was executed to enable its use in various components in the future.

- **Error Handling:** Robust error handling mechanisms were introduced for API calls to present user-friendly error messages.

- **RTL Issues:** Challenges arose when the application's appearance was disrupted upon selecting "RTL" as the preferred language. An investigation was initiated to address this issue.

- **Continued Investigation of RTL Issues:** In an effort to resolve the RTL issues, additional libraries were incorporated to detect the device's current language. Custom hooks, including `useRTL` for language detection and `useTranslate` for app language translation, were developed.

- **Final Testing:** Exhaustive testing was conducted to address any remaining issues and deliver a polished user experience.

- **Optimization:** The code underwent further optimization for performance enhancements and code cleanliness.

- **Project Completion:** The project was finalized, and all preparations were made for submission.



## Tasks and Solutions

During the development of the React Native Movie App, several tasks and challenges were encountered. Here's an overview of these tasks and the solutions implemented:

### Task 1: Animation Implementation

**Challenge:** Incorporating smooth animations into the app was a significant challenge. It required replicating a specific animation effect found in another application.

**Solution:** After extensive investigation and studying the source code of the reference application, the root cause of the animation issue was identified and successfully resolved. The animation was integrated into the app as originally intended.

### Task 2: State Management

**Challenge:** Managing the state to track selected movie details was crucial. Choosing the right state management approach was a key decision.

**Solution:** Zustand, a lightweight state management library, was selected for its simplicity and seamless integration with React Query. This combination provided efficient state management for the app.

### Task 3: User Interface Design

**Challenge:** Designing a visually appealing user interface for both the movie list and detail screens was a core requirement.

**Solution:** The UI design process involved drawing inspiration from Dribbble and YouTube for creative design ideas. Atom components were introduced, and meticulous styling work was performed to create attractive and responsive user interfaces.

### Task 4: Responsive Design

**Challenge:** Ensuring that the app's UI remained responsive on both Android and iOS devices was vital.

**Solution:** Responsive design principles were enforced by creating utility functions within the `responsive.ts` module. This ensured that the app provided an optimal viewing experience on all screen sizes and orientations.

### Task 5: Error Handling

**Challenge:** Effective error handling mechanisms were required for API calls to provide user-friendly error messages in case of issues.

**Solution:** Robust error handling was implemented to offer clear and informative error messages, enhancing the user experience by providing feedback in case of any problems.

### Task 6: RTL (Right-to-Left) Support

**Challenge:** The app exhibited layout issues when users selected "RTL" as their preferred language.

**Solution:** To address RTL issues, additional libraries were integrated to detect the device's current language and update the UI direction accordingly. Custom hooks, such as `useRTL` for language detection and `useTranslate` for app language translation, were developed to handle this challenge.

### Task 7: Optimization

**Challenge:** Ensuring optimal performance while maintaining clean and efficient code was an ongoing concern.

**Solution:** Several measures were taken to optimize performance. The app was updated to use `FastImage` for improved image loading performance. Functions were wrapped with `useCallback` to avoid unnecessary re-renders, and `useMemo` was employed for calculating expensive values efficiently.


## Best Practices and Clean Code

Throughout the development of the React Native Movie App, a strong emphasis was placed on adhering to best practices and maintaining clean code. Here are some of the best practices and coding principles applied:

- **Modular Component Structure:** Components were organized into a modular structure, promoting reusability and maintainability. This design approach ensures that components can be easily extended or reused in other parts of the app.

- **TypeScript Integration:** TypeScript was used to enhance code reliability and maintainability. It provides static typing, improving code quality and reducing runtime errors.

- **Responsiveness:** Responsive design principles were followed, ensuring that the app's layout adapts to various screen sizes and orientations, providing a consistent and visually pleasing experience for both iOS and Android devices.

- **Error Handling:** A robust error-handling mechanism was implemented, providing clear and user-friendly error messages. This enhances the user experience by providing feedback in case of issues.

- **State Management:** Zustand, a lightweight state management library, was chosen for its simplicity and effectiveness in managing app-wide state. React Query was used in conjunction to efficiently handle API data.

- **UI Design Guidelines:** The UI was designed based on popular design guidelines, drawing inspiration from platforms like Dribbble and YouTube. Attention to detail was given to ensure a visually appealing and user-friendly interface.

- **Performance Optimization:** To enhance performance, images were loaded efficiently using `FastImage`. Functions were wrapped with `useCallback` to prevent unnecessary re-renders, and `useMemo` was employed for the calculation of expensive values.

- **Custom Hooks:** Custom hooks were created to handle specific functionality, such as language detection (`useRTL`) and language translation (`useTranslate`). This separation of concerns enhances code maintainability.

- **Code Commenting:** Code was thoroughly documented with meaningful comments to aid readability and understanding. This helps other developers who may collaborate on the project.

- **Utility Functions:** Utility functions, such as those for responsive design, were modularized to ensure a clear separation of concerns and promote code maintainability.

- **Configuration Management:** Sensitive configuration data, such as API keys, was securely managed to ensure data privacy and security.

The adherence to these best practices and clean coding principles resulted in a well-structured and maintainable codebase, which contributes to the app's reliability and future scalability.



## Resources Used

During the development of the React Native Movie App, several resources and tools were utilized to facilitate the project. These resources contributed to a more efficient development process and improved the overall quality of the application:

- **React Native Framework:** The core of the application was built using the React Native framework. It provided a foundation for developing cross-platform mobile applications with JavaScript.

- **TMDb API:** The Movie Database (TMDb) API was used to fetch popular movie data for the application. This extensive API offered valuable information on movies, including titles, overviews, and poster images.

- **React Query:** To manage data fetching and state, the React Query library was employed. This powerful library simplified the handling of asynchronous data and API calls.

- **FastImage:** For optimized image loading and performance, the FastImage library was integrated. It played a crucial role in rendering images efficiently, particularly within the movie list.

- **Dribbble:** As a source of design inspiration, Dribbble provided valuable ideas and concepts for enhancing the visual design of the app.

- **Custom Hooks:** Custom React hooks were created to address specific application requirements. `useMovieQuery` facilitated movie data fetching, `useRTL` helped manage RTL language support, and `useTranslate` handled language translation.

- **i18next and react-i18next:** The i18next and react-i18next libraries were instrumental in implementing internationalization and language support within the app. They contributed to a more inclusive user experience.

- **React Navigation:** The React Navigation library enabled the creation of smooth and intuitive navigation flows within the application.

- **Linear Gradient:** The React Native Linear Gradient library was used to create appealing gradient backgrounds for various screens.

These resources, along with in-depth reading and research, greatly assisted in the successful development and functionality of the React Native Movie App.



## Final Remarks

The development of the React Native Movie App was an exciting journey that allowed for the creation of a visually appealing and feature-rich mobile application. In a span of 4 days, the app evolved from an initial project setup to a fully functional movie exploration platform.

The project presented its unique set of challenges, primarily revolving around designing an intuitive user interface, optimizing performance, and ensuring a responsive layout. Each challenge was met with innovative solutions, including the incorporation of advanced libraries, custom hooks, and rigorous testing.

The development timeline was marked by continuous learning and problem-solving. Over the course of the project, the following achievements and outcomes were realized:

- Seamless integration with the TMDb API for accessing movie data.
- Visually appealing and responsive user interface design.
- Implementation of captivating animations for the movie list.
- The development of a RTL language support mechanism for improved accessibility.
- Efficient state management with React Query and Zustand.
- Performance optimization for smooth user interactions.
- Error handling for user-friendly messages.
- A clean codebase and adherence to best practices.
- The use of localization libraries for language support.
- A comprehensive list of resources to streamline development.

As the developer of this app, I am pleased with the outcome and the learning experiences gained during its creation. This project demonstrates the ability to craft a full-fledged mobile application from scratch and showcases the commitment to providing users with a top-tier experience.

Should additional time be allotted for this project, there are several potential enhancements that can be made:

- Implement user authentication and user-specific features.
- Incorporate additional movie details and trailers.
- Create user profiles and personalized movie recommendations.
- Improve accessibility and language support even further.

In conclusion, the React Native Movie App stands as a testament to the dedication to quality development, embracing innovative solutions, and a commitment to providing users with a memorable experience while exploring the world of movies.

Your feedback and further guidance for any possible improvements or future developments would be highly valued. Thank you for the opportunity to work on this project.








## Resources Used

During the development of the React Native Movie App, a variety of resources were consulted for guidance, inspiration, and problem-solving. These resources include articles, tutorials, videos, and open-source projects:

- [Custom Fonts in React Native](https://blog.logrocket.com/adding-custom-fonts-react-native/)
- [React Native Custom Theme Selector](https://dev.to/herbievine/react-native-custom-theme-selector-4227)
- [Build a Custom Theme Provider Using React's Context API](https://plainenglish.io/blog/build-a-custom-theme-provider-using-react-s-context-api)
- [React Native Animated Carousel Tutorial](https://www.youtube.com/watch?v=yV-2HRzNX9o)
- [Catalin Miron's React Native Movie Carousel](https://github.com/catalinmiron/react-native-movie-2.0-carousel/blob/master/App.js)

These resources played a pivotal role in shaping the development process and provided valuable insights into best practices, design inspiration, and problem-solving techniques.
