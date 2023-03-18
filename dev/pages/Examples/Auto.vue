<template>
  <section>
    <h2>Examples</h2>
    <p>
      Click a button and check how an active navigation item is higlighted in the tree on
      the left
    </p>
    <div id="buttons">
      <a href="#/examples/auto" class="button">Auto generated</a>
      <a href="#/examples/manual" class="button">Manually defined</a>
      <a href="#/examples/this" class="button">This website</a>
    </div>
    <section>
      <h3>Navigation items generated from vue-router routes</h3>
      <p>Let's suppose you use vue-router with the following routes definition</p>
      <pre><code class="javascript hljs"><span class="hljs-keyword">const</span> routes = [
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">'Home'</span>,
    <span class="hljs-attr">path</span>: <span class="hljs-string">'/'</span>,
  },
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">'Running'</span>,
    <span class="hljs-attr">path</span>: <span class="hljs-string">'/running'</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">'Barefoot'</span>,
        <span class="hljs-attr">path</span>: <span class="hljs-string">'barefoot'</span>,
      },
    ],
  },
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">'Yoga'</span>,
    <span class="hljs-attr">path</span>: <span class="hljs-string">'/yoga'</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">'Mats'</span>,
        <span class="hljs-attr">path</span>: <span class="hljs-string">'mats'</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">'Tops'</span>,
        <span class="hljs-attr">path</span>: <span class="hljs-string">'tops'</span>,
      },
    ],
  },
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">'About'</span>,
    <span class="hljs-attr">path</span>: <span class="hljs-string">'/about'</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">'Career'</span>,
        <span class="hljs-attr">path</span>: <span class="hljs-string">'career'</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">name</span>: <span class="hljs-string">'Design'</span>,
            <span class="hljs-attr">path</span>: <span class="hljs-string">'design'</span>,
          },
        ],
      },
    ],
  },
];</code></pre>
      <p>Then simply include vue-tree-navigation</p>
      <pre><code class="javascript hljs"><strong class="tag">&lt;template&gt;</strong>
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">vue-tree-navigation</span> /&gt;</span>
</span><strong class="tag"><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span></strong></code></pre>
      <p>and it will generate the following menu:</p>
      <ul>
        <li><strong>Home</strong> (→ /)</li>
        <li>
          <strong>Running</strong> (→ /running)
          <ul>
            <li><strong>Barefoot</strong> (→ /running/barefoot)</li>
          </ul>
        </li>
        <li>
          <strong>Yoga</strong> (→ /yoga)
          <ul>
            <li><strong>Mats</strong> (→ /yoga/mats)</li>
            <li><strong>Tops</strong> (→ /yoga/tops)</li>
          </ul>
        </li>
        <li>
          <strong>About</strong> (→ /about)
          <ul>
            <li>
              <strong>Career</strong> (→ /about/career)
              <ul>
                <li><strong>Design</strong> (→ /about/career/design)</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        Do not forget to use named routes since vue-tree-navigation uses name field to
        label navigation items.
      </p>
    </section>
  </section>
</template>
