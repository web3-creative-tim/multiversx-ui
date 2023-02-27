---
title: Alerts
layout: docs
description: View all alert examples
---
{% include edit-on-github.md %}


## Examples

<div class="ct-example">

<div class="alert alert-info font-weight-bold" role="alert">
	<span class="badge badge-info badge-sm text-white text-uppercase me-1">New</span>
	<span class="alert-text text-sm">Receive and store your MultiversX tokens.</span>
</div>

<div class="alert bg-gradient-dark text-white" role="alert">
	<a href="javascript:;">
		<span class="badge badge-white badge-sm text-dark text-uppercase me-1">New</span>
		<span class="text-white text-sm"><u>MultiversX acquires Utrust, initiates Web3 Payments revolution</u></span>
		<i class="fa fa-chevron-right text-white text-sm ms-2"></i>
	</a>
</div>

<div class="alert bg-gradient-primary border-0 text-white" role="alert">
	<div class="d-flex align-items-center">
		<div>
			<p class="font-weight-bolder text-dark mb-0">The Internet Scale Blockchain Is Live!</p>
			<p class="text-xs text-dark mb-0">Develop, test & deploy with the tools you love</p>
		</div>
		<div data-bs-toggle="tooltip" data-bs-title="Default tooltip" class="ms-auto text-dark">
			<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
			</svg>
		</div>
	</div>
</div>

</div>

{% tabs log %}

{% tab log html %}
```html
<div class="alert alert-info font-weight-bold" role="alert">
	<span class="badge badge-info badge-sm text-white text-uppercase me-1">New</span>
	<span class="alert-text text-sm">Receive and store your MultiversX tokens.</span>
</div>

<div class="alert bg-gradient-dark text-white" role="alert">
	<a href="javascript:;">
		<span class="badge badge-white badge-sm text-dark text-uppercase me-1">New</span>
		<span class="text-white text-sm"><u>MultiversX acquires Utrust, initiates Web3 Payments revolution</u></span>
		<i class="fa fa-chevron-right text-white text-sm ms-2"></i>
	</a>
</div>

<div class="alert bg-gradient-primary border-0 text-white" role="alert">
	<div class="d-flex align-items-center">
		<div>
			<p class="font-weight-bolder text-dark mb-0">The Internet Scale Blockchain Is Live!</p>
			<p class="text-xs text-dark mb-0">Develop, test & deploy with the tools you love</p>
		</div>
		<div data-bs-toggle="tooltip" data-bs-title="Default tooltip" class="ms-auto">
			<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
			</svg>
		</div>
	</div>
</div>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <div className="alert alert-info font-weight-bold" role="alert">
    <span className="badge badge-info badge-sm text-white text-uppercase me-1">New</span>
    <span className="alert-text text-sm">Receive and store your MultiversX tokens.</span>
  </div>
  <div className="alert bg-gradient-dark text-white" role="alert">
    <a href="javascript:;">
      <span className="badge badge-white badge-sm text-dark text-uppercase me-1">New</span>
      <span className="text-white text-sm"><u>MultiversX acquires Utrust, initiates Web3 Payments revolution</u></span>
      <i className="fa fa-chevron-right text-white text-sm ms-2" />
    </a>
  </div>
  <div className="alert bg-gradient-primary border-0 text-white" role="alert">
    <div className="d-flex align-items-center">
      <div>
        <p className="font-weight-bolder text-dark mb-0">The Internet Scale Blockchain Is Live!</p>
        <p className="text-xs text-dark mb-0">Develop, test &amp; deploy with the tools you love</p>
      </div>
      <div data-bs-toggle="tooltip" data-bs-title="Default tooltip" className="ms-auto">
        <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      </div>
    </div>
  </div>
</div>
```
{% endtab %}

{% endtabs %}



## Transaction Alerts

