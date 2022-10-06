---
title: Tables
layout: docs
description: View all tables examples
---
{% include edit-on-github.md %}


## Example

<div class="ct-example">

<div class="card shadow-xs border">
  <div class="card-header border-bottom pb-0">
    <div class="d-sm-flex align-items-center mb-3">
      <div>
        <h6 class="font-weight-semibold text-lg mb-0 no_toc">Recent transactions</h6>
        <p class="text-sm mb-sm-0 mb-2">These are details about the last transactions</p>
      </div>
      <div class="ms-auto d-flex w-50">
        <div class="input-group ms-auto w-40 me-3">
          <span class="input-group-text text-body">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
          </span>
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="button" class="btn btn-sm btn-primary btn-icon d-flex align-items-center mb-0">
          <span class="btn-inner--icon">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="d-block me-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
            </svg>
          </span>
          <span class="btn-inner--text">Download CSV</span>
        </button>
      </div>
    </div>
  </div>
  <div class="card-body px-0 py-0">
    <div class="table-responsive p-0">
      <table class="table align-items-center justify-content-center mb-0">
        <thead class="bg-gray-100">
          <tr>
            <th class="text-secondary text-xs font-weight-semibold opacity-7">Transaction</th>
            <th class="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Status</th>
            <th class="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Date</th>
            <th class="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Amount</th>
            <th class="text-center text-secondary text-xs font-weight-semibold opacity-7"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1qqqqqq...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">05/10/2022, 10:26:06</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1qqqqq...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">05/10/2022, 10:26:00</span>
            </td>
            <td class="d-flex align-items-center">27.3454 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1tdyls...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">05/10/2022, 10:23:42</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1tdyls5...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">05/10/2022, 10:22:42</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1qqqq...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">01/10/2022, 18:17:00</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Received from</span>
                    <span>erd1l99sts...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">30/09/2022, 11:17:42</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1tdyl...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">20/09/2022, 22:58:12</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1tdyl...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">15/09/2022, 13:22:30</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1qqqqq...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">12/09/2022, 23:32:54</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1qqqqq...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">12/09/2022, 23:30:48</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="card-footer">
    <ul class="pagination justify-content-end mb-0">
      <li class="page-item disabled">
        <a class="page-link font-weight-bold " tabindex="-1" role="button" aria-disabled="true" aria-label="Previous page" rel="prev">&lt;</a>
      </li>
      <li class="page-item active">
        <a rel="canonical" role="button" class="page-link font-weight-normal" tabindex="-1" aria-label="Page 1 is your current page" aria-current="page">1</a>
      </li>
      <li class="page-item">
        <a rel="next" role="button" class="page-link font-weight-normal" tabindex="0" aria-label="Page 2">2</a>
      </li>
      <li class="page-item">
        <a role="button" class="page-link font-weight-normal" tabindex="0" aria-label="Page 3">3</a>
      </li>
      <li class="page-item">
        <a class="page-link font-weight-bold" tabindex="0" role="button" aria-disabled="false" aria-label="Next page" rel="next">&gt;</a>
      </li>
    </ul>
  </div>
</div>

</div>

{% tabs log %}

{% tab log html %}
```html
<div class="card shadow-xs border">
  <div class="card-header border-bottom pb-0">
    <div class="d-sm-flex align-items-center mb-3">
      <div>
        <h6 class="font-weight-semibold text-lg mb-0 no_toc">Recent transactions</h6>
        <p class="text-sm mb-sm-0 mb-2">These are details about the last transactions</p>
      </div>
      <div class="ms-auto d-flex w-50">
        <div class="input-group ms-auto w-40 me-3">
          <span class="input-group-text text-body">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
          </span>
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="button" class="btn btn-sm btn-primary btn-icon d-flex align-items-center mb-0">
          <span class="btn-inner--icon">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="d-block me-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
            </svg>
          </span>
          <span class="btn-inner--text">Download CSV</span>
        </button>
      </div>
    </div>
  </div>
  <div class="card-body px-0 py-0">
    <div class="table-responsive p-0">
      <table class="table align-items-center justify-content-center mb-0">
        <thead class="bg-gray-100">
          <tr>
            <th class="text-secondary text-xs font-weight-semibold opacity-7">Transaction</th>
            <th class="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Status</th>
            <th class="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Date</th>
            <th class="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Amount</th>
            <th class="text-center text-secondary text-xs font-weight-semibold opacity-7"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1qqqqqq...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">05/10/2022, 10:26:06</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1qqqqq...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">05/10/2022, 10:26:00</span>
            </td>
            <td class="d-flex align-items-center">27.3454 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1tdyls...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">05/10/2022, 10:23:42</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1tdyls5...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">05/10/2022, 10:22:42</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1qqqq...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">01/10/2022, 18:17:00</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Received from</span>
                    <span>erd1l99sts...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">30/09/2022, 11:17:42</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1tdyl...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">20/09/2022, 22:58:12</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1tdyl...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">15/09/2022, 13:22:30</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1qqqqq...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">12/09/2022, 23:32:54</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width="18" height="18" class="me-2">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd"></path>
                </svg>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm no_toc">
                    <span class="font-weight-normal">Sent to</span>
                    <span>erd1qqqqq...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width="18" height="18">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                </svg>
              </p>
            </td>
            <td>
              <span class="text-sm font-weight-normal">12/09/2022, 23:30:48</span>
            </td>
            <td class="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width="13" alt="elrond" class="ms-2">
            </td>
            <td class="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width="18" height="18" class="ms-2">
                  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="card-footer">
    <ul class="pagination justify-content-end mb-0">
      <li class="page-item disabled">
        <a class="page-link font-weight-bold " tabindex="-1" role="button" aria-disabled="true" aria-label="Previous page" rel="prev">&lt;</a>
      </li>
      <li class="page-item active">
        <a rel="canonical" role="button" class="page-link font-weight-normal" tabindex="-1" aria-label="Page 1 is your current page" aria-current="page">1</a>
      </li>
      <li class="page-item">
        <a rel="next" role="button" class="page-link font-weight-normal" tabindex="0" aria-label="Page 2">2</a>
      </li>
      <li class="page-item">
        <a role="button" class="page-link font-weight-normal" tabindex="0" aria-label="Page 3">3</a>
      </li>
      <li class="page-item">
        <a class="page-link font-weight-bold" tabindex="0" role="button" aria-disabled="false" aria-label="Next page" rel="next">&gt;</a>
      </li>
    </ul>
  </div>
</div>
```
{% endtab %}

