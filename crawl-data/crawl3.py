import json,asyncio
from playwright.async_api import async_playwright
pages=["/","/books","/edtech","/restaraunt","/privacy-%26-policies"]
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(); out={}
    pg=await b.new_page(viewport={"width":1280,"height":900})
    for u in pages:
      await pg.goto("https://betteratoms.com"+u,wait_until="load",timeout=60000)
      await pg.wait_for_timeout(4000)
      fr=[]
      for f in pg.frames[1:]:
        try: fr.append(await f.evaluate("()=>({text:document.body.innerText,links:[...document.querySelectorAll('a')].map(a=>[a.innerText.trim(),a.getAttribute('href')]),imgs:[...document.querySelectorAll('img')].map(i=>[i.src,i.alt]),btns:[...document.querySelectorAll('button')].map(b=>b.innerText.trim()),inputs:[...document.querySelectorAll('input,textarea,select')].map(i=>[i.type,i.placeholder])})"))
        except Exception as e: pass
      out[u]=fr
    json.dump(out,open("crawl/frames.json","w"),indent=1,ensure_ascii=False)
    await b.close()
asyncio.run(main())