<div class="ct-example">
	<div class="row">
		<div class="col-sm-6">
			<div class="alert bg-dark border border-secondary text-white d-xl-flex align-items-center" role="alert">
				<div class="icon icon-shape bg-warning text-white text-center rounded-circle d-flex align-items-center justify-content-center mb-xl-0 mb-3">
					<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						<path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clip-rule="evenodd" />
				  </svg>
				</div>
				<div class="ms-xl-3">
					<h5 class="text-white no_toc">Processing transaction</h5>
					<p class="mb-0">Claiming Tokens</p>
					<p class="text-sm">0 / 1 transactions processed</p>
					<div class="d-flex align-items-center">
						<div class="spinner-border spinner-border-sm text-secondary" role="status">
						  <span class="visually-hidden">Loading...</span>
						</div>
						<span class="text-sm ms-1">f6228487mnhw... 3482utqwyk54</span>
						<svg width="14" height="14" class="text-secondary ms-3 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						  <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
						  <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
						</svg>
					</div>
				</div>
			</div>
		</div>
		<div class="col-sm-6">
			<div class="alert bg-dark border border-secondary text-white d-xl-flex align-items-center" role="alert">
				<div class="icon icon-shape bg-success text-white text-center rounded-circle d-flex align-items-center justify-content-center mb-xl-0 mb-3">
					<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
					  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
					</svg>
				</div>
				<div class="ms-xl-3">
					<h5 class="text-white no_toc">Transaction successful</h5>
					<p class="mb-0">Tokens Claimed</p>
					<p class="text-sm">1 / 1 transactions processed</p>
					<div class="d-flex align-items-center">
						<svg width="14" height="14" class="text-secondary w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
							<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
						</svg>
						<span class="text-sm ms-1">f6228487mnhw... 3482utqwyk54</span>
						<svg width="14" height="14" class="text-secondary ms-3 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						  <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
						  <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
						</svg>
						<svg width="14" height="14" class="text-secondary ms-1 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						  <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
						</svg>
					</div>
				</div>
				<div class="position-absolute top-10 end-4">
					<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
					  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
					</svg>
				</div>
			</div>
		</div>
		<div class="col-sm-6">
			<div class="alert border border-light text-white d-xl-flex align-items-center" role="alert">
				<div class="icon icon-shape bg-warning text-white text-center rounded-circle d-flex align-items-center justify-content-center mb-xl-0 mb-3">
					<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						<path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clip-rule="evenodd" />
				  </svg>
				</div>
				<div class="ms-xl-3">
					<h5 class="no_toc">Processing transaction</h5>
					<p class="mb-0 text-dark">Claiming Tokens</p>
					<p class="text-sm text-dark">0 / 1 transactions processed</p>
					<div class="d-flex align-items-center">
						<div class="spinner-border spinner-border-sm text-secondary" role="status">
						  <span class="visually-hidden">Loading...</span>
						</div>
						<span class="text-sm ms-1 text-dark">f6228487mnhw... 3482utqwyk54</span>
						<svg width="14" height="14" class="text-secondary ms-3 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						  <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
						  <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
						</svg>
					</div>
				</div>
			</div>
		</div>
		<div class="col-sm-6">
			<div class="alert border border-light text-white d-xl-flex align-items-center" role="alert">
				<div class="icon icon-shape bg-success text-white text-center rounded-circle d-flex align-items-center justify-content-center mb-xl-0 mb-3">
					<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
					  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
					</svg>
				</div>
				<div class="ms-xl-3">
					<h5 class="no_toc">Transaction successful</h5>
					<p class="mb-0 text-dark">Tokens Claimed</p>
					<p class="text-sm text-dark">1 / 1 transactions processed</p>
					<div class="d-flex align-items-center">
						<svg width="14" height="14" class="text-secondary w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
							<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
						</svg>
						<span class="text-sm ms-1 text-dark">f6228487mnhw... 3482utqwyk54</span>
						<svg width="14" height="14" class="text-secondary ms-3 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						  <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
						  <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
						</svg>
						<svg width="14" height="14" class="text-secondary ms-1 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						  <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
						</svg>
					</div>
				</div>
				<div class="position-absolute top-10 end-4">
					<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
					  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
					</svg>
				</div>
			</div>
		</div>
	</div>
