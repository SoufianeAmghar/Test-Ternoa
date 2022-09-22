<template>
    <div>
      <!-- begin navigation -->
      <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-start">
            <a href="https://www.ternoa.com/" class="navbar-item is-half">
              <img
                src="https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/60d4ee7634af870d878335e9_logo_signature.png"
                alt="Logo: Ternoa, first NFT blockchain for builders"
                width="112"
                height="28"
              />
            </a>
            <nuxt-link active-class="is-active" to="/" class="navbar-item is-tab" exact>Home</nuxt-link>
            <nuxt-link
              active-class="is-active"
              to="/pet/new"
              class="navbar-item is-tab"
              exact
            >Add your own NFT collections 😎</nuxt-link>
            <nuxt-link
              active-class="is-active"
              to="/pet/dApp"
              class="navbar-item is-tab"
              exact
            >Metamask 💼</nuxt-link>
          </div>
        </div>
      </nav>
      <!-- end navigation -->
      <!-- displays the page component -->
      <nuxt />
      <!-- begin footer -->
      <footer class="footer home-footer has-background-black">
        <div class="content has-text-centered">
          <p class="has-text-white">
            <strong class="has-text-white">NFT collection website</strong> by
            <a href="https://www.linkedin.com/in/soufiane-amghar/">Soufiane Amghar</a>
          </p>
        </div>
      </footer>
      <!-- end footer -->
    </div>
  </template>
  
  <style>
  .main-content {
    margin: 20px 0;
  }
  body {
    font-family: "Open Sans Condensed", sans-serif;
  }
  p {
    font-size: 22px;
  }
  .home-footer{
    margin-top: 20vh;
  }
  </style>