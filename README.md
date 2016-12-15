<div align="center">
<img src='favicon.png'>
<h3 style="text-decordation:none;">maSAQ.com</h3>
<p>Découvrez vos goûts | Discover your taste</p>
</div>
<br>
  
# Synopsis   
*GEN* lets you create any kind of event in sync with Google Calendar. The application allows someone to name their event, search for a host location, invite guests by email, set the start and end dates and times, and input a description of the event.  

*GEN* is the quickest way to create an event for your Google Calendar, the users being always one button away from the application. *GEN* is a joy to use on both desktop and mobile.
                       
# Strategy
You can use the live version of *GEN* in your favorite browser at the [following link](http://genevents.herokuapp.com/).    

# Prerequisites
You can also run *GEN* locally by following all the steps below.  

Note that all the environment variables necessary to run the project successfully are provided in the `.env` file already. Feel free to edit these variables with your own information in case you want to use this project as a starter for yours.


#### Step 1: Prerequisites
First, you need to have installed [Node.js](https://nodejs.org/en/), [Npm](https://www.npmjs.com/), [Git](https://git-scm.com/), [PostgreSQL](https://www.postgresql.org/download/), [Virtual Box](https://www.virtualbox.org/), and [Vagrant](https://www.vagrantup.com/downloads.html) on your computer.   


#### Step 2: Clone the github repository

Move to an empty directory on your computer and clone the github repository with the following command:  

```  
git clone https://github.com/MichelML/gen.git
```  
After this command is executed,  move to the local directory created for the cloned github repository with the following command:  

```  
cd gen  
```  

#### Step 3: Install node dependencies
To install all the node modules dependencies for the project, run the following command on your computer:  

```
npm install  
```  
This could take a few minutes or less.

#### Step 4: Setup PostgreSQL database
Your last step before running the application is to make sure the postgreSQL database is properly setup. To do that, simply run the automated process bundled with this repository with the following command:  

```
vagrant up
```  
  
This could take a few minutes as well. After this step, your database should be up and running through a virtual machine on your computer.

#### Step 5: Run the application  
With all these efforts, it is now time to run the application with the following command from the local version of the github repository:  

```
node app
```  

#### Step 6: Edit the application (optional) 
After completing steps 1 to 5, feel free to start editing the application to your taste. If you are to edit the views or elements in the `public` folder, make your edits in the `views_src` and the `public_src` first, and run the following command before rerunning the app:  

```  
gulp move-views && gulp
```
If you are to add images to the application, you can either add them directly in the `public/img` folder, or add them in the `public_src/img` folder and run:

```  
gulp move-img
```  

Lastly, if you were to take the time to human read `gulpfile.js`, you could also decide to run specific tasks with the following command:  

```  
gulp <name of the task>
```  

No build process was utilized for the back-end of the application.

# Edit application    
As of the last edit of this README, *GEN* is mostly supported by the following technologies:
#### Web framework  
* [Express](http://expressjs.com/) - Minimalist web framework for Node.js

#### Database
* [PostgreSQL](https://www.postgresql.org/) - Open source SQL database for users and events storing
    
#### Design    
* [Materialize](http://materializecss.com/) - Material Design appearance of the application  
* [Google Fonts](https://www.google.com/fonts) - Fonts of the application  
  
#### DOM manipulation   
* [jQuery](https://jquery.com/) - DOM selection, animation, and event handling   
  
#### Tailored inputs
* [Selectize](https://selectize.github.io/selectize.js/) - Integration of a textbox/\<select\> hybrid input for selecting guests for an event
* [Pickadate](http://amsul.ca/pickadate.js/) - Mobile-friendly and responsive jQuery date and time input picker

#### Templating 
* [Pug](https://github.com/pugjs/pug) - Cleaner html allowing back-end to front-end data injection and conditionals

#### Emailing module
* [Node-mailer](https://github.com/nodemailer/nodemailer) - E-mail sender via  Node.js

#### Data-binding and MVVM framework    
* [Knockout.js](http://knockoutjs.com/) - Data-binding and MVVM framework    
  
#### Local storage technology    
* [localForage](https://github.com/localForage/localForage) - Augmented client side storage functionalities for faster info retrieval
  
#### Development    
* [Gulp](http://gulpjs.com/) - Build process and automation of various development tasks (see `gulpfile.js` for all gulp packages utilized)     
* [Vagrant](https://www.vagrantup.com/) - Automation of the PostgreSQL database setup
* [VirtualBox](https://www.virtualbox.org/) - Development environment provider

#### API  
* [Coveo API](https://developers.google.com/maps/web/?hl=en) - Search for event locations    

## Contributors
Michel Moreau - [michel.moreau.lapointe@gmail.com](mailto:michel.moreau.lapointe@gmail.com?Subject=GEN%20Project)
  
## Maintainer 
Michel Moreau - [michel.moreau.lapointe@gmail.com](mailto:michel.moreau.lapointe@gmail.com?Subject=GEN%20Project) 
