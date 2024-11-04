# Centime Financial Overview - Sankey Diagram Application

This project is a financial data visualization tool built with React. It uses a Sankey Diagram to display financial flows, including income and expenses, and provides a dynamic UI for managing nodes (representing financial categories) and links (showing relationships between them). The application supports both English and Hindi languages through internationalization (i18n).

## Features

### Core Functionality

- **Sankey Diagram**: Visualizes financial flows, including income sources and expenditure destinations.
- **Dynamic Node Management**: Users can easily add, edit, and delete financial nodes representing different categories (e.g., Salary, Bills).
- **Link Management**: Allows users to manage connections between nodes, representing financial flows (e.g., `Salary → Bills`).
- **Internationalization (i18n)**: Supports English and Hindi with seamless language switching.
- **Redux Integration**: Manages the application's state globally, ensuring a consistent and responsive user experience.
- **Test Coverage**: Unit tests are implemented using Jest and React Testing Library to ensure robust and reliable functionality.

### UI Enhancements Based on Feedback

1. **Responsive Layout**: 
   - The Sankey Diagram now resides on the right side (75% width), while the node management panel is positioned on the left (25% width). This layout provides more space for visualizing financial flows and offers real-time updates as nodes are modified.

2. **Node List and Management**:
   - Nodes are listed on the left panel, allowing users to view and manage them efficiently.
   - Editing and deleting nodes no longer require typing the node name, which reduces user input errors.
   - Instead of a text-based input for selecting nodes, we introduced dropdown menus to streamline the process, making it easier to identify and select nodes accurately.

3. **Simplified Node Deletion**:
   - Each node now has a delete icon next to it, making deletion a one-click operation. This reduces the steps needed for managing nodes and enhances usability.

4. **Improved User Experience**:
   - Dropdowns have been implemented for editing and managing nodes, improving accessibility and usability.
   - Enhanced styling for dropdowns and inputs to ensure a consistent look across elements and improve the overall aesthetic.

### Modern Styling
- Enhanced with CSS to improve UI/UX with responsive layout and focus states.
- Improved dropdown height and spacing to provide a uniform look across inputs, buttons, and dropdowns.

## Screenshots

### English View
<img width="1437" alt="Screenshot 2024-11-04 at 5 43 26 PM" src="https://github.com/user-attachments/assets/f3c6085d-67d6-4702-a7ea-5cac2fd71b4e">


### Hindi View
<img width="1420" alt="Screenshot 2024-11-04 at 5 43 37 PM" src="https://github.com/user-attachments/assets/74dee861-0745-438c-a412-695e425fdc83">


### Edit Node Panel
<img width="380" alt="Screenshot 2024-11-04 at 5 43 57 PM" src="https://github.com/user-attachments/assets/8b36fd3d-c838-4ae0-b23a-d1795c35608e">


### Delete Node with Icon
<img width="376" alt="Screenshot 2024-11-04 at 5 44 04 PM" src="https://github.com/user-attachments/assets/1476d7ea-91f7-4f94-bc98-e938023f0c0a">

### Tests Coverage
<img width="1154" alt="Screenshot 2024-10-29 at 5 02 33 PM" src="https://github.com/user-attachments/assets/d3fc315d-b74a-465a-820e-1fde6d86ed21">

## Project Structure

- `src/components`: Contains React components such as `Chart`, `NodeManager`, and custom tooltips.
- `src/redux`: Contains Redux actions, reducers, and store configuration for managing global state.
- `src/i18n`: Configures internationalization with language files (`en.json` and `hi.json`) and i18next initialization.
- `src/assets`: Stores static assets like the Centime logo.
- `src/styles`: Contains CSS files for styling components.

## Usage Guide

1. **Managing Nodes**:
   - Add a node by entering the node name and value, then click **Add Node**.
   - Edit a node by selecting it from the dropdown, entering a new value, and clicking **Edit Node**.
   - Delete a node by clicking the trash icon next to the node name in the list.

2. **Managing Links**:
   - Select a source and target node from the dropdowns, enter the link value, and click **Add Link** to create a connection between nodes.

3. **Switching Language**:
   - Use the **English** and **Hindi** buttons in the top-right corner to toggle between languages.

## Internationalization (i18n)

The application supports English and Hindi, configured using i18next. Language files are stored in `src/i18n/en.json` and `src/i18n/hi.json`. Each string used in the application UI is mapped in these files, enabling easy expansion to additional languages if needed.

