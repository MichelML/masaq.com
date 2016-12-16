<div align="center">
<img src='favicon.png'>
<a href="https://michelml.github.io/masaq.com/build/"><h3 style="text-decordation:none;">maSAQ.com</h3></a>
<p>Découvrez vos goûts</p>
</div>
<br>


<a href="#synopsis">Synopsis</a><br>
<a href="#strategy">Strategy</a><br>
-<a href="#core-strategy">core strategy</a><br>
-<a href="#using-react">on using React</a><br>
<a href="#installation">Installation</a><br>
<a href="#development">Development</a><br>
<a href="#edit">Edit application</a><br>
<a href="#documentation">Documentation</a><br>
<a href="#contribute">Contribute</a><br>



<h1 id="synopsis">Synopsis</h1>
[maSAQ.com](https://michelml.github.io/masaq.com/build/) is a prototype search interface to ease product discovery for all SAQ's clients, using the Coveo REST API. This project originated from a technical challenge which was part of the front-end developer interview process at Coveo.

The challenge has been accepted.

There is only a french version for now.
                       
<h1 id="strategy">Strategy</h1>

<h4 id="core-strategy">core strategy</h4>

_Manage the whole application state based on the `window.location.hash`_  
(based on a [recent book I read](https://www.amazon.ca/Serverless-Single-Page-Apps-Available-ebook/dp/B01KGKR6LO)).

More precisely, as the user navigates into the website and trigger an event dictating the client to get new information from the Coveo rest API, the hash is updated consequently, which is then parsed to a JSON object meant to be sent as the body of a POST request made to the Coveo REST API, out of which a response is received by the client, and interpreted to update the UI with the new information received. Six main behaviors can cause the hash to update (there are others, but these are the most important):

``` 
User searches for a new product -> client updates hash -> client parses hash to JSON -> client sends POST request to Coveo API with hash-JSON as body (and extra, constant rest parameters also contained in the JSON body) -> information is received by the client, interpreted and passed to the main React component, which passes the proper information to its children to update the UI
```  
``` 
User checks/unchecks a filter -> ...(same sequence)... ->
```  
``` 
User resets filters -> ...(same sequence)... ->
```   
``` 
User clicks on a new sort criteria -> ...(same sequence)... ->
```  
``` 
User clicks on load more results button -> ...(same sequence)... ->
```  
``` 
User goes back/advances in the browser history -> ...(same sequence)... ->
```  
No local storage or other strategies are used to manage page refresh or second+ visits for now. When this occurs, the app is currently reloaded to its initial state.

<h4 id="using-react">on using React</h4>
The app is based on React mainly to build the UI components and to provide a rather simple way to manage the data flow (as explained in the [core strategy](#core-strategy)). The component tree resembles the following:  

``` 
MaSAQ
	Header
		HeaderTitle
		SearchBar
		SortSection
			SortCriteria<List>
	
	Aside
		ReinitFiltersButton (currently not a component)
		FiltersForm
			FilterCategory<List>
				Checkbox<List>
	ProductsGrid
		NumberOfResultsFound (currently not a component)
		DidYouMeanMessage (currently not a component)
		ProductCard<List>
			Chip<List>
			MaterialButton (currently a component but not used as such in ProductCard)
			AccordsDialog
		ErrorCard
		MoreResultsButton (currently not a component)
		ToTopButton (currently not a component)
	Footer (currently not a component)
```
When indicated as __currently not a component__, this means you won't find the actual component with that name in the project folder, but you will find it in its, unnamed, html format inside their parent component. The indication in the above schema means we believe this should be a component in itself, but is currently not.

Each component is named as presented in the schema in the project folder at `_root_/src/components`. Each component possesses its own stylesheet with the same name at `_root_/src/styles`, and its own test file with the same name at `_root_/src/tests`. It may however be possible that the styles of parent elements may be used in their children. If you do not find a rule you want to editin the component's style, you may want to climb up the component tree to find which component is containing the rule. As a rule of thumb, some utility rules (hide, show components) can be found at the root component `MaSAQ`.

<h1 id="installation">Installation</h1>
#### Step 1: Prerequisites
First, make sure you have the following installed on your computeR: [Node.js](https://nodejs.org/en/), [Npm](https://www.npmjs.com/), and [Git](https://git-scm.com/).   


#### Step 2: Clone the github repository

Move to an empty directory on your computer and clone the github repository with the following command:  

```  
git clone https://github.com/MichelML/masaq.com.git
```  
After this command is executed,  move to the local directory created with the following command:  

```  
cd masaq.com  
```  

#### Step 3: Install node dependencies
To install all the node modules dependencies for the project, run the following command on your computer:  

```
npm install  
```  
This could take a few minutes or less. You are now ready to edit the application.

<h1 id="development">Development</h1>


# Technology stack    
As of the last edit of this README, *maSAQ.com* is mostly supported by the following technologies:
    
#### Design    
* [MDL](https://getmdl.io/) - Material Design appearance of the application  
* [Google Fonts](https://www.google.com/fonts) - Fonts of the application  
  
#### DOM manipulation and User interface
* [React](https://facebook.github.io/react/) - building UI components and managing data flow   
* [jQuery](https://jquery.com/) - DOM selection, animation, and event handling       
  
#### Development   
* [Create react app](https://github.com/facebookincubator/create-react-app) - Create React apps with no build configuration
* [Webpack](https://webpack.github.io/docs/) with webpack-dev-server, html-webpack-plugin and style-loader - module bundler     
* [Autoprefixer](https://github.com/postcss/autoprefixer) - Parse CSS and add vendor prefixes to rules
* [Babel](https://babeljs.io/) - Use next generation JavaScript, today
* [Eslint](http://eslint.org/) - pluggable linting utility for JavaScript and JSX

#### Testing
* [Jest](https://facebook.github.io/jest/)
* [Jasmine](https://jasmine.github.io/)
* [Enzyme](https://jasmine.github.io/)

#####DISCLAIMER: very minimal testing has been made so far. More unit tests (a lot more), remain to be added.


#### API  
* [Coveo API](https://developers.coveo.com/display/public/SearchREST/REST+Search+API+Home;jsessionid=1B209A1E53E98FE88DDF375C76FB6CD9) - Searching and getting relevant SAQ products

#### Utilities
* [createcomp](https://www.npmjs.com/package/createcomp) - a node script I personally coded to manage the creation of a react component along with its stylesheet and test file when working on components. This should be updated to provide delete and rename functionalities in the future.

  
## Maintainer 
Michel Moreau - [michel.moreau.lapointe@gmail.com](mailto:michel.moreau.lapointe@gmail.com?Subject=GEN%20Project) 
