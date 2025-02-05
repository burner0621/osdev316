---
id: Dropdown
section: components
subsection: menus
cssPrefix: pf-v5-c-dropdown
deprecated: true
---import './Dropdown.css'

## Examples

### Expanded

```html
<div class="pf-v5-c-dropdown pf-m-expanded">
  <button
    class="pf-v5-c-dropdown__toggle"
    id="dropdown-expanded-button"
    aria-expanded="true"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Expanded dropdown</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-expanded-button"
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>

```

### Collapsed

```html
<div class="pf-v5-c-dropdown">
  <button
    class="pf-v5-c-dropdown__toggle"
    id="dropdown-collapsed-button"
    aria-expanded="false"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Collapsed dropdown</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-collapsed-button"
    hidden
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>

```

### Disabled

```html
<div class="pf-v5-c-dropdown">
  <button
    class="pf-v5-c-dropdown__toggle"
    id="dropdown-disabled-button"
    aria-expanded="false"
    type="button"
    disabled
  >
    <span class="pf-v5-c-dropdown__toggle-text">Disabled dropdown</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-disabled-button"
    hidden
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>

```

### Aria disabled items

```html
<div class="pf-v5-c-dropdown pf-m-expanded">
  <button
    class="pf-v5-c-dropdown__toggle"
    id="dropdown-aria-disabled-items-button"
    aria-expanded="true"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Expanded dropdown</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-aria-disabled-items-button"
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-aria-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item pf-m-aria-disabled"
        role="menuitem"
        type="button"
        aria-disabled="true"
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>

```

### Kebab

```html
<div class="pf-v5-c-dropdown">
  <button
    class="pf-v5-c-dropdown__toggle pf-m-plain"
    id="dropdown-kebab-disabled-button"
    aria-expanded="false"
    type="button"
    disabled
    aria-label="Actions"
  >
    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-kebab-disabled-button"
    hidden
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown">
  <button
    class="pf-v5-c-dropdown__toggle pf-m-plain"
    id="dropdown-kebab-button"
    aria-expanded="false"
    type="button"
    aria-label="Actions"
  >
    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-kebab-button"
    hidden
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown pf-m-expanded">
  <button
    class="pf-v5-c-dropdown__toggle pf-m-plain"
    id="dropdown-kebab-expanded-button"
    aria-expanded="true"
    type="button"
    aria-label="Actions"
  >
    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-kebab-expanded-button"
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>

```

### Kebab align right

```html
<div class="pf-v5-c-dropdown pf-m-expanded">
  <button
    class="pf-v5-c-dropdown__toggle pf-m-plain"
    id="dropdown-kebab-align-right-button"
    aria-expanded="true"
    type="button"
    aria-label="Actions"
  >
    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu pf-m-align-right"
    aria-labelledby="dropdown-kebab-align-right-button"
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>

```

### Align right

```html
<div class="pf-v5-c-dropdown pf-m-expanded">
  <button
    class="pf-v5-c-dropdown__toggle"
    id="dropdown-align-right-button"
    aria-expanded="true"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Right</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu pf-m-align-right"
    aria-labelledby="dropdown-align-right-button"
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>

```

### Align on different breakpoint

```html
<div class="pf-v5-c-dropdown pf-m-expanded">
  <button
    class="pf-v5-c-dropdown__toggle"
    id="dropdown-align-on-different-breakpoint-button"
    aria-expanded="true"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Dropdown</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu pf-m-align-right-on-lg pf-m-align-left-on-2xl"
    aria-labelledby="dropdown-align-on-different-breakpoint-button"
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>

```

### Align top

```html
<div class="pf-v5-c-dropdown pf-m-top">
  <button
    class="pf-v5-c-dropdown__toggle"
    id="dropdown-align-top-button"
    aria-expanded="false"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Top</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-align-top-button"
    hidden
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown pf-m-expanded pf-m-top">
  <button
    class="pf-v5-c-dropdown__toggle"
    id="dropdown-align-top-expanded-button"
    aria-expanded="true"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Top</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-align-top-expanded-button"
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>

```

### Plain with text

```html
<div class="pf-v5-c-dropdown">
  <button
    class="pf-v5-c-dropdown__toggle pf-m-plain pf-m-text"
    id="plain-with-text-example-disabled-button"
    aria-expanded="false"
    type="button"
    disabled
  >
    <span class="pf-v5-c-dropdown__toggle-text">Custom text</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="plain-with-text-example-disabled-button"
    hidden
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>&nbsp;
<div class="pf-v5-c-dropdown">
  <button
    class="pf-v5-c-dropdown__toggle pf-m-plain pf-m-text"
    id="plain-with-text-example-button"
    aria-expanded="false"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Custom text</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="plain-with-text-example-button"
    hidden
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>&nbsp;
<div class="pf-v5-c-dropdown pf-m-expanded">
  <button
    class="pf-v5-c-dropdown__toggle pf-m-plain pf-m-text"
    id="plain-with-text-example-expanded-button"
    aria-expanded="true"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Custom text (expanded)</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="plain-with-text-example-expanded-button"
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>

```

