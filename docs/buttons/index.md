---
layout: docs
title: Elrond Buttons
description: Use Bootstrap buttons and Bootstrap custom styles for actions in forms, dialogues, and more with support for multiple sizes, states, and more.
---

{% include edit-on-github.md %}

## Examples
Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.

<div class="ct-example d-md-flex align-items-center">

<button class="btn btn-info me-2" type="button">Connect to Wallet</button>

<button class="btn btn-info btn-icon d-flex align-items-center me-2" type="button">
	<span class="btn-inner--icon me-1">
		<svg xmlns="http://www.w3.org/2000/svg" class="d-block" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
			<path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
		</svg>
	</span>
  <span class="btn-inner--text">Connect to Wallet</span>
</button>

<button type="button" class="btn btn-info btn-icon px-3 me-2">
	<svg xmlns="http://www.w3.org/2000/svg" class="d-block" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
		<path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
	</svg>
</button>


<button class="btn btn-info btn-rounded border-radius-top-end-lg border-radius-bottom-end-lg d-flex align-items-center me-2 ps-2 py-2" type="button">
	<span class="badge badge-lg badge-circle bg-white">
		<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
		  <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" />
		</svg>
	</span>
	<span class="text-xs">$0.000043</span>
</button>

</div>

{% tabs log %}

{% tab log html %}
```html
<button class="btn btn-info me-2" type="button">Connect to Wallet</button>

<button class="btn btn-info btn-icon d-flex align-items-center me-2" type="button">
	<span class="btn-inner--icon me-1">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
			<path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
		</svg>
	</span>
  <span class="btn-inner--text">Connect to Wallet</span>
</button>

<button class="btn btn-info btn-rounded border-radius-top-end-lg border-radius-bottom-end-lg d-flex align-items-center me-2 ps-2 py-2" type="button">
	<span class="badge badge-lg badge-circle bg-white">
		<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
		  <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" />
		</svg>
	</span>
	<span class="text-xs">$0.000043</span>
</button>

<button type="button" class="btn btn-info btn-icon px-3 me-2">
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
		<path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
	</svg>
</button>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <button className="btn btn-info me-2" type="button">Connect to Wallet</button>
  <button className="btn btn-info btn-icon d-flex align-items-center me-2" type="button">
    <span className="btn-inner--icon me-1">
      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
      </svg>
    </span>
    <span className="btn-inner--text">Connect to Wallet</span>
  </button>
  <button className="btn btn-info btn-rounded border-radius-top-end-lg border-radius-bottom-end-lg d-flex align-items-center me-2 ps-2 py-2" type="button">
    <span className="badge badge-lg badge-circle bg-white">
      <svg width={14} height={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
      </svg>
    </span>
    <span className="text-xs">$0.000043</span>
  </button>
  <button type="button" className="btn btn-info btn-icon px-3 me-2">
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
    </svg>
  </button>
</div>
```
{% endtab %}

{% endtabs %}

<br/>

<div class="ct-example">

{% for color in site.data.theme.theme-colors %}<button type="button" class="btn btn-{{ color.name }} me-2">{{ color.name | capitalize }}</button>{% endfor %}

</div>

{% tabs log %}

{% tab log html %}
```html
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-white">White</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <button type="button" className="btn btn-dark">Dark</button>
  <button type="button" className="btn btn-white">White</button>
  <button type="button" className="btn btn-primary">Primary</button>
  <button type="button" className="btn btn-secondary">Secondary</button>
  <button type="button" className="btn btn-info">Info</button>
  <button type="button" className="btn btn-success">Success</button>
  <button type="button" className="btn btn-danger">Danger</button>
  <button type="button" className="btn btn-warning">Warning</button>
</div>
```
{% endtab %}

{% endtabs %}


## Outline Buttons

In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the `.btn-outline-*` ones to remove all background images and colors on any button.

<div class="ct-example">

{% for color in site.data.theme.theme-colors %}
{% if color.name != 'white' %}<button type="button" class="btn btn-outline-{{ color.name }} me-2">{{ color.name | capitalize }}</button>{% endif %}{% endfor %}

</div>

{% tabs log %}

{% tab log html %}
```html
<button type="button" class="btn btn-outline-dark">Dark</button>
<button type="button" class="btn btn-outline-white">White</button>
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <button type="button" className="btn btn-outline-dark">Dark</button>
  <button type="button" className="btn btn-outline-white">White</button>
  <button type="button" className="btn btn-outline-primary">Primary</button>
  <button type="button" className="btn btn-outline-secondary">Secondary</button>
  <button type="button" className="btn btn-outline-info">Info</button>
  <button type="button" className="btn btn-outline-success">Success</button>
  <button type="button" className="btn btn-outline-danger">Danger</button>
  <button type="button" className="btn btn-outline-warning">Warning</button>
</div>
```
{% endtab %}

