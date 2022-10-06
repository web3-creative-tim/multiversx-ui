---
title: Typography
layout: docs
description: Documentation and examples for {{ site.product_name | capitalize_first }} typography, including global settings, headings, body text, lists, and more.
---
{% include edit-on-github.md %}

## Headings

All HTML headings, `<h1>` through `<h6>`, are available.

<table>
  <thead>
    <tr>
      <th>Heading</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{ "`<h1></h1>`" | markdownify }}
      </td>
      <td><span class="h1">h1. This is a heading</span></td>
    </tr>
    <tr>
      <td>
        {{ "`<h2></h2>`" | markdownify }}
      </td>
      <td><span class="h2">h2. This is a heading</span></td>
    </tr>
    <tr>
      <td>
        {{ "`<h3></h3>`" | markdownify }}
      </td>
      <td><span class="h3">h3. This is a heading</span></td>
    </tr>
    <tr>
      <td>
        {{ "`<h4></h4>`" | markdownify }}
      </td>
      <td><span class="h4">h4. This is a heading</span></td>
    </tr>
    <tr>
      <td>
        {{ "`<h5></h5>`" | markdownify }}
      </td>
      <td><span class="h5">h5. This is a heading</span></td>
    </tr>
    <tr>
      <td>
        {{ "`<h6></h6>`" | markdownify }}
      </td>
      <td><span class="h6">h6. This is a heading</span></td>
    </tr>
  </tbody>
</table>

<div class="position-relative">
{% highlight html %}
<h1>h1. This is a heading</h1>
<h2>h2. This is a heading</h2>
<h3>h3. This is a heading</h3>
<h4>h4. This is a heading</h4>
<h5>h5. This is a heading</h5>
<h6>h6. This is a heading</h6>
{% endhighlight %}
</div>

`.h1` through `.h6` classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.

<div class="ct-example">

<p class="h1">h1. This is a heading</p>
<p class="h2">h2. This is a heading</p>
<p class="h3">h3. This is a heading</p>
<p class="h4">h4. This is a heading</p>
<p class="h5">h5. This is a heading</p>
<p class="h6">h6. This is a heading</p>

</div>

{% tabs log %}

{% tab log html %}
```html
<p class="h1">h1. This is a heading</p>
<p class="h2">h2. This is a heading</p>
<p class="h3">h3. This is a heading</p>
<p class="h4">h4. This is a heading</p>
<p class="h5">h5. This is a heading</p>
<p class="h6">h6. This is a heading</p>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <p className="h1">h1. This is a heading</p>
  <p className="h2">h2. This is a heading</p>
  <p className="h3">h3. This is a heading</p>
  <p className="h4">h4. This is a heading</p>
  <p className="h5">h5. This is a heading</p>
  <p className="h6">h6. This is a heading</p>
</div>
```
{% endtab %}

{% endtabs %}

### Customizing headings

Use the included utility classes to recreate the small secondary heading text.

<div class="ct-example">
  <span class="h3">
    Fancy display heading
    <small class="text-muted">With faded secondary text</small>
  </span>
</div>


{% tabs log %}

{% tab log html %}
```html
<h3>
  Fancy display heading
  <small class="text-muted">With faded secondary text</small>
</h3>
```
{% endtab %}

{% tab log React %}
```html
<h3>
  Fancy display heading
  <small className="text-muted">With faded secondary text</small>
</h3>
```
{% endtab %}

{% endtabs %}


## Display Headings

Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a **display heading**—a larger, slightly more opinionated heading style.

<div class="ct-example bd-example-type">
  <table class="table">
    <tbody>
      <tr>
        <td><span class="display-1">Display 1</span></td>
      </tr>
      <tr>
      <td><span class="display-2">Display 2</span></td>
      </tr>
      <tr>
      <td><span class="display-3">Display 3</span></td>
      </tr>
      <tr>
      <td><span class="display-4">Display 4</span></td>
      </tr>
    </tbody>
  </table>
</div>

{% tabs log %}

{% tab log html %}
```html
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <h1 className="display-1">Display 1</h1>
  <h1 className="display-2">Display 2</h1>
  <h1 className="display-3">Display 3</h1>
  <h1 className="display-4">Display 4</h1>
</div>
```
{% endtab %}

{% endtabs %}

## Lead

Make a paragraph stand out by adding `.lead`.

<div class="ct-example">

<p class="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>