### Badge toggle

```html
<div class="pf-v5-c-dropdown pf-m-expanded">
  <button
    class="pf-v5-c-dropdown__toggle pf-m-plain"
    id="dropdown-badge-toggle-button"
    aria-expanded="true"
    type="button"
  >
    <span class="pf-v5-c-badge pf-m-read">
      5
      <span class="pf-v5-c-dropdown__toggle-icon">
        <i class="fas fa-caret-down" aria-hidden="true"></i>
      </span>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-badge-toggle-button"
    role="menu"
  >
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Edit</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Deployment</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Application</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Count</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Application 1</button>
    </li>
  </ul>
</div>

```

### Menu item icons

```html
<div class="pf-v5-c-dropdown pf-m-expanded">
  <button
    class="pf-v5-c-dropdown__toggle"
    id="dropdown-menu-item-icons-button"
    aria-expanded="true"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Expanded dropdown</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-menu-item-icons-button"
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item pf-m-icon" role="menuitem" href="#">
        <span class="pf-v5-c-dropdown__menu-item-icon">
          <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
        </span>
        Link
      </a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item pf-m-icon"
        role="menuitem"
        type="button"
      >
        <span class="pf-v5-c-dropdown__menu-item-icon">
          <i class="fas fa-cog" aria-hidden="true"></i>
        </span>
        Action
      </button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>

```

### Split button (checkbox)

```html
<div class="pf-v5-c-dropdown">
  <div class="pf-v5-c-dropdown__toggle pf-m-disabled pf-m-split-button">
    <label
      class="pf-v5-c-dropdown__toggle-check"
      for="dropdown-split-button-disabled-toggle-check"
    >
      <div class="pf-v5-c-check pf-m-standalone">
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          disabled
          id="dropdown-split-button-disabled-toggle-check"
          aria-label="Select all"
        />
      </div>
    </label>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="false"
      id="dropdown-split-button-disabled-toggle-button"
      aria-label="Dropdown toggle"
      disabled
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" hidden role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Actions</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Other action</button>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown">
  <div class="pf-v5-c-dropdown__toggle pf-m-split-button">
    <label
      class="pf-v5-c-dropdown__toggle-check"
      for="dropdown-split-button-toggle-check"
    >
      <div class="pf-v5-c-check pf-m-standalone">
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="dropdown-split-button-toggle-check"
          aria-label="Select all"
        />
      </div>
    </label>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="false"
      id="dropdown-split-button-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" hidden role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Actions</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Other action</button>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown pf-m-expanded">
  <div class="pf-v5-c-dropdown__toggle pf-m-split-button">
    <label
      class="pf-v5-c-dropdown__toggle-check"
      for="dropdown-split-button-expanded-toggle-check"
    >
      <div class="pf-v5-c-check pf-m-standalone">
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="dropdown-split-button-expanded-toggle-check"
          aria-label="Select all"
        />
      </div>
    </label>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="true"
      id="dropdown-split-button-expanded-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Actions</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Other action</button>
    </li>
  </ul>
</div>

```

### Split button (checkbox with toggle text)

```html
<div class="pf-v5-c-dropdown">
  <div class="pf-v5-c-dropdown__toggle pf-m-split-button">
    <label
      class="pf-v5-c-dropdown__toggle-check"
      for="dropdown-split-button-text-toggle-check"
    >
      <div class="pf-v5-c-check pf-m-standalone">
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          checked
          id="dropdown-split-button-text-toggle-check"
          aria-label="Select all"
          aria-labelledby="dropdown-split-button-text-toggle-check dropdown-split-button-text-toggle-check-text"
        />
      </div>
      <span
        class="pf-v5-c-dropdown__toggle-text"
        aria-hidden="true"
        id="dropdown-split-button-text-toggle-check-text"
      >10 selected</span>
    </label>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="false"
      id="dropdown-split-button-text-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" hidden role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Select all</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Select none</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Other action</button>
    </li>
  </ul>
</div>

```

### Split button (progress checkbox)

