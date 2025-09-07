function $(sel){return document.querySelector(sel)}

// Mobile menu
const menuBtn = document.getElementById('menu-btn')
if(menuBtn) menuBtn.addEventListener('click', ()=>{
  const m = document.getElementById('mobile-menu')
  if(m) m.classList.toggle('hidden')
})

// Render products into given container ID
function renderProducts(containerId, items){
  const container = document.getElementById(containerId)
  if(!container) return
  container.innerHTML = ''
  items.forEach(p => {
    const card = document.createElement('div')
    card.className = 'bg-white rounded-lg shadow-lg overflow-hidden flex flex-col'
    card.innerHTML = `
      <a href="product.html?id=${p.id}" class="block h-48 overflow-hidden">
        <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover transform hover:scale-105 transition duration-300">
      </a>
      <div class="p-4 flex-1 flex flex-col">
        <h4 class="font-semibold text-lg">${p.title}</h4>
        <p class="text-sm text-gray-500 flex-1 mt-2">${p.description}</p>
        <div class="mt-3 flex items-center justify-between">
          <div class="text-indigo-600 font-bold">$${p.price}</div>
          <button class="add-to-cart bg-indigo-600 text-white px-3 py-1 rounded" data-id="${p.id}">Add</button>
        </div>
      </div>
    `
    container.appendChild(card)
  })
  // attach add handlers
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e)=>{
      const id = Number(e.currentTarget.getAttribute('data-id'))
      addToCart(id,1)
    })
  })
}

// Cart helpers
function getCart(){ return JSON.parse(localStorage.getItem('trendify_cart')||'[]') }
function saveCart(c){ localStorage.setItem('trendify_cart', JSON.stringify(c)); updateCartCount(); }
function addToCart(id, qty){
  const cart = getCart()
  const found = cart.find(i=>i.id===id)
  if(found){ found.qty += qty } else { cart.push({id, qty}) }
  saveCart(cart)
  alert('Added to cart')
}
function updateCartCount(){
  const cart = getCart()
  const total = cart.reduce((s,i)=>s+i.qty,0)
  const el = document.getElementById('cart-count')
  const el2 = document.getElementById('cart-count-mobile')
  const el3 = document.getElementById('cart-count-2')
  if(el) el.textContent = total
  if(el2) el2.textContent = total
  if(el3) el3.textContent = total
}

// On product list pages, render
document.addEventListener('DOMContentLoaded', ()=>{
  updateCartCount()
  // fill category filter based on PRODUCTS
  const catSel = document.getElementById('filter-category')
  if(catSel){
    const cats = Array.from(new Set(PRODUCTS.map(p=>p.category)))
    cats.forEach(c=>{
      const opt = document.createElement('option'); opt.value=c; opt.textContent=c[0].toUpperCase()+c.slice(1); catSel.appendChild(opt)
    })
    catSel.addEventListener('change', ()=> applyFilters())
    const priceRange = document.getElementById('filter-price')
    if(priceRange){
      priceRange.addEventListener('input', ()=>{
        document.getElementById('price-val').textContent = priceRange.value
        applyFilters()
      })
    }
    renderProducts('products-catalog', PRODUCTS)
  }

  // Home page products grid
  if(document.getElementById('products-grid')){
    renderProducts('products-grid', PRODUCTS.slice(0,8))
    const sort = document.getElementById('sort')
    if(sort) sort.addEventListener('change', ()=>{
      let arr = [...PRODUCTS]
      if(sort.value==='price-asc') arr.sort((a,b)=>a.price-b.price)
      else if(sort.value==='price-desc') arr.sort((a,b)=>b.price-a.price)
      renderProducts('products-grid', arr)
    })
  }

  // Product detail page
  if(document.getElementById('product-detail')){
    const params = new URLSearchParams(location.search)
    const id = Number(params.get('id'))
    const p = PRODUCTS.find(x=>x.id===id)
    if(p){
      const container = document.getElementById('product-detail')
      container.innerHTML = `
        <div class="flex flex-col gap-4">
          <img src="${p.img}" class="rounded-lg w-full object-cover">
        </div>
        <div>
          <h1 class="text-2xl font-bold mb-2">${p.title}</h1>
          <div class="text-indigo-600 font-bold mb-3">$${p.price}</div>
          <p class="text-gray-600 mb-4">${p.description}</p>
          <div class="flex gap-3">
            <input id="qty" type="number" value="1" min="1" class="w-20 p-2 border rounded">
            <button id="add-cart" class="bg-indigo-600 text-white px-4 py-2 rounded">Add to cart</button>
          </div>
        </div>
      `
      document.getElementById('add-cart').addEventListener('click', ()=>{
        const q = Number(document.getElementById('qty').value)||1
        addToCart(p.id,q)
      })
    }
  }

  // Cart page render
  if(document.getElementById('cart-container')){
    const cart = getCart()
    if(cart.length===0){
      document.getElementById('cart-container').innerHTML = '<p class="text-gray-600">Your cart is empty.</p>'
    } else {
      const rows = cart.map(item=>{
        const p = PRODUCTS.find(x=>x.id===item.id)
        const subtotal = (p.price*item.qty).toFixed(2)
        return `
          <div class="flex items-center gap-4 border-b py-4">
            <img src="${p.img}" class="w-24 h-24 object-cover rounded">
            <div class="flex-1">
              <h4 class="font-semibold">${p.title}</h4>
              <div class="text-sm text-gray-500">$${p.price} × ${item.qty} = $${subtotal}</div>
            </div>
            <div class="flex gap-2">
              <button class="qty-btn bg-gray-200 px-3 py-1 rounded" data-id="${p.id}" data-op="minus">-</button>
              <button class="qty-btn bg-gray-200 px-3 py-1 rounded" data-id="${p.id}" data-op="plus">+</button>
              <button class="remove-btn text-red-500" data-id="${p.id}">Remove</button>
            </div>
          </div>
        `
      }).join('')
      document.getElementById('cart-container').innerHTML = rows + `<div class="text-right mt-4"><strong>Total: $${cart.reduce((s,i)=>{const p=PRODUCTS.find(x=>x.id===i.id);return s+p.price*i.qty},0).toFixed(2)}</strong></div>`
      // attach handlers
      document.querySelectorAll('.qty-btn').forEach(b=>b.addEventListener('click', (e)=>{
        const id = Number(e.currentTarget.getAttribute('data-id'))
        const op = e.currentTarget.getAttribute('data-op')
        const c = getCart()
        const it = c.find(x=>x.id===id)
        if(it){
          if(op==='plus') it.qty++
          else it.qty = Math.max(1, it.qty-1)
          saveCart(c); location.reload()
        }
      }))
      document.querySelectorAll('.remove-btn').forEach(b=>b.addEventListener('click',(e)=>{
        const id = Number(e.currentTarget.getAttribute('data-id'))
        let c = getCart(); c = c.filter(x=>x.id!==id); saveCart(c); location.reload()
      }))
    }
  }

})

// Filtering function
function applyFilters(){
  const cat = document.getElementById('filter-category')?.value || 'all'
  const price = Number(document.getElementById('filter-price')?.value || 9999)
  let arr = PRODUCTS.filter(p=> (cat==='all' || p.category===cat) && p.price<=price )
  renderProducts('products-catalog', arr)
}
