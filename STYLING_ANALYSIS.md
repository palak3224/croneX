# Deep Styling Analysis - croneX Application

## 📋 Table of Contents
1. [Color System & Theme](#color-system--theme)
2. [Background Styling](#background-styling)
3. [Card Styling Patterns](#card-styling-patterns)
4. [Hover Effects](#hover-effects)
5. [Animations](#animations)
6. [Typography System](#typography-system)
7. [Border Radius & Shape System](#border-radius--shape-system)
8. [Spacing System](#spacing-system)
9. [Layout Patterns](#layout-patterns)
10. [Component-Specific Styling](#component-specific-styling)

---

## 🎨 Color System & Theme

### Primary Color Palette
The application uses a sophisticated dark theme with blue and cyan accents:

**Dark Background Colors:**
- `--_primitives---colors--blue-darkest: #050a12` - Main background
- `--_primitives---colors--blue-darker: #0d182b` - Secondary background
- `--_primitives---colors--blue-dark: #223566` - Accent dark
- `--_primitives---colors--neutral-10: #181c22` - Card backgrounds
- `--_primitives---colors--neutral-20: #2d3038` - Borders/dividers
- `--_primitives---colors--neutral-0: #04070c` - Deepest dark

**Primary Accent Colors:**
- `--_primitives---colors--blue: #4a94f9` - Primary blue (#4A96F9 in some places)
- `--_primitives---colors--cyan-light: #53d9ff` - Light cyan accent
- `--_primitives---colors--cyan-dark: #34a4cf` - Dark cyan
- `--_primitives---colors--blue-light: #80b4fa` - Light blue
- `--_primitives---colors--blue-lighter: #dae9fd` - Lighter blue
- `--_primitives---colors--blue-lightest: #ecf4fe` - Lightest blue

**Neutral Grays:**
- `--_primitives---colors--neutral-100: #fdfbff` - Primary text (white)
- `--_primitives---colors--neutral-95: #eef0fa` - Light background
- `--_primitives---colors--neutral-90: #e0e2ec` - Border secondary
- `--_primitives---colors--neutral-80: #c4c6cf` - Secondary text, borders
- `--_primitives---colors--neutral-70: #a8abb4` - Tertiary text
- `--_primitives---colors--neutral-60: #8e9099` - Text tertiary
- `--_primitives---colors--neutral-50: #74777f` - Muted text
- `--_primitives---colors--neutral-40: #5b5e66`
- `--_primitives---colors--neutral-30: #43474e`

**Additional Accent Colors:**
- Teal: `#0fb4ba`
- Purple (Pricing): `#8a2be2`
- Pink (Danger): `#ff4081`
- Green (Success): `#4caf50`

### Color Schemes
The app implements two color schemes:
- **Color Scheme 1** (Dark): Primary scheme with dark backgrounds and light text
- **Color Scheme 2** (Light): Alternative scheme with light backgrounds and dark text

### Gradient Patterns
1. **Text Gradients:**
   - `.text-gradient-grey`: `linear-gradient(#106ce4, #c3cede)` - Blue to light blue-gray
   - `.text-gradient-blue`: Blue gradient variants
   - `.text-gradient-horizontal`: Horizontal gradient
   - `.text-gradient-vertical`: Vertical gradient

2. **Background Gradients:**
   - Contact icons: `linear-gradient(90deg, var(--_primitives---colors--blue), var(--_primitives---colors--cyan-light))`
   - Button gradients: `linear-gradient(90deg, #4A96F9 0%, #3b7dd6 100%)`
   - Project headings: `linear-gradient(90deg, var(--_primitives---colors--blue), var(--_primitives---colors--cyan-light))`

---

## 🌍 Background Styling

### Main Background
- **Primary Background**: `#050A12` (blue-darkest)
- **Page Wrapper**: Contains layout with `perspective: 1000px` and `backface-visibility: hidden` for performance
- **Body**: Dark theme with smooth scrolling optimized via Lenis

### Background Patterns

**1. Background Tiles Component:**
- Uses mask-image with linear gradients for fade effects
- Horizontal fade: `transparent → black (25%) → black (75%) → transparent`
- Vertical fade: `black (50%) → transparent`
- Creates a sophisticated vignette effect on background tiles

**2. Card Backgrounds:**
- Service cards: Background images with overlay on hover
- Default opacity on background images: `0` (hidden)
- Hover opacity: `1` (fully visible)
- Background color: `#0f1621` for cards, `#1a1f2e` for selected states

**3. Section Backgrounds:**
- Industry section boxes: `background: #fefefe0c` (semi-transparent white overlay)
- Tab containers: `background: #ffffff10` (10% white opacity)
- Testimonial cards: Multiple gradient overlays for depth

**4. Pricing Calculator Backgrounds:**
- Page container: `#050A12` with dashed top border: `border-top: 1px dashed #3a96ff`
- Option cards: `#0f1621` with `#2a3142` borders
- Selected cards: `#1a1f2e` background

---

## 🃏 Card Styling Patterns

### General Card Structure
All cards follow a consistent pattern:

**Service Cards (`.why_item`):**
- Background image wrapper (position: absolute, full coverage)
- Card content with icon wrapper, heading, and description
- Border effects and gradients on hover
- Transition: Smooth opacity changes

**Pricing Option Cards (`.option-card`):**
- Background: `#0f1621`
- Border: `1px solid #2a3142`
- Border-radius: `8px`
- Padding: `20px`
- Max-width: `350px`
- Box-shadow on hover: `0 4px 12px rgba(74, 150, 249, 0.15)`
- Selected state: `border-color: #4A96F9`, `box-shadow: 0 4px 12px rgba(74, 150, 249, 0.25)`

**Contact Cards:**
- Grid layout: `repeat(3, 1fr)` on desktop
- Min-height: `220px`
- Transform on hover: `translateY(-5px)` (lifts up)
- Circular icon wrapper: `4rem × 4rem` with gradient background

**Project Cards:**
- Image hover: `transform: scale(105%)`
- Border-radius: `15px`
- Object-fit: `cover` for images
- Transition: `0.3s ease all`

**Testimonial Cards:**
- Multiple gradient overlays (`.home_testimonials_gradient-1` and `.home_testimonials_gradient-2`)
- Border effect on hover
- All gradients and borders have `opacity: 0` by default, `opacity: 1` on hover

### Card Hover States
1. **Background Image Reveal**: Background images fade in from opacity 0 to 1
2. **Border Glow**: Border elements become visible with opacity transition
3. **Gradient Overlay**: Multiple gradient layers reveal on hover
4. **Transform Effects**: Cards lift up (`translateY(-5px)`) or scale up (`scale(105%)`)
5. **Shadow Enhancement**: Box-shadows become more prominent on hover

---

## ✨ Hover Effects

### Button Hovers

**Primary Buttons (`.button-primary`):**
```css
.button-primary:hover .button-primary_pattern {
  opacity: 0.6;  /* Pattern becomes visible */
}

.button-primary:hover .button_glow {
  opacity: 0.35;  /* Glow effect appears */
}
```

**Secondary Buttons:**
```css
.button-secondary:hover .button_glow {
  opacity: 0.35;
}
```

**Pricing Buttons:**
- Primary: `background-color: #3b7dd6` (darker blue)
- Secondary: `background-color: #7a26c9` (darker purple)
- Danger: `background-color: #e63973` (darker pink)
- Success: `background-color: #45a049` (darker green)
- Submit button: Gradient shifts to darker tones

### Card Hovers

**Service Cards:**
```css
.why_item:hover .why_background-image {
  opacity: 1;  /* Background image appears */
}
```

**Contact Cards:**
```css
.contact-card:hover {
  transform: translateY(-5px);  /* Lifts up */
}
```

**Project Images:**
```css
.projectCard img:hover {
  transform: scale(105%);  /* Slight zoom */
}
```

**Testimonial Cards:**
```css
.home_testimonials_item:hover .home_testimonials_gradient-1,
.home_testimonials_item:hover .home_testimonials_gradient-2,
.home_testimonials_item:hover .home_testimonials_border {
  opacity: 1;  /* All decorative elements appear */
}
```

**Resource Cards:**
```css
.home_resources_item:hover .home_resources_border {
  opacity: 1;
  margin-right: 1.5rem;  /* Border expands */
}

.home_resources_card:hover .home_resources_gradient-1,
.home_resources_card:hover .home_resources_gradient-2 {
  opacity: 1;
}
```

**Integration Items:**
```css
.integrations_item:hover .integrations_border {
  opacity: 1;
}

.integrations_item:hover .integrations_icon-hover {
  opacity: 1;
}
```

### Interactive Element Hovers

**Slider Arrows:**
```css
.slider-arrow:hover .slider-arrow-icon {
  color: var(--_primitives---colors--blue);
}
```

**Tab Links:**
```css
.tab-link:hover .tab-link_content {
  opacity: 1;
}

.tab-link.w--current .tab-link_glow,
.tab-link.w--current .tab-link_border,
.tab-link.w--current .tab-link_content {
  opacity: 1;  /* Active state styling */
}
```

**Social Media Links:**
```css
.social_link:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.social_link:hover .icon-embed-xsmall {
  color: var(--color-scheme-1--text-primary);  /* Changes to primary text color */
}
```

**Logo Infinite Scroll:**
```css
.logo_infinite-scroll:hover {
  animation-play-state: paused;  /* Pauses on hover */
}

.logo_infinite-scroll .logo_wrapper:hover {
  opacity: 1;  /* Logo becomes fully visible */
}

.logo_infinite-scroll .logo_wrapper:hover .logos_logo {
  filter: grayscale(0%) brightness(1);  /* Removes grayscale */
}
```

---

## 🎬 Animations

### Keyframe Animations

**1. Rotate Animation:**
```css
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```
- Used for: `.button_outline` - continuous 3s linear infinite rotation

**2. Light Animation:**
```css
@keyframes light {
  from { width: 25rem; }
  to { width: 0rem; }
}
```
- Used for: `.top-light_glow` - 2s ease-in-out infinite alternate (pulsing effect)

**3. Scroll Logos Animation:**
```css
@keyframes scroll-logos {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```
- Duration: `30s` (25s on mobile)
- Type: `linear infinite`
- Used for infinite logo scrolling
- Pauses on hover

### Transform Animations

**Accordion Icons:**
- Vertical line: Rotates `90deg` when active
- Horizontal line: Rotates `180deg` when active
- Used in: Products accordion, FAQ accordion

**Accordion Indicators:**
- Background color changes to cyan-light when active
- Box-shadow glow effect: `0 0 var(--_size---0-25rem) 0 hsla(214.6285714285714, 93.58%, 63.33%, 0.5)`

### Scroll-Based Animations
- Uses GSAP ScrollTrigger for scroll-triggered animations
- Elements with `[data-scroll]`, `[slide-in]`, `[reveal-item]` attributes
- Optimized with `will-change: transform, opacity` and `transform: translateZ(0)`

### Transition Timing
- Standard transitions: `0.2s ease`, `0.3s ease`
- Longer transitions: `0.3s ease all` for comprehensive property changes
- Button transitions: `all 0.2s ease`
- Social links: `transform 0.3s ease, opacity 0.3s ease`

---

## 📝 Typography System

### Font Families

**Headings:**
- Font: `"Open Sauce Sans"` (or "Open Sauce Sans"), Arial, sans-serif
- Variable: `--_typography---font-styles--heading`

**Body Text:**
- Font: `Inter`, Arial, sans-serif
- Variable: `--_typography---font-styles--body`

**Tags/Monospace:**
- Font: `"DM Mono"`, Arial, sans-serif
- Variable: `--_typography---font-styles--tag`

### Font Sizing
- Uses fluid typography with `clamp()` functions
- Base font size: `1rem` (responsive with media queries)
- At 1440px: `calc(0.8126951092611863rem + 0.20811654526534862vw)`
- At 479px: `calc(0.7494769874476988rem + 0.8368200836820083vw)`

### Text Styles

**Text Sizes (Classes):**
- `.text-size-small`
- `.text-size-regular`
- `.text-size-medium`
- `.text-size-large`

**Text Colors:**
- `.text-color-primary`: Primary text color (neutral-100)
- `.text-color-secondary`: Secondary text (neutral-80)
- `.text-color-tertiary`: Tertiary text (neutral-60)

**Text Effects:**
- `.text-gradient-grey`: Blue to light blue-gray gradient
- `.text-gradient-blue`: Blue gradient variants
- `.text-gradient-horizontal`: Horizontal gradient
- `.text-gradient-vertical`: Vertical gradient
- `.text-gradient-blue-3`: Specific blue gradient variant

**Text Utilities:**
- `.text-style-1line`: Single line with ellipsis
- `.text-style-2lines`: Two lines with ellipsis
- `.text-style-3lines`: Three lines with ellipsis
- `.text-style-5lines`: Five lines with ellipsis
- `.truncate-width`: Single line truncation with ellipsis

**Heading Styles:**
- `.heading-style-h1` through `.heading-style-h6`
- Font weights: `600-700`
- Line heights: Adjusted for readability

### Text Selection
```css
::selection {
  color: var(--_primitives---colors--neutral-100);
  background: var(--_primitives---colors--blue);
}
```

---

## 🔘 Border Radius & Shape System

### Standard Border Radius Values
- Small: `var(--_size---xxsmall)` = `0.5rem` (8px)
- Medium: `var(--_size---xsmall)` = `1rem` (16px)
- Large: `var(--_size---small)` = `1.5rem` (24px)

### Component-Specific Radius
- **Cards**: `8px` (Pricing cards), `10px` (Industry tabs), `15px` (Project images), `18px` (Tab containers), `24px` (Industry boxes)
- **Buttons**: `6px` (Pricing buttons), `10px` (Industry buttons)
- **Icons**: `50%` (Circular icons - `4rem` diameter)
- **Form Inputs**: `6px`

### Shape Patterns
- Circular: `border-radius: 50%` for icon wrappers
- Rounded corners: Consistent use across interactive elements
- Sharp corners: Reserved for specific layouts (background tiles)

---

## 📏 Spacing System

### Fluid Spacing System
Uses CSS custom properties with `clamp()` for responsive spacing:

```css
--_size---medium: clamp(1.5rem, 0.8478rem + 1.7528vw, 2rem);
--_size---large: clamp(2rem, 1.0074rem + 2.9596vw, 3rem);
--_size---xlarge: clamp(2.5rem, 2.072rem + 2.14vw, 4rem);
--_size---xxlarge: clamp(3rem, 2.428rem + 2.86vw, 5rem);
--_size---huge: clamp(3.5rem, 2.786rem + 3.57vw, 6rem);
--_size---xhuge: clamp(4rem, 3.142rem + 4.29vw, 7rem);
--_size---8rem: clamp(4.5rem, 3.5rem + 5vw, 8rem);
--_size---9rem: clamp(5rem, 3.858rem + 5.71vw, 9rem);
--_size---xxhuge: clamp(5.5rem, 4.214rem + 6.43vw, 10rem);
--_size---12rem: clamp(6rem, 4.286rem + 8.57vw, 12rem);
```

### Spacing Utilities
- `.spacer-0-75rem`: `0.75rem`
- `.spacer-1-25rem`: `1.25rem`
- `.spacer-xsmall`, `.spacer-small`, `.spacer-medium`, `.spacer-large`, `.spacer-xlarge`, `.spacer-xxlarge`

### Fixed Spacing Values
- **Padding**: `20px`, `15px`, `40px`, `60px`, `80px`, `100px`, `120px`
- **Gaps**: `1rem`, `1.5rem`, `2rem`, `3rem`, `4rem`
- **Margins**: Various responsive values

### Responsive Spacing
- Desktop: Full spacing values
- Tablet (≤991px): Reduced spacing
- Mobile (≤767px): Further reduced spacing
- Small mobile (≤479px): Minimal spacing

---

## 📐 Layout Patterns

### Container System
- `.container-small`
- `.container-medium`
- `.container-large`
- Max-widths set, centered with `margin: 0 auto`

### Grid Layouts
- Service cards: Responsive grid with `w-layout-grid`
- Pricing options: `repeat(auto-fit, minmax(280px, 1fr))`
- Contact cards: `repeat(3, 1fr)` → `1fr` on mobile
- Industry content: `1fr 1fr` → `1fr` on mobile

### Flexbox Patterns
- Header navigation: Flex row with space-between
- Social media icons: Flex row with gap
- Button groups: Flex with gap and wrap
- Card content: Flex column layouts

### Position Utilities
- `.text-align-center`
- `.align-center`
- `.max-width-xsmall`, `.max-width-small`, `.max-width-medium`, `.max-width-large`, `.max-width-xlarge`

### Overflow & Scrolling
- `.no-scrollbar`: Hides scrollbars while maintaining scroll
- Horizontal overflow: `overflow-x: hidden` on html/body
- Mask gradients for fade effects on scrollable areas

---

## 🎯 Component-Specific Styling

### Navbar
- Background: Transparent with backdrop (`.navbar_background`)
- Logo: Switches between base and alternate based on color scheme
- Dropdown: Background image with fade effects
- Mobile menu: Hamburger icon with animated lines
- Color scheme switching: Different logos/buttons for light/dark schemes

### Header/Hero Section
- Background tiles: Masked gradient effects
- Video/image wrapper: Responsive with object-fit
- Text overlays: Gradient text effects

### Service Cards
- Structure: Background image + content overlay
- Icon wrapper: `1x1-large` sized icons
- Content: Flex column with spacing
- Hover: Full background reveal + border effects

### Pricing Calculator
- Step indicators: Circular with connecting lines
- Option cards: Grid layout with selection states
- Form inputs: Dark theme with blue focus states
- Progress visualization: Step-by-step flow

### Industry Section
- Tabs: Horizontal scroll with active states
- Content grid: 2-column → 1-column responsive
- Box backgrounds: Semi-transparent overlays
- Icons: Colored backgrounds that change on active

### Testimonials
- Card structure: Multiple gradient layers
- Hover effects: Gradient reveals + border animations
- Layout: Responsive grid

### Projects
- Sticky heading: `position: sticky; top: 110px`
- Image grid: Flex wrap with space-between
- Image sizing: `49%` width, uniform `300px` height
- Hover: Scale transform

### Footer
- Layout: Multi-column responsive
- Social icons: Circular hover effects
- Links: Color inheritance with hover states

### Contact Cards
- Icon wrappers: Gradient circular backgrounds
- Transform: Lift on hover
- Background: Image reveal on hover

### Integrations
- Logo grid: Infinite scroll with mask fade
- Grayscale filter: Applied by default, removed on hover
- Opacity transitions: Smooth logo visibility changes

---

## 🎨 Design Principles Summary

### 1. **Dark-First Design**
- Primary dark theme with `#050A12` background
- Light scheme as alternative with proper variable mapping

### 2. **Layered Depth**
- Multiple gradient layers for visual depth
- Opacity transitions for smooth reveals
- Z-index stacking for proper layering

### 3. **Smooth Interactions**
- Consistent transition timing (0.2s - 0.3s)
- Transform-based animations (translate, scale, rotate)
- Opacity-based reveals for non-intrusive effects

### 4. **Performance Optimization**
- `will-change` declarations for animated elements
- `transform: translateZ(0)` for GPU acceleration
- `contain: layout style paint` for page wrapper
- Optimized scroll performance with Lenis

### 5. **Responsive Fluidity**
- Fluid typography and spacing with `clamp()`
- Breakpoint-based adjustments (479px, 767px, 991px, 1440px, 1920px)
- Flexible grid systems

### 6. **Visual Hierarchy**
- Gradient text for emphasis
- Size variations for importance
- Color opacity for secondary content
- Spacing for content grouping

### 7. **Accessibility**
- Focus states: `outline: 0.125rem solid #4d65ff`
- Text selection: High contrast blue background
- Keyboard navigation support
- Semantic HTML structure

---

## 🔧 Technical Implementation Notes

### CSS Architecture
- CSS Custom Properties (Variables) for theming
- BEM-like naming conventions (`.component_element--modifier`)
- Utility classes for common patterns
- Component-specific stylesheets (Pricing.css, Industry.css)

### Animation Libraries
- GSAP (GreenSock Animation Platform)
- ScrollTrigger for scroll animations
- SplitText for text animations
- Custom JavaScript for interactive elements

### Performance Features
- Lenis smooth scroll
- GPU-accelerated transforms
- Will-change optimizations
- Contain properties for layout isolation

### Browser Compatibility
- Webkit prefixes for mask-image
- Fallbacks for older browsers
- Progressive enhancement approach

---

## 📊 Style Statistics

- **Color Variables**: 40+ defined colors
- **Spacing Scales**: 10+ fluid spacing sizes
- **Border Radius Values**: 6+ standard sizes
- **Animation Types**: 3 keyframe animations + multiple transform animations
- **Hover States**: 15+ component-specific hover effects
- **Gradient Patterns**: 5+ text gradient styles + multiple background gradients
- **Breakpoints**: 5 responsive breakpoints

---

This comprehensive styling system creates a cohesive, modern, and performant user interface with smooth interactions and clear visual hierarchy.