```html
<div class="pf-v5-c-dropdown">
  <div class="pf-v5-c-dropdown__toggle pf-m-split-button">
    <label
      class="pf-v5-c-dropdown__toggle-check"
      for="dropdown-split-button-progress-toggle-check"
    >
      <div class="pf-v5-c-check pf-m-standalone">
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="dropdown-split-button-progress-toggle-check"
          aria-label="Select all"
        />
      </div>
      <span class="pf-v5-c-dropdown__toggle-progress">
        <svg class="pf-v5-c-spinner" role="progressbar" viewBox="0 0 100 100">
          <circle
            class="pf-v5-c-spinner__path"
            cx="50"
            cy="50"
            r="45"
            fill="none"
          />
        </svg>
      </span>
    </label>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="false"
      id="dropdown-split-button-progress-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" hidden role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Actions</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Other action</button>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown">
  <div class="pf-v5-c-dropdown__toggle pf-m-split-button">
    <label
      class="pf-v5-c-dropdown__toggle-check pf-m-in-progress"
      for="dropdown-split-button-in-progress-toggle-check"
    >
      <div class="pf-v5-c-check pf-m-standalone">
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          disabled
          id="dropdown-split-button-in-progress-toggle-check"
          aria-label="Select all"
        />
      </div>
      <span class="pf-v5-c-dropdown__toggle-progress">
        <svg class="pf-v5-c-spinner" role="progressbar" viewBox="0 0 100 100">
          <circle
            class="pf-v5-c-spinner__path"
            cx="50"
            cy="50"
            r="45"
            fill="none"
          />
        </svg>
      </span>
    </label>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="false"
      id="dropdown-split-button-in-progress-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" hidden role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Actions</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Other action</button>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown">
  <div class="pf-v5-c-dropdown__toggle pf-m-split-button">
    <label
      class="pf-v5-c-dropdown__toggle-check"
      for="dropdown-split-button-progress-text-toggle-check"
    >
      <div class="pf-v5-c-check pf-m-standalone">
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          checked
          id="dropdown-split-button-progress-text-toggle-check"
          aria-label="Select all"
          aria-labelledby="dropdown-split-button-progress-text-toggle-check dropdown-split-button-progress-text-toggle-check-text"
        />
      </div>
      <span class="pf-v5-c-dropdown__toggle-progress">
        <svg class="pf-v5-c-spinner" role="progressbar" viewBox="0 0 100 100">
          <circle
            class="pf-v5-c-spinner__path"
            cx="50"
            cy="50"
            r="45"
            fill="none"
          />
        </svg>
      </span>
      <span
        class="pf-v5-c-dropdown__toggle-text"
        aria-hidden="true"
        id="dropdown-split-button-progress-text-toggle-check-text"
      >10 selected</span>
    </label>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="false"
      id="dropdown-split-button-progress-text-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" hidden role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Select all</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Select none</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Other action</button>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown">
  <div class="pf-v5-c-dropdown__toggle pf-m-split-button">
    <label
      class="pf-v5-c-dropdown__toggle-check pf-m-in-progress"
      for="dropdown-split-button-in-progress-text-toggle-check"
    >
      <div class="pf-v5-c-check pf-m-standalone">
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          checked
          disabled
          id="dropdown-split-button-in-progress-text-toggle-check"
          aria-label="Select all"
          aria-labelledby="dropdown-split-button-in-progress-text-toggle-check dropdown-split-button-in-progress-text-toggle-check-text"
        />
      </div>
      <span class="pf-v5-c-dropdown__toggle-progress">
        <svg class="pf-v5-c-spinner" role="progressbar" viewBox="0 0 100 100">
          <circle
            class="pf-v5-c-spinner__path"
            cx="50"
            cy="50"
            r="45"
            fill="none"
          />
        </svg>
      </span>
      <span
        class="pf-v5-c-dropdown__toggle-text"
        aria-hidden="true"
        id="dropdown-split-button-in-progress-text-toggle-check-text"
      >10 selected</span>
    </label>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="false"
      id="dropdown-split-button-in-progress-text-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" hidden role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Select all</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Select none</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Other action</button>
    </li>
  </ul>
</div>

```

### Split button (action)

```html
<div class="pf-v5-c-dropdown">
  <div class="pf-v5-c-dropdown__toggle pf-m-split-button pf-m-action">
    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-label="Dropdown toggle"
    >Action</button>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="false"
      id="dropdown-split-button-action-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" hidden role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Actions</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Other action</button>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown pf-m-expanded">
  <div class="pf-v5-c-dropdown__toggle pf-m-split-button pf-m-action">
    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-label="Dropdown toggle"
    >Action</button>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="true"
      id="dropdown-split-button-action-expanded-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Actions</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Other action</button>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown">
  <div class="pf-v5-c-dropdown__toggle pf-m-split-button pf-m-action">
    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-label="Settings"
    >
      <i class="fas fa-cog" aria-hidden="true"></i>
    </button>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="false"
      id="dropdown-split-button-action-icon-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" hidden role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Actions</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Other action</button>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown pf-m-expanded">
  <div class="pf-v5-c-dropdown__toggle pf-m-split-button pf-m-action">
    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-label="Settings"
    >
      <i class="fas fa-cog" aria-hidden="true"></i>
    </button>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="true"
      id="dropdown-split-button-action-icon-expanded-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item pf-m-icon"
        role="menuitem"
        type="button"
      >
        <span class="pf-v5-c-dropdown__menu-item-icon">
          <i class="fas fa-cog" aria-hidden="true"></i>
        </span>
        Actions
      </button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item pf-m-icon"
        role="menuitem"
        type="button"
        disabled
      >
        <span class="pf-v5-c-dropdown__menu-item-icon">
          <i class="fas fa-bell" aria-hidden="true"></i>
        </span>
        Disabled action
      </button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item pf-m-icon"
        role="menuitem"
        type="button"
      >
        <span class="pf-v5-c-dropdown__menu-item-icon">
          <i class="fas fa-cubes" aria-hidden="true"></i>
        </span>
        Other action
      </button>
    </li>
  </ul>
</div>

```

