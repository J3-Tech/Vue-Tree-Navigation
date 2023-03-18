<template>
  <section id="installation">
    <h2>Installation</h2>
    <div>
      <h3>NPM</h3>
      <pre><code class="bash hljs">
    $ npm install vue-tree-navigation
    </code></pre>
      <span>main.js</span>
      <pre><code class="javascript hljs">
    <span class="hljs-keyword">import</span> VueTreeNavigation <span class="hljs-keyword">from</span> <span class="hljs-string">'vue-tree-navigation'</span>;

    Vue.use(VueTreeNavigation);
    </code></pre>
    </div>
    <div>
      <h3>Include with a script tag</h3>
      <pre><code class="html hljs xml">
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="actionscript"> src=<span class="hljs-string">"https://unpkg.com/vue-tree-navigation@4.0.0/dist/vue-tree-navigation.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="undefined">
      Vue.use(VueTreeNavigation)
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
    </code></pre>
      <span>Example</span>
      <pre><code class="html hljs xml">
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"app"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">vue-tree-navigation</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">"items"</span> <span class="hljs-attr">:defaultOpenLevel</span>=<span class="hljs-string">"1"</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="actionscript">
      Vue.use(VueTreeNavigation)

      <span class="hljs-keyword">const</span> app = <span class="hljs-keyword">new</span> Vue({
        el: <span class="hljs-string">'#app'</span>,
        data: {
          items: [
            ...
          ],
        }
      })
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
    </code></pre>
    </div>
  </section>
</template>
