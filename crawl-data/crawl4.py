import asyncio
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(); pg=await b.new_page()
    await pg.goto("https://betteratoms.com/privacy-%26-policies",wait_until="load"); await pg.wait_for_timeout(4000)
    for f in pg.frames[1:]:
      t=await f.evaluate("()=>{const m=document.querySelector('main')||document.body; return [...m.querySelectorAll('h1,h2,h3,h4,p,li,a,span.label')].map(e=>e.tagName+': '+e.textContent.trim().replace(/\\s+/g,' ')).join('\\n')}")
      if 'PRIVACY' in t.upper(): print(t)
    await b.close()
asyncio.run(main())