### Split button, primary (action)

```html
<div class="pf-v5-c-dropdown">
  <div
    class="pf-v5-c-dropdown__toggle pf-m-primary pf-m-split-button pf-m-action"
  >
    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-label="Dropdown toggle"
    >Action</button>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="false"
      id="dropdown-split-button-action-primary-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" hidden role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Actions</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Other action</button>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown pf-m-expanded">
  <div
    class="pf-v5-c-dropdown__toggle pf-m-primary pf-m-split-button pf-m-action"
  >
    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-label="Dropdown toggle"
    >Action</button>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="true"
      id="dropdown-split-button-action-primary-expanded-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Actions</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Other action</button>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown">
  <div
    class="pf-v5-c-dropdown__toggle pf-m-primary pf-m-split-button pf-m-action"
  >
    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-label="Settings"
    >
      <i class="fas fa-cog" aria-hidden="true"></i>
    </button>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="false"
      id="dropdown-split-button-action-primary-icon-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" hidden role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Actions</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Other action</button>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown pf-m-expanded">
  <div
    class="pf-v5-c-dropdown__toggle pf-m-primary pf-m-split-button pf-m-action"
  >
    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-label="Settings"
    >
      <i class="fas fa-cog" aria-hidden="true"></i>
    </button>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="true"
      id="dropdown-split-button-action-primary-icon-expanded-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item pf-m-icon"
        role="menuitem"
        type="button"
      >
        <span class="pf-v5-c-dropdown__menu-item-icon">
          <i class="fas fa-cog" aria-hidden="true"></i>
        </span>
        Actions
      </button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item pf-m-icon"
        role="menuitem"
        type="button"
        disabled
      >
        <span class="pf-v5-c-dropdown__menu-item-icon">
          <i class="fas fa-bell" aria-hidden="true"></i>
        </span>
        Disabled action
      </button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item pf-m-icon"
        role="menuitem"
        type="button"
      >
        <span class="pf-v5-c-dropdown__menu-item-icon">
          <i class="fas fa-cubes" aria-hidden="true"></i>
        </span>
        Other action
      </button>
    </li>
  </ul>
</div>

```

### Split button, secondary (action)

```html
<div class="pf-v5-c-dropdown">
  <div
    class="pf-v5-c-dropdown__toggle pf-m-secondary pf-m-split-button pf-m-action"
  >
    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-label="Dropdown toggle"
    >Action</button>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="false"
      id="dropdown-split-button-action-secondary-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" hidden role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Actions</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Other action</button>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown pf-m-expanded">
  <div
    class="pf-v5-c-dropdown__toggle pf-m-secondary pf-m-split-button pf-m-action"
  >
    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-label="Dropdown toggle"
    >Action</button>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="true"
      id="dropdown-split-button-action-secondary-expanded-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Actions</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Other action</button>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown">
  <div
    class="pf-v5-c-dropdown__toggle pf-m-secondary pf-m-split-button pf-m-action"
  >
    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-label="Settings"
    >
      <i class="fas fa-cog" aria-hidden="true"></i>
    </button>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="false"
      id="dropdown-split-button-action-secondary-icon-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" hidden role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Actions</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Other action</button>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown pf-m-expanded">
  <div
    class="pf-v5-c-dropdown__toggle pf-m-secondary pf-m-split-button pf-m-action"
  >
    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-label="Settings"
    >
      <i class="fas fa-cog" aria-hidden="true"></i>
    </button>

    <button
      class="pf-v5-c-dropdown__toggle-button"
      type="button"
      aria-expanded="true"
      id="dropdown-split-button-action-secondary-icon-expanded-toggle-button"
      aria-label="Dropdown toggle"
    >
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-v5-c-dropdown__menu" role="menu">
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item pf-m-icon"
        role="menuitem"
        type="button"
      >
        <span class="pf-v5-c-dropdown__menu-item-icon">
          <i class="fas fa-cog" aria-hidden="true"></i>
        </span>
        Actions
      </button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item pf-m-icon"
        role="menuitem"
        type="button"
        disabled
      >
        <span class="pf-v5-c-dropdown__menu-item-icon">
          <i class="fas fa-bell" aria-hidden="true"></i>
        </span>
        Disabled action
      </button>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item pf-m-icon"
        role="menuitem"
        type="button"
      >
        <span class="pf-v5-c-dropdown__menu-item-icon">
          <i class="fas fa-cubes" aria-hidden="true"></i>
        </span>
        Other action
      </button>
    </li>
  </ul>
</div>

```

