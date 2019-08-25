# Blitz doc

## Principles

Blitz is leveraging the concept of inheritance. Values `inherit` and `currentColor` are being used extensively to make the framework compatible with Reading Systems’ default stylesheets, reading modes (`color`) and user settings (`font-size`, `font-family`, `line-height`, etc.).

Defaults and a reset do the heavy lifting so it’s just about building on top of this base. Please note Blitz is taking care of defaults RS aren’t necessarily (HTML5 block elements, hyphens and pagebreaks for selected elements, etc.).

Finally, although we try to rely on RS’ typefaces, typography has been fine tuned (scale, vertical rhythm, hyphens, etc.).

## Blitz’ Architecture

The various parts of Blitz have been organized using a folders structure. There are 6 folders named after their function:

1. core;
2. reference;
3. base;
4. extensions;
5. utils;
6. plugins.

### Core

Think of this folder as Blitz’ engine. It contains two files: 

1. `variables`;
2. `rhythm`.

Variables is like a config file in which you can customize settings.

Rhythm is the file which allows you to compute the typographic scale and vertical rhythm via functions using variables.

### Reference

The reference folder contains files you don’t want to be compiled to CSS. Those files provide mixins which are used to typeset your eBooks though.

By default, you’ll find 3 files in this folder: 

1. `hyphens` (parametric and static mixins for hyphenations);
2. `mixins` (stuff we don’t use but which could be of use e.g. generators)
3. `overrides` (both self-contained and RS’ overrides)

Should you not want to output utilities and pagebreaks, this is the folder in which you want to put those two files.

### Base

Base is to be considered the backbone of the CSS output. It consists of

1. reset;
2. page layout (`@page` and `body`);
3. typography for common elements;
3. `figure` and `img` styles.

This base should cover the needs of most eBooks (i.e. novels).

### Extensions

Extensions are parts you might not need at all.

All extensions are optional which means that you could delete those files, the CSS will be compiled anyway.

In this folder you’ll find files for:

- code; 
- lists;
- definition lists;
- medias (SVG, canvas, audio and video);
- rules i.e. `hr`;
- tables.

Those files are specific and serves one function so, for instance, you could add one for asides, another one for indexes, etc.

### Utils

Utils consists of functional classes you might not want to output in your CSS. Basically, you could put all of these into the “reference” folder. 

By default, we have decided to compile them.

In this folder you’ll find: 

- break (page-breaks);
- containers (wraps, width and height classes for `div`, `section`, `figure`, etc.);
- utilities i.e. classes with a single purpose (display, text align, margins, etc.).

Bear in mind they are used to style elements across the whole system though so you can’t delete those files and expect your CSS to compile.

### Plugins

Plugins are additional standalone parts you might not want to compile in the “core CSS”.

We’ve got two plugins right now: 

1. `blitz-mq` (media queries)
2. `blitz-kindle` (Kindle styles using media queries)

## Blitz.less

This file is meant to output your CSS. It’s basically a list of imports you can customize.

By default, it imports every other part of the framework—excepted Kindle and media queries. 

```
// Reference > won’t be output, utils can be imported as reference if you want
@import (reference) 'reference/hyphens';
@import (reference) 'reference/overrides';
@import (reference) 'reference/mixins';

// That's the stuff running Blitz
@import 'core/variables';
@import 'core/rhythm';

// Base is the foundation = styles you'll use in every book
@import 'base/reset';
@import 'base/page';
@import 'base/typo';
@import 'base/image';

// Optional extensions for lists, rules, tables, code and media (svg, canvas, etc.)
@import (optional) 'extensions/lists';
@import (optional) 'extensions/def-lists';
@import (optional) 'extensions/rules';
@import (optional) 'extensions/table';
@import (optional) 'extensions/code';
@import (optional) 'extensions/media';

// Utilities you may not want to export
// The last two are needed (like reference) but output by default
@import 'utils/containers';
@import 'utils/utilities';
@import 'utils/break';
```

Please also note it specifies an UTF-8 charset and namespaces for XHTML, EPUB, MathML and SVG.

```
@charset "UTF-8";
```

This charset may come in handy when using the `content` property since you can specify the real character instead of its hex value. 

```
@namespace h "http://www.w3.org/1999/xhtml/";
@namespace epub "http://www.idpf.org/2007/ops";
@namespace m "http://www.w3.org/1998/Math/MathML/";
@namespace svg "http://www.w3.org/2000/svg";
```

Those namespaces allow you to style stuff such as `epub:type`, MathML and SVG.

