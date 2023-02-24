---
title: Navbar
layout: docs
description: View all navbar examples
---
{% include edit-on-github.md %}


## Example

<div class="ct-example pt-0 px-0">

<nav class="navbar bg-slate-900 navbar-expand-lg flex-wrap top-0 px-0 py-0 mb-4">
  <div class="container py-2">
    <nav aria-label="breadcrumb">
      <div class="d-flex align-items-center">
        <span class="px-3 font-weight-bold text-lg text-white me-4">MultiversX | Wallet</span>
      </div>
    </nav>
    <ul class="navbar-nav d-none d-lg-flex">
      <li class="nav-item px-3 py-3 border-radius-sm bg-slate-800 d-flex align-items-center">
        <a href="javascript:;" class="nav-link text-white p-0">Dashboard</a>
      </li>
      <li class="nav-item px-3 py-3 border-radius-sm d-flex align-items-center">
        <a href="javascript:;" class="nav-link text-white p-0">Transactions</a>
      </li>
    </ul>
    <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
      <ul class="navbar-nav ms-md-auto justify-content-end">
        <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
          <a href="javascript:;" class="nav-link text-white p-0" id="iconNavbarSidenav">
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line bg-white"></i>
              <i class="sidenav-toggler-line bg-white"></i>
              <i class="sidenav-toggler-line bg-white"></i>
            </div>
          </a>
        </li>
        <li class="nav-item pe-3 d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18" height="18" stroke-width="2">
            <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z"></path>
          </svg>
          <a href="https://explorer.elrond.com/accounts/erd1pl6qehz29klj...klp7sywcs3kzr7h" class="text-white text-dark ms-1 text-sm text-decoration-underline" target="_blank">erd1pl6...s3kzr7h</a>
        </li>
        <li class="nav-item dropdown pe-2 d-flex align-items-center">
          <a href="javascript:;" class="nav-link p-0 text-body" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke-width="2" height="18" width="18">
              <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z"></path>
            </svg>
          </a>
          <ul class="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item border-radius-md" href="https://elrond.com" target="_blank">
                <div class="d-flex py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="text-sm font-weight-normal mb-1 no_toc">Main Site</h6>
                    <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://elrond.com</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item border-radius-md" href="https://explorer.elrond.com" target="_blank">
                <div class="d-flex py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="text-sm font-weight-normal mb-1 no_toc">Explorer</h6>
                    <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://explorer.elrond.com</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item border-radius-md" href="https://bridge.elrond.com" target="_blank">
                <div class="d-flex py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="text-sm font-weight-normal mb-1 no_toc">Bridge</h6>
                    <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://bridge.elrond.com</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item border-radius-md" href="https://docs.elrond.com" target="_blank">
                <div class="d-flex py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="text-sm font-weight-normal mb-1 no_toc">Docs</h6>
                    <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://docs.elrond.com</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item border-radius-md" href="https://growth.elrond.com" target="_blank">
                <div class="d-flex py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="text-sm font-weight-normal mb-1 no_toc">Growth</h6>
                    <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://growth.elrond.com</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item border-radius-md" href="https://maiar.com" target="_blank">
                <div class="d-flex py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="text-sm font-weight-normal mb-1 no_toc">Maiar</h6>
                    <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://maiar.com</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item border-radius-md" href="https://maiar.exchange" target="_blank">
                <div class="d-flex py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="text-sm font-weight-normal mb-1 no_toc">Maiar Exchange</h6>
                    <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://maiar.exchange</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item ps-2 d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" width="18" height="18">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path>
          </svg>
          <span class="ms-1 cursor-pointer text-white">Close</span>
        </li>
      </ul>
    </div>
  </div>
  <hr class="horizontal w-100 my-0 dark">
  <div class="container pb-3 pt-3">
    <ul class="navbar-nav d-none d-lg-flex">
      <li class="nav-item border-radius-sm px-3 py-3 d-flex align-items-center">
        <a href="javascript:;" class="nav-link text-white p-0">Stake</a>
      </li>
      <li class="nav-item border-radius-sm px-3 py-3 d-flex align-items-center">
        <a href="javascript:;" class="nav-link text-white p-0">Delegate (Legacy)</a>
      </li>
    </ul>
    <div class="ms-md-auto p-0 d-flex align-items-center justify-content-end w-sm-20">
      <ul class="navbar-nav d-none d-lg-flex">
        <li class="nav-item border-radius-sm px-3 py-3">
          <a href="javascript:;" class="nav-link d-flex align-items-center text-white p-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" class="me-1">
              <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
            </svg>Send </a>
        </li>
        <li class="nav-item border-radius-sm px-3 py-3 pe-0">
          <a href="javascript:;" class="nav-link d-flex align-items-center text-white p-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" class="me-1">
              <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd"></path>
            </svg>Receive </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>

