---
id: Select
section: components
subsection: menus
cssPrefix: pf-v5-c-select
deprecated: true
---import './Select.css'

## Single

### Single select

```html
<div class="pf-v5-c-select">
  <span id="select-single-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-single-toggle"
    aria-haspopup="true"
    aria-expanded="false"
    aria-labelledby="select-single-label select-single-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-single-label"
    hidden
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
  </ul>
</div>

```

### Single expanded

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-single-expanded-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-single-expanded-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-single-expanded-label select-single-expanded-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-single-expanded-label"
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
  </ul>
</div>

```

### Single with top expanded

```html
<div class="pf-v5-c-select pf-m-expanded pf-m-top">
  <span id="select-single-top-expanded-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-single-top-expanded-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-single-top-expanded-label select-single-top-expanded-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-single-top-expanded-label"
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
  </ul>
</div>

```

### Single expanded and selected

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-single-expanded-selected-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-single-expanded-selected-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-single-expanded-selected-label select-single-expanded-selected-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">April</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-single-expanded-selected-label"
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
  </ul>
</div>

```

The single select should be used when the user is selecting an option from a list of items. Although the presentation is similar to the basic dropdown, the underlying HTML and ARIA tag structure is specific to a select list. The selection will replace the default text in the toggle. The selection is highlighted with the list is opened. If the selection is cleared elsewhere (i.e. from the filter bar), the default text is restored.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-select` | `<div>` |  Initiates a custom select. |
| `.pf-v5-c-select__toggle` | `<button>` |  Initiates a custom toggle. |
| `.pf-v5-c-select__toggle-wrapper` | `<div>` |  Initiates a custom select toggle wrapper. |
| `.pf-v5-c-select__toggle-arrow` | `<span>` |  Initiates the caret to toggle the dropdown. |
| `.pf-v5-c-select__menu` | `<ul>` |  Initiates the custom select dropdown menu. |
| `.pf-v5-c-select__menu-item` | `<li>` |  Initiates the items in the custom select dropdown menu. |
| `.pf-v5-c-select__menu-item-icon` | `<i>` |  Initiates the selected item icon. |
| `.pf-m-top` | `.pf-v5-c-select` |  Modifies the select menu to display above the toggle. |
| `.pf-m-align-right` | `.pf-v5-c-select__menu` |  Modifies the select menu to display right aligned to the toggle. |
| `.pf-m-static` | `.pf-v5-c-select__menu` |  Modifies the select menu to be statically positioned to support custom positioning. |
| `.pf-m-active` | `.pf-v5-c-select` | Forces display of the active state of the toggle. |

## States

### Disabled

```html
<div class="pf-v5-c-select">
  <span id="select-disabled-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-disabled-toggle"
    aria-haspopup="true"
    aria-expanded="false"
    aria-labelledby="select-disabled-label select-disabled-toggle"
    disabled
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-disabled-label"
    hidden
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
  </ul>
</div>

```

### Success

```html
<div class="pf-v5-c-select pf-m-success">
  <span id="select-success-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-success-toggle"
    aria-haspopup="true"
    aria-expanded="false"
    aria-labelledby="select-success-label select-success-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-status-icon">
      <i class="fas fa-check-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-success-label"
    hidden
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
  </ul>
</div>

```

### Warning

```html
<div class="pf-v5-c-select pf-m-warning">
  <span id="select-warning-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-warning-toggle"
    aria-haspopup="true"
    aria-expanded="false"
    aria-labelledby="select-warning-label select-warning-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-status-icon">
      <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-warning-label"
    hidden
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
  </ul>
</div>

```

### Invalid

```html
<div class="pf-v5-c-select pf-m-invalid">
  <span id="select-invalid-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-invalid-toggle"
    aria-haspopup="true"
    aria-expanded="false"
    aria-labelledby="select-invalid-label select-invalid-toggle"
    aria-invalid="true"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-status-icon">
      <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-invalid-label"
    hidden
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
  </ul>
</div>

```

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-invalid="true"` | `.pf-v5-c-select__toggle` | Indicates that the select is in the invalid state. |
| `aria-selected="true"` | `.pf-v5-c-select__menu-item` | Should be set programmatically to indicate the active item. |
| `disabled` | `.pf-v5-c-select__toggle` | Disables the dropdown toggle and removes it from keyboard focus. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-select` | `<div>` |  Initiates the select component. |
| `.pf-v5-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-v5-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-v5-c-select__toggle-arrow` | `<span>` |  Initiates the caret to toggle the dropdown. |
| `.pf-v5-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-v5-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-v5-c-select__menu-item-icon` | `<span>` |  Initiates the selected item icon wrapper. |
| `.pf-m-expanded` | `.pf-v5-c-select` |  Indicates the select is expanded. |
| `.pf-m-success` | `.pf-v5-c-select` | Modifies select component for the success state. |
| `.pf-m-warning` | `.pf-v5-c-select` | Modifies select component for the warning state. |
| `.pf-m-invalid` | `.pf-v5-c-select` | Modifies select component for the invalid state. |
| `.pf-m-selected` | `.pf-v5-c-select__menu-item` |  Indicates the menu item is selected. |
| `.pf-m-disabled` | `div.pf-v5-c-select__toggle` | Modifies to display the select toggle as disabled. This applies to `div.pf-v5-c-select__toggle` and should not be used in lieu of the `disabled` attribute on `button.pf-v5-c-select__toggle`. When this is used, `disabled` should also be added to any form elements in `div.pf-v5-c-select__toggle`|

## Typeahead

### Single with typeahead

```html
<div class="pf-v5-c-select">
  <span id="select-single-typeahead-label" hidden>Choose a state</span>

  <div class="pf-v5-c-select__toggle pf-m-typeahead">
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-form-control pf-v5-c-select__toggle-typeahead">
        <input
          type="text"
          id="select-single-typeahead-typeahead"
          aria-label="Type to filter"
          value
          placeholder="Choose a state"
        />
      </span>
    </div>
    <button
      class="pf-v5-c-button pf-m-plain pf-v5-c-select__toggle-button"
      type="button"
      id="select-single-typeahead-toggle"
      aria-haspopup="true"
      aria-expanded="false"
      aria-labelledby="select-single-typeahead-label select-single-typeahead-toggle"
      aria-label="Select"
    >
      <i
        class="fas fa-caret-down pf-v5-c-select__toggle-arrow"
        aria-hidden="true"
      ></i>
    </button>
  </div>

  <ul
    class="pf-v5-c-select__menu"
    aria-labelledby="select-single-typeahead-label"
    role="listbox"
    hidden
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Alabama</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Florida</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        New
        &nbsp;Jersey
      </button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        New
        &nbsp;Mexico
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        New
        &nbsp;York
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">North Carolina</button>
    </li>
  </ul>
</div>

```

### Single with typeahead expanded

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-single-typeahead-expanded-label" hidden>Choose a state</span>

  <div class="pf-v5-c-select__toggle pf-m-typeahead">
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-form-control pf-v5-c-select__toggle-typeahead">
        <input
          type="text"
          id="select-single-typeahead-expanded-typeahead"
          aria-label="Type to filter"
          value="New"
          placeholder="Choose a state"
        />
      </span>
    </div>
    <button
      class="pf-v5-c-button pf-m-plain pf-v5-c-select__toggle-clear"
      type="button"
      aria-label="Clear all"
    >
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    </button>
    <button
      class="pf-v5-c-button pf-m-plain pf-v5-c-select__toggle-button"
      type="button"
      id="select-single-typeahead-expanded-toggle"
      aria-haspopup="true"
      aria-expanded="true"
      aria-labelledby="select-single-typeahead-expanded-label select-single-typeahead-expanded-toggle"
      aria-label="Select"
    >
      <i
        class="fas fa-caret-down pf-v5-c-select__toggle-arrow"
        aria-hidden="true"
      ></i>
    </button>
  </div>

  <ul
    class="pf-v5-c-select__menu"
    aria-labelledby="select-single-typeahead-expanded-label"
    role="listbox"
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        <mark class="pf-v5-c-select__menu-item--match">New</mark>
        &nbsp;Jersey
      </button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        <mark class="pf-v5-c-select__menu-item--match">New</mark>
        &nbsp;Mexico
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        <mark class="pf-v5-c-select__menu-item--match">New</mark>
        &nbsp;York
      </button>
    </li>
  </ul>
</div>

```

