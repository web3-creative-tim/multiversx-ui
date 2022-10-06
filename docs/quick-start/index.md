---
title: Quick start
layout: docs
description: To start using this design system you will need to import some files in your current project or start from scratch using our template (scroll down in this page to view it).
---

## Tooling setup

## Bootstrap CDN

Skip the download with [BootstrapCDN](https://www.bootstrapcdn.com/){:target="_blank"}{:rel="nofollow"} to deliver cached version of Bootstrap’s compiled CSS and JS to your project.

{% highlight html %}
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
{% endhighlight %}

## CSS



Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

{% highlight html %}
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">

<!-- Font Awesome Icons -->
<script src="https://kit.fontawesome.com/349ee9c857.js" crossorigin="anonymous"></script>

<!-- CSS Files -->
<link id="pagestyle" href="" rel="stylesheet" />
{% endhighlight %}


## JS

Many of our components require the use of JavaScript to function. Specifically , [Popper.js](https://popper.js.org/){:rel="nofollow"}, and our own JavaScript plugins. Place the following `<script>`s near the end of your pages, right before the closing `</body>` tag, to enable them. Popper.js must come and then our JavaScript plugins.

{% highlight html %}
<!-- Core -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>


<!-- Elrond Elements JS -->
<script src=""></script>
{% endhighlight %}

Need to use a certain plugin in your page? You can find out how to integrate them and make them work in the Plugins dedicated page. In this way you will be sure that your website is optimized and uses only the needed resources.

## Bootstrap Starter Template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:

{% highlight html %}

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="../assets/img/favicon.png">
  <title>
    Elrond Elements
  </title>
  <!--     Fonts and icons     -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />

  <!-- Font Awesome Icons -->
  <script src="https://kit.fontawesome.com/349ee9c857.js" crossorigin="anonymous"></script>

  <!-- CSS Files -->
  <link id="pagestyle" href="" rel="stylesheet" />
</head>

<body class="g-sidenav-show bg-gray-100">

  <h1>Hello, world!</h1>

  <!--   Core JS Files   -->
  <script src="../assets/js/core/popper.min.js"></script>
  <script src="../assets/js/core/bootstrap.min.js"></script>

  <!-- Plugin for the charts, full documentation here: https://www.chartjs.org/ -->
  <script src="../assets/js/plugins/chartjs.min.js"></script>
  <script src="../assets/js/plugins/Chart.extension.js"></script>

  <!-- Control Center for Elrond Elements: parallax effects, scripts for the example pages etc -->
  <script src="../assets/js/elrond-elements.min.js"></script>
</body>

</html>



{% endhighlight %}

## Important Globals

Elrond Elements employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the *normalization* of cross browser styles. Let's dive in.

### HTML5 Doctype

Bootstrap requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.

{% highlight html %}
<!doctype html>
<html lang="en">
  ...
</html>
{% endhighlight %}

### Responsive Meta Tag

Bootstrap is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{% endhighlight %}



You can see an example of this in action in the [starter template](#starter-template).

### Bootstrap Components

Many of Bootstrap’s components and utilities are built with `@each` loops that iterate over a Sass map. This is especially helpful for generating variants of a component by our `$theme-colors` and creating responsive variants for each breakpoint. As you customize these Sass maps and recompile, you’ll automatically see your changes reflected in these loops.

### Bootstrap Tutorial

Please check our official [Youtube channel](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w/videos){:rel="nofollow"}{:target="_blank"} for more tutorials.