{% endtabs %}

## Icon Buttons

Sometimes you need a button to indicate an action using only a icon.

<div class="ct-example d-md-flex">

<button type="button" class="btn btn-dark btn-icon px-3 me-2">
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="d-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
		<path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
	</svg>
</button>

<button type="button" class="btn btn-dark btn-icon px-3 me-2">
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="d-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
		<path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
	</svg>
</button>

<button type="button" class="btn btn-dark btn-icon px-3 me-2">
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="d-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
		<path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
	</svg>
</button>

<button type="button" class="btn btn-dark btn-icon d-flex align-items-center me-2">
	<span class="btn-inner--icon">
		<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="d-block" class="d-block me-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
		</svg>
	</span>
	<span class="btn-inner--text">Search</span>
</button>

<button type="button" class="btn btn-dark btn-icon d-flex align-items-center me-2">
	<span class="btn-inner--text">Upload</span>
	<span class="btn-inner--icon">
		<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="d-block ms-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
		</svg>
	</span>
</button>

</div>

{% tabs log %}

{% tab log html %}
```html
<button type="button" class="btn btn-dark btn-icon px-3">
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="d-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
		<path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
	</svg>
</button>

<button type="button" class="btn btn-dark btn-icon px-3">
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="d-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
		<path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
	</svg>
</button>

<button type="button" class="btn btn-dark btn-icon px-3">
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="d-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
		<path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
	</svg>
</button>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <button type="button" className="btn btn-dark btn-icon px-3">
    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} className="d-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  </button>
  <button type="button" className="btn btn-dark btn-icon px-3">
    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} className="d-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  </button>
  <button type="button" className="btn btn-dark btn-icon px-3">
    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} className="d-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  </button>
</div>
```
{% endtab %}

{% endtabs %}

## Social Buttons

Use these button styles when building social media login forms using Facebook, Twitter, GitHub, Google, and Apple.

<div class="ct-example">

<button type="button" class="btn btn-info btn-icon d-flex align-items-center me-2">
	<span class="btn-inner--icon me-1">
		<svg widht="14" height="14" xmlns="http://www.w3.org/2000/svg" class="d-block" viewBox="0 0 24 24" fill="currentColor">
			<path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" />
		</svg>
	</span>
	<span class="btn-inner--text">Connect</span>
</button>

<button type="button" class="btn btn-white btn-icon d-flex align-items-center me-2">
	<span class="btn-inner--icon me-1">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 17.5 28" class="maiar-symbol maiar-app d-block"><defs><style>
			.cls-maiar-app-1 {
				fill: #1f43f7;
			}

			.cls-maiar-app-2 {
				fill: #fff;
			}
		</style></defs><g transform="translate(11007 -18884.001)"><path class="cls-maiar-app-1" d="M14.875-21H2.625A2.626,2.626,0,0,0,0-18.375V4.375A2.626,2.626,0,0,0,2.625,7h12.25A2.626,2.626,0,0,0,17.5,4.375v-22.75A2.626,2.626,0,0,0,14.875-21Z" transform="translate(-11007 18905)"></path><g transform="translate(-11002.75 18892.168)"><g transform="translate(0 0)"><path class="cls-maiar-app-2" d="M2.255,6.752l.008-.01L0,9V0L4.5,4.5,9,0V9L6.75,6.752,4.5,9Z" transform="translate(0 0)"></path></g></g><circle class="cls-maiar-app-2" cx="1.5" cy="1.5" r="1.5" transform="translate(-10999.75 18906.498)"></circle></g></svg>
	</span>
	<span class="btn-inner--text">Maiar App</span>
</button>

</div>

{% tabs log %}

