# Folder Structure in React

Focus only on `src` folder

Inside `src` folder we would be having these folders:

- `pages`:  Contains all the pages where a User can reach to.
  
  - Determines the Foundation for User Navigation

- `components/ui` : Individual Components which does not need any other components to build them. (Building Blocks of  Reusable Components).

- `components`:  Holds all the reusable components

- `hooks`: Contains all the custom Hooks.

- `services`:  Holds all the Services consumed by  Our project ( Third-party API).
  
  - Group them by type . Eg: For API create a dedicated `services/API` folder.

- `utils`: Contains all the go-to code (small they can be used anywhere in the project) Eg: To format strings to be displayed on the UI

![](G:\SKILLS\Full%20Stack%20Devlopment\WEB%20DEV\Learning-Web-Devlopment-MERN-Stack\ReactJS\Notes\React%20Best%20Folder%20Structure.jpeg)  

![](C:\Users\ADMIN\AppData\Roaming\marktext\images\2025-06-24-11-09-13-image.png)

Blue are global level folders

Each Feature will get its dedicated folder in which it contains all the things it requires.

## Implementing Feature Sliced Design(FSD):

Ref: https://feature-sliced.github.io/documentation/docs/get-started/tutorial

#### Steps:

1. List out all the pages in the project(Eg: Home. sign-in , sign-up, user profile). Every one of these pages will become its own *slice (sub-folders of top-level folders)* on the Pages *layer(top-level folder)*

2.   pages cannot reference each other. That is, one page cannot import code from another page. This is due to the **import rule on layers** .

3. *A module (file) in a slice can only import other slices when they are located on layers strictly below.*