### Single with typeahead expanded and selected

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span
    id="select-single-typeahead-expanded-selected-label"
    hidden
  >Choose a state</span>

  <div class="pf-v5-c-select__toggle pf-m-typeahead">
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-form-control pf-v5-c-select__toggle-typeahead">
        <input
          type="text"
          id="select-single-typeahead-expanded-selected-typeahead"
          aria-label="Type to filter"
          value="New Mexico"
          placeholder="Choose a state"
        />
      </span>
    </div>
    <button
      class="pf-v5-c-button pf-m-plain pf-v5-c-select__toggle-clear"
      type="button"
      aria-label="Clear all"
    >
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    </button>
    <button
      class="pf-v5-c-button pf-m-plain pf-v5-c-select__toggle-button"
      type="button"
      id="select-single-typeahead-expanded-selected-toggle"
      aria-haspopup="true"
      aria-expanded="true"
      aria-labelledby="select-single-typeahead-expanded-selected-label select-single-typeahead-expanded-selected-toggle"
      aria-label="Select"
    >
      <i
        class="fas fa-caret-down pf-v5-c-select__toggle-arrow"
        aria-hidden="true"
      ></i>
    </button>
  </div>

  <ul
    class="pf-v5-c-select__menu"
    aria-labelledby="select-single-typeahead-expanded-selected-label"
    role="listbox"
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Alabama</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Florida</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        New
        &nbsp;Jersey
      </button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        New
        &nbsp;Mexico
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        New
        &nbsp;York
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">North Carolina</button>
    </li>
  </ul>
</div>

```

### Disabled with typeahead

```html
<div class="pf-v5-c-select">
  <span id="select-single-typeahead-disabled-label" hidden>Choose a state</span>

  <div class="pf-v5-c-select__toggle pf-m-typeahead pf-m-disabled">
    <div class="pf-v5-c-select__toggle-wrapper">
      <span
        class="pf-v5-c-form-control pf-m-disabled pf-v5-c-select__toggle-typeahead"
      >
        <input
          disabled
          type="text"
          id="select-single-typeahead-disabled-typeahead"
          aria-label="Type to filter"
          placeholder="Choose a state"
        />
      </span>
    </div>
    <button
      class="pf-v5-c-button pf-m-plain pf-v5-c-select__toggle-button"
      type="button"
      id="select-single-typeahead-disabled-toggle"
      aria-haspopup="true"
      aria-expanded="false"
      aria-labelledby="select-single-typeahead-disabled-label select-single-typeahead-disabled-toggle"
      aria-label="Select"
      disabled
    >
      <i
        class="fas fa-caret-down pf-v5-c-select__toggle-arrow"
        aria-hidden="true"
      ></i>
    </button>
  </div>

  <ul
    class="pf-v5-c-select__menu"
    aria-labelledby="select-single-typeahead-disabled-label"
    role="listbox"
    hidden
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Alabama</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Florida</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        New
        &nbsp;Jersey
      </button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        New
        &nbsp;Mexico
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        New
        &nbsp;York
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">North Carolina</button>
    </li>
  </ul>
</div>

```

### Invalid with typeahead

```html
<div class="pf-v5-c-select pf-m-invalid">
  <span id="select-single-typeahead-invalid-label" hidden>Choose a state</span>

  <div class="pf-v5-c-select__toggle pf-m-typeahead">
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-form-control pf-v5-c-select__toggle-typeahead">
        <input
          type="text"
          id="select-single-typeahead-invalid-typeahead"
          aria-invalid="true"
          value="Invalid"
          aria-label="Type to filter"
          placeholder="Choose a state"
        />
      </span>
    </div>
    <span class="pf-v5-c-select__toggle-status-icon">
      <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <button
      class="pf-v5-c-button pf-m-plain pf-v5-c-select__toggle-button"
      type="button"
      id="select-single-typeahead-invalid-toggle"
      aria-haspopup="true"
      aria-expanded="false"
      aria-labelledby="select-single-typeahead-invalid-label select-single-typeahead-invalid-toggle"
      aria-label="Select"
    >
      <i
        class="fas fa-caret-down pf-v5-c-select__toggle-arrow"
        aria-hidden="true"
      ></i>
    </button>
  </div>

  <ul
    class="pf-v5-c-select__menu"
    aria-labelledby="select-single-typeahead-invalid-label"
    role="listbox"
    hidden
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Alabama</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Florida</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        New
        &nbsp;Jersey
      </button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        New
        &nbsp;Mexico
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        New
        &nbsp;York
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">North Carolina</button>
    </li>
  </ul>
</div>

```

The single select typeahead should be used when the user is selecting one option from a list of items with the option to narrow the list by typing from the keyboard. Selected items are removed from the list. The user can clear the selection and restore the placeholder text.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-selected="true"` | `.pf-v5-c-select__menu-item` | Should be set programmatically to indicate the active item. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-select` | `<div>` |  Initiates the select component. |
| `.pf-v5-c-select__toggle` | `<div>` |  Initiates the select toggle. |
| `.pf-v5-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-v5-c-select__toggle-typeahead` | `input.pf-v5-c-form-control` |  Initiates the input field for typeahead. |
| `.pf-v5-c-select__toggle-clear` | `button.pf-v5-c-button.pf-m-plain` |  Initiates a clear button in the toggle. |
| `.pf-v5-c-select__toggle-button` | `button.pf-v5-c-button.pf-m-plain` | Initiates a toggle button. |
| `.pf-v5-c-select__toggle-arrow` | `<span>` |  Initiates the caret icon. |
| `.pf-v5-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-v5-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-m-expanded` | `.pf-v5-c-select` |  Indicates the select is expanded. |
| `.pf-m-typeahead` | `.pf-v5-c-select__toggle` |  Indicates the select has a typeahead. |
| `.pf-m-focus` | `.pf-v5-c-select__menu-item` |  Modifies the menu item to apply `:focus` styling. For use when navigating the menu items by keyboard when the typeahead input field has browser focus. |

## Typeahead multiselect

### Select multi with typeahead

```html
<div class="pf-v5-c-select">
  <span id="select-multi-typeahead-label" hidden>Choose states</span>

  <div class="pf-v5-c-select__toggle pf-m-typeahead">
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-form-control pf-v5-c-select__toggle-typeahead">
        <input
          type="text"
          id="select-multi-typeahead-typeahead"
          aria-label="Type to filter"
          value
          placeholder="Choose states"
        />
      </span>
    </div>
    <button
      class="pf-v5-c-button pf-m-plain pf-v5-c-select__toggle-button"
      type="button"
      id="select-multi-typeahead-toggle"
      aria-haspopup="true"
      aria-expanded="false"
      aria-labelledby="select-multi-typeahead-label select-multi-typeahead-toggle"
      aria-label="Select"
    >
      <i
        class="fas fa-caret-down pf-v5-c-select__toggle-arrow"
        aria-hidden="true"
      ></i>
    </button>
  </div>

  <ul
    class="pf-v5-c-select__menu"
    aria-labelledby="select-multi-typeahead-label"
    role="listbox"
    hidden
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Alabama</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Florida</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        New
        &nbsp;Jersey
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        New
        &nbsp;York
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">North Carolina</button>
    </li>
  </ul>
</div>

