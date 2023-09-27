import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.f4487b77.js";const u=JSON.parse('{"title":"Progress Bar Challenge","description":"","frontmatter":{},"headers":[],"relativePath":"days/day5/progress-bar-challenge.md","filePath":"days/day5/progress-bar-challenge.md","lastUpdated":1673638586000}'),l={name:"days/day5/progress-bar-challenge.md"},o=p(`<h1 id="progress-bar-challenge" tabindex="-1">Progress Bar Challenge <a class="header-anchor" href="#progress-bar-challenge" aria-label="Permalink to &quot;Progress Bar Challenge&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">STOP</p><p>Danger zone, do not proceed unless you gave it your all!</p></div><details class="details custom-block"><summary>Click me to view the code</summary><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">test</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@playwright/test&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">ProgressBarPage</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../models/progress-bar.model&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Stop progress bar at 75%&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">page</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">progressBarPage</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ProgressBarPage</span><span style="color:#E1E4E8;">(page)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> progressBarPage.</span><span style="color:#B392F0;">navigateToProgressBarPage</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> progressBarPage.</span><span style="color:#B392F0;">clickStartButtion</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> progressBarPage.</span><span style="color:#B392F0;">getProgressBarPercent</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;75%&quot;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Currently at \${</span><span style="color:#F97583;">await</span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;">progressBarPage</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">getProgressBarPercent</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> progressBarPage.</span><span style="color:#B392F0;">clickStopButtion</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">test</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@playwright/test&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">ProgressBarPage</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;../models/progress-bar.model&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Stop progress bar at 75%&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> ({ </span><span style="color:#E36209;">page</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">progressBarPage</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ProgressBarPage</span><span style="color:#24292E;">(page)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> progressBarPage.</span><span style="color:#6F42C1;">navigateToProgressBarPage</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> progressBarPage.</span><span style="color:#6F42C1;">clickStartButtion</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> progressBarPage.</span><span style="color:#6F42C1;">getProgressBarPercent</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;75%&quot;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`Currently at \${</span><span style="color:#D73A49;">await</span><span style="color:#032F62;"> </span><span style="color:#24292E;">progressBarPage</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">getProgressBarPercent</span><span style="color:#032F62;">()</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> progressBarPage.</span><span style="color:#6F42C1;">clickStopButtion</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;">.ProgressBarPage </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ProgressBarPage</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">page</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.page </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> page</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.progressBarUrl </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">goto</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/progressbar&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.startButton </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">locator</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#startButton&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.stopButton </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">locator</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#stopButton&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.progressBarText </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">locator</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#progressBar&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">navigateToProgressBarPage</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.progressBarUrl</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">clickStartButtion</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.startButton.</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">clickStopButtion</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.stopButton.</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getProgressBarPercent</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> currentPercent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.progressBarText.</span><span style="color:#B392F0;">innerText</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> currentPercent</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">exports</span><span style="color:#24292E;">.ProgressBarPage </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ProgressBarPage</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">page</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.page </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> page</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.progressBarUrl </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">goto</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/progressbar&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.startButton </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">locator</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;#startButton&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.stopButton </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">locator</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;#stopButton&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.progressBarText </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">locator</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;#progressBar&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">navigateToProgressBarPage</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.progressBarUrl</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">clickStartButtion</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.startButton.</span><span style="color:#6F42C1;">click</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">clickStopButtion</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.stopButton.</span><span style="color:#6F42C1;">click</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getProgressBarPercent</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> currentPercent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.progressBarText.</span><span style="color:#6F42C1;">innerText</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> currentPercent</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></details>`,3),e=[o];function r(t,c,E,y,i,F){return a(),n("div",null,e)}const B=s(l,[["render",r]]);export{u as __pageData,B as default};