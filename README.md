![](http://www.startupindex.net/wp-content/uploads/2015/11/SocialCops.png)
Intern Project 
=======================
[![Build Status](https://travis-ci.org/sanudatta11/socialcops-int.svg?branch=master)](https://travis-ci.org/sanudatta11/socialcops-int)
![Dependency Status](https://david-dm.org/sanudatta11/socialcops-int.svg) 

**Live Demo**: http://socialcops-dev.us-east-1.elasticbeanstalk.com/

Jump to [What's new in 1.0.0?](#changelog)

A Sample application for Intern using **NodeJS**

<h4 align="center">Swagger Home Page</h4>

![](https://s3.amazonaws.com/shortto/pics/socialcops.png)

<h4 align="center">API Response Models</h4>

![](https://s3.amazonaws.com/shortto/pics/socialcops-models.png)

Table of Contents
-----------------

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Obtaining API Keys](#obtaining-api-keys)
- [Project Structure](#project-structure)
- [List of Packages](#list-of-packages)
- [Useful Tools and Resources](#useful-tools-and-resources)
- [Recommended Design Resources](#recommended-design-resources)
- [Recommended Node.js Libraries](#recommended-nodejs-libraries)
- [Recommended Client-side Libraries](#recommended-client-side-libraries)
- [Pro Tips](#pro-tips)
- [FAQ](#faq)
- [How It Works](#how-it-works-mini-guides)
- [Cheatsheets](#cheatsheets)
    - [ES6](#-es6-cheatsheet)
    - [JavaScript Date](#-javascript-date-cheatsheet)
    - [Mongoose Cheatsheet](#mongoose-cheatsheet)
- [Deployment](#deployment)
- [Docker](#docker)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

Features
--------

- **JWT Auth** The login used here is restfull and uses JWT Signed Token for verification after logging in.
- **JSON and x-www-form-urlencoded multi** The data sent to the API can i
- **On Air Image Resize** Our API doesn't download the Images right away , it renders it on the air with the public link resizes it without downloading.
- **Base64 Image and URL** We upload your thumbnail to a online Image Hosting named Cloudinary and also return its base64. So you can choose what you need.

-------------

- [Node.js 6.0+](http://nodejs.org)
- Command Line Tools
 - <img src="http://deluge-torrent.org/images/apple-logo.gif" height="17">&nbsp;**Mac OS X:** [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9+**: `xcode-select --install`)
 - <img src="http://dc942d419843af05523b-ff74ae13537a01be6cfec5927837dcfe.r14.cf1.rackcdn.com/wp-content/uploads/windows-8-50x50.jpg" height="17">&nbsp;**Windows:** [Visual Studio](https://www.visualstudio.com/products/visual-studio-community-vs)
 - <img src="https://lh5.googleusercontent.com/-2YS1ceHWyys/AAAAAAAAAAI/AAAAAAAAAAc/0LCb_tsTvmU/s46-c-k/photo.jpg" height="17">&nbsp;**Ubuntu** / <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_Linux_Mint.png" height="17">&nbsp;**Linux Mint:** `sudo apt-get install build-essential`
 - <img src="http://i1-news.softpedia-static.com/images/extra/LINUX/small/slw218news1.png" height="17">&nbsp;**Fedora**: `sudo dnf groupinstall "Development Tools"`
 - <img src="https://en.opensuse.org/images/b/be/Logo-geeko_head.png" height="17">&nbsp;**OpenSUSE:** `sudo zypper install --type pattern devel_basis`

**Note:** If you are new to Node or Express, I recommend to watch
[Node.js and Express 101](https://www.youtube.com/watch?v=BN0JlMZCtNU)
screencast by Alex Ford that teaches Node and Express from scratch. Alternatively,
here is another great tutorial for complete beginners - [Getting Started With Node.js, Express, MongoDB](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/).

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/sanudatta11/socialcops-int.git

# Change directory
cd socialcops-int

# Install NPM dependencies
npm install

# Then simply start your app
npm start
```

**Note:** I highly recommend installing [Nodemon](https://github.com/remy/nodemon).
It watches for any changes in your  node.js app and automatically restarts the
server. Once installed, instead of `node app.js` use `nodemon app.js`. It will
save you a lot of time in the long run, because you won't need to manually
restart the server each time you make a small change in code. To install, run
`sudo npm install -g nodemon`.

Obtaining API Keys
------------------

To use the Cloudinary APIs for uploading the image on cloud, you will need
to obtain appropriate credentials: Cloud Name, API Key, API Secret. You will need to go through each provider to generate new
credentials.

**Note** I have included dummy keys and credentials for
all API examples to get you up and running even faster. But don't forget to update
them with [*your credentials*] when you are ready to deploy an app.

<img src="https://theme.zdassets.com/theme_assets/261010/0d0f04d045b80bfc06b82fd855d0e61fac6470d4.png" width="200">
<br>

- Visit <a href="https://cloudinary.com/" target="_blank">Cloudinary API Console</a>
- Click on the **Sign Up** <a href="https://cloudinary.com/signup" target="_blank">**Button**</a>
- Login after verifying your email
- Get the API Detials from your Dashboards under **Account Details**
- Copy and Paste those details in *config.js*
- For more details on **NodeJS** Integration <a href="https://cloudinary.com/documentation/node_integration#node_getting_started_guide" target="_blank">**Click Here**</a>

<img src="https://s3.amazonaws.com/shortto/pics/loggly.png">
<br>

- Click on the **Sign Up** on Logly Winston <a href="https://www.loggly.com/signup/" target="_blank">"**here**</a>
- During Sign Up it will ask for the domain you need for logly. Assign a unique one and not it down.
- Login after verifying your email using the same Domain Name , Username and Password
- Navigate to [https://<CNAME/Domain>.loggly.com/sources/setup/node_js]
- Follow the steps listed there for installing the Package
- Copy the Codes in **Step 2** and replace it in **Config.JS**
- Run your application and check for Logs in **Step 3** and **Step 4**
- *Hoorah!* You are good to go



Project Structure
-----------------

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **views**                          | Contains the Local Pug Files                                 |
| **coverage**                       | Contains the Coverage Files of Unit Tests using Istanbul     |
| **public**                         | Static assets (fonts, css, js, img).                         |
| **controllers**/home.js            | Controller for home page (index).                            |
| **controllers**/user.js            | Controller for user account management.                      |
| **routes**/auth.js                 | Login Method , JWT Allocation done here                      |
| **routes**/methodsWork.js          | Contains the other API Methods                               |
| **routes**/route.js                | Specify Express Routes                                       |
| **test**/auth.js                   | Contains the Login API Unit Test using Mocha and Chai        |
| **test**/workers.js                | Unit Test or other 2 APIs using Mocha and Chai               |
| app.js                             | The main application file.                                   |
| package.json                       | NPM dependencies.                                            |
| package-lock.lock                          | Contains exact versions of NPM dependencies in package.json. |

**Note:** There is no preference how you name or structure your views.
You could place all your templates in a top-level `views` directory without
having a nested folder structure, if that makes things easier for you.

List of Packages
----------------

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| async                           | Utility library that provides asynchronous control flow.              |
| cheerio                         | Scrape web pages using jQuery-style syntax.                           |
| express                         | Node.js web framework.                                                |
| body-parser                     | Express 4 middleware.                                                 |
| express-session                 | Express 4 middleware.                                                 |
| serve-favicon                   | Express 4 middleware offering favicon serving and caching.            |
| express-validator               | Easy form validation for Express.                                     |
| request                         | Simplified HTTP request library.                                      |
| validator                       | Used in conjunction with express-validator in **controllers/api.js**. |
| mocha                           | Test framework.                                                       |
| chai                            | BDD/TDD assertion library.                                            |
| chai-http                       | HTTP assertion library.                                               |
| cloudinary                      | Cloudinary streamlines your web application’s image manipulation needs|
| email-validator                 | A simple module to validate an e-mail address                         |
| express-winston                 | winston middleware for express.js.                                    |
| http                            | Istanbul - a JS code coverage tool written in JS.                     |
| jimp                            | An image processing library for Node written entirely in JavaScript   |
| json-patch                      | Library to apply JSON Patches in JavaScript                           |
| json-validation                 | json-validation is a small library that performs                      |
| jsonwebtoken                    | An implementation of JSON Web Tokens.                                 |
| morgan                          | HTTP request logger middleware for node.js                            |
| nodemon                         | For use during development of a node.js based application.            |
| pug                             | Pug is a high performance template engine                             |
| request                         | Request is designed to be the simplest way possible to make http calls|
| swagger-ui-express              | Adds middleware to your express app to serve the Swagger UI bound     |
| winston                         | A multi-transport async logging library for node.js.                  |
| winston-loggly-bulk             | A client implementation for Loggly in node.js.                        |

Pro Tips
--------

- When installing an NPM package, add a *--save* flag, and it will be automatically
added to `package.json` as well. For example, `npm install --save moment`.
- Use [async.parallel()](https://github.com/caolan/async#parallel) when you need to run multiple
asynchronous tasks, and then render a page, but only when all tasks are completed. For example, you might
want to scrape 3 different websites for some data and render the results in a template
after all 3 websites have been scraped.
- Need to find a specific object inside an Array? Use [_.find](http://lodash.com/docs#find)
function from Lodash. For example, this is how you would retrieve a
Twitter token from database: `var token = _.find(req.user.tokens, { kind: 'twitter' });`,
where 1st parameter is an array, and a 2nd parameter is an object to search for.

FAQ
---

### Why do I get `403 Error: Forbidden` when submitting a form?
You need to send proper data in the API for the request to work properly. Incomplete or
corrupt data results in error code **403**

```
Sample of Thumbnail API Data Input
```

**200**

```
{
	"imageUrl" : "https://test.com/google.png"
}
```

**403** *Wrong Data Parameter Key*
```
{
	"ImageUrl" : "https://test.com/google.png"
}
```

### Why Pug (Jade) instead of Handlebars?
When I first started this project I didn't have any experience with Handlebars. Since then I have worked on Ember.js apps and got myself familiar with the Handlebars syntax. While it is true Handlebars is easier, because it looks like good old HTML, I have no regrets picking Jade over Handlebars. First off, it's the default template engine in Express, so someone who has built Express apps in the past already knows it. Secondly, I find `extends` and `block` to be indispensable, which as far as I know, Handlebars does not have out of the box. And lastly, subjectively speaking, Jade looks much cleaner and shorter than Handlebars, or any non-HAML style for that matter.

### Why do you have all routes defined in route.js?
For the sake of simplicity I define the routes in according to the work needed.
And we are done!
Cheatsheets
-----------

### <img src="https://frontendmasters.com/assets/es6-logo.png" height="34" align="top"> ES6 Cheatsheet

#### Declarations

Declares a read-only named constant.

```js
const name = 'yourName';
```

Declares a block scope local variable.
```js
let index = 0;
```

#### Template Strings

Using the **\`${}\`** syntax, strings can embed expressions.

```js
const name = 'Oggy';
const age = 3;

console.log(`My cat is named ${name} and is ${age} years old.`);
```

#### Modules

To import functions, objects or primitives exported from an external module. These are the most common types of importing.

```js
import name from 'module-name';
```
```js
import * as name from 'module-name';
```
```js
import { foo, bar } from 'module-name';
```

To export functions, objects or primitives from a given file or module.

```js
export { myFunction };
```
```js
export const name = 'yourName';
```
```js
export default myFunctionOrClass
```

#### Spread Operator

The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.

```js
myFunction(...iterableObject);
```
```jsx
<ChildComponent {...this.props} />
```

#### Promises

A Promise is used in asynchronous computations to represent an operation that hasn't completed yet, but is expected in the future.

```js
var p = new Promise(function(resolve, reject) { });
```

The `catch()` method returns a Promise and deals with rejected cases only.

```js
p.catch(function(reason) { /* handle rejection */ });
```

The `then()` method returns a Promise. It takes 2 arguments: callback for the success & failure cases.

```js
p.then(function(value) { /* handle fulfillment */ }, function(reason) { /* handle rejection */ });
```

The `Promise.all(iterable)` method returns a promise that resolves when all of the promises in the iterable argument have resolved, or rejects with the reason of the first passed promise that rejects.

```js
Promise.all([p1, p2, p3]).then(function(values) { console.log(values) });
```

#### Arrow Functions

Arrow function expression. Shorter syntax & lexically binds the `this` value. Arrow functions are anonymous.

```js
singleParam => { statements }
```
```js
() => { statements }
```
```js
(param1, param2) => expression
```
```js
const arr = [1, 2, 3, 4, 5];
const squares = arr.map(x => x * x);
```

#### Classes

The class declaration creates a new class using prototype-based inheritance.

```js
class Person {
  constructor(name, age, gender) {
    this.name   = name;
    this.age    = age;
    this.gender = gender;
  }

  incrementAge() {
    this.age++;
  }
}
```

:gift: **Credits**: [DuckDuckGo](https://duckduckgo.com/?q=es6+cheatsheet&ia=cheatsheet&iax=1) and [@DrkSephy](https://github.com/DrkSephy/es6-cheatsheet).

:top: <sub>[**back to top**](#table-of-contents)</sub>

### <img src="http://i.stack.imgur.com/Mmww2.png" height="34" align="top"> JavaScript Date Cheatsheet

#### Unix Timestamp (seconds)

```js
Math.floor(Date.now() / 1000);
```

#### Add 30 minutes to a Date object

```js
var now = new Date();
now.setMinutes(now.getMinutes() + 30);
```

#### Date Formatting

```js
// DD-MM-YYYY
var now = new Date();

var DD = now.getDate();
var MM = now.getMonth() + 1;
var YYYY = now.getFullYear();

if (DD < 10) {
  DD = '0' + DD;
} 

if (MM < 10) {
  MM = '0' + MM;
}

console.log(MM + '-' + DD + '-' + YYYY); // 03-30-2016
```
```js
// hh:mm (12 hour time with am/pm)
var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var amPm = hours >= 12 ? 'pm' : 'am';

hours = hours % 12;
hours = hours ? hours : 12;
minutes = minutes < 10 ? '0' + minutes : minutes;

console.log(hours + ':' + minutes + ' ' + amPm); // 1:43 am
```

#### Next week Date object

```js
var today = new Date();
var nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
```

#### Yesterday Date object

```js
var today = new Date();
var yesterday = date.setDate(date.getDate() - 1);
```

:top: <sub>[**back to top**](#table-of-contents)</sub>

<img src="https://tr4.cbsistatic.com/hub/i/r/2016/10/18/831f017c-ee68-4bd6-8a5c-ab31b4d35d6d/resize/770x/1cedcf2f03388a9720835a628a8a9765/dockerhero.jpg" width="200">

----------

You will need docker and docker-compose installed to build the application. 

- [Docker installation](https://docs.docker.com/engine/installation/)

- [Common problems setting up docker](https://docs.docker.com/toolbox/faqs/troubleshoot/)

After installing docker, start the application with the following commands : 

```
# Make sure you have sudo Privileges in Linux

# To build the project for the first time or when you add dependencies
docker build .  

# To start the application (or to restart after making changes to the source code)
docker run <image_name>

# Find the image at or pull from Docker Hub
docker pull sanurocks5/socialcops

```

To view the app, find your docker ip address + port 3000 ( this will typically be http://192.168.99.100:3000/ ).


Deployment
----------

Once you are ready to deploy your app, you will need to create an account with
a cloud platform to host it. These are not the only choices, but they are my top
picks. From my experience, **AWS** is the easiest to get started with, it will
automatically restart your Node.js process when it crashes, zero-downtime
deployments and custom domain support and free tier support a lot.


<hr>
<img src="http://logos-download.com/wp-content/uploads/2016/12/Amazon_Web_Services_logo_AWS.png" width="200">

##Using AWS Console
- Login to [AWS Console](https://console.aws.amazon.com/)
- Click on [Elastic Beanstalk](https://console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1) under Compute Section.
- Click on **Create New Application** on upper right or center, depending on have you used EBS before or not.
- Provide the Application Name and Description
- Create a New Environement by Clicking on **Create one now.** Option in the page.
- Select Web Server Environment in option. Wait for it to be created.
- Provide the Details Like Environment Name and stuff.
- Choose Upload code in the **Application Code** Option. Select the Zip File there.
- Click on Create Environment and wait for all workers and Environments to get allocated.

##Using AWS CLI
- Install the AWS CLI on your PC. [LINK](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)
- Or type
     ```
       pip install awscli --upgrade --user
       pip install awsebcli --upgrade --user
     ```
 
- We need to first initialize Elastic Beanstalk for the same
  ```
    eb init
  ```  
-  Follow the steps and choose default options during the process
- After you are done now you will need to create the eb application and environemnt
    ```
      eb create  
    ```
- Now Wait for some time, and when asked is this a docker application choose yes.
   
   **Note** AWS would deploy the application with Necessary instructions in docker environemnt in a Elastic Beanstalk environment.
   
- Now whenever you change a code just type 
    ```
      eb deploy
    ```
- It will deploy you latest code to the Elastic Beanstalk.
------

<img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Windows_Azure_logo.png" width="200">

- Login to [Windows Azure Management Portal](https://manage.windowsazure.com/)
- Click the **+ NEW** button on the bottom left of the portal
- Click **COMPUTE**, then **WEB APP**, then **QUICK CREATE**
- Enter a name for **URL** and select the datacenter **REGION** for your web site
- Click on **CREATE WEB APP** button
- Once the web site status changes to *Running*, click on the name of the web site to access the Dashboard
- At the bottom right of the Quickstart page, select **Set up a deployment from source control**
- Select **Local Git repository** from the list, and then click the arrow
- To enable Git publishing, Azure will ask you to create a user name and password
- Once the Git repository is ready, you will be presented with a **GIT URL**
- Inside your *Hackathon Starter* directory, run `git remote add azure [Azure Git URL]`
- To push your changes simply run `git push azure master`
 - **Note:** *You will be prompted for the password you created earlier*
- On **Deployments** tab of your Windows Azure Web App, you will see the deployment history

------



License
-------

The MIT License (MIT)

Copyright (c) 2018-2018 Soumyajit Dutta

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.