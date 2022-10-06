---
title: Navs
layout: docs
description: View all navs examples
---
{% include edit-on-github.md %}


## Example

<div class="ct-example">

<div class="row">
  <div class="col-6">
    <div class="nav-wrapper position-relative end-0 mb-4">
      <ul class="nav nav-pills nav-fill p-1" role="tablist">
        <li class="nav-item">
          <a class="nav-link text-sm mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#profile-tabs-simple" role="tab" aria-controls="profile" aria-selected="true">
            Tokens
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-sm mb-0 px-0 py-1" data-bs-toggle="tab" href="#dashboard-tabs-simple" role="tab" aria-controls="dashboard" aria-selected="false">
            Meta ESDT
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

</div>

{% tabs log %}

{% tab log html %}
```html
<div class="nav-wrapper position-relative end-0 mb-4">
  <ul class="nav nav-pills nav-fill p-1" role="tablist">
    <li class="nav-item">
      <a class="nav-link text-sm mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#profile-tabs-simple" role="tab" aria-controls="profile" aria-selected="true">
        Tokens
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-sm mb-0 px-0 py-1" data-bs-toggle="tab" href="#dashboard-tabs-simple" role="tab" aria-controls="dashboard" aria-selected="false">
        Meta ESDT
      </a>
    </li>
  </ul>
</div>
```
{% endtab %}

{% tab log React %}
```html
<div className="nav-wrapper position-relative end-0 mb-4">
  <ul className="nav nav-pills nav-fill p-1" role="tablist">
    <li className="nav-item">
      <a className="nav-link text-sm mb-0 px-0 py-1 font-weight-bold text-primary active" data-bs-toggle="tab" href="#profile-tabs-simple" role="tab" aria-controls="profile" aria-selected="true">
        Tokens
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-sm mb-0 px-0 py-1" data-bs-toggle="tab" href="#dashboard-tabs-simple" role="tab" aria-controls="dashboard" aria-selected="false">
        Meta ESDT
      </a>
    </li>
  </ul>
</div>
```
{% endtab %}

{% endtabs %}
