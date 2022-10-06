---
title: Badge
layout: docs
description: View all badge examples
---
{% include edit-on-github.md %}


## Examples

<div class="ct-example d-flex align-items-circle">

<button type="button" class="btn btn-sm btn-info btn-rounded d-flex align-items-center me-2">
  <span class="badge badge-circle bg-light">
		<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
		  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
		</svg>
	</span>
  <span class="font-weight-bolder">Help</span>
</button>

<button type="button" class="btn btn-sm btn-dark d-flex align-items-center me-2">
  <span class="badge badge-circle bg-light me-1">
		<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-success">
			<path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
		</svg>
	</span>
  <span>Scam/Pishing verification</span>
</button>

</div>

{% tabs log %}

{% tab log html %}
```html
<button type="button" class="btn btn-sm btn-info btn-rounded d-flex align-items-center me-2">
  <span class="badge badge-circle bg-light">
		<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
		  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
		</svg>
	</span>
  <span class="font-weight-bolder">Help</span>
</button>

<button type="button" class="btn btn-sm btn-dark d-flex align-items-center me-2">
  <span class="badge badge-circle bg-light me-1">
		<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-success">
			<path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
		</svg>
	</span>
  <span>Scam/Pishing verification</span>
</button>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <button type="button" className="btn btn-sm btn-info btn-rounded d-flex align-items-center me-2">
    <span className="badge badge-circle bg-light">
      <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    </span>
    <span className="font-weight-bolder">Help</span>
  </button>
  <button type="button" className="btn btn-sm btn-dark d-flex align-items-center me-2">
    <span className="badge badge-circle bg-light me-1">
      <svg width={14} height={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-success">
        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
      </svg>
    </span>
    <span>Scam/Pishing verification</span>
  </button>
</div>
```
{% endtab %}

{% endtabs %}

## Contextual variations

Add any of the below mentioned modifier classes to change the appearance of a badge.

<div class="ct-example">
{% for color in site.data.theme.theme-colors %}
<span class="badge badge-{{ color.name }} mb-3">{{ color.name | capitalize }}</span>{% endfor %}
</div>

{% tabs log %}

{% tab log html %}
```html
<span class="badge badge-dark">Dark</span>
<span class="badge badge-white">White</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <span className="badge badge-dark">Dark</span>
  <span className="badge badge-white">White</span>
  <span className="badge badge-primary">Primary</span>
  <span className="badge badge-secondary">Secondary</span>
  <span className="badge badge-info">Info</span>
  <span className="badge badge-success">Success</span>
  <span className="badge badge-danger">Danger</span>
  <span className="badge badge-warning">Warning</span>
</div>
```
{% endtab %}

{% endtabs %}

## Sizes

Use the `.badge-md` or `.badge-lg` modifier classes to adjust badge sizes.

<div class="ct-example">
  <span class="badge badge-pill badge-info">Default</span>
  <span class="badge badge-pill badge-md badge-info">Medium</span>
  <span class="badge badge-pill badge-lg badge-info">Large badge</span>
</div>

{% tabs log %}

{% tab log html %}
```html
<span class="badge badge-pill badge-info">Default</span>
<span class="badge badge-pill badge-md badge-info">Medium</span>
<span class="badge badge-pill badge-lg badge-info">Large badge</span>
```
{% endtab %}

{% tab log React %}
```html
<div>
 <span className="badge badge-pill badge-info">Default</span>
 <span className="badge badge-pill badge-md badge-info">Medium</span>
 <span className="badge badge-pill badge-lg badge-info">Large badge</span>
</div>
```
{% endtab %}

{% endtabs %}

## Styles

Use different classes to adjust badge style.

<div class="ct-example d-flex align-items-center">
  <span class="badge badge-pill border-radius-sm badge-info me-2">Border SM</span>
  <span class="badge badge-pill border-radius-md badge-info me-2">Border MD</span>
  <span class="badge badge-pill border-radius-lg badge-info me-2">Border LG</span>
  <span class="badge badge-circle badge-lg badge-info">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008z" />
      <path fill-rule="evenodd" d="M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3zm15 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 15a3 3 0 100 6h15a3 3 0 100-6h-15zm11.25 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" clip-rule="evenodd" />
    </svg>
  </span>
</div>

{% tabs log %}

{% tab log html %}
```html
<span class="badge badge-pill border-radius-sm badge-info me-2">Border SM</span>
<span class="badge badge-pill border-radius-md badge-info me-2">Border MD</span>
<span class="badge badge-pill border-radius-lg badge-info me-2">Border LG</span>
<span class="badge badge-circle badge-lg badge-info">
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008z" />
    <path fill-rule="evenodd" d="M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3zm15 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 15a3 3 0 100 6h15a3 3 0 100-6h-15zm11.25 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" clip-rule="evenodd" />
  </svg>
</span>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <span className="badge badge-pill border-radius-sm badge-info me-2">Border SM</span>
  <span className="badge badge-pill border-radius-md badge-info me-2">Border MD</span>
  <span className="badge badge-pill border-radius-lg badge-info me-2">Border LG</span>
  <span className="badge badge-circle badge-lg badge-info">
    <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008z" />
      <path fillRule="evenodd" d="M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3zm15 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 15a3 3 0 100 6h15a3 3 0 100-6h-15zm11.25 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" clipRule="evenodd" />
    </svg>
  </span>
</div>
```
{% endtab %}

{% endtabs %}
