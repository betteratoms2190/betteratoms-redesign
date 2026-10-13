import asyncio
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(); pg=await b.new_page()
    await pg.goto("https://betteratoms.com/privacy-%26-policies",wait_until="load"); await pg.wait_for_timeout(4000)
    for f in pg.frames[1:]:
      t=await f.evaluate("()=>{const h=[...document.querySelectorAll('h2')].find(h=>h.textContent.includes('Corporate Identity')); if(!h) return ''; let s=h.closest('section')||h.parentElement.parentElement; return s.innerText||s.textContent.replace(/\\s+/g,' ')}")
      if t: print(t)
    await b.close()
asyncio.run(main())
