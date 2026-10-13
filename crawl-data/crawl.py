import json,asyncio
from playwright.async_api import async_playwright
pages=["/","/books","/edtech","/games","/restaraunt","/blog-atoms","/privacy-%26-policies"]
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(); out={}
    pg=await b.new_page(viewport={"width":1280,"height":900})
    for u in pages:
      await pg.goto("https://betteratoms.com"+u,wait_until="load",timeout=60000)
      for i in range(15): await pg.mouse.wheel(0,1500); await pg.wait_for_timeout(300)
      await pg.wait_for_timeout(1500)
      d=await pg.evaluate("""()=>({title:document.title,
        text:document.body.innerText,
        links:[...document.querySelectorAll('a')].map(a=>[a.innerText.trim(),a.href]),
        imgs:[...document.querySelectorAll('img')].map(i=>[i.currentSrc||i.src,i.alt]),
        bgs:[...document.querySelectorAll('*')].map(e=>getComputedStyle(e).backgroundImage).filter(x=>x.includes('url(')),
        forms:[...document.querySelectorAll('form input,form textarea,form button')].map(e=>[e.tagName,e.type,e.name,e.placeholder,e.innerText]),
        iframes:[...document.querySelectorAll('iframe')].map(f=>f.src)})""")
      out[u]=d
    json.dump(out,open("crawl/site.json","w"),indent=1)
    await b.close()
asyncio.run(main())
