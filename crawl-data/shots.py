import asyncio
from playwright.async_api import async_playwright
B="http://localhost:4173"
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
    errs=[]
    for name,vw,vh,mob in [("desktop",1440,900,False),("mobile",390,844,True)]:
      ctx=await b.new_context(viewport={"width":vw,"height":vh},device_scale_factor=1 if not mob else 2,is_mobile=mob,has_touch=mob)
      await ctx.add_init_script("localStorage.setItem('ba-cookie','1')")
      pg=await ctx.new_page(); pg.on("console",lambda m: errs.append((m.type,m.text)) if m.type=="error" else None); pg.on("pageerror",lambda e: errs.append(("pageerror",str(e))))
      for path,slug in [("/","home"),("/books/","books"),("/restaraunt/","restaraunt"),("/blog-atoms/","blog"),("/edtech/","edtech")]:
        await pg.goto(B+path,wait_until="networkidle"); await pg.wait_for_timeout(3500)
        if slug=="home": await pg.screenshot(path=f"screenshots/{name}-hero.png")
        h=await pg.evaluate("document.body.scrollHeight")
        for y in range(0,h,600): await pg.evaluate(f"window.scrollTo(0,{y})"); await pg.wait_for_timeout(120)
        await pg.evaluate("window.scrollTo(0,0)"); await pg.wait_for_timeout(600)
        await pg.screenshot(path=f"screenshots/{name}-{slug}-full.png",full_page=True)
    print("ERRORS",errs)
    await b.close()
asyncio.run(main())