```

### Multi with typeahead (chip group expanded)

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-multi-typeahead-expanded-label" hidden>Choose states</span>

  <div class="pf-v5-c-select__toggle pf-m-typeahead">
    <div class="pf-v5-c-select__toggle-wrapper">
      <div class="pf-v5-c-chip-group" role="group">
        <div class="pf-v5-c-chip-group__main">
          <ul
            class="pf-v5-c-chip-group__list"
            role="list"
            aria-label="Chip group list"
          >
            <li class="pf-v5-c-chip-group__list-item">
              <div class="pf-v5-c-chip">
                <span class="pf-v5-c-chip__content">
                  <span
                    class="pf-v5-c-chip__text"
                    id="select-multi-typeahead-expanded-chip_one"
                  >Arkansas</span>
                </span>
                <span class="pf-v5-c-chip__actions">
                  <button
                    class="pf-v5-c-button pf-m-plain"
                    type="button"
                    aria-labelledby="remove_select-multi-typeahead-expanded_chip_one select-multi-typeahead-expanded-chip_two"
                    aria-label="Remove"
                    id="remove_select-multi-typeahead-expanded_chip_one"
                  >
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </li>
            <li class="pf-v5-c-chip-group__list-item">
              <div class="pf-v5-c-chip">
                <span class="pf-v5-c-chip__content">
                  <span
                    class="pf-v5-c-chip__text"
                    id="select-multi-typeahead-expanded-chip_two"
                  >Massachusetts</span>
                </span>
                <span class="pf-v5-c-chip__actions">
                  <button
                    class="pf-v5-c-button pf-m-plain"
                    type="button"
                    aria-labelledby="remove_select-multi-typeahead-expanded_chip_two select-multi-typeahead-expanded-chip_two"
                    aria-label="Remove"
                    id="remove_select-multi-typeahead-expanded_chip_two"
                  >
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </li>
            <li class="pf-v5-c-chip-group__list-item">
              <div class="pf-v5-c-chip">
                <span class="pf-v5-c-chip__content">
                  <span
                    class="pf-v5-c-chip__text"
                    id="select-multi-typeahead-expanded-chip_three"
                  >New Mexico</span>
                </span>
                <span class="pf-v5-c-chip__actions">
                  <button
                    class="pf-v5-c-button pf-m-plain"
                    type="button"
                    aria-labelledby="remove_select-multi-typeahead-expanded_chip_three select-multi-typeahead-expanded-chip_three"
                    aria-label="Remove"
                    id="remove_select-multi-typeahead-expanded_chip_three"
                  >
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </li>
            <li class="pf-v5-c-chip-group__list-item">
              <div class="pf-v5-c-chip">
                <span class="pf-v5-c-chip__content">
                  <span
                    class="pf-v5-c-chip__text"
                    id="select-multi-typeahead-expanded-chip_four"
                  >Ohio</span>
                </span>
                <span class="pf-v5-c-chip__actions">
                  <button
                    class="pf-v5-c-button pf-m-plain"
                    type="button"
                    aria-labelledby="remove_select-multi-typeahead-expanded_chip_four select-multi-typeahead-expanded-chip_four"
                    aria-label="Remove"
                    id="remove_select-multi-typeahead-expanded_chip_four"
                  >
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </li>
            <li class="pf-v5-c-chip-group__list-item">
              <div class="pf-v5-c-chip">
                <span class="pf-v5-c-chip__content">
                  <span
                    class="pf-v5-c-chip__text"
                    id="select-multi-typeahead-expanded-chip_five"
                  >Washington</span>
                </span>
                <span class="pf-v5-c-chip__actions">
                  <button
                    class="pf-v5-c-button pf-m-plain"
                    type="button"
                    aria-labelledby="remove_select-multi-typeahead-expanded_chip_five select-multi-typeahead-expanded-chip_five"
                    aria-label="Remove"
                    id="remove_select-multi-typeahead-expanded_chip_five"
                  >
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <span class="pf-v5-c-form-control pf-v5-c-select__toggle-typeahead">
        <input
          type="text"
          id="select-multi-typeahead-expanded-typeahead"
          aria-label="Type to filter"
          value
          placeholder="Choose states"
        />
      </span>
    </div>
    <button
      class="pf-v5-c-button pf-m-plain pf-v5-c-select__toggle-clear"
      type="button"
      aria-label="Clear all"
    >
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    </button>
    <button
      class="pf-v5-c-button pf-m-plain pf-v5-c-select__toggle-button"
      type="button"
      id="select-multi-typeahead-expanded-toggle"
      aria-haspopup="true"
      aria-expanded="true"
      aria-labelledby="select-multi-typeahead-expanded-label select-multi-typeahead-expanded-toggle"
      aria-label="Select"
    >
      <i
        class="fas fa-caret-down pf-v5-c-select__toggle-arrow"
        aria-hidden="true"
      ></i>
    </button>
  </div>

  <ul
    class="pf-v5-c-select__menu"
    aria-labelledby="select-multi-typeahead-expanded-label"
    role="listbox"
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Alabama</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Florida</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        New
        &nbsp;Jersey
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        New
        &nbsp;York
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">North Carolina</button>
    </li>
  </ul>
</div>

```

### Multi with typeahead (chip group collapsed)

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-multi-typeahead-expanded-selected-label" hidden>Choose states</span>

  <div class="pf-v5-c-select__toggle pf-m-typeahead">
    <div class="pf-v5-c-select__toggle-wrapper">
      <div class="pf-v5-c-chip-group" role="group">
        <div class="pf-v5-c-chip-group__main">
          <ul
            class="pf-v5-c-chip-group__list"
            role="list"
            aria-label="Chip group list"
          >
            <li class="pf-v5-c-chip-group__list-item">
              <div class="pf-v5-c-chip">
                <span class="pf-v5-c-chip__content">
                  <span
                    class="pf-v5-c-chip__text"
                    id="select-multi-typeahead-expanded-selected-chip_one"
                  >Arkansas</span>
                </span>
                <span class="pf-v5-c-chip__actions">
                  <button
                    class="pf-v5-c-button pf-m-plain"
                    type="button"
                    aria-labelledby="remove_select-multi-typeahead-expanded-selected_chip_one select-multi-typeahead-expanded-selected-chip_one"
                    aria-label="Remove"
                    id="remove_select-multi-typeahead-expanded-selected_chip_one"
                  >
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </li>
            <li class="pf-v5-c-chip-group__list-item">
              <div class="pf-v5-c-chip">
                <span class="pf-v5-c-chip__content">
                  <span
                    class="pf-v5-c-chip__text"
                    id="select-multi-typeahead-expanded-selected-chip_two"
                  >Massachusetts</span>
                </span>
                <span class="pf-v5-c-chip__actions">
                  <button
                    class="pf-v5-c-button pf-m-plain"
                    type="button"
                    aria-labelledby="remove_select-multi-typeahead-expanded-selected_chip_two select-multi-typeahead-expanded-selected-chip_two"
                    aria-label="Remove"
                    id="remove_select-multi-typeahead-expanded-selected_chip_two"
                  >
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </li>
            <li class="pf-v5-c-chip-group__list-item">
              <div class="pf-v5-c-chip">
                <span class="pf-v5-c-chip__content">
                  <span
                    class="pf-v5-c-chip__text"
                    id="select-multi-typeahead-expanded-selected-chip_three"
                  >New Mexico</span>
                </span>
                <span class="pf-v5-c-chip__actions">
                  <button
                    class="pf-v5-c-button pf-m-plain"
                    type="button"
                    aria-labelledby="remove_select-multi-typeahead-expanded-selected_chip_three select-multi-typeahead-expanded-selected-chip_three"
                    aria-label="Remove"
                    id="remove_select-multi-typeahead-expanded-selected_chip_three"
                  >
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </li>
            <li class="pf-v5-c-chip-group__list-item">
              <button class="pf-v5-c-chip pf-m-overflow">
                <span class="pf-v5-c-chip__content">
                  <span class="pf-v5-c-chip__text">2 more</span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <span class="pf-v5-c-form-control pf-v5-c-select__toggle-typeahead">
        <input
          type="text"
          id="select-multi-typeahead-expanded-selected-typeahead"
          aria-label="Type to filter"
          value="New"
          placeholder="Choose states"
        />
      </span>
    </div>
    <button
      class="pf-v5-c-button pf-m-plain pf-v5-c-select__toggle-clear"
      type="button"
      aria-label="Clear all"
    >
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    </button>
    <button
      class="pf-v5-c-button pf-m-plain pf-v5-c-select__toggle-button"
      type="button"
      id="select-multi-typeahead-expanded-selected-toggle"
      aria-haspopup="true"
      aria-expanded="true"
      aria-labelledby="select-multi-typeahead-expanded-selected-label select-multi-typeahead-expanded-selected-toggle"
      aria-label="Select"
    >
      <i
        class="fas fa-caret-down pf-v5-c-select__toggle-arrow"
        aria-hidden="true"
      ></i>
    </button>
  </div>

  <ul
    class="pf-v5-c-select__menu"
    aria-labelledby="select-multi-typeahead-expanded-selected-label"
    role="listbox"
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        <mark class="pf-v5-c-select__menu-item--match">New</mark>
        &nbsp;Jersey
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        <mark class="pf-v5-c-select__menu-item--match">New</mark>
        &nbsp;York
      </button>
    </li>
  </ul>
</div>

