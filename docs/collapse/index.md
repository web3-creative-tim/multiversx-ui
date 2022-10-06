---
title: Collapse
layout: docs
description: View all collapse examples
---
{% include edit-on-github.md %}


## Examples

<div class="ct-example">

<div class="accordion" id="accordionExample">
  <div class="accordion-item mb-3">
    <h5 class="accordion-header" id="headingOne">
      <button class="accordion-button border-bottom font-weight-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> What is an NFT? <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
        <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
      </button>
    </h5>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style="">
      <div class="accordion-body"> NFTs ("Non-Fungible Tokens") are one-of-a-kind tokens that represent a unique good or asset, like digital art. NFTs are generated and traded in cryptocurrency which is digital cash with an encrypted key often in the form of a random string of numbers. </div>
    </div>
  </div>
</div>

</div>

{% tabs log %}

{% tab log html %}
```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item mb-3">
    <h5 class="accordion-header" id="headingOne">
      <button class="accordion-button border-bottom font-weight-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> What is an NFT? <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
        <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
      </button>
    </h5>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style="">
      <div class="accordion-body"> NFTs ("Non-Fungible Tokens") are one-of-a-kind tokens that represent a unique good or asset, like digital art. NFTs are generated and traded in cryptocurrency which is digital cash with an encrypted key often in the form of a random string of numbers. </div>
    </div>
  </div>
</div>
```
{% endtab %}

{% tab log React %}
```html
<div className="accordion" id="accordion1">
  <div className="accordion-item mb-3">
    <h5 className="accordion-header" id="heading7">
      <button className="accordion-button font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7"> What is an NFT? <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" />
        <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" />
      </button>
    </h5>
    <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7">
      <div className="accordion-body "> NFTs ("Non-Fungible Tokens") are one-of-a-kind tokens that represent a unique good or asset, like digital art. NFTs are generated and traded in cryptocurrency which is digital cash with an encrypted key often in the form of a random string of numbers. </div>
    </div>
  </div>
</div>
```
{% endtab %}

{% endtabs %}
