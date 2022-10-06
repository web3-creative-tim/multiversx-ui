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
  {{ content }}

  {% include scripts.html %}
</body>
</html>