{% tab log html %}
```html
<button type="button" class="btn btn-info btn-icon d-flex align-items-center me-2">
	<span class="btn-inner--icon me-1">
		<svg widht="14" height="14" xmlns="http://www.w3.org/2000/svg" class="d-block" viewBox="0 0 24 24" fill="currentColor">
			<path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" />
		</svg>
	</span>
	<span class="btn-inner--text">Connect</span>
</button>

<button type="button" class="btn btn-white btn-icon me-2">
	<span class="btn-inner--icon me-1">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 17.5 28" class="maiar-symbol maiar-app"><defs><style>
			.cls-maiar-app-1 {
				fill: #1f43f7;
			}

			.cls-maiar-app-2 {
				fill: #fff;
			}
		</style></defs><g transform="translate(11007 -18884.001)"><path class="cls-maiar-app-1" d="M14.875-21H2.625A2.626,2.626,0,0,0,0-18.375V4.375A2.626,2.626,0,0,0,2.625,7h12.25A2.626,2.626,0,0,0,17.5,4.375v-22.75A2.626,2.626,0,0,0,14.875-21Z" transform="translate(-11007 18905)"></path><g transform="translate(-11002.75 18892.168)"><g transform="translate(0 0)"><path class="cls-maiar-app-2" d="M2.255,6.752l.008-.01L0,9V0L4.5,4.5,9,0V9L6.75,6.752,4.5,9Z" transform="translate(0 0)"></path></g></g><circle class="cls-maiar-app-2" cx="1.5" cy="1.5" r="1.5" transform="translate(-10999.75 18906.498)"></circle></g></svg>
	</span>
	<span class="btn-inner--text">Maiar App</span>
</button>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <button type="button" className="btn btn-info btn-icon d-flex align-items-center me-2">
    <span className="btn-inner--icon me-1">
      <svg widht={14} height={14} xmlns="http://www.w3.org/2000/svg" className="d-block" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
      </svg>
    </span>
    <span className="btn-inner--text">Connect</span>
  </button>
  <button type="button" className="btn btn-white btn-icon me-2">
    <span className="btn-inner--icon me-1">
      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 17.5 28" className="maiar-symbol maiar-app"><g transform="translate(11007 -18884.001)"><path fill="#1f43f7" d="M14.875-21H2.625A2.626,2.626,0,0,0,0-18.375V4.375A2.626,2.626,0,0,0,2.625,7h12.25A2.626,2.626,0,0,0,17.5,4.375v-22.75A2.626,2.626,0,0,0,14.875-21Z" transform="translate(-11007 18905)" /><g transform="translate(-11002.75 18892.168)"><g transform="translate(0 0)"><path fill="#fff" d="M2.255,6.752l.008-.01L0,9V0L4.5,4.5,9,0V9L6.75,6.752,4.5,9Z" transform="translate(0 0)" /></g></g><circle className="cls-maiar-app-2" cx="1.5" cy="1.5" r="1.5" transform="translate(-10999.75 18906.498)" /></g></svg>
    </span>
    <span className="btn-inner--text">Maiar App</span>
  </button>
</div>
```
{% endtab %}

{% endtabs %}



## Button Group

The button group component can be used to stack together multiple buttons and links inside a single element.

<div class="ct-example">

<div class="btn-group me-2" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-dark btn-icon d-flex align-items-center">
    <span class="btn-inner--icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="d-block me-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
      </svg>
    </span>
    <span class="btn-inner--text">Previous Page</span>
  </button>
  <button type="button" class="btn btn-dark btn-icon d-flex align-items-center">
    <span class="btn-inner--text">Next Page</span>
    <span class="btn-inner--icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="d-block ms-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
      </svg>
    </span>
  </button>
</div>

<div class="btn-group me-2" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-dark btn-icon px-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="d-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
    </svg>
  </button>
  <button type="button" class="btn btn-dark btn-icon px-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="d-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
    </svg>
  </button>
  <button type="button" class="btn btn-dark btn-icon px-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="d-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
    </svg>
  </button>
</div>

</div>

{% tabs log %}

{% tab log html %}
```html
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-dark btn-icon d-flex align-items-center">
    <span class="btn-inner--icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="d-block me-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
      </svg>
    </span>
    <span class="btn-inner--text">Previous Page</span>
  </button>
  <button type="button" class="btn btn-dark btn-icon d-flex align-items-center">
    <span class="btn-inner--text">Next Page</span>
    <span class="btn-inner--icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="d-block ms-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
      </svg>
    </span>
  </button>
</div>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-dark btn-icon px-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" class="d-block" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
    </svg>
  </button>
  <button type="button" class="btn btn-dark btn-icon px-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" class="d-block" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
    </svg>
  </button>
  <button type="button" class="btn btn-dark btn-icon px-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" class="d-block" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
    </svg>
  </button>
</div>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <div className="btn-group" role="group" aria-label="Basic example">
    <button type="button" className="btn btn-dark btn-icon d-flex align-items-center">
      <span className="btn-inner--icon">
        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} className="d-block me-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
      </span>
      <span className="btn-inner--text">Previous Page</span>
    </button>
    <button type="button" className="btn btn-dark btn-icon d-flex align-items-center">
      <span className="btn-inner--text">Next Page</span>
      <span className="btn-inner--icon">
        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} className="d-block ms-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </button>
  </div>
  <div className="btn-group" role="group" aria-label="Basic example">
    <button type="button" className="btn btn-dark btn-icon px-3">
      <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} className="d-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    </button>
    <button type="button" className="btn btn-dark btn-icon px-3">
      <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} className="d-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    </button>
    <button type="button" className="btn btn-dark btn-icon px-3">
      <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} className="d-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  </div>
</div>
```
{% endtab %}