```

### Multi with typeahead invalid

```html
<div class="pf-v5-c-select pf-m-expanded pf-m-invalid">
  <span id="select-multi-typeahead-invalid-label" hidden>Choose states</span>

  <div class="pf-v5-c-select__toggle pf-m-typeahead">
    <div class="pf-v5-c-select__toggle-wrapper">
      <div class="pf-v5-c-chip-group" role="group">
        <div class="pf-v5-c-chip-group__main">
          <ul
            class="pf-v5-c-chip-group__list"
            role="list"
            aria-label="Chip group list"
          >
            <li class="pf-v5-c-chip-group__list-item">
              <div class="pf-v5-c-chip">
                <span class="pf-v5-c-chip__content">
                  <span
                    class="pf-v5-c-chip__text"
                    id="select-multi-typeahead-invalid-chip_one"
                  >Arkansas</span>
                </span>
                <span class="pf-v5-c-chip__actions">
                  <button
                    class="pf-v5-c-button pf-m-plain"
                    type="button"
                    aria-labelledby="remove_select-multi-typeahead-invalid_chip_one select-multi-typeahead-invalid-chip_two"
                    aria-label="Remove"
                    id="remove_select-multi-typeahead-invalid_chip_one"
                  >
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </li>
            <li class="pf-v5-c-chip-group__list-item">
              <div class="pf-v5-c-chip">
                <span class="pf-v5-c-chip__content">
                  <span
                    class="pf-v5-c-chip__text"
                    id="select-multi-typeahead-invalid-chip_two"
                  >Massachusetts</span>
                </span>
                <span class="pf-v5-c-chip__actions">
                  <button
                    class="pf-v5-c-button pf-m-plain"
                    type="button"
                    aria-labelledby="remove_select-multi-typeahead-invalid_chip_two select-multi-typeahead-invalid-chip_two"
                    aria-label="Remove"
                    id="remove_select-multi-typeahead-invalid_chip_two"
                  >
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </li>
            <li class="pf-v5-c-chip-group__list-item">
              <div class="pf-v5-c-chip">
                <span class="pf-v5-c-chip__content">
                  <span
                    class="pf-v5-c-chip__text"
                    id="select-multi-typeahead-invalid-chip_three"
                  >New Mexico</span>
                </span>
                <span class="pf-v5-c-chip__actions">
                  <button
                    class="pf-v5-c-button pf-m-plain"
                    type="button"
                    aria-labelledby="remove_select-multi-typeahead-invalid_chip_three select-multi-typeahead-invalid-chip_three"
                    aria-label="Remove"
                    id="remove_select-multi-typeahead-invalid_chip_three"
                  >
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </li>
            <li class="pf-v5-c-chip-group__list-item">
              <div class="pf-v5-c-chip">
                <span class="pf-v5-c-chip__content">
                  <span
                    class="pf-v5-c-chip__text"
                    id="select-multi-typeahead-invalid-chip_four"
                  >Ohio</span>
                </span>
                <span class="pf-v5-c-chip__actions">
                  <button
                    class="pf-v5-c-button pf-m-plain"
                    type="button"
                    aria-labelledby="remove_select-multi-typeahead-invalid_chip_four select-multi-typeahead-invalid-chip_four"
                    aria-label="Remove"
                    id="remove_select-multi-typeahead-invalid_chip_four"
                  >
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </li>
            <li class="pf-v5-c-chip-group__list-item">
              <div class="pf-v5-c-chip">
                <span class="pf-v5-c-chip__content">
                  <span
                    class="pf-v5-c-chip__text"
                    id="select-multi-typeahead-invalid-chip_five"
                  >Washington</span>
                </span>
                <span class="pf-v5-c-chip__actions">
                  <button
                    class="pf-v5-c-button pf-m-plain"
                    type="button"
                    aria-labelledby="remove_select-multi-typeahead-invalid_chip_five select-multi-typeahead-invalid-chip_five"
                    aria-label="Remove"
                    id="remove_select-multi-typeahead-invalid_chip_five"
                  >
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <span class="pf-v5-c-form-control pf-v5-c-select__toggle-typeahead">
        <input
          type="text"
          id="select-multi-typeahead-invalid-typeahead"
          aria-invalid="true"
          value="Invalid"
          aria-label="Type to filter"
          placeholder="Choose states"
        />
      </span>
    </div>
    <span class="pf-v5-c-select__toggle-status-icon">
      <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <button
      class="pf-v5-c-button pf-m-plain pf-v5-c-select__toggle-clear"
      type="button"
      aria-label="Clear all"
    >
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    </button>
    <button
      class="pf-v5-c-button pf-m-plain pf-v5-c-select__toggle-button"
      type="button"
      id="select-multi-typeahead-invalid-toggle"
      aria-haspopup="true"
      aria-expanded="true"
      aria-labelledby="select-multi-typeahead-invalid-label select-multi-typeahead-invalid-toggle"
      aria-label="Select"
    >
      <i
        class="fas fa-caret-down pf-v5-c-select__toggle-arrow"
        aria-hidden="true"
      ></i>
    </button>
  </div>

  <ul
    class="pf-v5-c-select__menu"
    aria-labelledby="select-multi-typeahead-invalid-label"
    role="listbox"
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Alabama</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Florida</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        New
        &nbsp;Jersey
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">
        New
        &nbsp;York
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">North Carolina</button>
    </li>
  </ul>
</div>

```

The multiselect should be used when the user is selecting multiple items from a list. The user can narrow the list by typing from the keyboard. The List updates while typing. Selected items create a new chip and are removed from the list. The user may clear selections individually or all at once to restore the placeholder.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-selected="true"` | `.pf-v5-c-select__menu-item` | Should be set programmatically to indicate the active item. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-select` | `<div>` |  Initiates the select component. |
| `.pf-v5-c-select__toggle` | `<div>` |  Initiates the select toggle. |
| `.pf-v5-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper so that chips and input field can wrap together. |
| `.pf-v5-c-chip` | `<div>` |  Initiates a chip. (See [chip component](/components/chip) for more details) |
| `.pf-v5-c-select__toggle-typeahead` | `input.pf-v5-c-form-control` |  Initiates the input field for typeahead. |
| `.pf-v5-c-select__toggle-clear` | `button.pf-m-plain` |  Initiates a clear button in the toggle. |
| `.pf-v5-c-select__toggle-button` | `<button>` | Initiates a toggle button. |
| `.pf-v5-c-select__toggle-arrow` | `<span>` |  Initiates the caret icon. |
| `.pf-v5-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-v5-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-m-expanded` | `.pf-v5-c-select` |  Indicates the select is expanded. |
| `.pf-m-typeahead` | `.pf-v5-c-select__toggle` |  Indicates the select has a typeahead. |

## Checkbox

### Checkbox select

```html
<div class="pf-v5-c-select">
  <span id="select-checkbox-label" hidden>Choose many</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-checkbox-toggle"
    aria-haspopup="true"
    aria-expanded="false"
    aria-labelledby="select-checkbox-label select-checkbox-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <div class="pf-v5-c-select__menu" hidden>
    <fieldset class="pf-v5-c-select__menu-fieldset" aria-label="Select input">
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item pf-m-description"
        id="select-checkbox-active"
        for="select-checkbox-active-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          aria-describedby="select-checkbox-active-description"
          id="select-checkbox-active-input"
          name="select-checkbox-active-input"
        />
        <span class="pf-v5-c-check__label">Active</span>
        <span
          class="pf-v5-c-check__description"
          id="select-checkbox-active-description"
        >This is a description</span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item pf-m-description"
        id="select-checkbox-canceled"
        for="select-checkbox-canceled-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          aria-describedby="select-checkbox-canceled-description"
          id="select-checkbox-canceled-input"
          name="select-checkbox-canceled-input"
        />
        <span class="pf-v5-c-check__label">Canceled</span>
        <span
          class="pf-v5-c-check__description"
          id="select-checkbox-canceled-description"
        >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-paused"
        for="select-checkbox-paused-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-paused-input"
          name="select-checkbox-paused-input"
        />
        <span class="pf-v5-c-check__label">Paused</span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-warning"
        for="select-checkbox-warning-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-warning-input"
          name="select-checkbox-warning-input"
        />
        <span class="pf-v5-c-check__label">Warning</span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-restarted"
        for="select-checkbox-restarted-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-restarted-input"
          name="select-checkbox-restarted-input"
        />
        <span class="pf-v5-c-check__label">Restarted</span>
      </label>
    </fieldset>
  </div>
</div>

```

### Checkbox expanded

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-checkbox-expanded-label" hidden>Choose many</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-checkbox-expanded-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-checkbox-expanded-label select-checkbox-expanded-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <div class="pf-v5-c-select__menu">
    <fieldset class="pf-v5-c-select__menu-fieldset" aria-label="Select input">
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-expanded-check-active"
        for="select-checkbox-expanded-check-active-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-expanded-check-active-input"
          name="select-checkbox-expanded-check-active-input"
          checked
        />
        <span class="pf-v5-c-check__label">Active</span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-expanded-check-canceled"
        for="select-checkbox-expanded-check-canceled-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-expanded-check-canceled-input"
          name="select-checkbox-expanded-check-canceled-input"
          checked
        />
        <span class="pf-v5-c-check__label">Canceled</span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-expanded-check-paused"
        for="select-checkbox-expanded-check-paused-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-expanded-check-paused-input"
          name="select-checkbox-expanded-check-paused-input"
        />
        <span class="pf-v5-c-check__label">Paused</span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-expanded-check-warning"
        for="select-checkbox-expanded-check-warning-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-expanded-check-warning-input"
          name="select-checkbox-expanded-check-warning-input"
          checked
        />
        <span class="pf-v5-c-check__label">Warning</span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-expanded-check-restarted"
        for="select-checkbox-expanded-check-restarted-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-expanded-check-restarted-input"
          name="select-checkbox-expanded-check-restarted-input"
        />
        <span class="pf-v5-c-check__label">Restarted</span>
      </label>
    </fieldset>
  </div>
