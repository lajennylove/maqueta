# Boilerplate Bootstrap 4

This is a Boilerplate of Gulp + Sass + Bootstrap + Uglify + Imagemin

## Installation

Previously you have to have [NodeJS](https://nodejs.org/es/download/) click on the link to download if you don't have it.

Once you have NodeJS, you just need to install [Gulp](https://gulpjs.com) as follows:

```bash
npm install gulp-cli -g
npm install gulp -D
npx -p touch nodetouch gulpfile.js
gulp --help
```
Then you need to download the repository. you can change "boilerplate" for the name that you want for your project.

```bash
git clone https://github.com/lajennylove/maqueta.git boilerplate
```


## Usage
Once you have it, enter to the folder and install the project as follows.

```python
cd boilerplate
npm install
```
Wait until it finishes and then you have available two commands. Gulp watch who helps you to compilate all the bootstrap with your custom styles.

```python
gulp watch
```
And gulp imagemin who optimize all the images at /dev/images directory and send them to the /dist/images/ folder.

```python
gulp imagemin
```
## Files
Once GULP is watching your work you can find the main style.scss at /dev/scss/style.scss you just need to add the styles you need over there and voila. For the JavaScript files is the same you can find the main javascript file at /dev/lib/main.js where you can put all your libraries such as JQuery and everyone of them will be exported and minified in just one optimized file at /dist/js/main.js


## License
[MIT](https://choosealicense.com/licenses/mit/)

