---
title: Colors
layout: docs
description: Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.
---
{% include edit-on-github.md %}

## Primary colors

Our primary palette is comprised of neutrals, white, and blue. These colors are present across most touch points from marketing to product.

<div class="row">
  {% for item in site.data.theme.theme-colors %}
  <div class="col-lg-4 col-md-6">
    <div class="color-swatch">
        <div class="color-swatch-header bg-{{ item.name }}">
            <div class="pass-fail d-none">
                <div class="pass-fail-item-wrap">
                    <div class="pass-fail-item-group">
                        <div class="pass-fail-item">
                            <div class="example">A</div>
                            <div class="lozenge">Fail</div>
                        </div>
                    </div>
                    <div class="pass-fail-item-group">
                        <div class="pass-fail-item white small">
                            <div class="example">A</div>
                            <div class="lozenge">Pass</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="color-swatch-body">
          <div class="d-flex justify-content-center">
          {% for index in (1..9) %}
          <div class="w-10 p-2 bg-{{ item.name }} opacity-{{index}}"></div>
          {% endfor %}
          </div>
            <div class="prop-item-wrap">
                <div class="prop-item">
                    <div class="label">Name</div>
                    <div class="value">{{ item.name | capitalize }}</div>
                </div>
            </div>
            <div class="prop-item-wrap">
                <div class="prop-item">
                    <div class="label">Hex</div>
                    <div class="value">{{ item.hex }}</div>
                </div>
            </div>
        </div>
    </div>
  </div>
  {% endfor %}
</div>

## Light neutrals
Light neutrals are helpful for offsetting content in a primarily white layout without losing warmth and cleanliness, and are therefore often used as a background color for web components.


<table class="table table-colors">
    <tbody>
        {% for item in site.data.theme.theme-gray-colors %}
        <tr>
            <td>
                <div class="swatch" style="background-color: {{ item.hex }};"></div>
                {{ item.name | capitalize }}
            </td>
            <td>
                <div class="lozenge">Hex</div>
                {{ item.hex }}
            </td>
        </tr>
        {% endfor %}
    </tbody>
</table>
