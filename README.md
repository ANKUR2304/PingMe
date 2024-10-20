# PingMe

**PingMe** is a real-time chat application built using **React** and **ChatEngine**. It allows users to seamlessly communicate with each other in real-time. With a modern user interface, it supports user authentication and dynamic chat room management.

## Key Features

- **Real-Time Messaging**: Send and receive messages in real-time across multiple chat rooms.
- **User Authentication**: Secure user login and registration with Firebase.
- **Multiple Chat Rooms**: Engage in multiple chat conversations, with the ability to create and join different rooms.
- **User Profiles & Avatars**: Display user profiles with avatars for a personalized chat experience.
- **Responsive Design**: Fully responsive UI, optimized for both desktop and mobile views.
- **Logout Functionality**: Users can securely log out and end their session with a single click.

## Technologies Used

- **React**: Frontend JavaScript library for building the user interface.
- **ChatEngine**: Real-time chat API and backend for managing conversations and users.
- **Context API**: Used for managing global state and sharing data across components.
- **Firebase**: User authentication and storage for handling user login.
- **Axios**: For making API requests.
- **React Router**: For handling in-app navigation.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
     git clone https://github.com/your-username/PingMe.git
    ```

2. Navigate to the project directory:
   ```bash
   cd PingMe
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a .env file in the root directory and add your ChatEngine and Firebase credentials.
    ```
    REACT_APP_CHAT_ENGINE_ID=your-chat-engine-id
    REACT_APP_CHAT_ENGINE_KEY=your-chat-engine-private-key
    ```

5. Start the development server:
    ```bash
      npm start
    ```

6. Visit http://localhost:3000 in your browser to use PingMe.

## Demo
You can try out the live demo [here](https://pn-me.netlify.app/).

## Contributing
Contributions are welcome! If you'd like to contribute, please open an issue or submit a pull request.
