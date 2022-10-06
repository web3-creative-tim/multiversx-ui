---
title: Cards
layout: docs
description: View all cards examples
---
{% include edit-on-github.md %}

{% include root.html %}

## Examples

### Card Stats


<div class="ct-example">
	<div class="row">
		<div class="col-6">
			<div class="card border mb-3 shadow-xs">
			  <div class="card-body p-4">
			    <div class="icon icon-shape bg-dark text-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
			      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" stroke-width="2">
			        <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z"></path>
			      </svg>
			    </div>
			    <p class="text-sm mb-1">Total</p>
			    <h4 class="mb-0 font-weight-bold no_toc">57.3244 EGLD</h4>
			    <p class="mb-0 text-sm mt-1">$2,751</p>
			  </div>
			</div>
		</div>
	</div>

</div>

{% tabs log %}

{% tab log html %}
```html
<div class="card border mb-3 shadow-xs">
  <div class="card-body p-4">
    <div class="icon icon-shape bg-dark text-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" stroke-width="2">
        <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z"></path>
      </svg>
    </div>
    <p class="text-sm mb-1">Total</p>
    <h4 class="mb-0 font-weight-bold">57.3244 EGLD</h4>
    <p class="mb-0 text-sm mt-1">$2,751</p>
  </div>
</div>
```
{% endtab %}

{% tab log React %}
```html
<div className="card border mb-3 shadow-xs">
	<div className="card-body p-4">
		<div className="icon icon-shape bg-dark text-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				width={18}
				height={18}
				strokeWidth={2}
			>
				<path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
			</svg>
		</div>
		<p className="text-sm mb-1">Total</p>
		<h4 className="mb-0 font-weight-bold">
			57.3244 EGLD
		</h4>
		<p className="mb-0 text-sm mt-1">
			$2,751
		</p>
	</div>
</div>
```
{% endtab %}

{% endtabs %}


### Card Article

<div class="ct-example">
<div class="row">
	<div class="col-md-6 mb-4">
	  <div class="card card-background border-radius-xl card-background-after-none align-items-start mb-4">
	    <div class="full-background bg-cover" style="background-image: url('{{root}}assets/img/img-cube.jpg')"></div>
	    <span class="mask bg-dark opacity-1 border-radius-sm"></span>
	    <div class="card-body text-start p-3 w-100">
	      <div class="row">
	        <div class="col-12">
	          <div class="blur shadow d-flex align-items-center w-100 border-radius-md border border-white mt-8 p-3">
	            <div class="w-50">
	              <p class="text-dark text-sm font-weight-bold mb-1">Charles Deluvio</p>
	              <p class="text-xs text-secondary mb-0">17 Jul 2022</p>
	            </div>
	            <p class="text-dark text-sm font-weight-bold ms-auto">Education</p>
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
	  <a href="javascript:;">
	    <h4 class="font-weight-bold"> Don't be afraid to be wrong </h4>
	  </a>
	  <p class="mb-4"> As Uber works through a huge amount of internal management turmoil. </p>
	  <a href="javascript:;" class="text-dark font-weight-semibold icon-move-right mt-auto w-100 mb-5"> Read post <i class="fas fa-arrow-right-long text-sm ms-1" aria-hidden="true"></i>
	  </a>
	</div>
</div>
</div>

{% tabs log %}

{% tab log html %}
```html
<div class="row">
	<div class="col-xl-4 col-md-6 mb-xl-0 mb-4">
	  <div class="card card-background border-radius-xl card-background-after-none align-items-start mb-4">
	    <div class="full-background bg-cover" style="background-image: url('{{root}}assets/img/img-cube.jpg')"></div>
	    <span class="mask bg-dark opacity-1 border-radius-sm"></span>
	    <div class="card-body text-start p-3 w-100">
	      <div class="row">
	        <div class="col-12">
	          <div class="blur shadow d-flex align-items-center w-100 border-radius-md border border-white mt-8 p-3">
	            <div class="w-50">
	              <p class="text-dark text-sm font-weight-bold mb-1">Charles Deluvio</p>
	              <p class="text-xs text-secondary mb-0">17 Jul 2022</p>
	            </div>
	            <p class="text-dark text-sm font-weight-bold ms-auto">Education</p>
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
	  <a href="javascript:;">
	    <h4 class="font-weight-bold"> Don't be afraid to be wrong </h4>
	  </a>
	  <p class="mb-4"> As Uber works through a huge amount of internal management turmoil. </p>
	  <a href="javascript:;" class="text-dark font-weight-semibold icon-move-right mt-auto w-100 mb-5"> Read post <i class="fas fa-arrow-right-long text-sm ms-1" aria-hidden="true"></i>
	  </a>
	</div>
</div>
```
{% endtab %}

