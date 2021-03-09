## 🎨 Gatsby WordPress themes
[![Project Status: Active.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A Gatsby theme for WordPress, using Decoupled Architecture.
Front end in React.
Backend in WordPress.

<a href="https://youtu.be/nYXL1KKjKrc" target="_blank">
<img src="https://codeytek.com/woo/wp-content/uploads/2020/06/Phoenix.jpg" alt="gatsby theme phoenix hero image" />
</a>

### [Video Demo](https://youtu.be/nYXL1KKjKrc)

*** 👨‍💻 Please star my repo to support my work 🙏 ***

## 🔥 Features
1. Uses React with Gatsby ( Blazing Fast )
2. PWA ( Works Offline )
3. Image Optimization ( blur effect )
4. ACF
5. GraphQL ( with wp-graphql on WordPress )
6. Blog Page with Pagination
7. Offline Search Feature
8. Categories, Archive Page, Custom Home Page
9. Custom Widgets, Menus
10. Yoast seo support


## 👨‍💻 Maintainer

| Name                                                   | Github Username |
|--------------------------------------------------------|-----------------|
| [Imran Sayed](mailto:codeytek.academy@gmail.com)       |  @imranhsayed   |



## 🌐 Live Demo

- [Demo on Netlify](https://gatsby-wordpress-theme-phoenix.netlify.app)
- [Demo on Vercel](https://gatsby-wordpress-themes.imranhsayed.now.sh/)

<a href="https://youtu.be/nYXL1KKjKrc" target="_blank">
<img src="https://codeytek.com/wp-content/uploads/2020/06/home-page-demo.png" alt="gatsby theme phoenix demo" />
</a>

## 🚀 Set Up

### Gatsby Site Setup

1. Installation: 
`npm i gatsby-wordpress-theme-phoenix`

2. Add the following configuration to your `gatsby-config.js` and put your WordPress Site URL in `wordPressUrl` e.g. `https://example.com`

```javascript
module.exports = {
	plugins: [
		// Tell gatsby which theme you will be using.
		{
		resolve: "gatsby-wordpress-theme-phoenix",
		options: {
			wordPressUrl: 'xxxx',
            frontendUrl: 'https://example.com'
		}
	} ]
};
``` 

Also add the following to your `.env` file and set the `GATSBY_ELEMENTOR_SUPPORT` `GATSBY_SIDEBAR` if you would
like the theme to support page and post building with elementor and sidebar.

```shell script
GATSBY_WORDPRESS_SITE_URL=xxx
GATSBY_ELEMENTOR_SUPPORT=true
GATSBY_SIDEBAR=false
```

### WordPress Site Setup

### WordPress Setup
1. On your WordPress site, download, Upload and activate all the plugins from wordpress/plugins folder of this repo, into your WordPress Site.

a. [Headless CMS](https://github.com/imranhsayed/gatsby-wordpress-themes/blob/master/wordpress/plugins/headless-cms.zip)
b. [wp-graphql](https://github.com/imranhsayed/gatsby-wordpress-themes/blob/master/wordpress/plugins/wp-graphql.zip)
c. [wp-graphiql](https://github.com/wp-graphql/wp-graphiql)
d. [ACF WordPress plugin](https://wordpress.org/plugins/advanced-custom-fields/)
e. [wp-graphql-acf](https://github.com/wp-graphql/wp-graphql-acf)
f. [Yoast-SEO](https://github.com/imranhsayed/gatsby-wordpress-themes/blob/master/wordpress/plugins/wordpress-seo.14.5.zip)
g. [wp-graphql-yoast-seo](https://github.com/imranhsayed/gatsby-wordpress-themes/blob/master/wordpress/plugins/wp-graphql-yoast-seo.zip)

2. 
   * Set Header menu as `HCMS Header Menu`
   
   <a href="https://youtu.be/nYXL1KKjKrc" target="_blank">
   <img src="https://codeytek.com/wp-content/uploads/2020/06/header-menu-demo.png" alt="Header Menu Demo" />
   </a>
   
   * Set Footer menu as `HCMS Footer Menu`.
   
      <a href="https://youtu.be/nYXL1KKjKrc" target="_blank">
      <img src="https://codeytek.com/wp-content/uploads/2020/06/footer-menu-demo.png" alt="Footer menu demo" />
      </a>
   
3. You can also set text widgets in #HCMS Footer #1 and #HCMS Footer #2 under Appearance  > Widgets in WordPress.
4. Import all the ACF data from `wordpress/acf-data` json file of this repo, into WordPress by going to WordPress Dashboard > Custom Fields > Tools > Import
5. Create a Home Page ( if there isn't one already )and make sure you have a home page and Location rule is set to Home page.


<a href="https://youtu.be/nYXL1KKjKrc" target="_blank">
<img src="https://codeytek.com/wp-content/uploads/2020/06/acf-home-screenshot.png" alt="ACF menu screenshot" />
</a>

6. Add the ACF required data on the Home page from WordPress Dashboard. 
7. If isn't already set your site title, description and logo from WordPress customizer.

## Styles used by elementor
Check in the source

* id='elementor-icons-css'
* id='elementor-common-css'
