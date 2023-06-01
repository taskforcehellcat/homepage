<svelte:head>
  <title>Impressum | Task Force Hellcat</title>
</svelte:head>

<section>
  <h1>Impressum</h1>
  <br />
  <p>
    Max Mustermann<br />Musterstraße 1<br />12345 Musterstadt<br />Telefon: 0123 45678910<br />E-Mail:
    max.mustermann@example.com
  </p>
  <br />
  <a href="/">Zurück zur Homepage</a>
</section>

<style lang="scss">
  :global(body) {
    background-color: #012d47;
    color: #fff;
  }

  section {
    width: 100%;
    height: 100%;
    font-size: 15pt;

    padding-block: 12rem;
    padding-inline: 12rem;

    a {
      color: inherit;
    }
  }
</style>