</div>

```

### Checkbox expanded and selected with groups

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-checkbox-expanded-selected-label" hidden>Choose many</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-checkbox-expanded-selected-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-checkbox-expanded-selected-label select-checkbox-expanded-selected-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <div class="pf-v5-c-select__menu">
    <div class="pf-v5-c-select__menu-group">
      <div
        class="pf-v5-c-select__menu-group-title"
        aria-hidden="true"
        id="select-checkbox-expanded-selected-group-status"
      >Status</div>
      <fieldset
        class="pf-v5-c-select__menu-fieldset"
        aria-labelledby="select-checkbox-expanded-selected-group-status"
      >
        <label
          class="pf-v5-c-check pf-v5-c-select__menu-item"
          id="select-checkbox-expanded-selected-check-running"
          for="select-checkbox-expanded-selected-check-running-input"
        >
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="select-checkbox-expanded-selected-check-running-input"
            name="select-checkbox-expanded-selected-check-running-input"
          />
          <span class="pf-v5-c-check__label">Running</span>
        </label>
        <label
          class="pf-v5-c-check pf-v5-c-select__menu-item"
          id="select-checkbox-expanded-selected-check-stopped"
          for="select-checkbox-expanded-selected-check-stopped-input"
        >
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="select-checkbox-expanded-selected-check-stopped-input"
            name="select-checkbox-expanded-selected-check-stopped-input"
          />
          <span class="pf-v5-c-check__label">Stopped</span>
        </label>
        <label
          class="pf-v5-c-check pf-v5-c-select__menu-item"
          id="select-checkbox-expanded-selected-check-down"
          for="select-checkbox-expanded-selected-check-down-input"
        >
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="select-checkbox-expanded-selected-check-down-input"
            name="select-checkbox-expanded-selected-check-down-input"
          />
          <span class="pf-v5-c-check__label">Down</span>
        </label>
        <label
          class="pf-v5-c-check pf-v5-c-select__menu-item"
          id="select-checkbox-expanded-selected-check-degraded"
          for="select-checkbox-expanded-selected-check-degraded-input"
        >
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="select-checkbox-expanded-selected-check-degraded-input"
            name="select-checkbox-expanded-selected-check-degraded-input"
          />
          <span class="pf-v5-c-check__label">Degraded</span>
        </label>
        <label
          class="pf-v5-c-check pf-v5-c-select__menu-item"
          id="select-checkbox-expanded-selected-check-needs-maintenance"
          for="select-checkbox-expanded-selected-check-needs-maintenance-input"
        >
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="select-checkbox-expanded-selected-check-needs-maintenance-input"
            name="select-checkbox-expanded-selected-check-needs-maintenance-input"
            checked
          />
          <span class="pf-v5-c-check__label">Needs maintenance</span>
        </label>
      </fieldset>
    </div>
    <div class="pf-v5-c-select__menu-group">
      <div
        class="pf-v5-c-select__menu-group-title"
        aria-hidden="true"
        id="select-checkbox-expanded-selected-group-vendor"
      >Vendor</div>
      <fieldset
        class="pf-v5-c-select__menu-fieldset"
        aria-labelledby="select-checkbox-expanded-selected-group-vendor"
      >
        <label
          class="pf-v5-c-check pf-v5-c-select__menu-item"
          id="select-checkbox-expanded-selected-check-dell"
          for="select-checkbox-expanded-selected-check-dell-input"
        >
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="select-checkbox-expanded-selected-check-dell-input"
            name="select-checkbox-expanded-selected-check-dell-input"
          />
          <span class="pf-v5-c-check__label">Dell</span>
        </label>
        <label
          class="pf-v5-c-check pf-v5-c-select__menu-item"
          id="select-checkbox-expanded-selected-check-Samsung"
          for="select-checkbox-expanded-selected-check-Samsung-input"
        >
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="select-checkbox-expanded-selected-check-Samsung-input"
            name="select-checkbox-expanded-selected-check-Samsung-input"
            disabled
          />
          <span class="pf-v5-c-check__label pf-m-disabled">Samsung</span>
        </label>
        <label
          class="pf-v5-c-check pf-v5-c-select__menu-item"
          id="select-checkbox-expanded-selected-check-Hp"
          for="select-checkbox-expanded-selected-check-Hp-input"
        >
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="select-checkbox-expanded-selected-check-Hp-input"
            name="select-checkbox-expanded-selected-check-Hp-input"
          />
          <span class="pf-v5-c-check__label">Hewlett-Packard</span>
        </label>
      </fieldset>
    </div>
  </div>
</div>

```

### Checkbox expanded and selected with groups and filter

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span
    id="select-checkbox-expanded-selected-filter-example-label"
    hidden
  >Choose many</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-checkbox-expanded-selected-filter-example-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-checkbox-expanded-selected-filter-example-label select-checkbox-expanded-selected-filter-example-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <div class="pf-v5-c-select__menu">
    <div class="pf-v5-c-select__menu-search">
      <div class="pf-v5-c-text-input-group">
        <div class="pf-v5-c-text-input-group__main pf-m-icon">
          <span class="pf-v5-c-text-input-group__text">
            <span class="pf-v5-c-text-input-group__icon">
              <i class="fas fa-fw fa-search"></i>
            </span>
            <input
              class="pf-v5-c-text-input-group__text-input"
              type="text"
              placeholder="Search"
              value
              aria-label="Search input"
            />
          </span>
        </div>
      </div>
    </div>
    <hr class="pf-v5-c-divider" />
    <div class="pf-v5-c-select__menu-group">
      <div
        class="pf-v5-c-select__menu-group-title"
        aria-hidden="true"
        id="select-checkbox-expanded-selected-filter-example-group-status"
      >Status</div>
      <fieldset
        class="pf-v5-c-select__menu-fieldset"
        aria-labelledby="select-checkbox-expanded-selected-filter-example-group-status"
      >
        <label
          class="pf-v5-c-check pf-v5-c-select__menu-item"
          id="select-checkbox-expanded-selected-filter-example-check-running"
          for="select-checkbox-expanded-selected-filter-example-check-running-input"
        >
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="select-checkbox-expanded-selected-filter-example-check-running-input"
            name="select-checkbox-expanded-selected-filter-example-check-running-input"
          />
          <span class="pf-v5-c-check__label">Running</span>
        </label>
        <label
          class="pf-v5-c-check pf-v5-c-select__menu-item"
          id="select-checkbox-expanded-selected-filter-example-check-stopped"
          for="select-checkbox-expanded-selected-filter-example-check-stopped-input"
        >
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="select-checkbox-expanded-selected-filter-example-check-stopped-input"
            name="select-checkbox-expanded-selected-filter-example-check-stopped-input"
          />
          <span class="pf-v5-c-check__label">Stopped</span>
        </label>
        <label
          class="pf-v5-c-check pf-v5-c-select__menu-item"
          id="select-checkbox-expanded-selected-filter-example-check-down"
          for="select-checkbox-expanded-selected-filter-example-check-down-input"
        >
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="select-checkbox-expanded-selected-filter-example-check-down-input"
            name="select-checkbox-expanded-selected-filter-example-check-down-input"
          />
          <span class="pf-v5-c-check__label">Down</span>
        </label>
        <label
          class="pf-v5-c-check pf-v5-c-select__menu-item"
          id="select-checkbox-expanded-selected-filter-example-check-degraded"
          for="select-checkbox-expanded-selected-filter-example-check-degraded-input"
        >
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="select-checkbox-expanded-selected-filter-example-check-degraded-input"
            name="select-checkbox-expanded-selected-filter-example-check-degraded-input"
          />
          <span class="pf-v5-c-check__label">Degraded</span>
        </label>
        <label
          class="pf-v5-c-check pf-v5-c-select__menu-item"
          id="select-checkbox-expanded-selected-filter-example-check-needs-maintenance"
          for="select-checkbox-expanded-selected-filter-example-check-needs-maintenance-input"
        >
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="select-checkbox-expanded-selected-filter-example-check-needs-maintenance-input"
            name="select-checkbox-expanded-selected-filter-example-check-needs-maintenance-input"
            checked
          />
          <span class="pf-v5-c-check__label">Needs maintenance</span>
        </label>
      </fieldset>
    </div>
    <div class="pf-v5-c-select__menu-group">
      <div
        class="pf-v5-c-select__menu-group-title"
        aria-hidden="true"
        id="select-checkbox-expanded-selected-filter-example-group-vendor"
      >Vendor</div>
      <fieldset
        class="pf-v5-c-select__menu-fieldset"
        aria-labelledby="select-checkbox-expanded-selected-filter-example-group-vendor"
      >
        <label
          class="pf-v5-c-check pf-v5-c-select__menu-item"
          id="select-checkbox-expanded-selected-filter-example-check-dell"
          for="select-checkbox-expanded-selected-filter-example-check-dell-input"
        >
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="select-checkbox-expanded-selected-filter-example-check-dell-input"
            name="select-checkbox-expanded-selected-filter-example-check-dell-input"
          />
          <span class="pf-v5-c-check__label">Dell</span>
        </label>
        <label
          class="pf-v5-c-check pf-v5-c-select__menu-item"
          id="select-checkbox-expanded-selected-filter-example-check-Samsung"
          for="select-checkbox-expanded-selected-filter-example-check-Samsung-input"
        >
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="select-checkbox-expanded-selected-filter-example-check-Samsung-input"
            name="select-checkbox-expanded-selected-filter-example-check-Samsung-input"
            disabled
          />
          <span class="pf-v5-c-check__label pf-m-disabled">Samsung</span>
        </label>
        <label
          class="pf-v5-c-check pf-v5-c-select__menu-item"
          id="select-checkbox-expanded-selected-filter-example-check-Hp"
          for="select-checkbox-expanded-selected-filter-example-check-Hp-input"
        >
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="select-checkbox-expanded-selected-filter-example-check-Hp-input"
            name="select-checkbox-expanded-selected-filter-example-check-Hp-input"
          />
          <span class="pf-v5-c-check__label">Hewlett-Packard</span>
        </label>
      </fieldset>
    </div>
  </div>
