import{_ as s,o as n,c as a,e as l}from"./app.0d61e877.js";const A=JSON.parse('{"title":"JavaScript Loops","description":"","frontmatter":{},"headers":[],"relativePath":"day2/jsloops.md"}'),p={name:"day2/jsloops.md"},o=l(`<h1 id="javascript-loops" tabindex="-1">JavaScript Loops <a class="header-anchor" href="#javascript-loops" aria-hidden="true">#</a></h1><p>Loops are a way for us to easily repeat something. There are several different kinds of loops but they all basically do the same thing, which is repeating an action a number of times. there are different situations that can be better used from one type of loop over the others.</p><p>for now, lets start with the for loop, the foreach loop and break everything down. first off lets create a quick array of number starting from 1 and ending at 10</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> index </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> index </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> array</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> index</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">element</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">array</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">element</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>ok now lets go over the code here line by line</p><p>for (let index = 0; index &lt; array.length; index++)</p><p>let index = 0; We know that for all arrays, the starting index always begins with 0. so what this is saying, begin this for loop, starting at index 0. lets see what happens when we change that index to 1</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> index </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> index </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> array</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> index</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">element</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">array</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">element</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//output</span></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#F78C6C;">9</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#F78C6C;">10</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>index &lt; array.length; = we are doing a comparison here. So, we know that the .length property will give us all the items in an array, so its saying &quot;is the current index is less than the length of the array&quot; which is true currently, go through the {} brackets again lets change the &lt; to an &gt;</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">] </span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> index </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> index </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> array</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> index</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">element</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">array</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">element</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">//output</span></span>
<span class="line"><span style="color:#A6ACCD;">[Running] node </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">c:</span><span style="color:#A6ACCD;">\\U</span><span style="color:#C3E88D;">sers</span><span style="color:#A6ACCD;">\\g</span><span style="color:#C3E88D;">ober</span><span style="color:#A6ACCD;">\\O</span><span style="color:#C3E88D;">neDrive</span><span style="color:#A6ACCD;">\\D</span><span style="color:#C3E88D;">esktop</span><span style="color:#A6ACCD;">\\A</span><span style="color:#C3E88D;">rray Challenge</span><span style="color:#A6ACCD;">\\A</span><span style="color:#C3E88D;">rrayExercise.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">[Done] exited </span><span style="color:#89DDFF;">with</span><span style="color:#A6ACCD;"> code</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.085</span><span style="color:#A6ACCD;"> seconds</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>and finally, index++. what that is doing, is for each iteration of this loop, add 1 to our current index. so ++ means &quot;add one to&quot;</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> index </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(index)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>{ const element = array[index]; console.log(element); }</p><p>With const element = array[index]; , we are creating a new const that is named &quot;element&quot; that is assigned to the index value of our array. then we of course know what console.log(element) does. lets change around the values so we can see them change</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">98</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">88</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> index </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> index </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> array</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> index</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">element</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">array</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">element</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>but wouldn&#39;t you know, there is an even cleaner way to write our for loops. we can also use the forEach loop. im going to revert to our starting array of 1 through 10, and remove the for loop</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">element</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">element</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>This is a bit cleaner, but what&#39;s going on here? well, this is something we haven&#39;t gone over yet, but what we are looking at is an arrow function. we will talk more about that tomorrow, but for now know that the arrow function is the same as if we did this</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">( </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">element</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>ok. lets lastly talk about the While loop. we see that its a bit more straight forward. so lets give it a condition and log something in that code block</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> (condition) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">     </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hi Mom!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>When we run this... uh oh. we have a good ol&#39; fashioned endless loop. Go ahead and right click the output and click stop code run</p><p>Because 10 will always be equal to 10, we need to do something a little bit different. lets add a counter</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> counter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> (counter </span><span style="color:#89DDFF;">!==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hi Mom!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>adding the counter to our while loop and incrementing at the end of our code block allows us to escape the while loop.</p><p>Lastly the do while loop</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">do</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> (i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>very similar to the while loop. However, the condition is checked after the block of code is ran</p><p>There are other loops, but for now I think this is a good stopping point</p>`,30),e=[o];function r(t,c,y,C,D,F){return n(),a("div",null,e)}const b=s(p,[["render",r]]);export{A as __pageData,b as default};