{% tabs log %}

{% tab log html %}
```html
<nav class="navbar bg-slate-900 navbar-expand-lg flex-wrap top-0 px-0 py-0">
  <div class="container py-2">
    <nav aria-label="breadcrumb">
      <div class="d-flex align-items-center">
        <span class="px-3 font-weight-bold text-lg text-white me-4">MultiversX | Wallet</span>
      </div>
    </nav>
    <ul class="navbar-nav d-none d-lg-flex">
      <li class="nav-item px-3 py-3 border-radius-sm bg-slate-800 d-flex align-items-center">
        <a href="javascript:;" class="nav-link text-white p-0">Dashboard</a>
      </li>
      <li class="nav-item px-3 py-3 border-radius-sm d-flex align-items-center">
        <a href="javascript:;" class="nav-link text-white p-0">Transactions</a>
      </li>
    </ul>
    <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
      <ul class="navbar-nav ms-md-auto justify-content-end">
        <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
          <a href="javascript:;" class="nav-link text-white p-0" id="iconNavbarSidenav">
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line bg-white"></i>
              <i class="sidenav-toggler-line bg-white"></i>
              <i class="sidenav-toggler-line bg-white"></i>
            </div>
          </a>
        </li>
        <li class="nav-item pe-3 d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18" height="18" stroke-width="2">
            <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z"></path>
          </svg>
          <a href="https://explorer.elrond.com/accounts/erd1pl6qehz29klj...klp7sywcs3kzr7h" class="text-white text-dark ms-1 text-sm text-decoration-underline" target="_blank">erd1pl6...s3kzr7h</a>
        </li>
        <li class="nav-item dropdown pe-2 d-flex align-items-center">
          <a href="javascript:;" class="nav-link p-0 text-body" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke-width="2" height="18" width="18">
              <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z"></path>
            </svg>
          </a>
          <ul class="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item border-radius-md" href="https://elrond.com" target="_blank">
                <div class="d-flex py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="text-sm font-weight-normal mb-1">Main Site</h6>
                    <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://elrond.com</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item border-radius-md" href="https://explorer.elrond.com" target="_blank">
                <div class="d-flex py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="text-sm font-weight-normal mb-1">Explorer</h6>
                    <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://explorer.elrond.com</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item border-radius-md" href="https://bridge.elrond.com" target="_blank">
                <div class="d-flex py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="text-sm font-weight-normal mb-1">Bridge</h6>
                    <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://bridge.elrond.com</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item border-radius-md" href="https://docs.elrond.com" target="_blank">
                <div class="d-flex py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="text-sm font-weight-normal mb-1">Docs</h6>
                    <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://docs.elrond.com</p>
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
              <a class="dropdown-item border-radius-md" href="https://maiar.com" target="_blank">
                <div class="d-flex py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="text-sm font-weight-normal mb-1">Maiar</h6>
                    <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://maiar.com</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item border-radius-md" href="https://maiar.exchange" target="_blank">
                <div class="d-flex py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="text-sm font-weight-normal mb-1">Maiar Exchange</h6>
                    <p class="text-xs text-secondary d-flex align-items-center mb-0 ">https://maiar.exchange</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item ps-2 d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" width="18" height="18">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path>
          </svg>
          <span class="ms-1 cursor-pointer text-white">Close</span>
        </li>
      </ul>
    </div>
  </div>
  <hr class="horizontal w-100 my-0 dark">
  <div class="container pb-3 pt-3">
    <ul class="navbar-nav d-none d-lg-flex">
      <li class="nav-item border-radius-sm px-3 py-3 d-flex align-items-center">
        <a href="javascript:;" class="nav-link text-white p-0">Stake</a>
      </li>
      <li class="nav-item border-radius-sm px-3 py-3 d-flex align-items-center">
        <a href="javascript:;" class="nav-link text-white p-0">Delegate (Legacy)</a>
      </li>
    </ul>
    <div class="ms-md-auto p-0 d-flex align-items-center justify-content-end w-sm-20">
      <ul class="navbar-nav d-none d-lg-flex">
        <li class="nav-item border-radius-sm px-3 py-3">
          <a href="javascript:;" class="nav-link d-flex align-items-center text-white p-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" class="me-1">
              <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
            </svg>Send </a>
        </li>
        <li class="nav-item border-radius-sm px-3 py-3 pe-0">
          <a href="javascript:;" class="nav-link d-flex align-items-center text-white p-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" class="me-1">
              <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd"></path>
            </svg>Receive </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```
{% endtab %}