</div>

```

### Checkbox expanded without badge

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-checkbox-without-badge-label" hidden>Choose many</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-checkbox-without-badge-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-checkbox-without-badge-label select-checkbox-without-badge-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <div class="pf-v5-c-select__menu">
    <fieldset class="pf-v5-c-select__menu-fieldset" aria-label="Select input">
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-without-badge-check-active"
        for="select-checkbox-without-badge-check-active-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-without-badge-check-active-input"
          name="select-checkbox-without-badge-check-active-input"
          checked
        />
        <span class="pf-v5-c-check__label">Active</span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-without-badge-check-canceled"
        for="select-checkbox-without-badge-check-canceled-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-without-badge-check-canceled-input"
          name="select-checkbox-without-badge-check-canceled-input"
          checked
        />
        <span class="pf-v5-c-check__label">Canceled</span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-without-badge-check-paused"
        for="select-checkbox-without-badge-check-paused-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-without-badge-check-paused-input"
          name="select-checkbox-without-badge-check-paused-input"
        />
        <span class="pf-v5-c-check__label">Paused</span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-without-badge-check-warning"
        for="select-checkbox-without-badge-check-warning-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-without-badge-check-warning-input"
          name="select-checkbox-without-badge-check-warning-input"
          checked
        />
        <span class="pf-v5-c-check__label">Warning</span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-without-badge-check-restarted"
        for="select-checkbox-without-badge-check-restarted-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-without-badge-check-restarted-input"
          name="select-checkbox-without-badge-check-restarted-input"
        />
        <span class="pf-v5-c-check__label">Restarted</span>
      </label>
    </fieldset>
  </div>
</div>

```

### Checkbox with counts

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-checkbox-counts-label" hidden>Choose many</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-checkbox-counts-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-checkbox-counts-label select-checkbox-counts-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <div class="pf-v5-c-select__menu">
    <fieldset class="pf-v5-c-select__menu-fieldset" aria-label="Select input">
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-counts-active"
        for="select-checkbox-counts-active-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-counts-active-input"
          name="select-checkbox-counts-active-input"
        />
        <span class="pf-v5-c-check__label">
          <span class="pf-v5-c-select__menu-item-row">
            <span class="pf-v5-c-select__menu-item-text">Active</span>
            <span class="pf-v5-c-select__menu-item-count">3</span>
          </span>
        </span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-counts-canceled"
        for="select-checkbox-counts-canceled-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-counts-canceled-input"
          name="select-checkbox-counts-canceled-input"
          checked
        />
        <span class="pf-v5-c-check__label">
          <span class="pf-v5-c-select__menu-item-row">
            <span class="pf-v5-c-select__menu-item-text">Canceled</span>
            <span class="pf-v5-c-select__menu-item-count">1</span>
          </span>
        </span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-counts-paused"
        for="select-checkbox-counts-paused-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-counts-paused-input"
          name="select-checkbox-counts-paused-input"
        />
        <span class="pf-v5-c-check__label">
          <span class="pf-v5-c-select__menu-item-row">
            <span class="pf-v5-c-select__menu-item-text">Paused</span>
            <span class="pf-v5-c-select__menu-item-count">15</span>
          </span>
        </span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-counts-warning"
        for="select-checkbox-counts-warning-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-counts-warning-input"
          name="select-checkbox-counts-warning-input"
          checked
        />
        <span class="pf-v5-c-check__label">
          <span class="pf-v5-c-select__menu-item-row">
            <span class="pf-v5-c-select__menu-item-text">Warning</span>
            <span class="pf-v5-c-select__menu-item-count">2</span>
          </span>
        </span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-counts-restarted"
        for="select-checkbox-counts-restarted-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-counts-restarted-input"
          name="select-checkbox-counts-restarted-input"
        />
        <span class="pf-v5-c-check__label">
          <span class="pf-v5-c-select__menu-item-row">
            <span class="pf-v5-c-select__menu-item-text">Restarted</span>
            <span class="pf-v5-c-select__menu-item-count">8</span>
          </span>
        </span>
      </label>
    </fieldset>
  </div>
</div>

```

The checkbox select can select multiple items using checkboxes. The number of items selected is reflected in an optional badge in the dropdown toggle. The user may clear items by unchecking or using the clear button. Optionally, items may be grouped.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-select` | `<div>` | Initiates the select component. |
| `.pf-v5-c-select__toggle` | `<button>` | Initiates the select toggle. |
| `.pf-v5-c-select__toggle-wrapper` | `<div>` | Initiates the select toggle wrapper so that chips and input field can wrap together. |
| `.pf-v5-c-chip` | `<div>` | Initiates a chip. (See [chip component](/components/chip) for more details) |
| `.pf-v5-c-select__toggle-typeahead` | `input.pf-v5-c-form-control` |  Initiates the input field for typeahead. |
| `.pf-v5-c-select__toggle-badge` | `<div>` | Initiates a container for a badge to indicate the number of items checked. \* note: This should contain an unread badge \* |
| `.pf-v5-c-select__toggle-clear` | `button.pf-m-plain` | Initiates a clear button in the toggle. |
| `.pf-v5-c-select__toggle-arrow` | `<span>` | Initiates the caret to toggle the dropdown. |
| `.pf-v5-c-select__menu` | `<div>` | Initiates the select dropdown menu. |
| `.pf-v5-c-select__menu-item` | `div.pf-v5-c-check` | Initiates the items in the select dropdown menu. |
| `.pf-v5-c-select__menu-item-row` | `<span>` | Initiates a menu item row for use with positioning other elements before/after the item text. |
| `.pf-v5-c-select__menu-item-text` | `<span>` | Initiates the menu item row text. |
| `.pf-v5-c-select__menu-item-count` | `<span>` | Initiates the menu item row count. |
| `.pf-v5-c-select__menu-fieldset` | `<fieldset>` | Initiates a fieldset for the items in a checkbox select. |
| `.pf-v5-c-select__menu-group` | `<div>` | Initiates a group within a select menu. |
| `.pf-v5-c-select__menu-group-title` | `<div>` | Initiates a title for a group with a select menu. |
| `.pf-v5-c-select__menu-search` | `<div>` | Initiates a container for the search input group. |
| `.pf-m-expanded` | `.pf-v5-c-select` | Indicates the select is expanded. |
| `.pf-m-typeahead` | `.pf-v5-c-select__toggle` | Indicates the select has a typeahead. |

## Plain

### Plain toggle

```html
<div class="pf-v5-c-select">
  <span id="select-plain-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle pf-m-plain"
    type="button"
    id="select-plain-toggle"
    aria-haspopup="true"
    aria-expanded="false"
    aria-labelledby="select-plain-label select-plain-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-plain-label"
    hidden
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
  </ul>
</div>

```

### Plain toggle expanded

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-plain-expanded-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle pf-m-plain"
    type="button"
    id="select-plain-expanded-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-plain-expanded-label select-plain-expanded-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-plain-expanded-label"
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
  </ul>
</div>

```

The plain select variation should be used when you do not want a border applied to the select toggle.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-select` | `<div>` |  Initiates the select component. |
| `.pf-v5-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-v5-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-v5-c-select__toggle-arrow` | `<span>` |  Initiates the caret to toggle the dropdown. |
| `.pf-v5-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-v5-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-v5-c-select__menu-item-icon` | `<i>` |  Initiates the selected item icon. |
| `.pf-m-expanded` | `.pf-v5-c-select` |  Indicates the select is expanded. |
| `.pf-m-plain` | `.pf-v5-c-select__toggle` |  Modifies to display the toggle with no border. |
| `.pf-m-selected` | `.pf-v5-c-select__menu-item` |  Indicates the menu item is selected. |

