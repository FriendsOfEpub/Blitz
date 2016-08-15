# Blitz doc as an API

## Variables

### Typography

- `@body-font-size` (px)
- `@base-fs` (`@body-font-size` in em)
- `@body-line-height` (ratio)
- `@base-margin` (`@body-line-height` in em)
- `@scale-factor` (typographic scale)

### Horizontal margins (grid)

- `@step` (%)

### Colors

- `@primary-color`
- `@secondary-color`

### Decorations

- `@border-width` (px)
- `@border-style`
- `@border-color`

### Lists

- `@ul-type`
- `@ul-type-nested`
- `@ul-type-position`
- `@ol-type`
- `@ol-type-nested`
- `@ol-type-position`

## Mixins

### Typography

#### Parametric (args)

- `.rhythm(@font-scale, @margin-top, @margin-bottom)`
- `.fs(@font-scale)`
- `.hyphens-auto(@hyphens-lang)`
- `.hyphens-char(@hyphens-char)`
- `.hyphens-lines(@hyphens-lines, @hyphens-lines-before, @hyphens-lines-after)`
- `.hyphens-division(@hyphens-chars-min, @hyphens-chars-before, @hyphens-chars-after)`
- `.hyphens-zone(@hyphens-zone)`
- `.hyphens-limit(@hyphens-last)`
- `.override-iBooks-links(@overrideColor)`
- `.override-tab-size(@tabs)`
- `.override-ul-type(@ulType)`
- `.override-ol-type()`

#### Static

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
- `.margin-top-s`
- `.margin-top-m`
- `.margin-top-l`
- `.margin-top-xl`
- `.margin-top-xxl`
- `.margin-left-s`
- `.margin-left-m`
- `.margin-left-l`
- `.margin-left-xl`
- `.margin-left-xxl`
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
- `.break-before`
- `.break-after`
- `.break-inside`
- `.no-break-before`
- `.no-break-after`
- `.no-break-inside`

### Layout

#### Parametric (args)

- `.width-center(@elWidth)`
- `.border-radius(@radius)`
- `.linear-gradient(@origin:, @start, @stop)`

#### Static

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

### Generators 

- `.generate-subtle-palette(@baseColor)`
- `.generate-comp-palette(@baseColor)`
- `.generate-columns(@n)`

## Namespaces (packages)

- `#img-vh;`
- `#height-vh`;
- `#responsive-table`

## Keywords for media queries (variables)

### Global 

- `@screen`
- `@small`
- `@medium`
- `@large`
- `@landscape`
- `@portrait`

### Device pixel ratio

- `@non-retina`
- `@retina`

### Device aspect ratio

- `@4-3`
- `@16-9`
- `@16-10`

### Apple

- `@ipadPro`
- `@ipad`
- `@iphone6plus`
- `@iphone6`
- `@iphone5`
- `@iphone`

### Amazon Kindle

- `@mobi7`
- `@kf8`
- `@voyage`
- `@voyage-portrait`
- `@voyage-landscape`
- `@paperwhite`
- `@paperwhite-portrait`
- `@paperwhite-landscape`
- `@kindle`
- `@kindle-portrait`
- `@kindle-landscape`
- `@fire`

### eInk

- `@uhd`
- `@uhd-portrait`
- `@uhd-landscape`
- `@hd`
- `@hd-portrait`
- `@hd-landscape`
- `@sd`
- `@sd-portrait`
- `@sd-landscape`