### With groups

```html
<div class="pf-v5-c-dropdown pf-m-expanded">
  <button
    class="pf-v5-c-dropdown__toggle"
    id="dropdown-groups-button"
    aria-expanded="true"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Groups</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v5-c-dropdown__menu" role="menu">
    <section class="pf-v5-c-dropdown__group">
      <ul role="none">
        <li role="none">
          <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
        </li>
        <li role="none">
          <button
            class="pf-v5-c-dropdown__menu-item"
            role="menuitem"
            type="button"
          >Action</button>
        </li>
      </ul>
    </section>
    <section class="pf-v5-c-dropdown__group">
      <h1 class="pf-v5-c-dropdown__group-title">Group 2</h1>
      <ul role="none">
        <li role="none">
          <a
            class="pf-v5-c-dropdown__menu-item"
            role="menuitem"
            href="#"
          >Group 2 link</a>
        </li>
        <li role="none">
          <button
            class="pf-v5-c-dropdown__menu-item"
            role="menuitem"
            type="button"
          >Group 2 action</button>
        </li>
      </ul>
    </section>
    <section class="pf-v5-c-dropdown__group">
      <h1 class="pf-v5-c-dropdown__group-title">Group 3</h1>
      <ul role="none">
        <li role="none">
          <a
            class="pf-v5-c-dropdown__menu-item"
            role="menuitem"
            href="#"
          >Group 3 link</a>
        </li>
        <li role="none">
          <button
            class="pf-v5-c-dropdown__menu-item"
            role="menuitem"
            type="button"
          >Group 3 action</button>
        </li>
      </ul>
    </section>
  </div>
</div>

```

### With groups and dividers between groups

```html
<div class="pf-v5-c-dropdown pf-m-expanded">
  <button
    class="pf-v5-c-dropdown__toggle"
    id="dropdown-groups-and-dividers-between-groups-button"
    aria-expanded="true"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Groups</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v5-c-dropdown__menu" role="menu">
    <section class="pf-v5-c-dropdown__group">
      <ul role="none">
        <li role="none">
          <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
        </li>
        <li role="none">
          <button
            class="pf-v5-c-dropdown__menu-item"
            role="menuitem"
            type="button"
          >Action</button>
        </li>
      </ul>
    </section>
    <hr class="pf-v5-c-divider" />
    <section class="pf-v5-c-dropdown__group">
      <h1 class="pf-v5-c-dropdown__group-title">Group 2</h1>
      <ul role="none">
        <li role="none">
          <a
            class="pf-v5-c-dropdown__menu-item"
            role="menuitem"
            href="#"
          >Group 2 link</a>
        </li>
        <li role="none">
          <button
            class="pf-v5-c-dropdown__menu-item"
            role="menuitem"
            type="button"
          >Group 2 action</button>
        </li>
      </ul>
    </section>
    <hr class="pf-v5-c-divider" />
    <section class="pf-v5-c-dropdown__group">
      <h1 class="pf-v5-c-dropdown__group-title">Group 3</h1>
      <ul role="none">
        <li role="none">
          <a
            class="pf-v5-c-dropdown__menu-item"
            role="menuitem"
            href="#"
          >Group 3 link</a>
        </li>
        <li role="none">
          <button
            class="pf-v5-c-dropdown__menu-item"
            role="menuitem"
            type="button"
          >Group 3 action</button>
        </li>
      </ul>
    </section>
  </div>
</div>

```

### With groups and dividers between items

```html
<div class="pf-v5-c-dropdown pf-m-expanded">
  <button
    class="pf-v5-c-dropdown__toggle"
    id="dropdown-groups-and-dividers-between-items-button"
    aria-expanded="true"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Groups</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v5-c-dropdown__menu" role="menu">
    <section class="pf-v5-c-dropdown__group">
      <ul role="none">
        <li role="none">
          <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
        </li>
        <li class="pf-v5-c-divider" role="separator"></li>
        <li role="none">
          <button
            class="pf-v5-c-dropdown__menu-item"
            role="menuitem"
            type="button"
          >Action</button>
        </li>
      </ul>
    </section>
    <section class="pf-v5-c-dropdown__group">
      <h1 class="pf-v5-c-dropdown__group-title">Group 2</h1>
      <ul role="none">
        <li role="none">
          <a
            class="pf-v5-c-dropdown__menu-item"
            role="menuitem"
            href="#"
          >Group 2 link</a>
        </li>
        <li class="pf-v5-c-divider" role="separator"></li>
        <li role="none">
          <button
            class="pf-v5-c-dropdown__menu-item"
            role="menuitem"
            type="button"
          >Group 2 action</button>
        </li>
      </ul>
    </section>
    <section class="pf-v5-c-dropdown__group">
      <h1 class="pf-v5-c-dropdown__group-title">Group 3</h1>
      <ul role="none">
        <li role="none">
          <a
            class="pf-v5-c-dropdown__menu-item"
            role="menuitem"
            href="#"
          >Group 3 link</a>
        </li>
        <li class="pf-v5-c-divider" role="separator"></li>
        <li role="none">
          <button
            class="pf-v5-c-dropdown__menu-item"
            role="menuitem"
            type="button"
          >Group 3 action</button>
        </li>
      </ul>
    </section>
  </div>
</div>

```