## Icon

### Toggle icon

```html
<div class="pf-v5-c-select">
  <span id="select-icon-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-icon-toggle"
    aria-haspopup="true"
    aria-expanded="false"
    aria-labelledby="select-icon-label select-icon-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-icon">
        <i class="fas fa-filter" aria-hidden="true"></i>
      </span>
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-icon-label"
    hidden
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
  </ul>
</div>

```

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-hidden="true"` | `.pf-v5-c-select__toggle-icon` | Hides the icon from assistive technologies.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-select` | `<div>` |  Initiates the select component. |
| `.pf-v5-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-v5-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-v5-c-select__toggle-icon` | `<span>` |  Initiates the icon in the dropdown toggle. |
| `.pf-v5-c-select__toggle-arrow` | `<span>` |  Initiates the caret to toggle the dropdown. |

## Panel

### Panel menu

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-panel-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-panel-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-panel-label select-panel-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <div
    class="pf-v5-c-select__menu"
    aria-labelledby="select-panel-label"
  >[Panel contents here]</div>
</div>

```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-select` | `<div>` |  Initiates the select component. |
| `.pf-v5-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-v5-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-v5-c-select__toggle-arrow` | `<span>` |  Initiates the caret to toggle the dropdown. |
| `.pf-v5-c-select__menu` | `<div>` |  Initiates the select dropdown menu. |

## Description

### Item description

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-with-description-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-with-description-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-with-description-label select-with-description-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Select with description</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-with-description-label"
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Menu item</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item pf-m-description" role="option">
        <span class="pf-v5-c-select__menu-item-main">Menu item description</span>
        <span
          class="pf-v5-c-select__menu-item-description"
        >This is a description.</span>
      </button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-description"
        role="option"
        disabled
      >
        <span class="pf-v5-c-select__menu-item-main">
          <span
            class="pf-v5-c-select__menu-item-main"
          >Menu item description disabled</span>
        </span>
        <span
          class="pf-v5-c-select__menu-item-description"
        >This is a description.</span>
      </button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected pf-m-description"
        role="option"
        aria-selected="true"
      >
        <span class="pf-v5-c-select__menu-item-main">
          Menu item description selected
          <span
            class="pf-v5-c-select__menu-item-icon"
          >
            <i class="fas fa-check" aria-hidden="true"></i>
          </span>
        </span>
        <span
          class="pf-v5-c-select__menu-item-description"
        >This is a description.</span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item pf-m-description" role="option">
        <span class="pf-v5-c-select__menu-item-main">Menu item long description</span>
        <span
          class="pf-v5-c-select__menu-item-description"
        >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>
      </button>
    </li>
  </ul>
</div>

```

### Checkbox item description

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-checkbox-description-label" hidden>Choose many</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-checkbox-description-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-checkbox-description-label select-checkbox-description-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <div class="pf-v5-c-select__menu">
    <fieldset class="pf-v5-c-select__menu-fieldset" aria-label="Select input">
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item pf-m-description"
        id="select-checkbox-description-active"
        for="select-checkbox-description-active-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          aria-describedby="select-checkbox-description-active-description"
          id="select-checkbox-description-active-input"
          name="select-checkbox-description-active-input"
        />
        <span class="pf-v5-c-check__label">Active</span>
        <span
          class="pf-v5-c-check__description"
          id="select-checkbox-description-active-description"
        >This is a description</span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item pf-m-description"
        id="select-checkbox-description-canceled"
        for="select-checkbox-description-canceled-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          aria-describedby="select-checkbox-description-canceled-description"
          id="select-checkbox-description-canceled-input"
          name="select-checkbox-description-canceled-input"
        />
        <span class="pf-v5-c-check__label">Canceled</span>
        <span
          class="pf-v5-c-check__description"
          id="select-checkbox-description-canceled-description"
        >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-description-paused"
        for="select-checkbox-description-paused-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-description-paused-input"
          name="select-checkbox-description-paused-input"
        />
        <span class="pf-v5-c-check__label">Paused</span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-description-warning"
        for="select-checkbox-description-warning-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-description-warning-input"
          name="select-checkbox-description-warning-input"
        />
        <span class="pf-v5-c-check__label">Warning</span>
      </label>
      <label
        class="pf-v5-c-check pf-v5-c-select__menu-item"
        id="select-checkbox-description-restarted"
        for="select-checkbox-description-restarted-input"
      >
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          id="select-checkbox-description-restarted-input"
          name="select-checkbox-description-restarted-input"
        />
        <span class="pf-v5-c-check__label">Restarted</span>
      </label>
    </fieldset>
  </div>
</div>

```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-select__menu-item-description` | `<span>` |  Initiates the select menu item description element. |
| `.pf-v5-c-select__menu-item-main` | `<span>` | Initiates the select menu item main element. Used when the description element is present. |
| `.pf-m-description` | `.pf-v5-c-select__menu-item` | Modifies the select menu item when selected to accommodate the description element. |

## Favorites

### Menu item favorites

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-favorites-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-favorites-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-favorites-label select-favorites-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Favorites</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <div class="pf-v5-c-select__menu" aria-labelledby="select-favorites-label">
    <div class="pf-v5-c-select__menu-search">
      <div class="pf-v5-c-text-input-group">
        <div class="pf-v5-c-text-input-group__main pf-m-icon">
          <span class="pf-v5-c-text-input-group__text">
            <span class="pf-v5-c-text-input-group__icon">
              <i class="fas fa-fw fa-search"></i>
            </span>
            <input
              class="pf-v5-c-text-input-group__text-input"
              type="text"
              placeholder="Search"
              value
              aria-label="Search input"
            />
          </span>
        </div>
      </div>
    </div>
    <hr class="pf-v5-c-divider" />
    <div class="pf-v5-c-select__menu-group">
      <div
        class="pf-v5-c-select__menu-group-title"
        aria-hidden="true"
        id="select-favorites-group-title-1"
      >Favorites</div>
      <ul role="listbox" aria-labelledby="select-favorites-group-title-1">
        <li
          class="pf-v5-c-select__menu-wrapper pf-m-favorite"
          role="presentation"
        >
          <button
            class="pf-v5-c-select__menu-item pf-m-link pf-m-description"
            role="option"
          >
            <span class="pf-v5-c-select__menu-item-main">Item 1</span>
            <span
              class="pf-v5-c-select__menu-item-description"
            >This is a description.</span>
          </button>
          <button
            class="pf-v5-c-select__menu-item pf-m-action pf-m-favorite-action"
            role="option"
            aria-label="Starred"
          >
            <span class="pf-v5-c-select__menu-item-action-icon">
              <i class="fas fa-star" aria-hidden="true"></i>
            </span>
          </button>
        </li>
        <li
          class="pf-v5-c-select__menu-wrapper pf-m-favorite"
          role="presentation"
        >
          <button
            class="pf-v5-c-select__menu-item pf-m-link"
            role="option"
          >Item 4</button>
          <button
            class="pf-v5-c-select__menu-item pf-m-action pf-m-favorite-action"
            role="option"
            aria-label="Starred"
          >
            <span class="pf-v5-c-select__menu-item-action-icon">
              <i class="fas fa-star" aria-hidden="true"></i>
            </span>
          </button>
        </li>
      </ul>
    </div>
    <hr class="pf-v5-c-divider" />
    <div class="pf-v5-c-select__menu-group">
      <div
        class="pf-v5-c-select__menu-group-title"
        aria-hidden="true"
        id="select-favorites-group-title-2"
      >Group 1</div>
      <ul role="listbox" aria-labelledby="select-favorites-group-title-2">
        <li
          class="pf-v5-c-select__menu-wrapper pf-m-favorite"
          role="presentation"
        >
          <button
            class="pf-v5-c-select__menu-item pf-m-link pf-m-description"
            role="option"
          >
            <span class="pf-v5-c-select__menu-item-main">Item 1</span>
            <span
              class="pf-v5-c-select__menu-item-description"
            >This is a description.</span>
          </button>
          <button
            class="pf-v5-c-select__menu-item pf-m-action pf-m-favorite-action"
            role="option"
            aria-label="Starred"
          >
            <span class="pf-v5-c-select__menu-item-action-icon">
              <i class="fas fa-star" aria-hidden="true"></i>
            </span>
          </button>
        </li>
        <li class="pf-v5-c-select__menu-wrapper" role="presentation">
          <button
            class="pf-v5-c-select__menu-item pf-m-selected pf-m-link"
            role="option"
            aria-selected="true"
          >
            Item 2
            <span class="pf-v5-c-select__menu-item-icon">
              <i class="fas fa-check" aria-hidden="true"></i>
            </span>
          </button>
          <button
            class="pf-v5-c-select__menu-item pf-m-action pf-m-favorite-action"
            role="option"
            aria-label="Not starred"
          >
            <span class="pf-v5-c-select__menu-item-action-icon">
              <i class="fas fa-star" aria-hidden="true"></i>
            </span>
          </button>
        </li>
        <li
          class="pf-v5-c-select__menu-wrapper pf-m-disabled"
          role="presentation"
        >
          <button
            class="pf-v5-c-select__menu-item pf-m-link"
            role="option"
            disabled
          >Item 3 (disabled)</button>
          <button
            class="pf-v5-c-select__menu-item pf-m-action pf-m-favorite-action"
            role="option"
            disabled
            aria-label="Not starred"
          >
            <span class="pf-v5-c-select__menu-item-action-icon">
              <i class="fas fa-star" aria-hidden="true"></i>
            </span>
          </button>
        </li>
      </ul>
    </div>
    <hr class="pf-v5-c-divider" />
    <div class="pf-v5-c-select__menu-group">
      <div
        class="pf-v5-c-select__menu-group-title"
        aria-hidden="true"
        id="select-favorites-group-title-3"
      >Group 2</div>
      <ul role="listbox" aria-labelledby="select-favorites-group-title-3">
        <li
          class="pf-v5-c-select__menu-wrapper pf-m-favorite"
          role="presentation"
        >
          <button
            class="pf-v5-c-select__menu-item pf-m-link"
            role="option"
          >Item 4</button>
          <button
            class="pf-v5-c-select__menu-item pf-m-action pf-m-favorite-action"
            role="option"
            aria-label="Starred"
          >
            <span class="pf-v5-c-select__menu-item-action-icon">
              <i class="fas fa-star" aria-hidden="true"></i>
            </span>
          </button>
        </li>
        <li class="pf-v5-c-select__menu-wrapper" role="presentation">
          <button
            class="pf-v5-c-select__menu-item pf-m-link pf-m-description"
            role="option"
          >
            <span class="pf-v5-c-select__menu-item-main">Item 5</span>
            <span
              class="pf-v5-c-select__menu-item-description"
            >This is a description.</span>
          </button>
          <button
            class="pf-v5-c-select__menu-item pf-m-action pf-m-favorite-action"
            role="option"
            aria-label="Not starred"
          >
            <span class="pf-v5-c-select__menu-item-action-icon">
              <i class="fas fa-star" aria-hidden="true"></i>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>

```

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="Not starred"` | `.pf-v5-c-select__menu-wrapper > .pf-v5-c-select__menu-item.pf-m-action` | Provides an accessible label indicating that the favorite action is not selected. |
| `aria-label="Starred"` | `.pf-v5-c-select__menu-wrapper.pf-m-favorite > .pf-v5-c-select__menu-item.pf-m-action` | Provides an accessible label indicating that the favorite action is selected. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-select__menu-wrapper` | `<li>` | Defines a menu wrapper for use with multiple actionable items in a single item row. |
| `.pf-m-favorite` | `.pf-v5-c-select__menu-wrapper` | Modifies wrapper to indicate that the item row has been favorited. |
| `.pf-m-favorite-action` | `.pf-v5-c-select__menu-item` | Modifies an item for favorite styles. |
| `.pf-m-link` | `.pf-v5-c-select__menu-item.pf-m-wrapper > .pf-v5-c-select__menu-item` | Modifies item for link styles. |
| `.pf-m-action` | `.pf-v5-c-select__menu-item.pf-m-wrapper > .pf-v5-c-select__menu-item` | Modifies item to for action styles. |