{% endtabs %}


## Sizes

Fancy larger or smaller buttons? Add `.btn-lg` or `.btn-sm` for additional sizes.

<div class="ct-example">

<button type="button" class="btn btn-dark me-2 btn-lg">Large button</button>
<button type="button" class="btn btn-white btn-lg">Large button</button>

</div>

{% tabs log %}

{% tab log html %}
```html
<button type="button" class="btn btn-dark btn-lg">Large button</button>
<button type="button" class="btn btn-white btn-lg">Large button</button>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <button type="button" className="btn btn-dark btn-lg">Large button</button>
  <button type="button" className="btn btn-white btn-lg">Large button</button>
</div>
```
{% endtab %}

{% endtabs %}

<br/>

<div class="ct-example">

<button type="button" class="btn btn-dark me-2 btn-sm">Small button</button>
<button type="button" class="btn btn-white btn-sm">Small button</button>

</div>

{% tabs log %}

{% tab log html %}
```html
<button type="button" class="btn btn-dark btn-sm">Small button</button>
<button type="button" class="btn btn-white btn-sm">Small button</button>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <button type="button" className="btn btn-dark btn-sm">Small button</button>
  <button type="button" className="btn btn-white btn-sm">Small button</button>
</div>
```
{% endtab %}

{% endtabs %}

<br/>

Create block level buttons—those that span the full width of a parent—by adding `.w-100`.


<div class="ct-example">

<button type="button" class="btn btn-dark me-2 btn-lg w-100">Block level button</button>
<button type="button" class="btn btn-white btn-lg w-100">Block level button</button>

</div>

{% tabs log %}

{% tab log html %}
```html
<button type="button" class="btn btn-dark btn-lg w-100">Block level button</button>
<button type="button" class="btn btn-white btn-lg w-100">Block level button</button>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <button type="button" className="btn btn-dark btn-lg w-100">Block level button</button>
  <button type="button" className="btn btn-white btn-lg w-100">Block level button</button>
</div>
```
{% endtab %}

{% endtabs %}



## Active State

Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. **There's no need to add a class to `<button>`s as they use a pseudo-class**. However, you can still force the same active appearance with `.active` (and include the <code>aria-pressed="true"</code> attribute) should you need to replicate the state programmatically.


<div class="ct-example">

<a href="javascript:;" class="btn btn-dark btn-lg me-2 active" role="button" aria-pressed="true">Primary link</a>
<a href="javascript:;" class="btn btn-white btn-lg active" role="button" aria-pressed="true">Link</a>

</div>


{% tabs log %}

{% tab log html %}
```html
<a href="javascript:;" class="btn btn-dark btn-lg active" role="button" aria-pressed="true">Primary link</a>
<a href="javascript:;" class="btn btn-white btn-lg active" role="button" aria-pressed="true">Link</a>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <a href="javascript:;" className="btn btn-dark btn-lg active" role="button" aria-pressed="true">Primary link</a>
  <a href="javascript:;" className="btn btn-white btn-lg active" role="button" aria-pressed="true">Link</a>
</div>
```
{% endtab %}

{% endtabs %}

## Disabled State
Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element.

<div class="ct-example">
<button type="button" class="btn btn-lg btn-dark me-2" disabled>Primary button</button>
<button type="button" class="btn btn-white btn-lg" disabled>Button</button>
</div>

{% tabs log %}

{% tab log html %}
```html
<button type="button" class="btn btn-lg btn-dark" disabled>Primary button</button>
<button type="button" class="btn btn-white btn-lg" disabled>Button</button>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <button type="button" className="btn btn-lg btn-dark" disabled>Primary button</button>
  <button type="button" className="btn btn-white btn-lg" disabled>Button</button>
</div>
```
{% endtab %}

{% endtabs %}
