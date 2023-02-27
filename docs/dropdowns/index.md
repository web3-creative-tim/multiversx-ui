---
title: Dropdowns
layout: docs
description: View all dropdowns examples
---
{% include edit-on-github.md %}


## Example

<div class="ct-example">

<div class="dropdown">
  <a href="javascript:;" class="btn btn-info btn-icon" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="btn-inner--icon me-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" height="18" width="18">
        <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z"></path>
      </svg>
  	</span>
    <span class="btn-inner--text">MultiversX links</span>
  </a>
  <ul class="dropdown-menu px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
    <li>
      <a class="dropdown-item border-radius-md" href="https://multiversx.com/" target="_blank">
        <div class="d-flex py-1">
          <div class="d-flex flex-column justify-content-center">
            <h6 class="text-sm font-weight-normal mb-1">Main Site</h6>
            <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://multiversx.com/</p>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a class="dropdown-item border-radius-md" href="https://explorer.multiversx.com/" target="_blank">
        <div class="d-flex py-1">
          <div class="d-flex flex-column justify-content-center">
            <h6 class="text-sm font-weight-normal mb-1">Explorer</h6>
            <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://explorer.multiversx.com/</p>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a class="dropdown-item border-radius-md" href="https://ad-astra.multiversx.com/" target="_blank">
        <div class="d-flex py-1">
          <div class="d-flex flex-column justify-content-center">
            <h6 class="text-sm font-weight-normal mb-1">Bridge</h6>
            <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://ad-astra.multiversx.com/</p>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a class="dropdown-item border-radius-md" href="https://docs.multiversx.com/" target="_blank">
        <div class="d-flex py-1">
          <div class="d-flex flex-column justify-content-center">
            <h6 class="text-sm font-weight-normal mb-1">Docs</h6>
            <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://docs.multiversx.com/</p>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a class="dropdown-item border-radius-md" href="https://growth.elrond.com" target="_blank">
        <div class="d-flex py-1">
          <div class="d-flex flex-column justify-content-center">
            <h6 class="text-sm font-weight-normal mb-1">Growth</h6>
            <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://growth.elrond.com</p>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a class="dropdown-item border-radius-md" href="https://xportal.com/" target="_blank">
        <div class="d-flex py-1">
          <div class="d-flex flex-column justify-content-center">
            <h6 class="text-sm font-weight-normal mb-1">Maiar</h6>
            <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://xportal.com/</p>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a class="dropdown-item border-radius-md" href="https://xexchange.com/" target="_blank">
        <div class="d-flex py-1">
          <div class="d-flex flex-column justify-content-center">
            <h6 class="text-sm font-weight-normal mb-1">Maiar Exchange</h6>
            <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://xexchange.com/</p>
          </div>
        </div>
      </a>
    </li>
  </ul>
</div>

</div>

{% tabs log %}

{% tab log html %}
```html
<div class="dropdown">
  <a href="javascript:;" class="btn btn-info btn-icon" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="btn-inner--icon me-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" height="18" width="18">
        <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z"></path>
      </svg>
  	</span>
    <span class="btn-inner--text">MultiversX links</span>
  </a>
  <ul class="dropdown-menu px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
    <li>
      <a class="dropdown-item border-radius-md" href="https://multiversx.com/" target="_blank">
        <div class="d-flex py-1">
          <div class="d-flex flex-column justify-content-center">
            <h6 class="text-sm font-weight-normal mb-1">Main Site</h6>
            <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://multiversx.com/</p>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a class="dropdown-item border-radius-md" href="https://explorer.multiversx.com/" target="_blank">
        <div class="d-flex py-1">
          <div class="d-flex flex-column justify-content-center">
            <h6 class="text-sm font-weight-normal mb-1">Explorer</h6>
            <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://explorer.multiversx.com/</p>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a class="dropdown-item border-radius-md" href="https://ad-astra.multiversx.com/" target="_blank">
        <div class="d-flex py-1">
          <div class="d-flex flex-column justify-content-center">
            <h6 class="text-sm font-weight-normal mb-1">Bridge</h6>
            <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://ad-astra.multiversx.com/</p>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a class="dropdown-item border-radius-md" href="https://docs.multiversx.com/" target="_blank">
        <div class="d-flex py-1">
          <div class="d-flex flex-column justify-content-center">
            <h6 class="text-sm font-weight-normal mb-1">Docs</h6>
            <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://docs.multiversx.com/</p>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a class="dropdown-item border-radius-md" href="https://growth.elrond.com" target="_blank">
        <div class="d-flex py-1">
          <div class="d-flex flex-column justify-content-center">
            <h6 class="text-sm font-weight-normal mb-1">Growth</h6>
            <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://growth.elrond.com</p>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a class="dropdown-item border-radius-md" href="https://xportal.com/" target="_blank">
        <div class="d-flex py-1">
          <div class="d-flex flex-column justify-content-center">
            <h6 class="text-sm font-weight-normal mb-1">Maiar</h6>
            <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://xportal.com/</p>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a class="dropdown-item border-radius-md" href="https://xexchange.com/" target="_blank">
        <div class="d-flex py-1">
          <div class="d-flex flex-column justify-content-center">
            <h6 class="text-sm font-weight-normal mb-1">Maiar Exchange</h6>
            <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://xexchange.com/</p>
          </div>
        </div>
      </a>
    </li>
  </ul>
</div>
```
{% endtab %}

{% tab log React %}
```html
const multiversxLink = [
  { name: 'Main Site', link: 'https://multiversx.com/' },
  { name: 'Explorer', link: 'https://explorer.multiversx.com/' },
  { name: 'Bridge', link: 'https://ad-astra.multiversx.com/' },
  { name: 'Docs', link: 'https://docs.multiversx.com/' },
  { name: 'Growth', link: 'https://growth.elrond.com' },
  { name: 'Maiar', link: 'https://xportal.com/' },
  { name: 'Maiar Exchange', link: 'https://xexchange.com/' },
];

<div className="dropdown pe-2 d-flex align-items-center">
  <a
    href="javascript:;"
    className="btn btn-info btn-icon"
    id="dropdownMenuButton"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <span className="btn-inner--icon me-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        strokeWidth={2}
        height={18}
        width={18}
      >
        <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z" />
      </svg>
    </span>
    <span className="btn-inner--text">MultiversX links</span>
  </a>
  <ul
    className="dropdown-menu dropdown-menu-end  px-2 py-3 me-sm-n4"
    aria-labelledby="dropdownMenuButton"
  >
    {multiversxLink.map((data) => (
      <li key={data.name}>
        <a
          className="dropdown-item border-radius-md"
          href={data.link}
          target="_blank"
        >
          <div className="d-flex py-1">
            <div className="d-flex flex-column justify-content-center">
              <h6 className="text-sm font-weight-normal mb-1">
                {data.name}
              </h6>
              <p className="text-xs text-secondary d-flex align-items-center mb-0 ">
                {data.link}
              </p>
            </div>
          </div>
        </a>
      </li>
    ))}
  </ul>
</div>
```
{% endtab %}

{% endtabs %}
