# Service Dropdown Close on Navigation - Analysis

## Problem Statement
When clicking any service link from the dropdown menu, the dropdown should close properly. This needs to work on both desktop (where dropdown is hover-based) and mobile (where entire navbar menu needs to close).

## Current Implementation Analysis

### Desktop Dropdown
- **Type**: Hover-based (`data-hover="true"`)
- **State Control**: Webflow JS adds/removes `w--open` class on `.navbar_dropdown-list`
- **Closing**: Automatically closes on mouse leave, but NOT when clicking links inside

### Mobile Menu
- **Type**: Click-based (hamburger button)
- **State Control**: Webflow JS adds/removes `w--open` class on `.w-nav-menu` and `.w-nav-button`
- **Closing**: Should close when links are clicked, but may not be working properly

### Service Links
- **Component**: React Router `NavLink` components
- **Location**: Inside `.navbar_dropdown-list`
- **Current Behavior**: Navigate correctly but don't close dropdown/menu

## Required Solution

### Desktop
1. On service link click → Remove `w--open` class from `.navbar_dropdown-list`
2. Close dropdown immediately when link is clicked

### Mobile
1. On service link click → Remove `w--open` class from `.w-nav-menu`
2. Remove `w--open` class from `.w-nav-button` (hamburger icon)
3. Close mobile menu immediately when link is clicked

## Implementation Strategy

### Option 1: React State + useEffect (Recommended)
- Add state to track dropdown/menu open state
- Use useEffect to sync with Webflow's DOM changes
- Add onClick handlers to service links to close dropdown/menu
- Use useRef to access DOM elements

### Option 2: DOM Manipulation Only
- Add onClick handlers to service links
- Directly manipulate DOM to remove `w--open` classes
- Simpler but less React-idiomatic

### Option 3: Event Delegation
- Listen for click events on dropdown links
- Close dropdown/menu when navigation occurs
- Use React Router's navigation events

## Recommended Approach: Option 1 + DOM Manipulation Hybrid

Why:
- Webflow JS already manages the state via classes
- We just need to trigger closing when links are clicked
- Can use direct DOM manipulation for simplicity
- Works with existing Webflow system

Implementation:
1. Create a function to close dropdown and mobile menu
2. Add onClick handler to each service NavLink
3. Function removes `w--open` class from:
   - `.navbar_dropdown-list` (desktop dropdown)
   - `.w-nav-menu` (mobile menu)
   - `.w-nav-button` (mobile hamburger button)

## Code Changes Needed

### 1. Add Close Function
```javascript
const closeDropdownAndMenu = () => {
  // Close desktop dropdown
  const dropdownList = document.querySelector('.navbar_dropdown-list.w--open');
  if (dropdownList) {
    dropdownList.classList.remove('w--open');
  }
  
  // Close mobile menu
  const navMenu = document.querySelector('.w-nav-menu.w--open');
  if (navMenu) {
    navMenu.classList.remove('w--open');
  }
  
  // Close mobile menu button
  const navButton = document.querySelector('.w-nav-button.w--open');
  if (navButton) {
    navButton.classList.remove('w--open');
  }
};
```

### 2. Add onClick to Service Links
```jsx
<NavLink
  to="/service/web-app-development"
  className="navbar_dropdown-link w-inline-block"
  onClick={closeDropdownAndMenu}
>
```

### 3. Handle Route Changes (Optional but Recommended)
Use useEffect with useLocation to close menu on route change:
```javascript
import { useLocation } from 'react-router-dom';

const location = useLocation();

useEffect(() => {
  closeDropdownAndMenu();
}, [location.pathname]);
```

## Testing Checklist

- [ ] Desktop: Click service link → Dropdown closes immediately
- [ ] Desktop: Hover over services → Dropdown opens (existing behavior)
- [ ] Desktop: Click service link → Navigates to service page
- [ ] Mobile: Click hamburger → Menu opens (existing behavior)
- [ ] Mobile: Click service link → Menu closes immediately
- [ ] Mobile: Click service link → Navigates to service page
- [ ] Mobile: After navigation, menu remains closed
- [ ] Desktop: After navigation, dropdown remains closed
- [ ] Other navbar links still work correctly
- [ ] Hamburger menu still toggles correctly

## Files to Modify

1. `src/Components/Header.jsx`
   - Add closeDropdownAndMenu function
   - Add onClick handlers to service NavLinks
   - Optionally add useEffect for route changes

## Alternative Considerations

### Prevent Default Navigation
- Should NOT prevent default - we want navigation to occur
- Just close the dropdown/menu before/during navigation

### Timing
- Close immediately on click (before navigation)
- Or use useEffect to close after navigation
- Immediate close provides better UX

### Multiple Dropdowns
- Current implementation has only one dropdown (Services)
- Solution should be scalable if more dropdowns are added later
