import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.cb0d0652.js";const F=JSON.parse('{"title":"Final Git Lesson with diff tool, alias and forking","description":"","frontmatter":{},"headers":[],"relativePath":"days/day6/final-git.md","filePath":"days/day6/final-git.md","lastUpdated":1673638586000}'),l={name:"days/day6/final-git.md"},p=o(`<h1 id="final-git-lesson-with-diff-tool-alias-and-forking" tabindex="-1">Final Git Lesson with diff tool, alias and forking <a class="header-anchor" href="#final-git-lesson-with-diff-tool-alias-and-forking" aria-label="Permalink to &quot;Final Git Lesson with diff tool, alias and forking&quot;">​</a></h1><p>for our final Git lesson were going to look at diff, difftool, alias&#39;s and forking repos</p><p>Lets start with alias&#39;s. In git we can write our own shorthand alias&#39;s to save us some typing. More often than not ill mistype a git command and have to redo it. so lets shorten some of our commands</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">alias.co</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">alias.br</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">alias.ci</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">alias.st</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">alias.co</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">alias.br</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">alias.ci</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">alias.st</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>now instead of using</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;branchname&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;branchname&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>we can use the shorthand of</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">co</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;branchname&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">co</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;branchname&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>For me this is great, I use git status incredibly often, and I honestly mistype it often as statys. so now I can check the status easier by using git st which is much quicker as well.</p><p>There are a ton more you can do with this, and I encourage you to to look up some of the awesome alias&#39;s people have made to add some extra added productivity to your day!</p><p>Now lets check out some git diff tools</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>looking through this we can see there was an update that states</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line diff remove"><span style="color:#B392F0;">Give</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">examples</span><span style="color:#E1E4E8;"> </span></span>
<span class="line diff add"><span style="color:#B392F0;">Test</span><span style="color:#E1E4E8;"> </span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line diff remove"><span style="color:#6F42C1;">Give</span><span style="color:#24292E;"> </span><span style="color:#032F62;">examples</span><span style="color:#24292E;"> </span></span>
<span class="line diff add"><span style="color:#6F42C1;">Test</span><span style="color:#24292E;"> </span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>this looks fine, but if there were tons more changes, this would be pretty terrible to look through. Thats why so many people use GUI diff tools. or</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">difftool</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">difftool</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>now if yours states &quot;Launch &#39;vimdiff&#39; [Y/n]? &quot; Then lets go ahead and set it up to where we use VSCode for out default diff tool. and for this we need to set 2 configurations</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff.tool</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vscode</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff.tool</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vscode</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>were going to use --wait and --diff</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">difftool.vscode.cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;code --wait --diff </span><span style="color:#E1E4E8;">$LOCAL</span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;">$REMOTE</span><span style="color:#9ECBFF;">&quot;</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">difftool.vscode.cmd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;code --wait --diff </span><span style="color:#24292E;">$LOCAL</span><span style="color:#032F62;"> </span><span style="color:#24292E;">$REMOTE</span><span style="color:#032F62;">&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>$LOCAL and $REMOTE are in all caps and represents the old and new copies of the files</p><p>now lets make sure everything is set up properly</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Your config should look similar to this, and if not you can copy and paste what i have and add it in</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[user] </span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">email</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gober.jonathan@gmail.com</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Jonathan</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Gober</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">[core] </span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">editor</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">code</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--wait</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">autocrlf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">[diff] </span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">tool</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vscode</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">[difftool </span><span style="color:#9ECBFF;">&quot;vscode&quot;</span><span style="color:#E1E4E8;">] </span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;code --wait --diff </span><span style="color:#E1E4E8;">$LOCAL</span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;">$REMOTE</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">[alias] </span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">co</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">br</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">ci</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">st</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292E;">[user] </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">email</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gober.jonathan@gmail.com</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Jonathan</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Gober</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">[core] </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">editor</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">code</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--wait</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">autocrlf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">[diff] </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">tool</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vscode</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">[difftool </span><span style="color:#032F62;">&quot;vscode&quot;</span><span style="color:#24292E;">] </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">cmd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;code --wait --diff </span><span style="color:#24292E;">$LOCAL</span><span style="color:#032F62;"> </span><span style="color:#24292E;">$REMOTE</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">[alias] </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">co</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">br</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">ci</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">st</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Now with our Diff toll updated we can run and see how it looks in VSCODE. This looks much easier to read as we can see a side by side difference for our code.</p><p>Alright. there is one final thing that id like to show you with repositories and that&#39;s forking.</p><p>Forking allows you to freely evaluate and experiment with changes without damaging the main repository. So when you forking someone elses repo, it is an exact replica of that repository.</p><p>People do this to propose changes to someone else&#39;s project or to have a good starting point for their own project. For example, Playwright itself is a fork of another automation tool called puppeteer. Which we can also fork the entire code of playwright as well</p><p><a href="https://github.com/microsoft/playwright-vscode" target="_blank" rel="noreferrer">https://github.com/microsoft/playwright-vscode</a></p><p>Now that the code is forked, we can make whatever updates to playwright and submit pull requests to the main repository to be accepted as updates.</p><p>for now however, im going to delete this repo, and were going to dive right into api testing coming up next. So your next test is to Fork a copy of the poke-api that is on my repo, run a npm install, then run the test.</p><p>If you have joined our discord server let me know what starter pokemon you received!</p><p>but well done on git! and ill see you in tomorrow with api testing</p>`,34),e=[p];function t(c,r,i,E,y,d){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{F as __pageData,u as default};