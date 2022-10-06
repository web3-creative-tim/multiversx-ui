---
title:
---

{% include root.html %}
<!DOCTYPE html>
<html>
<head>
  {% include head.html %}
</head>

<body class="docs {% if site.bg_color %} {{ site.bg_color }} {% endif %}">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M256CF6"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  {% include docs/docs-navbar.html %}

  <div class="oblique position-absolute top-0 end-0 h-100 opacity-6">
    <div class="oblique-image bg-cover position-absolute fixed-top ms-n12 mt-n12 h-100 z-index-0" style="background-image:url('{{root}}assets/img/gradient.svg')"></div>
  </div>

  <div class="ct-docs-main-container">
    <div class="ct-docs-main-content-row">
      <div class="ct-docs-sidebar-col">
        {% include docs/docs-sidebar.html %}
      </div>

      {% if page.toc %}
      <div class="ct-docs-toc-col">
        {{ content | toc_only }}
      </div>
      {% endif %}

      <main class="ct-docs-content-col" role="main">
        <div class="ct-docs-page-title">
        <h1 class="ct-docs-page-h1-title" id="content">
          {{ page.title }}
        </h1>

          {% if page.authors %}
          <div class="avatar-group mt-3">
            {% assign authors = page.authors | split: "," %}
            {% for author in authors %}
            <img src="{{ root_img }}docs/{{ author | downcase }}.jpg" class="avatar avatar-sm" data-toggle="tooltip" data-title="{{ author }}">
            {% endfor %}
          </div>
          {% endif %}
        </div>
        <p class="ct-docs-page-title-lead">{{ page.description | smartify | flatify }}</p>

        <hr class="ct-docs-hr">
        {{ content }}

      </main>

    </div>

    <div class="ct-docs-main-footer-row">
      <div class="ct-docs-main-footer-blank-col">

      </div>

      <div class="ct-docs-main-footer-col">
        {% include pages/footer.md %}
      </div>

    </div>
  </div>

  {% include scripts.html %}

</body>
</html>