{% tab log React %}
```html
<div className="card shadow-xs border">
  <div className="card-header border-bottom pb-0">
    <div className="d-sm-flex align-items-center mb-3">
      <div>
        <h6 className="font-weight-semibold text-lg mb-0 no_toc">Recent transactions</h6>
        <p className="text-sm mb-sm-0 mb-2">These are details about the last transactions</p>
      </div>
      <div className="ms-auto d-flex w-50">
        <div className="input-group ms-auto w-40 me-3">
          <span className="input-group-text text-body">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </span>
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <button type="button" className="btn btn-sm btn-primary btn-icon d-flex align-items-center mb-0">
          <span className="btn-inner--icon">
            <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="d-block me-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </span>
          <span className="btn-inner--text">Download CSV</span>
        </button>
      </div>
    </div>
  </div>
  <div className="card-body px-0 py-0">
    <div className="table-responsive p-0">
      <table className="table align-items-center justify-content-center mb-0">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-secondary text-xs font-weight-semibold opacity-7">Transaction</th>
            <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Status</th>
            <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Date</th>
            <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Amount</th>
            <th className="text-center text-secondary text-xs font-weight-semibold opacity-7" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width={18} height={18} className="me-2">
                  <path fillRule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clipRule="evenodd" />
                </svg>
                <div className="my-auto">
                  <h6 className="mb-0 text-sm no_toc">
                    <span className="font-weight-normal">Sent to</span>
                    <span>erd1qqqqqq...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width={18} height={18}>
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </p>
            </td>
            <td>
              <span className="text-sm font-weight-normal">05/10/2022, 10:26:06</span>
            </td>
            <td className="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width={13} alt="elrond" className="ms-2" />
            </td>
            <td className="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width={18} height={18} className="ms-2">
                  <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" />
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width={18} height={18} className="me-2">
                  <path fillRule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clipRule="evenodd" />
                </svg>
                <div className="my-auto">
                  <h6 className="mb-0 text-sm no_toc">
                    <span className="font-weight-normal">Sent to</span>
                    <span>erd1qqqqq...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width={18} height={18}>
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </p>
            </td>
            <td>
              <span className="text-sm font-weight-normal">05/10/2022, 10:26:00</span>
            </td>
            <td className="d-flex align-items-center">27.3454 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width={13} alt="elrond" className="ms-2" />
            </td>
            <td className="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width={18} height={18} className="ms-2">
                  <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" />
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width={18} height={18} className="me-2">
                  <path fillRule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clipRule="evenodd" />
                </svg>
                <div className="my-auto">
                  <h6 className="mb-0 text-sm no_toc">
                    <span className="font-weight-normal">Sent to</span>
                    <span>erd1tdyls...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width={18} height={18}>
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </p>
            </td>
            <td>
              <span className="text-sm font-weight-normal">05/10/2022, 10:23:42</span>
            </td>
            <td className="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width={13} alt="elrond" className="ms-2" />
            </td>
            <td className="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width={18} height={18} className="ms-2">
                  <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" />
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width={18} height={18} className="me-2">
                  <path fillRule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clipRule="evenodd" />
                </svg>
                <div className="my-auto">
                  <h6 className="mb-0 text-sm no_toc">
                    <span className="font-weight-normal">Sent to</span>
                    <span>erd1tdyls5...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width={18} height={18}>
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </p>
            </td>
            <td>
              <span className="text-sm font-weight-normal">05/10/2022, 10:22:42</span>
            </td>
            <td className="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width={13} alt="elrond" className="ms-2" />
            </td>
            <td className="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width={18} height={18} className="ms-2">
                  <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" />
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width={18} height={18} className="me-2">
                  <path fillRule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clipRule="evenodd" />
                </svg>
                <div className="my-auto">
                  <h6 className="mb-0 text-sm no_toc">
                    <span className="font-weight-normal">Sent to</span>
                    <span>erd1qqqq...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width={18} height={18}>
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </p>
            </td>
            <td>
              <span className="text-sm font-weight-normal">01/10/2022, 18:17:00</span>
            </td>
            <td className="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width={13} alt="elrond" className="ms-2" />
            </td>
            <td className="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width={18} height={18} className="ms-2">
                  <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" />
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width={18} height={18} className="me-2">
                  <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
                <div className="my-auto">
                  <h6 className="mb-0 text-sm no_toc">
                    <span className="font-weight-normal">Received from</span>
                    <span>erd1l99sts...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width={18} height={18}>
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </p>
            </td>
            <td>
              <span className="text-sm font-weight-normal">30/09/2022, 11:17:42</span>
            </td>
            <td className="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width={13} alt="elrond" className="ms-2" />
            </td>
            <td className="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width={18} height={18} className="ms-2">
                  <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" />
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width={18} height={18} className="me-2">
                  <path fillRule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clipRule="evenodd" />
                </svg>
                <div className="my-auto">
                  <h6 className="mb-0 text-sm no_toc">
                    <span className="font-weight-normal">Sent to</span>
                    <span>erd1tdyl...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width={18} height={18}>
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </p>
            </td>
            <td>
              <span className="text-sm font-weight-normal">20/09/2022, 22:58:12</span>
            </td>
            <td className="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width={13} alt="elrond" className="ms-2" />
            </td>
            <td className="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width={18} height={18} className="ms-2">
                  <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" />
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width={18} height={18} className="me-2">
                  <path fillRule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clipRule="evenodd" />
                </svg>
                <div className="my-auto">
                  <h6 className="mb-0 text-sm no_toc">
                    <span className="font-weight-normal">Sent to</span>
                    <span>erd1tdyl...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width={18} height={18}>
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </p>
            </td>
            <td>
              <span className="text-sm font-weight-normal">15/09/2022, 13:22:30</span>
            </td>
            <td className="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width={13} alt="elrond" className="ms-2" />
            </td>
            <td className="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width={18} height={18} className="ms-2">
                  <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" />
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width={18} height={18} className="me-2">
                  <path fillRule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clipRule="evenodd" />
                </svg>
                <div className="my-auto">
                  <h6 className="mb-0 text-sm no_toc">
                    <span className="font-weight-normal">Sent to</span>
                    <span>erd1qqqqq...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width={18} height={18}>
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </p>
            </td>
            <td>
              <span className="text-sm font-weight-normal">12/09/2022, 23:32:54</span>
            </td>
            <td className="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width={13} alt="elrond" className="ms-2" />
            </td>
            <td className="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width={18} height={18} className="ms-2">
                  <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" />
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc3545" width={18} height={18} className="me-2">
                  <path fillRule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clipRule="evenodd" />
                </svg>
                <div className="my-auto">
                  <h6 className="mb-0 text-sm no_toc">
                    <span className="font-weight-normal">Sent to</span>
                    <span>erd1qqqqq...</span>
                  </h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-sm font-weight-normal mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12a366" width={18} height={18}>
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </p>
            </td>
            <td>
              <span className="text-sm font-weight-normal">12/09/2022, 23:30:48</span>
            </td>
            <td className="d-flex align-items-center">0 <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Elrond_logo.svg" width={13} alt="elrond" className="ms-2" />
            </td>
            <td className="align-middle">
              <a href="javascript:;" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b" width={18} height={18} className="ms-2">
                  <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" />
                </svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="card-footer">
    <ul className="pagination justify-content-end mb-0">
      <li className="page-item disabled">
        <a className="page-link font-weight-bold " tabIndex={-1} role="button" aria-disabled="true" aria-label="Previous page" rel="prev">&lt;</a>
      </li>
      <li className="page-item active">
        <a rel="canonical" role="button" className="page-link font-weight-normal" tabIndex={-1} aria-label="Page 1 is your current page" aria-current="page">1</a>
      </li>
      <li className="page-item">
        <a rel="next" role="button" className="page-link font-weight-normal" tabIndex={0} aria-label="Page 2">2</a>
      </li>
      <li className="page-item">
        <a role="button" className="page-link font-weight-normal" tabIndex={0} aria-label="Page 3">3</a>
      </li>
      <li className="page-item">
        <a className="page-link font-weight-bold" tabIndex={0} role="button" aria-disabled="false" aria-label="Next page" rel="next">&gt;</a>
      </li>
    </ul>
  </div>
</div>
```
{% endtab %}

{% endtabs %}