### Panel

```html
<div class="pf-v5-c-dropdown pf-m-expanded">
  <button
    class="pf-v5-c-dropdown__toggle"
    id="dropdown-panel-button"
    aria-expanded="true"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Expanded dropdown</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v5-c-dropdown__menu">[Panel contents here]</div>
</div>

```

The dropdown panel is provided for flexibility in allowing various content within a dropdown.

### Primary toggle

```html
<div class="pf-v5-c-dropdown">
  <button
    class="pf-v5-c-dropdown__toggle pf-m-primary"
    id="dropdown-primary-toggle-button"
    aria-expanded="false"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Collapsed dropdown</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-primary-toggle-button"
    hidden
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown pf-m-expanded">
  <button
    class="pf-v5-c-dropdown__toggle pf-m-primary"
    id="dropdown-primary-toggle-expanded-button"
    aria-expanded="true"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Expanded dropdown</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-primary-toggle-expanded-button"
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown">
  <button
    class="pf-v5-c-dropdown__toggle pf-m-primary"
    id="dropdown-primary-toggle-disabled-button"
    aria-expanded="false"
    type="button"
    disabled
  >
    <span class="pf-v5-c-dropdown__toggle-text">Disabled</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-primary-toggle-disabled-button"
    hidden
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>

```

### Secondary toggle

```html
<div class="pf-v5-c-dropdown">
  <button
    class="pf-v5-c-dropdown__toggle pf-m-secondary"
    id="dropdown-secondary-toggle-button"
    aria-expanded="false"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Collapsed dropdown</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-secondary-toggle-button"
    hidden
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown pf-m-expanded">
  <button
    class="pf-v5-c-dropdown__toggle pf-m-secondary"
    id="dropdown-secondary-toggle-expanded-button"
    aria-expanded="true"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Expanded dropdown</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-secondary-toggle-expanded-button"
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>
<div class="pf-v5-c-dropdown">
  <button
    class="pf-v5-c-dropdown__toggle pf-m-secondary"
    id="dropdown-secondary-toggle-disabled-button"
    aria-expanded="false"
    type="button"
    disabled
  >
    <span class="pf-v5-c-dropdown__toggle-text">Disabled</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-secondary-toggle-disabled-button"
    hidden
    role="menu"
  >
    <li role="none">
      <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
      >Action</button>
    </li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
        role="menuitem"
        href="#"
        aria-disabled="true"
        tabindex="-1"
      >Disabled link</a>
    </li>
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        type="button"
        disabled
      >Disabled action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item"
        role="menuitem"
        href="#"
      >Separated link</a>
    </li>
  </ul>
</div>

```

### Dropdown with image and text

```html
<div class="pf-v5-c-dropdown pf-m-expanded">
  <button
    class="pf-v5-c-dropdown__toggle"
    id="dropdown-with-image-and-text-example-button"
    aria-expanded="true"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-image">
      <img
        class="pf-v5-c-avatar"
        alt="Avatar image"
        src="/assets/images/img_avatar-light.svg"
      />
    </span>
    <span class="pf-v5-c-dropdown__toggle-text">Ned Username</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v5-c-dropdown__menu" role="menu">
    <section class="pf-v5-c-dropdown__group">
      <div class="pf-v5-c-dropdown__menu-item pf-m-text" role="menuitem">Text</div>
      <div
        class="pf-v5-c-dropdown__menu-item pf-m-text"
        role="menuitem"
      >More text</div>
    </section>
    <hr class="pf-v5-c-divider" />
    <section class="pf-v5-c-dropdown__group">
      <ul role="none">
        <li role="none">
          <a
            class="pf-v5-c-dropdown__menu-item"
            role="menuitem"
            href="#"
          >My profile</a>
        </li>
        <li role="none">
          <a
            class="pf-v5-c-dropdown__menu-item"
            role="menuitem"
            href="#"
          >User management</a>
        </li>
        <li role="none">
          <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Logout</a>
        </li>
      </ul>
    </section>
  </div>
</div>

```

### Dropdown with description

