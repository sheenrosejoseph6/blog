---
layout: blog
title: Local Storage Tutorial 2
image: /assets/img/localstorage-feature.png
---

 # Local Storage Tutorial

> HTML 5 technologies used:
> 
> > 1. Contenteditable
> > 2. Drag and Drop
> > 3. Local Storage  
 


 - [Contenteditable](#contenteditable)
 - [Drag and Drop](#drag-and-drop)
 - [Local Storage Simple Example](#simple)
 - [Documentation](#application)
 - [Technologies used](#technologies)
 - [Contributing](#contributing)
 - [Versioning](#versioning)

## Contenteditable
* makes any page area editable in the browser
* single attribute: contenteditable
 		* "true"
 		* "false"
 		* "inherit"
* Browser support
		* [Current support - Caniuse.com ](http://caniuse.com/#search=contenteditable)

## Drag and Drop
* HTML5 Attribute
		* One attribute called draggable.
			* \<div id="" class="" draggable="true"></div>
* Javascript API
		* Seven JS Events
			* dragstart();
			* drag();
			* dragover();
			* dragenter();
			* dragleave();
			* dragenter();
			* drop();





## Simple 

Local Storage Simple Example

```

1. _assets
2. 	_base(Add the templates availiable. As of now we 
3. 	_apps				
```

 				




## Server Directory Structure (DEV)

Directory structure:
```
├── apexd_media
│   ├── _apps (instructions)
│   │   ├──  app1016
│   │   │   ├── css
│   │   │   ├── js
│   │   │   ├── fonts
│   │   │   ├── images
│   │   │   ├── index.html (mock-up for business)
│   │   ├──  app205
│   ├── _assets
│   │   │   ├── ico
│   │   │   ├── images
│   │   │   ├── js
│   ├── _base
│   ├──  app205 (** Needs to be removed)
```




## Gulp instructions

To get up and running with [Gulp](http://gulpjs.com/) using this framework's `gulpfile.js`, follow these instructions:

First, install Gulp into your system. If you have `npm`, Node.js's package manager, already installed, the command is one step:

```
npm install -g gulp
```

If you do not have Node and npm installed, the directions for how to do that can be found at [Node's official site](http://nodejs.org/download/).

Once you have Gulp installed, `cd` into your project directory:

```
cd yourpath/toreponamed/arrow-mobile
```

Because the required dependancies are in your `package.json` file already, all you need to do type in the following command:

```
npm install
``` 
That will load in all the dependancies required to run your Gulp tasks.

When you want to change something in the source Sass files `*.scss` or Javascript files, the default task required to complie new file is simply `gulp`. For CSS only, the command is `gulp-css`; for Javascript `gulp-js`. You can also run `gulp watch` to automatically detect changes in these files and do the compilation automatically. The `watch` task also works with [Live Reload](http://livereload.com/), which is a browser plugin enables the browser to refresh on command. 

## Application

This framework's application, included in this repo in the root directory, is built with [Jekyll](http://jekyllrb.com).

### Running documentation locally

1. If necessary, [install Jekyll](http://jekyllrb.com/docs/installation) (requires v2.1.x).
  - **Windows users:** Read [this unofficial guide](https://github.com/juthilo/run-jekyll-on-windows/) to get Jekyll up and running without problems.
2. Install the Ruby-based syntax highlighter, [Rouge](https://github.com/jneen/rouge), with `gem install rouge`.
3. From the root `/arrow-mobile` directory, run `jekyll serve` in the command line.
4. Open <http://localhost:8001> in your browser.

Learn more about using Jekyll by reading its [documentation](http://jekyllrb.com/docs/home/).


## Technologies used

This will document all the third-party code we use. So far, this includes:

- Bootstrap SASS version (currently version 3.2)
- Foundation (CSS/JS framework -- using only select elements from this)
- Bourbon (SASS mixins)
- FontAwesome (Icon font library)
- Webicons (Social icon SVG/PNG library)
- Animate.css (CSS3 animations library)
- Modernizr (Feature detection library and HTML5 polyfill)
- FastClick (JS lib that eliminates delay on click for mobile devices)
- iScroll (JS Scrolling plugin for HTML5 mobile)
- Moment.js (JS library for handling dates)

## Contributing

Please read through our [contributing guidelines](https://github.com/jboho/arrow-mobile/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Editor preferences are available in the [editor config](https://github.com/jboho/arrow-mobile/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, this framework is maintained under [the Semantic Versioning guidelines](http://semver.org/).




