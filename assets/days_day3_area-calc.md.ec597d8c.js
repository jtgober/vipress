import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.cb0d0652.js";const u=JSON.parse('{"title":"Area Calc Answer","description":"","frontmatter":{},"headers":[],"relativePath":"days/day3/area-calc.md","filePath":"days/day3/area-calc.md","lastUpdated":1673638586000}'),p={name:"days/day3/area-calc.md"},o=l(`<h1 id="area-calc-answer" tabindex="-1">Area Calc Answer <a class="header-anchor" href="#area-calc-answer" aria-label="Permalink to &quot;Area Calc Answer&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">STOP</p><p>Danger zone, do not proceed unless you gave it your all!</p></div><details class="details custom-block"><summary>Click me to view the code</summary><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">areaCalc</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">height</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">width</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> area </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> height </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> width </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> paintCans </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">ceil</span><span style="color:#E1E4E8;">(area </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> paintCans </span></span>
<span class="line"><span style="color:#E1E4E8;">} </span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">areaCalc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">areaCalc</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">height</span><span style="color:#24292E;">, </span><span style="color:#E36209;">width</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> area </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> height </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> width </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> paintCans </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">ceil</span><span style="color:#24292E;">(area </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> paintCans </span></span>
<span class="line"><span style="color:#24292E;">} </span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">areaCalc</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details>`,3),e=[o];function c(t,r,E,y,i,d){return a(),n("div",null,e)}const m=s(p,[["render",c]]);export{u as __pageData,m as default};