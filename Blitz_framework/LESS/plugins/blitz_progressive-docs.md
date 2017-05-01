# Blitz Progressive Enhancements Plugin

## Summary

This plugin provides an “API” for progressive enhancements.

It ships with:

1. Feature queries;
2. Parametric mixins;
3. static mixins.

Feedback at [Issue #12](https://github.com/FriendsOfEpub/Blitz/issues/12).

## Details

### Feature queries

You’re likely to encounter a steep learning curve if you're not familiar with passing rulesets in a mixin because that’s definitely a new layer of abstraction I could not bypass—due to preprocessors’ limitations regarding `@supports`.

Syntax is the same as the query: 

- `@supports feature` becomes `.supports-feature`;
- `@supports not feature` becomes `.supports-not-feature`.

To sum up, this is how you use them

```
.small-caps {
  /* solid styles for less-capable Reading Systems */

  .supports-true-sc({
    .true-sc;
  });
}
```

or, if you want to gather several declarations in the same feature query…

```
.supports-true-sc({
  h1, h2, h3,
  .small-caps {
    .true-sc;
  }
});
```

What differentiates those mixins from others is the javascriptesque `({ … })` only. It’s really hard to tell the difference at first sight. 

Now, enhancements absolutely need this or else you’ll have issues all over the place in Reading Systems using Adobe’s ePub2 RMSDK.

### Mixins

There’s a bunch of new mixins you might want to use for initial-letter, reflowable images with a caption, etc.

To make things clearer, defaults have been set for some arguments—and yep, you do have to pass some arguments as strings so I’m not sure at all it’s worth it.

### EPUB 3 Utilities

They’ve been designed as a reference so that they are not output in the CSS. The assumption is that if they were output by default, people could maybe use them without feature queries (`@supports`).

You’ve got mixins for flexbox, vertical-align—which relies on flexbox—, objects sizing and open type features. 

Mixins’ names match features’ names whenever possible.

### Usage

Get used to this syntax although it’s a pita… 

```
h1 {
  .align-left;
  .italic;

  .supports-ss01({
    .override-italic;
    .ss01;
  });
}
```

The feature query will bubble up even if it’s nested so no worries.

You can also use several queries, like

```
h1 {
  .align-left;
  .italic;

  .supports-not-ss01({
    .override-italic;
    font-family: "embedded alternative font", serif;
  });

  .supports-SS01({
    .override-italic;
    .ss01;
  });
}
```

Both queries will bubble up as expected.

Let’s take a more complex example. 

```
/*section*/
.copyrights {
  margin-top: 20%;
}

.copyrights p {
  .fs-xs;
  .align-center;
}

.supports-flex({
  .copyrights {
    margin: 0;
    .valign-bottom;
  }

  .copyrights p {
    .align-left;
    .no-break-inside;
  }
});
```

If you want to gather declarations in the same feature query, especially as performance may suffer if there are too many feature queries in your CSS, then you have to nest declarations in the mixin.

## API

### Feature Queries

#### Layout

- `.supports-drop-cap({/* CSS rules */})` (alias for `initial-letter`)
- `.supports-not-drop-cap({/* CSS rules */})` (alias for `initial-letter`)
- `.supports-flex({/* CSS rules */})`
- `.supports-not-flex({/* CSS rules */})`
- `.supports-calc-width({/* CSS rules */})`
- `.supports-not-calc-width({/* CSS rules */})`
- `.supports-calc-height({/* CSS rules */})`
- `.supports-not-calc-height({/* CSS rules */})`

#### Units

- `.supports-ex({/* CSS rules */})`
- `.supports-not-ex({/* CSS rules */})`
- `.supports-ch({/* CSS rules */})`
- `.supports-not-ch({/* CSS rules */})`
- `.supports-vh({/* CSS rules */})`
- `.supports-not-vh({/* CSS rules */})`
- `.supports-vmin({/* CSS rules */})`
- `.supports-not-vmin({/* CSS rules */})`

#### OTF

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
- `.supports-case({/* CSS rules */})`
- `.supports-not-case({/* CSS rules */})`
- `.supports-titling({/* CSS rules */})`
- `.supports-not-titling({/* CSS rules */})`
- `.supports-calt({/* CSS rules */})`
- `.supports-not-calt({/* CSS rules */})`
- `.supports-salt({/* CSS rules */})`
- `.supports-not-salt({/* CSS rules */})`
- `.supports-swash({/* CSS rules */})`
- `.supports-not-swash({/* CSS rules */})`
- `.supports-ss01({/* CSS rules */})`
- `.supports-not-ss01({/* CSS rules */})`
- `.supports-ss02({/* CSS rules */})`
- `.supports-not-ss02({/* CSS rules */})`
- `.supports-ss03({/* CSS rules */})`
- `.supports-not-ss03({/* CSS rules */})`
- `.supports-hist({/* CSS rules */})`
- `.supports-not-hist({/* CSS rules */})`
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

### Parametric Mixins

#### Layout

- `.initial-letter(@size : 3, @sink : 3)`
- `.flex-base(@grow, @shrink, @basis)`
- `.reflowable-height(@img : 98vh, @caption : 3em, @min : 300px, @max : 1400px)`
- `.background-size(@x, @y)`
- `.background-position(@x, @y)`
- `.text-align-last(@align : center)`
- `.calc(@prop, @val1, @operator : "+", @val2)` (operator must have quotes)

#### OTF

- `.salt(@alt : 1)`
- `.swsh(@alt : 1)`
- `.ss(@alt : "01")` (argument must have quotes)

### Static Mixins

#### Layout

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

#### Objects Sizing

- `.fit-contain` (alias for `object-fit`)
- `.fit-fill` (alias for `object-fit`)
- `.fit-cover` (alias for `object-fit`)
- `.fit-scale` (alias for `object-fit`)
- `.fit-none` (alias for `object-fit`)
- `.bg-contain` (alias for `background-size`)
- `.bg-cover` (alias for `background-size`)

#### OTF

- `.kern`
- `.no-kern`
- `.clig`
- `.dlig`
- `.no-liga`
- `.true-sc`
- `.c2sc`
- `.case`
- `.titling`
- `.calt`
- `.salt-1`
- `.salt-2`
- `.salt-3`
- `.swsh-1`
- `.swsh-2`
- `.swsh-3`
- `.ss01`
- `.ss02`
- `.ss03`
- `.hist`
- `.lnum`
- `.pnum`
- `.onum`
- `.tnum`
- `.slash`
- `.frac`
- `.stacked`
- `.ordinal`
- `.sups`
- `.subs`
