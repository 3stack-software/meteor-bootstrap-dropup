bootstrap-dropup
================

Bootstrap menu's will open upwards if they're too close to the bottom of the page.

Only checks for dropdowns with the additional class `btn-group-dropup`.

Automatically computes the position of each `.dropdown.btn-group-dropup` menu on scroll [debounced],
and will add the `dropup` class if there's not enough room for the menu to open vertically.

Usage
----------------

Basic Usage:

```html
<div class="btn-group dropdown btn-group-dropup"> <!-- just add the btn-group-dropup class for magic to happen -->
  <a class="btn btn-default dropdown-toggle" href="#" data-toggle="dropdown">
    <i class="icon-plus"></i> Menu <span class="caret"></span>
  </a>
  <ul class="dropdown-menu">
    <li>
      <a href="#">Menu Item</a>
    </li>
  </ul>
</div>
```

Advanced (Performant):
If you happen to know the size of your menu (or how much room you want to give it), add 'data-menu="<HEIGHT>"' to the `dropup`
```html
<div class="btn-group dropdown btn-group-dropup" data-menu="125">
  <a class="btn btn-default dropdown-toggle" href="#" data-toggle="dropdown">
    <i class="icon-plus"></i> Menu <span class="caret"></span>
  </a>
  <ul class="dropdown-menu">
    <li>
      <a href="#">Menu Item</a>
    </li>
  </ul>
</div>
```
