import json,asyncio
from playwright.async_api import async_playwright
d=json.load(open('crawl/site.json'))
blog=sorted({h for t,h in d['/blog-atoms']['links'] if '/blog-atoms/f/' in h})
pages=["https://betteratoms.com"+u for u in d]+blog
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(); out={}
    pg=await b.new_page(viewport={"width":1280,"height":900})
    for u in pages:
      await pg.goto(u,wait_until="load",timeout=60000)
      for i in range(10): await pg.mouse.wheel(0,1500); await pg.wait_for_timeout(250)
      for el in await pg.get_by_text("Show More").all():
        try: await el.click(timeout=2000)
        except: pass
      await pg.wait_for_timeout(1000)
      frames=[]
      for f in pg.frames[1:]:
        try: frames.append(await f.evaluate("()=>document.body?document.body.innerText+'\\nHTML:'+document.body.innerHTML.slice(0,3000):''"))
        except Exception as e: frames.append(str(e))
      t=await pg.evaluate("()=>document.querySelector('#page, main, body').innerText")
      imgs=await pg.evaluate("()=>[...document.querySelectorAll('img')].map(i=>[i.currentSrc||i.src,i.alt]).concat([...document.querySelectorAll('*')].map(e=>getComputedStyle(e).backgroundImage).filter(x=>x.includes('url(')).map(x=>[x,'bg']))")
      out[u]={"text":t,"frames":frames,"imgs":imgs}
    json.dump(out,open("crawl/site2.json","w"),indent=1)
    await b.close()
asyncio.run(main())