</div>

{% tabs log %}

{% tab log html %}
```html
<div class="row">
	<div class="col-sm-6">
		<div class="alert bg-dark border border-secondary text-white d-xl-flex align-items-center" role="alert">
			<div class="icon icon-shape bg-warning text-white text-center rounded-circle d-flex align-items-center justify-content-center mb-xl-0 mb-3">
				<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
					<path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clip-rule="evenodd" />
				</svg>
			</div>
			<div class="ms-xl-3">
				<h5 class="text-white">Processing transaction</h5>
				<p class="mb-0">Claiming Tokens</p>
				<p class="text-sm">0 / 1 transactions processed</p>
				<div class="d-flex align-items-center">
					<div class="spinner-border spinner-border-sm text-secondary" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
					<span class="text-sm ms-1">f6228487mnhw... 3482utqwyk54</span>
					<svg width="14" height="14" class="text-secondary ms-3 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						<path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
						<path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
					</svg>
				</div>
			</div>
		</div>
	</div>
	<div class="col-sm-6">
		<div class="alert bg-dark border border-secondary text-white d-xl-flex align-items-center" role="alert">
			<div class="icon icon-shape bg-success text-white text-center rounded-circle d-flex align-items-center justify-content-center mb-xl-0 mb-3">
				<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
					<path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
				</svg>
			</div>
			<div class="ms-xl-3">
				<h5 class="text-white">Transaction successful</h5>
				<p class="mb-0">Tokens Claimed</p>
				<p class="text-sm">1 / 1 transactions processed</p>
				<div class="d-flex align-items-center">
					<svg width="14" height="14" class="text-secondary w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
					</svg>
					<span class="text-sm ms-1">f6228487mnhw... 3482utqwyk54</span>
					<svg width="14" height="14" class="text-secondary ms-3 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						<path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
						<path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
					</svg>
					<svg width="14" height="14" class="text-secondary ms-1 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						<path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
					</svg>
				</div>
			</div>
			<div class="position-absolute top-10 end-4">
				<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
					<path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
				</svg>
			</div>
		</div>
	</div>
	<div class="col-sm-6">
		<div class="alert border border-light text-white d-xl-flex align-items-center" role="alert">
			<div class="icon icon-shape bg-warning text-white text-center rounded-circle d-flex align-items-center justify-content-center mb-xl-0 mb-3">
				<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
					<path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clip-rule="evenodd" />
				</svg>
			</div>
			<div class="ms-xl-3">
				<h5>Processing transaction</h5>
				<p class="mb-0 text-dark">Claiming Tokens</p>
				<p class="text-sm text-dark">0 / 1 transactions processed</p>
				<div class="d-flex align-items-center">
					<div class="spinner-border spinner-border-sm text-secondary" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
					<span class="text-sm ms-1 text-dark">f6228487mnhw... 3482utqwyk54</span>
					<svg width="14" height="14" class="text-secondary ms-3 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						<path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
						<path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
					</svg>
				</div>
			</div>
		</div>
	</div>
	<div class="col-sm-6">
		<div class="alert border border-light text-white d-xl-flex align-items-center" role="alert">
			<div class="icon icon-shape bg-success text-white text-center rounded-circle d-flex align-items-center justify-content-center mb-xl-0 mb-3">
				<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
					<path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
				</svg>
			</div>
			<div class="ms-xl-3">
				<h5>Transaction successful</h5>
				<p class="mb-0 text-dark">Tokens Claimed</p>
				<p class="text-sm text-dark">1 / 1 transactions processed</p>
				<div class="d-flex align-items-center">
					<svg width="14" height="14" class="text-secondary w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
					</svg>
					<span class="text-sm ms-1 text-dark">f6228487mnhw... 3482utqwyk54</span>
					<svg width="14" height="14" class="text-secondary ms-3 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						<path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
						<path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
					</svg>
					<svg width="14" height="14" class="text-secondary ms-1 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						<path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
					</svg>
				</div>
			</div>
			<div class="position-absolute top-10 end-4">
				<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
					<path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
				</svg>
			</div>
		</div>
	</div>
</div>
```
{% endtab %}

