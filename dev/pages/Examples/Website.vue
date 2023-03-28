<template>
  <section>
    <h3>This website</h3>
    <p>
      The side navigation for this documentation was built with vue-tree-navigation and
      the following setup.
    </p>
    <p>
      You need to style the tree navigation on your own like I did for this website. I
      included only a few basic styles in the library because I believe this approach
      makes customizing the look much easier as you don't need to override plenty of
      styles.
    </p>
    <div class="vue-snippet">
      <pre><code class="javascript hljs">
    <strong class="tag">&lt;template&gt;</strong>
      <span><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">vue-tree-navigation</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">"items"</span> <span class="hljs-attr">:defaultOpenLevel</span>=<span class="hljs-string">"1"</span> /&gt;</span></span></span><span class="xml">
    </span><strong class="tag"><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span></strong>

    <strong class="tag">&lt;script&gt;</strong>
      <span><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data() {
          <span class="hljs-keyword">return</span> {
            <span class="hljs-attr">items</span>: [
              {
                <span class="hljs-attr">name</span>: <span class="hljs-string">"Introduction"</span>,
                <span class="hljs-attr">path</span>: <span class="hljs-string">"introduction"</span>,
                <span class="hljs-attr">children</span>: [
                  { <span class="hljs-attr">name</span>: <span class="hljs-string">"Features"</span>, <span class="hljs-attr">element</span>: <span class="hljs-string">"features"</span> },
                  { <span class="hljs-attr">name</span>: <span class="hljs-string">"Requirements"</span>, <span class="hljs-attr">element</span>: <span class="hljs-string">"requirements"</span> },
                  { <span class="hljs-attr">name</span>: <span class="hljs-string">"Demo"</span>, <span class="hljs-attr">element</span>: <span class="hljs-string">"demo"</span> }
                ]
              },
              { <span class="hljs-attr">name</span>: <span class="hljs-string">"Installation"</span>, <span class="hljs-attr">path</span>: <span class="hljs-string">"installation"</span> },
              {
                <span class="hljs-attr">name</span>: <span class="hljs-string">"Usage"</span>,
                <span class="hljs-attr">path</span>: <span class="hljs-string">"usage"</span>,
                <span class="hljs-attr">children</span>: [
                  {
                    <span class="hljs-attr">name</span>: <span class="hljs-string">"Props"</span>,
                    <span class="hljs-attr">element</span>: <span class="hljs-string">"props"</span>,
                    <span class="hljs-attr">children</span>: [
                      { <span class="hljs-attr">name</span>: <span class="hljs-string">"items"</span>, <span class="hljs-attr">element</span>: <span class="hljs-string">"items"</span> },
                      { <span class="hljs-attr">name</span>: <span class="hljs-string">"defaultOpenLevel"</span>, <span class="hljs-attr">element</span>: <span class="hljs-string">"default-open-level"</span> }
                    ]
                  }
                ]
              },
              {
                <span class="hljs-attr">name</span>: <span class="hljs-string">"Examples"</span>,
                <span class="hljs-attr">path</span>: <span class="hljs-string">"examples"</span>,
                <span class="hljs-attr">children</span>: [
                  { <span class="hljs-attr">name</span>: <span class="hljs-string">"Auto-generated"</span>, <span class="hljs-attr">path</span>: <span class="hljs-string">"auto"</span> },
                  { <span class="hljs-attr">name</span>: <span class="hljs-string">"Manually defined"</span>, <span class="hljs-attr">path</span>: <span class="hljs-string">"manual"</span> },
                  { <span class="hljs-attr">name</span>: <span class="hljs-string">"This website"</span>, <span class="hljs-attr">path</span>: <span class="hljs-string">"this"</span> }
                ]
              },
              { <span class="hljs-attr">name</span>: <span class="hljs-string">"Styling"</span>, <span class="hljs-attr">path</span>: <span class="hljs-string">"styling"</span> },
              {
                <span class="hljs-attr">name</span>: <span class="hljs-string">"Visit GitHub"</span>,
                <span class="hljs-attr">external</span>: <span class="hljs-string">"https://github.com/J3-Tech/Vue-Tree-Navigation"</span>
              }
            ],
          };
        },
      };</span>
    <strong class="tag"><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></strong>
  </code></pre>
    </div>
    <span>vue-router configuration:</span>
    <pre><code class="javascript hljs">  
  <span class="hljs-keyword">const</span> routes = [
    { <span class="hljs-attr">path</span>: <span class="hljs-string">"/"</span>, <span class="hljs-attr">redirect</span>: <span class="hljs-string">"/introduction"</span> },
    { <span class="hljs-attr">path</span>: <span class="hljs-string">"/introduction"</span>, <span class="hljs-attr">component</span>: Introduction },
    { <span class="hljs-attr">path</span>: <span class="hljs-string">"/installation"</span>, <span class="hljs-attr">component</span>: Installation },
    { <span class="hljs-attr">path</span>: <span class="hljs-string">"/usage"</span>, <span class="hljs-attr">component</span>: Usage },
    {
      <span class="hljs-attr">path</span>: <span class="hljs-string">"/examples"</span>,
      <span class="hljs-attr">component</span>: Examples,
      <span class="hljs-attr">redirect</span>: <span class="hljs-string">"/examples/auto"</span>,
      <span class="hljs-attr">children</span>: [
        { <span class="hljs-attr">path</span>: <span class="hljs-string">"auto"</span>, <span class="hljs-attr">component</span>: ExampleAuto },
        { <span class="hljs-attr">path</span>: <span class="hljs-string">"manual"</span>, <span class="hljs-attr">component</span>: ExampleManual },
        { <span class="hljs-attr">path</span>: <span class="hljs-string">"this"</span>, <span class="hljs-attr">component</span>: ExampleThis }
      ]
    },
    { <span class="hljs-attr">path</span>: <span class="hljs-string">"/styling"</span>, <span class="hljs-attr">component</span>: Styling }
  ];
  </code></pre>
    <span id="styles">Custom style adjustments:</span>
    <pre><code class="css hljs">  
  <span class="hljs-selector-class">.NavigationLevel__children</span> {
    <span class="hljs-attribute">padding-left</span>: <span class="hljs-number">10px</span>;
  }

  <span class="hljs-selector-class">.NavigationLevel__parent</span> {
    <span class="hljs-attribute">font-weight</span>:    <span class="hljs-number">600</span>;
    <span class="hljs-attribute">padding-bottom</span>: <span class="hljs-number">5px</span>;
  }

  <span class="hljs-selector-class">.NavigationItem</span> {
    <span class="hljs-attribute">color</span>:   <span class="hljs-number">#545454</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>;
  }

  <span class="hljs-selector-class">.NavigationItem--active</span> {
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#42b883</span>;
  }

  <span class="hljs-selector-class">.NavigationToggle__icon</span> {
    <span class="hljs-attribute">border-color</span>: <span class="hljs-number">#42b883</span>;
  }
  </code></pre>
  </section>
</template>