</div>

{% tabs log %}

{% tab log html %}
```html
<p class="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
```
{% endtab %}

{% tab log React %}
```html
<p className="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
```
{% endtab %}

{% endtabs %}


## Inline text elements

Styling for common inline HTML5 elements.

<div class="ct-example">

<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>

</div>

{% tabs log %}

{% tab log html %}
```html
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <p>You can use the mark tag to <mark>highlight</mark> text.</p>
  <p><del>This line of text is meant to be treated as deleted text.</del></p>
  <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
  <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
  <p><u>This line of text will render as underlined</u></p>
  <p><small>This line of text is meant to be treated as fine print.</small></p>
  <p><strong>This line rendered as bold text.</strong></p>
  <p><em>This line rendered as italicized text.</em></p>
</div>
```
{% endtab %}

{% endtabs %}



`.mark` and `.small` classes are also available to apply the same styles as `<mark>` and `<small>` while avoiding any unwanted semantic implications that the tags would bring.

While not shown above, feel free to use `<b>` and `<i>` in HTML5. `<b>` is meant to highlight words or phrases without conveying additional importance while `<i>` is mostly for voice, technical terms, etc.

## Text utilities

Change text alignment, transform, style, weight, and color with our text utilities and color utilities.

## Abbreviations

Stylized implementation of HTML's `<abbr>` element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.

Add `.initialism` to an abbreviation for a slightly smaller font-size.

<div class="ct-example">

<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>

</div>


{% tabs log %}

{% tab log html %}
```html
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <p><abbr title="attribute">attr</abbr></p>
  <p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
</div>
```
{% endtab %}

{% endtabs %}


## Blockquotes

For quoting blocks of content from another source within your document. Wrap `<blockquote class="blockquote">` around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote.

<div class="ct-example">

<blockquote class="blockquote">
  <p class="mb-0 ps-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>

</div>

{% tabs log %}

{% tab log html %}
```html
<blockquote class="blockquote">
  <p class="mb-0 ps-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
```
{% endtab %}

{% tab log React %}
```html
<blockquote className="blockquote">
  <p className="mb-0 ps-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
```
{% endtab %}

{% endtabs %}


### Naming a source

Add a `<figcaption class="blockquote-footer">` for identifying the source.

<div class="ct-example">

<figure>
  <blockquote class="blockquote">
    <p class="ps-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  </blockquote>
  <figcaption class="blockquote-footer ps-3">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>

</div>

{% tabs log %}

{% tab log html %}
```html
<figure>
  <blockquote class="blockquote">
    <p class="ps-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  </blockquote>
  <figcaption class="blockquote-footer ps-3">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
```
{% endtab %}

{% tab log React %}
```html
<figure>
  <blockquote className="blockquote">
    <p className="ps-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  </blockquote>
  <figcaption className="blockquote-footer ps-3">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
```
{% endtab %}

{% endtabs %}


### Alignment

Use text utilities as needed to change the alignment of your blockquote.

<div class="ct-example">

<figure>
  <blockquote class="blockquote text-center">
    <p class="ps-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  </blockquote>
  <figcaption class="blockquote-footer text-center">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>


<figure>
  <blockquote class="blockquote text-end">
    <p class="ps-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  </blockquote>
  <figcaption class="blockquote-footer text-end">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>

</div>

{% tabs log %}

{% tab log html %}
```html
<figure>
  <blockquote class="blockquote text-center">
    <p class="ps-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  </blockquote>
  <figcaption class="blockquote-footer text-center">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>


<figure>
  <blockquote class="blockquote text-end">
    <p class="ps-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  </blockquote>
  <figcaption class="blockquote-footer text-end">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <figure>
    <blockquote className="blockquote text-center">
      <p className="ps-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </blockquote>
    <figcaption className="blockquote-footer text-center">
      Someone famous in <cite title="Source Title">Source Title</cite>
    </figcaption>
  </figure>
  <figure>
    <blockquote className="blockquote text-end">
      <p className="ps-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </blockquote>
    <figcaption className="blockquote-footer text-end">
      Someone famous in <cite title="Source Title">Source Title</cite>
    </figcaption>
  </figure>
</div>
```
{% endtab %}

{% endtabs %}

## Lists

### Unstyled

Remove the default `list-style` and left margin on list items (immediate children only). **This only applies to immediate children list items**, meaning you will need to add the class for any nested lists as well.