{% tab log React %}
```html
<div className="row">
  <div className="col-sm-6">
    <div className="alert bg-dark border border-secondary text-white d-xl-flex align-items-center" role="alert">
      <div className="icon icon-shape bg-warning text-white text-center rounded-circle d-flex align-items-center justify-content-center mb-xl-0 mb-3">
        <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="ms-xl-3">
        <h5 className="text-white">Processing transaction</h5>
        <p className="mb-0">Claiming Tokens</p>
        <p className="text-sm">0 / 1 transactions processed</p>
        <div className="d-flex align-items-center">
          <div className="spinner-border spinner-border-sm text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <span className="text-sm ms-1">f6228487mnhw... 3482utqwyk54</span>
          <svg width={14} height={14} className="text-secondary ms-3 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
            <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="alert bg-dark border border-secondary text-white d-xl-flex align-items-center" role="alert">
      <div className="icon icon-shape bg-success text-white text-center rounded-circle d-flex align-items-center justify-content-center mb-xl-0 mb-3">
        <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="ms-xl-3">
        <h5 className="text-white">Transaction successful</h5>
        <p className="mb-0">Tokens Claimed</p>
        <p className="text-sm">1 / 1 transactions processed</p>
        <div className="d-flex align-items-center">
          <svg width={14} height={14} className="text-secondary w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
          </svg>
          <span className="text-sm ms-1">f6228487mnhw... 3482utqwyk54</span>
          <svg width={14} height={14} className="text-secondary ms-3 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
            <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
          </svg>
          <svg width={14} height={14} className="text-secondary ms-1 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="position-absolute top-10 end-4">
        <svg width={14} height={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="alert border border-light text-white d-xl-flex align-items-center" role="alert">
      <div className="icon icon-shape bg-warning text-white text-center rounded-circle d-flex align-items-center justify-content-center mb-xl-0 mb-3">
        <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="ms-xl-3">
        <h5>Processing transaction</h5>
        <p className="mb-0 text-dark">Claiming Tokens</p>
        <p className="text-sm text-dark">0 / 1 transactions processed</p>
        <div className="d-flex align-items-center">
          <div className="spinner-border spinner-border-sm text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <span className="text-sm ms-1 text-dark">f6228487mnhw... 3482utqwyk54</span>
          <svg width={14} height={14} className="text-secondary ms-3 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
            <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="alert border border-light text-white d-xl-flex align-items-center" role="alert">
      <div className="icon icon-shape bg-success text-white text-center rounded-circle d-flex align-items-center justify-content-center mb-xl-0 mb-3">
        <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="ms-xl-3">
        <h5>Transaction successful</h5>
        <p className="mb-0 text-dark">Tokens Claimed</p>
        <p className="text-sm text-dark">1 / 1 transactions processed</p>
        <div className="d-flex align-items-center">
          <svg width={14} height={14} className="text-secondary w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
          </svg>
          <span className="text-sm ms-1 text-dark">f6228487mnhw... 3482utqwyk54</span>
          <svg width={14} height={14} className="text-secondary ms-3 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
            <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
          </svg>
          <svg width={14} height={14} className="text-secondary ms-1 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="position-absolute top-10 end-4">
        <svg width={14} height={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
</div>
```
{% endtab %}

{% endtabs %}

## Light Alerts

<div class="ct-example">
{% for color in site.data.theme.theme-colors %}
<div class="alert alert-{{ color.name }} text-sm text-dark" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>
{% endfor %}
</div>

{% tabs log %}