## Tools

The Blitz CSS Framework is making extensive use of variables and mixins.

The idea is that you can think of this as a “CSS API” which facilitates the creation of eBook-compliant stylesheets or templates. Indeed, Blitz lets you automate type scale and vertical rhythm, layout pages and elements in an eBook-friendly manner and use eBook-specific elements such as blank-line context change and asterisms.

### Variables

Blitz ships with a handful of global variables which allows for the creation of templates.

#### Typography

- `@body-font-size` (in pixels)
- `@base-fs` (`@body-font-size` computed in em)
- `@body-line-height` (ratio)
- `@base-margin` (`@body-line-height` computed in em)
- `@scale-factor` (typographic scale)

#### Horizontal margins (grid)

- `@step`

#### Colors

- `@primary-color`
- `@secondary-color`

#### Decorations

- `@border-width`
- `@border-style`
- `@border-color`

#### Lists

- `@ul-type`
- `@ul-type-nested`
- `@ul-type-position`
- `@ol-type`
- `@ol-type-nested`
- `@ol-type-position`

### Parametric mixins 

Blitz provides parametric mixins to enforce vertical rhythm, achieve top-notch hyphenation, override defaults and layout elements on the page. Is also ships with generators for color palettes and columns.

#### Typography

- `.rhythm(@font-scale, @margin-top, @margin-bottom)`
- `.fs(@font-scale)`
- `.hyphens-char(@hyphens-char)`
- `.hyphens-lines(@hyphens-lines)`
- `.hyphens-division(@hyphens-chars-min, @hyphens-chars-before, @hyphens-chars-after)`
- `.hyphens-zone(@hyphens-zone)`
- `.hyphens-limit(@hyphens-last)`
- `.override-iBooks-links(@overrideColor)`
- `.override-iBooks-locale(@lang)`
- `.override-tab-size(@tabs)`
- `.override-ul-type(@ulType)`
- `.override-ol-type()`

#### Layout

- `.width-center(@elWidth)`
- `.border-radius(@radius)`
- `.linear-gradient(@origin, @start, @stop)`

#### Generators 

- `.generate-subtle-palette(@baseColor)`
- `.generate-comp-palette(@baseColor)`
- `.generate-columns(@n)` (loop)

### Static mixins

Blitz offers a large amount of mixins which can be used in various places. Since it adopted the concept of functional CSS, those mixins are output as classes by default but they can also be used as shortcuts to style elements.

#### Typography

- `.hyphens-auto`
- `.disable-hyphens`
- `.manual-hyphens`
- `.hyphenate`
- `.override-italic`
- `.block`
- `.inline-block`
- `.hidden`
- `.clear`
- `.clear-left`
- `.clear-right`
- `.boxed`
- `.no-margin`
- `.no-margin-top`
- `.no-margin-bottom`
- `.no-margin-left`
- `.no-margin-right`
- `.margin-top-s`
- `.margin-top-m`
- `.margin-top-l`
- `.margin-top-xl`
- `.margin-top-xxl`
- `.margin-bottom-s`
- `.margin-bottom-m`
- `.margin-bottom-l`
- `.margin-bottom-xl`
- `.margin-bottom-xxl`
- `.margin-left-s`
- `.margin-left-m`
- `.margin-left-l`
- `.margin-left-xl`
- `.margin-left-xxl`
- `.margin-right-s`
- `.margin-right-m`
- `.margin-right-l`
- `.margin-right-xl`
- `.margin-right-xxl`
- `.sans`
- `.serif`
- `.monospace`
- `.humanist`
- `.oldstyle`
- `.justified`
- `.align-left`
- `.align-center`
- `.align-right`
- `.indent`
- `.no-indent`
- `.hanging-indent`
- `.fs-xxs`
- `.fs-xs`
- `.fs-s`
- `.fs-m`
- `.fs-l`
- `.fs-xl`
- `.fs-xxl`
- `.fs-jumbo`
- `.bold`
- `.italic`
- `.bold-italic` 
- `.small-caps`
- `.caps-to-small-caps`
- `.underline`
- `.break-before`
- `.break-after`
- `.break-inside`
- `.no-break-before`
- `.no-break-after`
- `.no-break-inside`

Yes, it does feel like we’ve mixinifying CSS but it’s up to you to use them.

#### Layout

The `.wrap` and `.float-[alignment]` classes specify both width and margins.

The `w-[number]` classes specify a width, the `h-[number]` specify an height.

