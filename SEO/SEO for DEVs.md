# SEO For DEVs

`Before`

Add Keywords and Links to boost rankings, visibility.

`Now`

Just pay google it will push your site on top.

Since they track user movements

**Current Metrics**:

1. CTR(Click Through Rate):  In  How many search results the site was visited

2. Bounce Rate

3. Dwell Rate : Amount of time a user spends on site.

4. Load Time:  

## Boosting Rankings

Content is the king. If the site has powerful content or the site is awesome by itself it will be on top.

Spread info about our site as max as possible.

## SEO COmponents

1. crawler : A function(developed by google) that scans the content of the site.

2. ranking: A Score for the site.

3. Indexing: Process of Google to learn about new sites

4. BackLinks:  Other websites which mention your site.

## Types of SEO

### on-page SEO:  Handled by Frontend DEVs

### off-page SEO: Handled by agencies

1. Search Engine Submissions

2. Image Submissions on stock sites.

3. PPT/PDF Submission on Scribd

4. Forums

5. Guest Blogging

6. Video Submission 

7. QnA -> Ask a Promoting question and Answer that from another account by mentioning your site.

## Optimizating SEO By DEV

### Level-1

1. Follow the rule of `ONLY ONE`:  A single page only contain only one
   
   1. h1 tag
   
   2. title tag
   
   3. meta tage
   
   4. main
   
   5. address
   
   6. header
   
   7. footer

    These are important components crawlers look for. If there multiple of        them crawlers might flag page as unimportant.

> `NOTE`
> 
> h1, header and footer can be used multiple times  on page if there are inside `<section>` tag. Since `<section>` divide page into sub-pages Thus, crawlers evaluate them separately.

2. Use `<aside>` only for non-relevant content
   
       Don't place crucial/main content in the `<aside>`. Since they are primarily used for ads, sidebars and hence crawlers ignores content of `<aside>`

3. Containers cannot be clickable/interactive
   
   For example , `<a>` inside a `<button>`. No problem with the UX but Crawlers assumes that site is manipulating user to perform an action thus they flag this as malicious.

4. Don't use `<b> and <i>` rather use `<strong> and <em>`
   
   `<b> and <i>` just styles the text whereas  `<strong> and <em>` increases the importance of text. Hence Crawlers can/will use them to decide the theme and Category of the Site.

5. `<form>`  elements should have labels 
   
   These labels boost the accessibility, Even if you want to don't display them your code must have them.

### Level-2

1. Use Semantic HTML Elements

2. Optimize Titles: Include words which best describes the purpose of the site. Search Engines uses Words decide the category of site. 

3. Use Meta tags wisely ; Below are the limits
   
   ![](C:\Users\ADMIN\AppData\Roaming\marktext\images\2025-08-25-23-44-15-image.png)

4. Use Canonical Tags.
   
   1. If your site as multiple URLs for the same page use `rel="canonical"` to let crawlers know that the site is duplicate of the original this is to boost the rankings of the original site.
      
      `<link rel="canonical" href="Original_URL"`

5. Use heading in hierarchical order 
6. Optimize the URL's by including understandable and meaningful parameters.
7. Use descriptive Anchor (button) test : Don't use Click Here, use the service/action provides Login, Buy Now. 
8. Use `rel="nofollow"` for redirecting links(not all) on your site, to let google knows that don't boost the rankings of the redirected site by the redirection through our site.
   1. Google flag the sites which earns by  giving redirects various sites to boost their rankings.
9. Optimize Images:  
   1. Provide good alt text and file_name for the image.
   2. Use width and shift to avoid layout shifts
   3. Use `WebP , AVIF` Formats these are fast

            ![](https://photutorial.com/wp-content/uploads/2022/10/image-format-size-comparison-graph-648x486.png)



10. Optimize for Mobile
    
    1. Add the code: `<meta name="viewport" content="width=device-width, intial-scale=1">`
    
    2. Mobile browsers assume that you are viewing the desktop site and tries to display whole page. 
    
    3. > In early mobile web development,  browsers used to render the site for it's full width and then shrink it to fit in the mobile screen. This is known as `Desktop Mode` this makes text tiny and introduces layout breaks since sites natural responsiveness is disturbed.

11. Use `schema.org` to beautify your site presence(rich results) in the search results.
    
    1. Schema.org provides markup which is best understood by the search engines and helps them to understand the content of the site. 
    
    2. Use Schema Markup Generator (JSON-LD is new way for this markup) to Customize how the search result of your site looks. https://technicalseo.com/tools/schema-markup-generator/

12. Use Open Graph and Twitter Cards: 
    
    These makes sure that our content stands out when getting shared on social feeds around the internet.
    
    1. > **When you paste a YouTube link on WhatsApp how the thumbnail and title of video gets displayed?**
       > 
       > By using Open graphs.  
       > 
       > Use this site to generate https://www.opengraph.xyz/
       > 
       > Include both Open graph and Twitter Cards both in HTML of the site coz platforms choose randomly between them while haring content.

13. Robots.txt :  A text file added in servers root directory , this is to restrict search engine's to index some URL's of the site.
    
    1. `disallow: url`



### Sitemaps

These are guidelines for crawlers so that they don't miss any page of the site. It's a XML file present in the root directory  which contains all the sites available on the site.

> You can check sitemap of any site using `url/sitemap.xml`

Priorities of the page can also be configured in the sitemap file. Pages with the highest properties are shown below the search results as options.

Change frequency tells the crawler that this page changes for every x days visit it again after this date.



Ensure all the important pages are listed 

You can also submit your sitemap in Google Search Console for faster scans by crawlers.



To Boost Rankings Site should create different kinds of Content.