{% tab log html %}
```html
<div class="alert alert-dark text-dark text-sm" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>

<div class="alert alert-white text-dark text-sm" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>

<div class="alert alert-primary text-dark text-sm" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>

<div class="alert alert-secondary text-dark text-sm" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>

<div class="alert alert-info text-dark text-sm" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>

<div class="alert alert-success text-dark text-sm" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>

<div class="alert alert-danger text-dark text-sm" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>

<div class="alert alert-warning text-dark text-sm" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <div className="alert alert-dark text-dark text-sm" role="alert">
    <div>
      <p className="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
      <p className="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
    </div>
  </div>
  <div className="alert alert-white text-dark text-sm" role="alert">
    <div>
      <p className="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
      <p className="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
    </div>
  </div>
  <div className="alert alert-primary text-dark text-sm" role="alert">
    <div>
      <p className="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
      <p className="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
    </div>
  </div>
  <div className="alert alert-secondary text-dark text-sm" role="alert">
    <div>
      <p className="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
      <p className="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
    </div>
  </div>
  <div className="alert alert-info text-dark text-sm" role="alert">
    <div>
      <p className="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
      <p className="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
    </div>
  </div>
  <div className="alert alert-success text-dark text-sm" role="alert">
    <div>
      <p className="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
      <p className="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
    </div>
  </div>
  <div className="alert alert-danger text-dark text-sm" role="alert">
    <div>
      <p className="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
      <p className="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
    </div>
  </div>
  <div className="alert alert-warning text-dark text-sm" role="alert">
    <div>
      <p className="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
      <p className="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
    </div>
  </div>
</div>
```
{% endtab %}

{% endtabs %}

## Solid Alerts

<div class="ct-example">
{% for color in site.data.theme.theme-colors %}
<div class="alert bg-gradient-{{ color.name }} border-0 text-sm {% if color.name == 'white' %}text-dark{% else %}text-white{% endif %}" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>
{% endfor %}
</div>

{% tabs log %}

{% tab log html %}
```html
<div class="alert bg-gradient-dark text-white text-sm" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>

<div class="alert bg-gradient-white text-dark text-sm" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>

<div class="alert bg-gradient-primary border-0 text-white text-sm" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>

<div class="alert bg-gradient-secondary text-white text-sm" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>

<div class="alert bg-gradient-info text-white text-sm" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>

<div class="alert bg-gradient-success text-white text-sm" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>

<div class="alert bg-gradient-danger text-white text-sm" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>

<div class="alert bg-gradient-warning text-white text-sm" role="alert">
	<div>
		<p class="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
		<p class="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
	</div>
</div>
```
{% endtab %}

{% tab log React %}
```html
<div>
  <div className="alert bg-gradient-dark text-white text-sm" role="alert">
    <div>
      <p className="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
      <p className="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
    </div>
  </div>
  <div className="alert bg-gradient-white text-dark text-sm" role="alert">
    <div>
      <p className="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
      <p className="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
    </div>
  </div>
  <div className="alert bg-gradient-primary border-0 text-white text-sm" role="alert">
    <div>
      <p className="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
      <p className="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
    </div>
  </div>
  <div className="alert bg-gradient-secondary text-white text-sm" role="alert">
    <div>
      <p className="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
      <p className="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
    </div>
  </div>
  <div className="alert bg-gradient-info text-white text-sm" role="alert">
    <div>
      <p className="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
      <p className="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
    </div>
  </div>
  <div className="alert bg-gradient-success text-white text-sm" role="alert">
    <div>
      <p className="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
      <p className="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
    </div>
  </div>
  <div className="alert bg-gradient-danger text-white text-sm" role="alert">
    <div>
      <p className="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
      <p className="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
    </div>
  </div>
  <div className="alert bg-gradient-warning text-white text-sm" role="alert">
    <div>
      <p className="font-weight-bolder mb-0">The Internet Scale Blockchain Is Live!</p>
      <p className="text-xs mb-0">Develop, test &amp; deploy with the tools you love</p>
    </div>
  </div>
</div>
```
{% endtab %}

{% endtabs %}
