<template>
  <section>
    <h2>Usage</h2>
    <h3 id="props">Props</h3>
    <div id="items">
      <h4><code>items</code></h4>
      <p>
        <strong>Optional</strong>. An array containing tree navigation items. In case no
        items are provided, vue-tree-navigation will check if vue-router is available and
        will use its routes to generate navigation items.
      </p>
      <h5>Fields</h5>
      <ul>
        <li><code>name</code> Item label</li>
        <li>
          <code>path</code> Relative target.You need to install and configure vue-router
          if you wish <code>path</code> items to behave like router links. Otherwise they
          will behave like normal hyperlinks.
        </li>
        <li><code>element</code> Element ID</li>
        <li><code>external</code> Absolute external target</li>
      </ul>
    </div>
    <div id="default-open-level">
      <h4><code>defaultOpenLevel</code></h4>
      <p>
        <strong>Optional</strong>. Default value is <code>0</code> (everything is closed).
      </p>
    </div>
  </section>
</template>