{% tab log React %}
```html
<div className="row">
  <div className="col-xl-4 col-md-6 mb-xl-0 mb-4">
    <div className="card card-background border-radius-xl card-background-after-none align-items-start mb-4">
      <div className="full-background bg-cover" style={{backgroundImage: 'url("{{root}}assets/img/img-cube.jpg")'}} />
      <span className="mask bg-dark opacity-1 border-radius-sm" />
      <div className="card-body text-start p-3 w-100">
        <div className="row">
          <div className="col-12">
            <div className="blur shadow d-flex align-items-center w-100 border-radius-md border border-white mt-8 p-3">
              <div className="w-50">
                <p className="text-dark text-sm font-weight-bold mb-1">Charles Deluvio</p>
                <p className="text-xs text-secondary mb-0">17 Jul 2022</p>
              </div>
              <p className="text-dark text-sm font-weight-bold ms-auto">Education</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="javascript:;">
      <h4 className="font-weight-bold"> Don't be afraid to be wrong </h4>
    </a>
    <p className="mb-4"> As Uber works through a huge amount of internal management turmoil. </p>
    <a href="javascript:;" className="text-dark font-weight-semibold icon-move-right mt-auto w-100 mb-5"> Read post <i className="fas fa-arrow-right-long text-sm ms-1" aria-hidden="true" />
    </a>
  </div>
</div>
```
{% endtab %}

{% endtabs %}

### Card Heading

<div class="ct-example">

	<div class="row mb-3">
		<div class="col-6">
			<div class="card border shadow-xs">
				<div class="card-body">
					<div class="d-flex align-items-center mb-3">
						<img src="https://raw.githubusercontent.com/ElrondNetwork/assets/master/tokens/NFTIM-4586ac/logo.png" class="avatar rounded-circle" alt="avatar"/>
						<div class="ms-2">
							<h5 class="mb-0 font-weight-bolder no_toc">NF-Tim</h5>
							<p class="text-sm mb-0">First NFT utility project for Developers and Designers based on Elrond.</p>
						</div>
					</div>
					<a href="javascript:;" class="btn btn-info w-100 mb-0">View collection</a>
				</div>
			</div>
		</div>
	</div>

</div>

{% tabs log %}

{% tab log html %}
```html
<div class="card border shadow-xs">
	<div class="card-body">
		<div class="d-flex align-items-center mb-3">
			<img src="https://raw.githubusercontent.com/ElrondNetwork/assets/master/tokens/NFTIM-4586ac/logo.png" class="avatar rounded-circle" alt="avatar"/>
			<div class="ms-2">
				<h5 class="mb-0 font-weight-bolder">NF-Tim</h5>
				<p class="text-sm mb-0">First NFT utility project for Developers and Designers based on Elrond.</p>
			</div>
		</div>
		<a href="javascript:;" class="btn btn-info w-100 mb-0">View collection</a>
	</div>
</div>
```
{% endtab %}

{% tab log React %}
```html
<div className="card border shadow-xs">
  <div className="card-body">
    <div className="d-flex align-items-center mb-3">
      <img src="https://raw.githubusercontent.com/ElrondNetwork/assets/master/tokens/NFTIM-4586ac/logo.png" className="avatar rounded-circle" alt="avatar" />
      <div className="ms-2">
        <h5 className="mb-0 font-weight-bolder">NF-Tim</h5>
        <p className="text-sm mb-0">First NFT utility project for Developers and Designers based on Elrond.</p>
      </div>
    </div>
    <a href="javascript:;" className="btn btn-info w-100 mb-0">View collection</a>
  </div>
</div>
```
{% endtab %}

{% endtabs %}
