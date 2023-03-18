<template>
  <section>
    <h3>Menu items defined manually</h3>
    <p>The following configuration</p>
    <div class="vue-snippet">
      <pre><code class="javascript hljs">
    <strong class="tag">&lt;template&gt;</strong>
      <span><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">vue-tree-navigation</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">"items"</span> /&gt;</span></span></span><span class="xml">
    </span><strong class="tag"><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span></strong>

    <strong class="tag">&lt;script&gt;</strong>
      <span><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data() {
          <span class="hljs-keyword">return</span> {
            <span class="hljs-attr">items</span>: [
              { <span class="hljs-attr">name</span>: <span class="hljs-string">'Products'</span>, <span class="hljs-attr">children</span>: [
                { <span class="hljs-attr">name</span>: <span class="hljs-string">'Shoes'</span>, <span class="hljs-attr">path</span>: <span class="hljs-string">'shoes'</span> }
              ]},
              { <span class="hljs-attr">name</span>: <span class="hljs-string">'About'</span>, <span class="hljs-attr">path</span>: <span class="hljs-string">'about'</span>, <span class="hljs-attr">children</span>: [
                { <span class="hljs-attr">name</span>: <span class="hljs-string">'Contact'</span>, <span class="hljs-attr">path</span>: <span class="hljs-string">'contact'</span>, <span class="hljs-attr">children</span>: [
                  { <span class="hljs-attr">name</span>: <span class="hljs-string">'E-mail'</span>, <span class="hljs-attr">element</span>: <span class="hljs-string">'email'</span> },
                  { <span class="hljs-attr">name</span>: <span class="hljs-string">'Phone'</span>, <span class="hljs-attr">element</span>: <span class="hljs-string">'phone'</span> }
                ]},
              ]},
              { <span class="hljs-attr">name</span>: <span class="hljs-string">'Github'</span>, <span class="hljs-attr">external</span>: <span class="hljs-string">'https://github.com'</span> },
            ],
          };
        },
      };</span>
    <strong class="tag"><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></strong>
  </code></pre>
    </div>
    <p>will generate</p>
    <ul>
      <li>
        <strong>Products</strong> (category label)
        <ul>
          <li><strong>Shoes</strong> (→ /shoes)</li>
        </ul>
      </li>
      <li>
        <strong>About</strong> (→ /about)
        <ul>
          <li>
            <strong>Contact</strong> (→ /about/contact)
            <ul>
              <li><strong>E-mail</strong> (→ /about/contact#email)</li>
              <li><strong>Phone</strong> (→ /about/contact#phone)</li>
            </ul>
          </li>
        </ul>
      </li>
      <li><strong>Github</strong> (→ https://github.com)</li>
    </ul>
    <p>
      Targets (except of external) will behave like router links in case you installed and
      configured vue-router. Otherwise they will behave like normal hyperlinks.
    </p>
  </section>
</template>