<div class="ct-example">

<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>

</div>

{% tabs log %}

{% tab log html %}
```html
<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
```
{% endtab %}

{% tab log React %}
```html
<ul className="list-unstyled">
 <li>Lorem ipsum dolor sit amet</li>
 <li>Consectetur adipiscing elit</li>
 <li>Integer molestie lorem at massa</li>
 <li>Facilisis in pretium nisl aliquet</li>
 <li>Nulla volutpat aliquam velit
   <ul>
     <li>Phasellus iaculis neque</li>
     <li>Purus sodales ultricies</li>
     <li>Vestibulum laoreet porttitor sem</li>
     <li>Ac tristique libero volutpat at</li>
   </ul>
 </li>
 <li>Faucibus porta lacus fringilla vel</li>
 <li>Aenean sit amet erat nunc</li>
 <li>Eget porttitor lorem</li>
</ul>
```
{% endtab %}

{% endtabs %}

### Inline

Remove a list's bullets and apply some light `margin` with a combination of two classes, `.list-inline` and `.list-inline-item`.

<div class="ct-example">

<ul class="list-inline">
  <li class="list-inline-item">Lorem ipsum</li>
  <li class="list-inline-item">Phasellus iaculis</li>
  <li class="list-inline-item">Nulla volutpat</li>
</ul>

</div>

{% tabs log %}

{% tab log html %}
```html
<ul class="list-inline">
  <li class="list-inline-item">Lorem ipsum</li>
  <li class="list-inline-item">Phasellus iaculis</li>
  <li class="list-inline-item">Nulla volutpat</li>
</ul>
```
{% endtab %}

{% tab log React %}
```html
<ul className="list-inline">
  <li className="list-inline-item">Lorem ipsum</li>
  <li className="list-inline-item">Phasellus iaculis</li>
  <li className="list-inline-item">Nulla volutpat</li>
</ul>
```
{% endtab %}

{% endtabs %}


### Description list alignment

Align terms and descriptions horizontally by using our grid system's predefined classes (or semantic mixins). For longer terms, you can optionally add a `.text-truncate` class to truncate the text with an ellipsis.

<div class="ct-example">

<dl class="row">
  <dt class="col-sm-3">Description lists</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

  <dt class="col-sm-3">Euismod</dt>
  <dd class="col-sm-9">
    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
    <p>Donec id elit non mi porta gravida at eget metus.</p>
  </dd>

  <dt class="col-sm-3">Malesuada porta</dt>
  <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

  <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

  <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
    </dl>
  </dd>
</dl>

</div>

{% tabs log %}

{% tab log html %}
```html
<dl class="row">
  <dt class="col-sm-3">Description lists</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

  <dt class="col-sm-3">Euismod</dt>
  <dd class="col-sm-9">
    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
    <p>Donec id elit non mi porta gravida at eget metus.</p>
  </dd>

  <dt class="col-sm-3">Malesuada porta</dt>
  <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

  <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

  <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
    </dl>
  </dd>
</dl>
```
{% endtab %}

{% tab log React %}
```html
<dl className="row">
  <dt className="col-sm-3">Description lists</dt>
  <dd className="col-sm-9">A description list is perfect for defining terms.</dd>
  <dt className="col-sm-3">Euismod</dt>
  <dd className="col-sm-9">
    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
    <p>Donec id elit non mi porta gravida at eget metus.</p>
  </dd>
  <dt className="col-sm-3">Malesuada porta</dt>
  <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
  <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
  <dt className="col-sm-3">Nesting</dt>
  <dd className="col-sm-9">
    <dl className="row">
      <dt className="col-sm-4">Nested definition list</dt>
      <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
    </dl>
  </dd>
</dl>
```
{% endtab %}

{% endtabs %}

## Responsive Typography

*Responsive typography* refers to scaling text and components by simply adjusting the root element's `font-size` within a series of media queries. Bootstrap doesn't do this for you, but it's fairly easy to add if you need it.

Here's an example of it in practice. Choose whatever `font-size`s and media queries you wish.

<div class="position-relative">
{% highlight scss %}
html {
  font-size: 1rem;
}

@include media-breakpoint-up(sm) {
  html {
    font-size: 1.2rem;
  }
}

@include media-breakpoint-up(md) {
  html {
    font-size: 1.4rem;
  }
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 1.6rem;
  }
}
{% endhighlight %}
</div>