- `.wrap-100`
- `.wrap-90`
- `.wrap-80`
- `.wrap-70`
- `.wrap-60` 
- `.wrap-50`
- `.wrap-40`
- `.wrap-30`
- `.wrap-20`
- `.wrap-10`
- `.w-100`
- `.w-90`
- `.w-80`
- `.w-70`
- `.w-60`
- `.w-50`
- `.w-40`
- `.w-30`
- `.w-20`
- `.w-10`
- `.h-100`
- `.h-90`
- `.h-80`
- `.h-70`
- `.h-60`
- `.h-50`
- `.h-40`
- `.h-30`
- `.h-20`
- `.h-10`
- `.float-left`
- `.float-right`

### eBook-specific elements

Blitz ships with bookish stuff that works well. Need an asterism? Got you covered! 

- `hr.transition` (i.e. blank line context change)
- `hr.asterism` (i.e. “* * *”)

## File by File

### Variables

Blitz ships with a handful of variables in variables.less: 

- basic typography;
- rhythm;
- colors;
- decorations;
- horizontal margins i.e. horizontal grid.

#### Basic typography

Blitz provides the following variables:

- `@body-font-size` in pixels (default is `16`);
- `@body-line-height` as a ratio (default is `1.5`).

While we advised against setting another value than `16` for `@body-font-size`, this variable may be useful if a font with a large x-height is embedded in your ePub file. 

The ratio specified for `@body-line-height` will be used to achieve vertical rhythm. Please make sure `@body-font-size` × `@body-line-height` results in an integer as we’re rounding up.

#### Rhythm

The only significant variable in this part is `@scale-factor`, all other variables are presets carefully chosen for eBooks.

To sum things up, Blitz will compute font sizes based on the scale you specify if you use the dedicated mixins.

#### Colors

You can specify a primary and secondary color, the default is `inherit`, which usually translates to black or white, depending on the reading mode selected e.g. night mode.

By default, those variables are used for links.

#### Decorations

Three variables allow you to specify the width, style and color of borders. 

- `@border-width`, in pixels
- `@border-style` e.g. solid, dotted, etc.
- `@border-color` (default is `currentColor`, which usually translates to black or white, depending on the reading mode selected e.g. night mode)

Those variables are used for tables but also asides with borders.

#### Horizontal grid

The variable `@step` is used for horizontal margins e.g. `blockquote`. The value is specified in `%` since it will be computed depending on the parent element (width of the screen minus margin/padding) and won’t reflow with `font-size` (user setting).

### Rhythm

Rhythm is a set of mixins which leverage typographic and rhythmic variables to achieve vertical rhythm automatically.

It introduces two functional variables which are being used in the shadows: 

- `@base-fs`, which is basically `1em`;
- `@base-margin`, which is the specified `line-height` as an `em` value (and not a ratio).

In addition, two powerful mixins are made available: 

- `.rhythm(@font-scale, @margin-top, @margin-bottom)`, which computes a `font-size`, a `line-height`, a `margin-top` and a `margin-bottom` from the arguments;
- `.fs(@font-scale)`, which computes a `font-size` and a `line-height` from the argument.

Those mixins enforce vertical rhythm and compute all values from the variables you set.

All those variables and mixins are used in `typo.less` by default.

### Hyphens

