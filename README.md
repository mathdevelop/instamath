# Instamath

Have your Instagram images on your website, simply and quickly. *[Leia em Português](README.pt.md)

All Plugins that used the Instagram API suffered from constant token exchange to keep them running, but now with the basic API deactivation at the end of March/2020, they will stop working completely. The output found for some sites was to add third-party widgets that scan the profile page looking for the images without the need for the API, these often have paid resources to work in their full form.

Instamath was developed with the intention of being a free solution to obtain the photos directly without having any intermediate server, offering freedom for customization and speed in the execution.


## Usage

Instamath does not depend on any library for its operation.

```
<div id="instamath"></div>

<script src="https://cdn.jsdelivr.net/gh/mathdevelop/instamath@latest/instamath.min.js"></script>
<script>
    document.querySelector('#instamath').instamath({
        user: 'mathdevelop', // Required¹
        limit: 5, // Maximum: 12
        resolution: 150, // Resolutions²: 150, 240, 320, 480, 640
        after: function() {
            // Function performed after retrieving account images (Ideal for Carousel Plugins)
        }
    });
</script>
```
Comments:
1) The user to be used must be public.
2) Using a higher resolution and limiting the size by CSS will offer a higher quality, consider the quality gain with the weight of the image.

## CDN

If you wish, you can use the link below with the most current version or download the file to import into the project.

```bash
https://cdn.jsdelivr.net/gh/mathdevelop/instamath@latest/instamath.min.js
```

## Demo
[Instamath with Slick](https://instamath.netlify.app/)