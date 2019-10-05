## NYC Restroom Locator App
Made by Kevin Wang

This restroom locator app has a google map in which the user can navigate and select the marker from the map. Clicking on the marker will show the information of the restroom and it can be added to the Selected Restroom List on the right. There is an option of filtering out the type of restroom as well as the wheelchair accessibility ones on the bottom. The about page has a user story and goes in detail of how to use the website.

## Important Links

Here's the link to the backend: https://github.com/NinjaEagle/nyc-restroom-finder-backend which contains the seeded data of selected restrooms and favorites.

And the video demo of the project: https://youtu.be/7EaZ7jpVICQ

## Setup

1. Use your terminal to navigate into the place where you want to clone NYC Restroom Finder's directory and `git clone` the url.
2. In terminal run `bundle install` in order to install the necessary gems needed to run the backend.
3. In terminal run `npm install` in order to install the necessary packages found in the `package.json` file to run this frontend.
4. Then this command: `yarn add semantic-ui-react`
5. Run `rails s` on the backend (https://github.com/NinjaEagle/nyc-restroom-finder-backend) then run `npm start`
6. Open [http://localhost:3000](http://localhost:3000) or another port specified to view it in the browser.

## How to use this

NYC Restroom Finder API is needed in order to accept HTTP requests from it's frontend NYC Restroom Finder. This allows users to:
* Create, read, and delete their favorites list.
* Create a review of the restrooms they been to on their profile page so they can remember next time if they want to use it again or not.
* Are given the option to filter out a variety of different types of restrooms as well wheelchair accessibility to choose from and add to their selected list to go to.

Click on the About page as it has a user story and tells you how to use this app.

## Built With

[ReactJS](https://github.com/facebook/react) - Frontend Framework
&&
[Ruby on Rails](https://github.com/rails/rails) - Backend Ruby on Rails API created using ActiveRecord

### License

This project is licensed under the Learn.co Educational Content License. Please read `LICENSE.md` location in the directory or click on the following link (http://learn.co/content-license) for further details.	This project is licensed under the Learn.co Educational Content License. Please read `LICENSE.md` location in the directory or click on the following link (http://learn.co/content-license) for further details.