The whole [§8. Breaking Within Words](https://drafts.csswg.org/css-text-4/) is implemented in `hyphens.less`.

Please note this file is imported as a reference and mixins won’t be output in the CSS; they should be used in `typo.less`.

- `.hyphens-auto` enables hyphens
- `.hyphens-char(@hyphens-char: auto)` specifies the character which must be used
- `.hyphens-lines(@hyphens-lines: 2)` specifies the max number of consecutive lines which can be hyphenated
- `.hyphens-division(@hyphens-chars-min: 6, @hyphens-chars-before: 3, @hyphens-chars-after: 2)` specifies the minimum amount of characters for which a word might be hyphenated, the minimum number of characters before and after the hyphen
- `.hyphens-zone(@hyphens-zone: 10%)` specifies the zone in which hyphenation might happen
- `.hyphens-limit(@hyphens-last: always)` specifies hyphenation behavior at the end of elements, column, pages and spreads

In addition, three mixins are made available: 

- `.disable-hyphens` e.g. headings, tables, etc.
- `.manual-hyphens`, which must be used in combination with soft-hyphens
- `.hyphenate`, which is using the above parametric mixins to achieve hyphenation

### Overrides

Four mixins are provided: 

- `.override-italic`, which may come in handy for italic nested in italic;
- `.override-iBooks-links(@overrideColor: inherit)` to enforce a color in iBooks, even in night mode;
- `.override-iBooks-locale(@lang)` to override `-webkit-locale` in case `xml:lang` can’t be added to markup;
- `.override-tab-size(@tabs: 4)` for `pre`.

### Mixins

Think of these mixins as utilities. 

- `.width-center(@elWidth)` specifies a `width` and a `margin-left` to center the element it is used for (since `auto` is interpreted as `0` in legacy RMSDK)
- `.border-radius(@radius: 5px)` specifies a `border-radius`
- `.linear-gradient(@origin: left, @start: #f0f0f0, @stop: #8c8b8b)` specifies a `background-color` and a `background-image` as a `linear-gradient` (`background-image` won’t be overridden in night mode)
- `.generate-subtle-palette(@baseColor)` generates a subtle color palette based on the argument
- `.generate-comp-palette(@baseColor)` generates a complementary color palette based on the argument
- `.generate-columns(@n, @i: 1) when (@i =< @n)` generates an horizontal grid

### Reset

Reset was designed to… reset all elements.

It also makes sure HTML5 block elements are displayed as blocks in EPUB 2 reading systems.

Moreover, it’s a sanitized foundation we build upon. The benefits are manifold: 

- we avoid useless repetitions (DRY i.e. Don’t Repeat Yourself);
- we enforce backwards compatibility for HTML5 bloc elements;
- we make sure we don’t disable user settings;
- we fix some very specific bugs (e.g. text-align in Kobo iOS);
- etc. 

Here are the defaults.

```
block-elements {
  margin: 0;
  padding: 0;
  font-size: 1em;
  line-height: inherit;
  text-indent: 0;
  font-style: normal;
  font-weight: normal;
}

html5-block-elements {
  display: block;
}

headings {
  text-align: left;
}

epub3-toc-list {
  list-style: none !important;
}

epub3-landmarks-pagelist {
  display: none;
}

inline-elements {
  font-size: inherit;
  vertical-align: baseline;
  font-style: inherit;
  font-weight: inherit;
  color: inherit;
  text-decoration: none;
}
```


### Page

This is where we specify the “global layout” for `@page` and `body`.

### Typo

This file is meant to specify anything typography (font sizes, line-heights, rhythm, hyphens, page-breaks, etc.).

Typographic variables and mixins are used extensively for typesetting a maximum number of elements.

Also, humanist and old style font stacks based on Myriad Pro and Minion Pro are made available trough mixins and CSS classes.

### Image

`figure`, `figcaption` and `img` styles are specified in this file.

### Lists

This file contains specific variables to specify list style types (first and second level) as well as type position.

The resulting output specifies `list-style-type` and `list-style-position` for `ul` and `ol` (+ nested).

### Def lists

This file contains styles for `dl`, `dt` and `dd`. If your book contains a glossary, you’ll need to import it.

### Rules

This file provides several horizontal rules: 

- a vanilla `hr` i.e. a rule;
- a transition `hr` i.e. a blank-line context change;
- an asterism `hr` i.e. “* * *” achieved using an external SVG file.

### Table

Styles and classes for `table` are specified in this file.

### Code

Need preformatted text and/or code? Check this file.

### Containers

This file provides width (+ margins), height and float classes for containers.

### Media

Use this file in case you must specify styles for `audio` and `video`.

Moreover, default responsive dimensions for `canvas`, `iframe`, `svg` and `video` are set there.

### Utilities

Functional classes are provided in this file.

Those classes are mixins which are output by default but can eventually be used in your custom CSS.

- display: `.block`, `.inline-block` and `.hidden`
- clear: `.clear`, `.clear-left` and `.clear-right`
- `.boxed`, which applies a border to an element
- margins (top, bottom, left, right), computed based on `@base-margin` (vertical rhythm) and `@step` (horizontal grid)
- alignment: `.justify`, `.align-left`, `.align-center` and `.align-right`
- indents: `.indent`, `.no-indent` and `.hanging-indent`
- font-stacks
- font-sizes, which are computed based on the scale specified in variables
- character styles: `.bold`, `.italic`, `.bold-italic`, `.small-caps`, and `.caps-to-small-caps`

### Break

This file contains mixins for page-breaks. Those mixins are output as classes by default.

- `.break-before`
- `.break-after`
- `.break-inside`
- `.no-break-before`
- `.no-break-after`
- `.no-break-inside`