# Express Boilerplate

This is literally just my boilerplate Express project. I was running express-generator for every project and finding myself using the same settings and doing some additional set up on every project as well. To save myself some pain, I made this.

The base express-generator command was `express --hbs --css sass --git`. Here's what that translates out to, plus what I added:
- Handlebars templating (generator)
- Sass compiling (generator)
- Stock gitignore (generator)
- Added [express-handlebars](https://www.npmjs.com/package/express-handlebars) for better templating
- Added Eric Elliot's [express-error-handler](https://www.npmjs.com/package/express-error-handler)
- Added Mongoose for MongoDB support and a starter model
- Added debug start to npm scripts (`npm run debug`)
- Customized routes setup

### Usage

If you just fell in love, you can use this for any project you could ever dream of. Just fork the repo, pull down a copy, and run `npm install` to get all the dependencies.

### Contributing

Since this is my personal boilerplate, I'm not exactly looking for contributors. However, if you actually used this and found a bug or something that could be improved, feel free to raise an issue!