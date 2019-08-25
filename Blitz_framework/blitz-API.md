# Blitz doc as an API reference

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

#### Static

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

### Layout

#### Parametric (args)

- `.width-center(@elWidth)`
- `.border-radius(@radius)`
- `.linear-gradient(@origin, @start, @stop)`

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

### Enhancements 

**⚠️ Those mixins must be used in combination with feature queries.**

#### Parametric

- `.initial-letter(@size : 3, @sink : 3)`
- `.flex-base(@grow, @shrink, @basis)`
- `.reflowable-height(@img : 98vh, @caption : 3em, @min : 300px, @max : 1400px)`
- `.background-size(@w, @h)`
- `.background-position(@x, @y)`
- `.text-align-last(@align : center)`
- `.calc(@prop, @val1, @operator : "+", @val2)` (operator must have quotes)

#### Static

- `.drop-cap` (must be used with `:first-letter` or won’t work)
- `.flex`
- `.flex-col`
- `.flex-wrap`
- `.flex-start`
- `.flex-center`
- `.flex-end`
- `.flex-between`
- `.flex-around`
- `.valign-center` (`min-height: 95vh` + `.flex` + `.flex-col` + `.flex-center`)
- `.valign-bottom` (`min-height: 95vh` + `.flex` + `.flex-col` + `.flex-end`)
- `.valign-between` (`min-height: 95vh` + `.flex` + `.flex-col` + `.flex-between`)
- `.valign-around` (`min-height: 95vh` + `.flex` + `.flex-col` + `.flex-around`)
- `.fit-contain` (alias for `object-fit`)
- `.fit-fill` (alias for `object-fit`)
- `.fit-cover` (alias for `object-fit`)
- `.fit-scale` (alias for `object-fit`)
- `.fit-none` (alias for `object-fit`)
- `.bg-contain` (alias for `background-size`)
- `.bg-cover` (alias for `background-size`)
- `.kern`
- `.no-kern`
- `.clig`
- `.dlig`
- `.no-liga`
- `.true-sc`
- `.c2sc`
- `.titling`
- `.calt`
- `.lnum`
- `.pnum`
- `.onum`
- `.tnum`
- `.lnum-tnum`
- `.lnum-pnum`
- `.onum-pnum`
- `.slash`
- `.frac`
- `.stacked`
- `.ordinal`
- `.sups`
- `.subs`

## Namespaces (packages)

- `#height-vh`

## Feature Queries

### Layout

- `.supports-initial-letter({/* CSS rules */})`
- `.supports-not-initial-letter({/* CSS rules */})`
- `.supports-flex({/* CSS rules */})`
- `.supports-not-flex({/* CSS rules */})`
- `.supports-calc-width({/* CSS rules */})`
- `.supports-not-calc-width({/* CSS rules */})`
- `.supports-calc-height({/* CSS rules */})`
- `.supports-not-calc-height({/* CSS rules */})`

### Units

- `.supports-ex({/* CSS rules */})`
- `.supports-not-ex({/* CSS rules */})`
- `.supports-ch({/* CSS rules */})`
- `.supports-not-ch({/* CSS rules */})`
- `.supports-vh({/* CSS rules */})`
- `.supports-not-vh({/* CSS rules */})`
- `.supports-vmin({/* CSS rules */})`
- `.supports-not-vmin({/* CSS rules */})`

### OTF

- `.supports-kern({/* CSS rules */})`
- `.supports-not-kern({/* CSS rules */})`
- `.supports-clig({/* CSS rules */})`
- `.supports-not-clig({/* CSS rules */})`
- `.supports-dlig({/* CSS rules */})`
- `.supports-not-dlig({/* CSS rules */})`
- `.supports-no-liga({/* CSS rules */})` (beware the syntax)
- `.supports-not-no-liga({/* CSS rules */})` (beware the syntax)
- `.supports-true-sc({/* CSS rules */})`
- `.supports-not-true-sc({/* CSS rules */})`
- `.supports-c2sc({/* CSS rules */})`
- `.supports-not-c2sc({/* CSS rules */})`
- `.supports-titling({/* CSS rules */})`
- `.supports-not-titling({/* CSS rules */})`
- `.supports-calt({/* CSS rules */})`
- `.supports-not-calt({/* CSS rules */})`
- `.supports-lnum({/* CSS rules */})`
- `.supports-not-lnum({/* CSS rules */})`
- `.supports-pnum({/* CSS rules */})`
- `.supports-not-pnum({/* CSS rules */})`
- `.supports-onum({/* CSS rules */})`
- `.supports-not-onum({/* CSS rules */})`
- `.supports-tnum({/* CSS rules */})`
- `.supports-not-tnum({/* CSS rules */})`
- `.supports-slash({/* CSS rules */})`
- `.supports-not-slash({/* CSS rules */})`
- `.supports-frac({/* CSS rules */})`
- `.supports-not-frac({/* CSS rules */})`
- `.supports-stacked({/* CSS rules */})`
- `.supports-not-stacked({/* CSS rules */})`
- `.supports-ordinal({/* CSS rules */})`
- `.supports-not-ordinal({/* CSS rules */})`
- `.supports-sups({/* CSS rules */})`
- `.supports-not-sups({/* CSS rules */})`
- `.supports-subs({/* CSS rules */})`
- `.supports-not-subs({/* CSS rules */})`

## Keywords for media queries (variables)

- `@mobi7`
- `@kf8`