```html
<div class="pf-v5-c-dropdown pf-m-expanded">
  <button
    class="pf-v5-c-dropdown__toggle"
    id="dropdown-with-description-button"
    aria-expanded="true"
    type="button"
  >
    <span class="pf-v5-c-dropdown__toggle-text">Expanded dropdown</span>
    <span class="pf-v5-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul
    class="pf-v5-c-dropdown__menu"
    aria-labelledby="dropdown-with-description-button"
    role="menu"
  >
    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item pf-m-description"
        role="menuitem"
        type="button"
      >
        <div class="pf-v5-c-dropdown__menu-item-main">Menu item default</div>
        <div
          class="pf-v5-c-dropdown__menu-item-description"
        >This is a description</div>
      </button>
    </li>

    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item pf-m-description"
        role="menuitem"
        type="button"
      >
        <div
          class="pf-v5-c-dropdown__menu-item-main"
        >Menu item with long description</div>
        <div
          class="pf-v5-c-dropdown__menu-item-description"
        >This is a really long description that describes the menu item.</div>
      </button>
    </li>

    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item pf-m-description"
        role="menuitem"
        type="button"
        disabled
      >
        <div class="pf-v5-c-dropdown__menu-item-main">Menu item disabled</div>
        <div
          class="pf-v5-c-dropdown__menu-item-description"
        >This is a description</div>
      </button>
    </li>

    <li role="none">
      <a
        class="pf-v5-c-dropdown__menu-item pf-m-icon pf-m-description"
        role="menuitem"
        href="#"
      >
        <div class="pf-v5-c-dropdown__menu-item-main">
          <span class="pf-v5-c-dropdown__menu-item-icon">
            <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
          </span>
          Link
        </div>
        <div
          class="pf-v5-c-dropdown__menu-item-description"
        >This is a description</div>
      </a>
    </li>

    <li role="none">
      <button
        class="pf-v5-c-dropdown__menu-item pf-m-icon pf-m-description"
        role="menuitem"
        type="button"
      >
        <div class="pf-v5-c-dropdown__menu-item-main">
          <span class="pf-v5-c-dropdown__menu-item-icon">
            <i class="fas fa-cog" aria-hidden="true"></i>
          </span>
          Action
        </div>
        <div
          class="pf-v5-c-dropdown__menu-item-description"
        >This is a description</div>
      </button>
    </li>
  </ul>
</div>

```

## Documentation

### Overview

The dropdown menu can contain either links or buttons, depending on the expected behavior when clicking the menu item. If you are using the menu item to navigate to another page, then menu item is a link. Otherwise, use a button for the menu item.

### Accessibility