{% tab log React %}
```html
const elrondLink = [
  { name: 'Main Site', link: 'https://elrond.com' },
  { name: 'Explorer', link: 'https://explorer.elrond.com' },
  { name: 'Bridge', link: 'https://bridge.elrond.com' },
  { name: 'Docs', link: 'https://docs.elrond.com' },
  { name: 'Growth', link: 'https://growth.elrond.com' },
  { name: 'Maiar', link: 'https://maiar.com' },
  { name: 'Maiar Exchange', link: 'https://maiar.exchange' },
];

<nav className="navbar bg-slate-900 navbar-expand-lg flex-wrap top-0 px-0 py-0">
  <div className="container py-2">
    <nav aria-label="breadcrumb">
      <div className="d-flex align-items-center">
        <span className="px-3 font-weight-bold text-lg text-white me-4">
          Elrond | Wallet
        </span>
      </div>
    </nav>
    <ul className="navbar-nav d-none d-lg-flex">
      <li className="nav-item px-3 py-3 border-radius-sm bg-slate-800 d-flex align-items-center">
        <a
          href="javascript:;"
          className="nav-link text-white p-0"
        >
          Dashboard
        </a>
      </li>
      <li className="nav-item px-3 py-3 border-radius-sm  d-flex align-items-center">
        <a href="javascript:;" className="nav-link text-white p-0">
          Transactions
        </a>
      </li>
      <li className="nav-item px-3 py-3 border-radius-sm d-flex align-items-center">
        <a href="javascript:;" className="nav-link text-white p-0">
          Tokens
        </a>
      </li>
      <li className="nav-item px-3 py-3 border-radius-sm  d-flex align-items-center">
        <a href="javascript:;" className="nav-link text-white p-0">
          NFTs
        </a>
      </li>
      <li className="nav-item px-3 py-3 border-radius-sm  d-flex align-items-center">
        <a href="javascript:;" className="nav-link text-white p-0">
          Buy
        </a>
      </li>
    </ul>
    <div
      className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
      id="navbar"
    >
      <ul className="navbar-nav ms-md-auto  justify-content-end">
        <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
          <a
            href="javascript:;"
            className="nav-link text-white p-0"
            id="iconNavbarSidenav"
          >
            <div className="sidenav-toggler-inner">
              <i className="sidenav-toggler-line bg-white" />
              <i className="sidenav-toggler-line bg-white" />
              <i className="sidenav-toggler-line bg-white" />
            </div>
          </a>
        </li>
        <li className="nav-item pe-3 d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width={18}
            height={18}
            strokeWidth={2}
          >
            <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
          </svg>

          <a
            href="javascript:;"
            className="text-white text-dark ms-1 text-sm text-decoration-underline"
            target="_blank"
          >
            Adress
          </a>
        </li>
        <li className="nav-item dropdown pe-2 d-flex align-items-center">
          <a
            href="javascript:;"
            className="nav-link p-0 text-body"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
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
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end  px-2 py-3 me-sm-n4"
            aria-labelledby="dropdownMenuButton"
          >
            {elrondLink.map((data) => (
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
        </li>
        <li className="nav-item ps-2 d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            width={18}
            height={18}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>

          <span
            className="ms-1 cursor-pointer text-white"
            onClick={() => {
              logout({ callbackRoute: '/' });
            }}
          >
            Close
          </span>
        </li>
      </ul>
    </div>
  </div>
  <hr className="horizontal w-100 my-0 dark" />
  <div className="container pb-3 pt-3">
    <ul className="navbar-nav d-none d-lg-flex">
      <li className="nav-item border-radius-sm px-3 py-3  d-flex align-items-center">
        <a href="javascript:;" className="nav-link text-white p-0">
          Stake
        </a>
      </li>
      <li className="nav-item border-radius-sm px-3 py-3 d-flex align-items-center">
        <a href="javascript:;" className="nav-link text-white p-0">
          Delegate (Legacy)
        </a>
      </li>
      <li className="nav-item border-radius-sm px-3 py-3 d-flex align-items-center">
        <a href="javascript:;" className="nav-link text-white p-0">
          Validate
        </a>
      </li>
    </ul>
    <div className="ms-md-auto p-0 d-flex align-items-center justify-content-end w-sm-20">
      <ul className="navbar-nav d-none d-lg-flex">
        <li className="nav-item border-radius-sm px-3 py-3  d-flex align-items-center">
          <a
            href="javascript:;"
            className="nav-link text-white p-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width={18}
              height={18}
              className="me-1"
            >
              <path
                fillRule="evenodd"
                d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z"
                clipRule="evenodd"
              />
            </svg>
            Send
          </a>
        </li>
        <li className="nav-item border-radius-sm px-3 py-3 pe-0 d-flex align-items-center">
          <a
            href="javascript:;"
            className="nav-link text-white p-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width={18}
              height={18}
              className="me-1"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
            Receive
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```
{% endtab %}

{% endtabs %}
