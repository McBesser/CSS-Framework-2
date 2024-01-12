# CSS-Framework-2

### prefix
Standard prefix: cssf (settings.prefix)
e.g.: 
`cssf--p10`


### subdivision
`p16px` = property, number, unit
`p_16px` = property (number, unit; chaining with "_")
`flex_1_1` = property (number; chaining with "_")
e.g.:
`p16px` (`padding16px`; p (short) = padding)
use e.g.: 
`cssf--p16px` = padding: 16px
`cssf--p16` = padding: 1rem
`cssf--p_16` = padding: 16
`cssf--p_16px` = padding: 16px
`cssf--p_16pxrem` = padding: 1rem
`cssf--padding_16px` = padding: 16px
`cssf--f_1_1_atuo` = flex: 1 1 auto
`cssf--flex_1_1_atuo` = flex: 1 1 auto
`cssf--my16` = margin-top: 1rem; margin-bottom: 1rem
`cssf--p16--m16` = padding: 1rem; margin: 1rem

### shorts
- shorten single property
- settings.shorts Object; key = Shortener, value = long version or array with many long versions
e.g.:
```
'm': 'margin',
'my': ['margin-top', 'margin-bottom'],
```
use e.g.: `cssf--m16`, `cssf--margin16`, `cssf--m_16pxrem`
### alias
- Shorten chaining of commands
- settings.alias Object; 
- Placeholder
e.g.:
```
'test-br2': 'br1_solid--color_white',
'bg-var': 'bg_var-color-§0',
```
use e.g.: `cssf--bg-var_1` = bg_var-color-1
### templates
- settings.templates Object
- placeholder: §0, §1, §...
e.g.:
```
'grid-layout-standard': '[full-width-start] minmax(§0, 1fr) [outbreak-start] minmax(0, calc((§2 - §1) / 2)) [content-start] min(100% - (§0 * 2), §1) [content-end] minmax(0, calc((§2 - §1) / 2)) [outbreak-end] minmax(§0, 1fr) [full-width-end]',
'clamp': 'clamp(§0, §1, §2)',
```
use e.g.: `cssf--tpl-clamp_font-size_2px_3px_4px`

### media query / container query / color mode
- container / media queries are sorted below and from small to large
- allways set: min-width
e.g.:
`cssf--p10`
`cssf--mq1200--p5`
- mq = media-query (media)
- cq = container-query (container)
more e.g.:
alias
```
'mq': 'media',
'mqd': 'media-dark',
'mql': 'media-light',
'cq': 'container',
'cqd': 'container-dark',
'cql': 'container-light',
```

### calc shorts
- ca = addition
- cs = subtraction
- cm = multiplication
- cd = division
e.g. `m16_cd2int` = margin: calc(1rem / 2);

### special features / notes
- media- / container queries focus Pixel: mq1200 = 1200 Pixel (@media... min-width: 1200px)
- Properties Focus rem: m16 = 1rem (margin: 1rem)
- values have not Focus: m_16 = 16 (margin: 16)
- convert px to rem: m_16pxrem = 1rem (margin: 1rem)
- set var(): `cssf--background_var-bg1` = background: var(--bg1)
- set var value: `cssf--val-bg1_black` = --bg1: black 
- `cssf--color_hex-ffffff` = color: #ffffff
- `cssf--cfn-clamp_font-size_0_1200_16_32` = font-size: clamp( 1rem, 1rem + 1.3333333333333335vw, 2rem );
- fn-rgb_bg_255_op-c_0_op-c_0


### legend
#### starts with
cfn- = custom function (js function)
fn- = function (css function)
op- = operation (sign)
op-ca, op-add = addition `+`
op-cs, op-sub = subtraction `-`
op-cm, op-mul = multiplication `*`
op-cd, op-div = division `/`
op-op = open parenthesis `(`
op-cp = close parenthesis `)`
op-c = comma `,`
op-p = point `.`
mq- = media-query (media)
cq- = container-query (container)
val- = value
var- = Variable
str- = string
hex- = hexadecimal
uc- = unicode (backslash)
#### ends with
int = number is integer (not converting)
pxrem = convert px to rem

### format
[] = optional
_ = value(s)
-- = more instructions
prefix--[breakpointEtc.--][prefix-]property[NumberU][nit][_...][--...]