| Attribute | Applied | Outcome |
| -- | -- | -- |
| `aria-expanded="false"` | `.pf-v5-c-dropdown__toggle`, `.pf-v5-c-dropdown__toggle-check`, `.pf-v5-c-dropdown__toggle-button` |  Indicates that the menu is hidden. |
| `aria-expanded="true"` | `.pf-v5-c-dropdown__toggle`, `.pf-v5-c-dropdown__toggle-check`, `.pf-v5-c-dropdown__toggle-button` |  Indicates that the menu is visible. |
| `aria-label="Actions"` | `.pf-v5-c-dropdown__toggle`, `.pf-v5-c-dropdown__toggle-check`, `.pf-v5-c-dropdown__toggle-button` | Provides an accessible name for the dropdown when an icon is used instead of text. **Required when icon is used with no supporting text**. |
| `aria-hidden="true"` | `.pf-v5-c-dropdown__toggle-icon`, `<i>`, `.pf-v5-c-dropdown__toggle-check .pf-v5-c-dropdown__toggle-text` | Hides the icon from assistive technologies. |
| `hidden` | `.pf-v5-c-dropdown__menu` | Indicates that the menu is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `aria-labelledby="{toggle button id}"` | `.pf-v5-c-dropdown__menu` | Gives the menu an accessible name by referring to the element that toggles the menu. |
| `aria-labelledby="{checkbox id} {toggle text id}"` | `.pf-m-split-button .pf-v5-c-dropdown__toggle-check > input[type="checkbox"]` | Gives the checkbox an accessible name by referring to the element by which it is described. |
| `disabled` | `.pf-v5-c-dropdown__toggle`, `.pf-v5-c-dropdown__toggle-button`, `.pf-v5-c-dropdown__toggle-check > input[type="checkbox"]` | Disables the dropdown toggle and removes it from keyboard focus. |
| `disabled` | `button.pf-v5-c-dropdown__menu-item` | When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus. |
| `aria-disabled="true"` | `a.pf-v5-c-dropdown__menu-item` | When the menu item uses a link element, indicates that it is unavailable. |
| `tabindex="-1"` | `a.pf-v5-c-dropdown__menu-item` | When the menu item uses a link element, removes it from keyboard focus. |

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v5-c-dropdown` | `<div>` | Defines the parent wrapper of the dropdown. |
| `.pf-v5-c-dropdown__toggle` | `<button>` | Defines the dropdown toggle. |
| `.pf-v5-c-dropdown__toggle-icon` | `<span>` | Defines the dropdown toggle icon. |
| `.pf-v5-c-dropdown__toggle-text` | `<span>` | Defines the dropdown toggle text. **Required when text is present, adds truncation**. |
| `.pf-v5-c-dropdown__toggle-check` | `<label>` | Defines a checkbox in the toggle area of a split button dropdown. |
| `.pf-v5-c-dropdown__toggle-button` | `<button>` | Defines the toggle button for a split button dropdown. |
| `.pf-v5-c-dropdown__toggle-progress` | `<span>` | Defines the progress element to indicate a dropdown action is in progress. |
| `.pf-v5-c-dropdown__menu` | `<ul>`, `<div>` | Defines the parent wrapper of the menu items. |
| `.pf-v5-c-dropdown__menu-item` | `<a>` | Defines a menu item that navigates to another page. |
| `.pf-v5-c-dropdown__menu-item-icon` | `<span>` | Defines the wrapper for the menu item icon. |
| `.pf-v5-c-dropdown__menu-item-description` | `<div>` | Defines the wrapper for the menu item description. |
| `.pf-v5-c-dropdown__menu-item-main` | `<div>` | Defines the wrapper for the menu item main element. Use when the description element is present. |
| `.pf-v5-c-dropdown__toggle-image` | `<span>` | Defines the wrapper for the dropdown toggle button image. |
| `.pf-v5-c-dropdown__menu-item` | `<button>` | Defines a menu item that performs an action on the current page. |
| `.pf-v5-c-dropdown__group` | `<section>` | Defines a group of items in a dropdown. **Required when there is more than one group in a dropdown**. |
| `.pf-v5-c-dropdown__group-title` | `<h1>` | Defines the title for a group of items in the dropdown menu. |
| `.pf-m-expanded` | `.pf-v5-c-dropdown` | Modifies for the expanded state. |
| `.pf-m-top` | `.pf-v5-c-dropdown` | Modifies to display the menu above the toggle. |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-v5-c-dropdown__menu` | Modifies to display the menu aligned to the left edge of the toggle at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-v5-c-dropdown__menu` | Modifies to display the menu aligned to the right edge of the toggle at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-static` | `.pf-v5-c-dropdown__menu` | Modifies a dropdown menu to be statically positioned to support custom positioning. |
| `.pf-m-split-button` | `.pf-v5-c-dropdown__toggle` | Modifies the dropdown toggle area to allow for interactive elements. |
| `.pf-m-action` | `.pf-v5-c-dropdown__toggle.pf-m-split-button` | Modifies the dropdown toggle for when an action is placed beside a toggle button in a split button dropdown. |
| `.pf-m-text` | `.pf-v5-c-dropdown__menu-item` | Modifies a menu item to be non-interactive text. |
| `.pf-m-plain` | `.pf-v5-c-dropdown__toggle` | Modifies to display the toggle with no border. |
| `.pf-m-text` | `.pf-v5-c-dropdown__toggle` | Modifies the dropdown toggle for the text variation. |
| `.pf-m-primary` | `.pf-v5-c-dropdown__toggle` | Modifies to display the toggle with primary styles. |
| `.pf-m-secondary` | `.pf-v5-c-dropdown__toggle` | Modifies to display the toggle with secondary styles. |
| `.pf-m-full-height` | `.pf-v5-c-dropdown` | Modifies a dropdown to full height of parent. See masthead for use. |
| `.pf-m-disabled` | `a.pf-v5-c-dropdown__menu-item` | Modifies to display the menu item as disabled. This applies to `a.pf-v5-c-dropdown__menu-item` and should not be used in lieu of the `disabled` attribute on `button.pf-v5-c-dropdown__menu-item`. |
| `.pf-m-disabled` | `div.pf-v5-c-dropdown__toggle` | Modifies to display the dropdown toggle as disabled. This applies to `div.pf-v5-c-dropdown__toggle` and should not be used in lieu of the `disabled` attribute on `button.pf-v5-c-dropdown__toggle`. When this is used, `disabled` should also be added to any form elements in `div.pf-v5-c-dropdown__toggle`. |
| `.pf-m-icon` | `.pf-v5-c-dropdown__menu-item` | Modifies an item to support adding an icon. |
| `.pf-m-active` | `.pf-v5-c-dropdown__toggle` | Modifies the dropdown menu toggle for the active state. |
| `.pf-m-description` | `.pf-v5-c-dropdown__menu-item` | Modifies an item to support adding a description. |
| `.pf-m-in-progress` | `.pf-v5-c-dropdown__toggle-check` | Modifies a toggle check element to indicate the check action is in progress. |
