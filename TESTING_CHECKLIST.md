# QuickCart Testing Checklist

## 6.1 Routing Tests
- [ ] Home page loads at `/`
- [ ] Category pages work (`/category/Electronics`, `/category/Accessories`, etc.)
- [ ] Cart page loads at `/cart`
- [ ] All navigation links work
- [ ] Browser back/forward buttons work
- [ ] URLs update correctly when navigating
- [ ] No page reloads occur (SPA behavior)
- [ ] Invalid routes don't crash app

## 6.2 Search & Filter Tests
- [ ] Search bar filters products in real-time
- [ ] Search is case-insensitive
- [ ] Shows correct result count
- [ ] "No results" message appears when appropriate
- [ ] Clearing search shows all products
- [ ] Category pages filter products correctly
- [ ] Search works across name, description, and category

## 6.3 Cart Functionality Tests
- [ ] Can add items from home page
- [ ] Can add items from category pages
- [ ] Cart count updates in header everywhere
- [ ] Cart sidebar opens/closes correctly
- [ ] Cart page displays all items correctly
- [ ] Quantity + button increases quantity
- [ ] Quantity - button decreases quantity
- [ ] Remove item button works on cart page
- [ ] Remove item button works on sidebar
- [ ] Total price calculates correctly
- [ ] Cart badge shows correct count

## 6.4 Persistence Tests
- [ ] Add items to cart
- [ ] Refresh page (F5) - items persist ✅
- [ ] Close tab completely and reopen - items persist ✅
- [ ] Open in new incognito window - cart empty ✅
- [ ] Clear localStorage in DevTools → cart becomes empty
- [ ] Add new items - they save properly to localStorage
- [ ] Check DevTools → Application → Local Storage → quickcart-cart

## 6.5 Context API Tests
- [ ] No prop drilling (components use useCart())
- [ ] State updates across all components simultaneously
- [ ] No console errors about context
- [ ] React DevTools shows CartProvider properly
- [ ] useCart() hook works in all components
- [ ] Context value includes: cart, addToCart, removeFromCart, updateQuantity, toggleCart, getTotalItems, getTotalPrice, isLoading

## 6.6 Edge Cases
- [ ] Empty cart state on cart page shows message
- [ ] Empty cart sidebar shows message
- [ ] Empty search results show helpful message
- [ ] Invalid categories show "No products found" + back link
- [ ] Quantity can't go below 0 (removes item instead)
- [ ] Adding same item twice increases quantity (not duplicated)
- [ ] Removing all quantity removes item from cart

## 6.7 Responsive Design Tests
### Desktop (> 768px)
- [ ] Header layout looks good
- [ ] Navigation shows all links
- [ ] Cart page shows 2-column layout
- [ ] Cart summary sidebar is sticky
- [ ] All buttons are properly sized

### Tablet (480px - 768px)
- [ ] Navigation items visible
- [ ] Cart page stacks to 1 column
- [ ] Summary sidebar is not sticky
- [ ] Content is readable

### Mobile (< 480px)
- [ ] Header is compact
- [ ] Navigation scrolls horizontally if needed
- [ ] Search bar is usable
- [ ] Cart items stack properly
- [ ] Buttons have touch-friendly size (min 44px)
- [ ] No horizontal scrolling

## 6.8 Performance Tests
- [ ] No console errors
- [ ] No console warnings
- [ ] Fast page transitions (< 300ms)
- [ ] Smooth animations
- [ ] No memory leaks (check DevTools)
- [ ] Images load properly

## 6.9 Browser DevTools Verification

### Console Tab (F12)
- [ ] No red errors ✅
- [ ] No yellow warnings
- [ ] No "Missing key" warnings for lists
- [ ] No "Cannot read property" errors

### Application Tab → Local Storage
```
localhost:5173 (or your dev server port)
  ├─ quickcart-cart: [{"id":1,"name":"Product","quantity":2,...}]
```

### React DevTools → Components Tab
```
CartProvider
  ├─ Header
  │  └─ uses: getTotalItems(), toggleCart()
  ├─ main → Routes
  │  ├─ HomePage
  │  │  └─ ProductList
  │  │     └─ ProductCard (uses: addToCart())
  │  ├─ CategoryPage
  │  │  └─ ProductList
  │  │     └─ ProductCard (uses: addToCart())
  │  ├─ CartPage (uses: cart, updateQuantity, removeFromCart)
  └─ CartSideBar (uses: isCartOpen, cart, toggleCart, etc.)
```

## Testing Script

### Quick Test Run (5 minutes)
1. Start dev server: `npm run dev`
2. Add 1 item → check cart count updates
3. Go to `/category/Electronics`
4. Add another item → check cart count
5. Go to `/cart` → verify both items
6. Refresh page → items still there ✅
7. Open DevTools → check localStorage has `quickcart-cart`

### Full Test Run (20 minutes)
1. Test all routes
2. Search for products
3. Test category pages
4. Add items from multiple places
5. Use quantity controls
6. Remove items
7. Check persistence (refresh, close, reopen)
8. Test responsive design (resize browser)
9. Check DevTools console (F12)
10. Test edge cases (empty states)

## Common Issues & Fixes

### Issue: Cart doesn't persist
**Solution:** Check that `useLocalStorage` is being used in `CartProvider.jsx`
```jsx
const [cart, setCart] = useLocalStorage('quickcart-cart', []);
```

### Issue: Cart count doesn't update
**Solution:** Verify `Header.jsx` is using `useCart()` hook and calling `getTotalItems()`

### Issue: Navigation doesn't work
**Solution:** Ensure `BrowserRouter` wraps the app in `App.jsx`

### Issue: Search doesn't filter
**Solution:** Check that `HomePage.jsx` filters products and passes filtered array to `ProductList`

### Issue: "No products found" on category page
**Solution:** Check category parameter matches product category (case-insensitive)

---

**Status:** ✅ All features implemented
**Next Step:** Run the testing checklist above and report any issues