## View more

### View more menu item

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-single-view-more-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-single-view-more-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-single-view-more-label select-single-view-more-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-single-view-more-label"
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-load"
        role="option"
      >View more</button>
    </li>
  </ul>
</div>

```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-load` | `.pf-v5-c-select__menu-item` | Modifies a menu item for load styles. |

## Loading

### Loading menu item

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-single-loading-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-single-loading-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-single-loading-label select-single-loading-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-single-loading-label"
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
    <li role="presentation" class="pf-v5-c-select__list-item pf-m-loading">
      <button class="pf-v5-c-select__menu-item" role="option">
        <svg
          class="pf-v5-c-spinner pf-m-lg"
          role="progressbar"
          viewBox="0 0 100 100"
          aria-label="Loading items"
        >
          <circle
            class="pf-v5-c-spinner__path"
            cx="50"
            cy="50"
            r="45"
            fill="none"
          />
        </svg>
      </button>
    </li>
  </ul>
</div>

```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-select__list-item` | `<li>` | Defines a list item element in the select menu. |
| `.pf-m-loading` | `.pf-v5-c-select__list-item` | Modifies a list item for loading styles. |

## Footer

### Menu footer

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-single-footer-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle"
    type="button"
    id="select-single-footer-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-single-footer-label select-single-footer-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <div class="pf-v5-c-select__menu">
    <ul
      class="pf-v5-c-select__menu-list"
      role="listbox"
      aria-labelledby="select-single-footer-label"
    >
      <li role="presentation">
        <button class="pf-v5-c-select__menu-item" role="option">Running</button>
      </li>
      <li role="presentation">
        <button
          class="pf-v5-c-select__menu-item pf-m-selected"
          role="option"
          aria-selected="true"
        >
          Stopped
          <span class="pf-v5-c-select__menu-item-icon">
            <i class="fas fa-check" aria-hidden="true"></i>
          </span>
        </button>
      </li>
      <li role="presentation">
        <button class="pf-v5-c-select__menu-item" role="option">Down</button>
      </li>
      <li role="presentation">
        <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
      </li>
      <li role="presentation">
        <button
          class="pf-v5-c-select__menu-item"
          role="option"
        >Needs maintenance</button>
      </li>
    </ul>
    <div class="pf-v5-c-select__menu-footer">
      <button class="pf-v5-c-button pf-m-link pf-m-inline" type="button">Action</button>
    </div>
  </div>
</div>

```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-select__menu-footer` | `<div>` | Defines a menu footer. |
| `.pf-v5-c-select__menu-list` | `<ul>` | Defines the menu list when the list is placed in `div.pf-v5-c-select__menu`. |

## Placeholder

### Placeholder collapsed

```html
<div class="pf-v5-c-select">
  <span id="select-placeholder-collapsed-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle pf-m-placeholder"
    type="button"
    id="select-placeholder-collapsed-toggle"
    aria-haspopup="true"
    aria-expanded="false"
    aria-labelledby="select-placeholder-collapsed-label select-placeholder-collapsed-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-placeholder-collapsed-label"
    hidden
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
  </ul>
</div>

```

### Placeholder expanded

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-placeholder-expanded-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle pf-m-placeholder"
    type="button"
    id="select-placeholder-expanded-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-placeholder-expanded-label select-placeholder-expanded-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-placeholder-expanded-label"
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
  </ul>
</div>

```

### Placeholder item disabled

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-placeholder-item-disabled-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle pf-m-placeholder"
    type="button"
    id="select-placeholder-item-disabled-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-placeholder-item-disabled-label select-placeholder-item-disabled-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-placeholder-item-disabled-label"
  >
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item"
        role="option"
        disabled
      >Filter by status</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
  </ul>
</div>

```

### Placeholder item enabled

```html
<div class="pf-v5-c-select pf-m-expanded">
  <span id="select-placeholder-item-enabled-label" hidden>Choose one</span>

  <button
    class="pf-v5-c-select__toggle pf-m-placeholder"
    type="button"
    id="select-placeholder-item-enabled-toggle"
    aria-haspopup="true"
    aria-expanded="true"
    aria-labelledby="select-placeholder-item-enabled-label select-placeholder-item-enabled-toggle"
  >
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul
    class="pf-v5-c-select__menu"
    role="listbox"
    aria-labelledby="select-placeholder-item-enabled-label"
  >
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Filter by status</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button
        class="pf-v5-c-select__menu-item pf-m-selected"
        role="option"
        aria-selected="true"
      >
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
  </ul>
</div>

```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-placeholder` | `.pf-v5-c-select__toggle` | Modifies the toggle for placeholder styles. |

## Documentation

### Overview

There are 4 variants of the select component: single select, single select with typeahead, multiple select with typeahead, and a multiple checkbox select. See the examples for more details about each variation.

The single select should be used when the user is selecting an option from a list of items. Although the presentation is similar to the basic dropdown, the underlying HTML and ARIA tag structure is specific to a select list. The selection will replace the default text in the toggle. The selection is highlighted with the list is opened. If the selection is cleared elsewhere (i.e. from the filter bar), the default text is restored.
