<script lang="ts">
  import type { Campaign } from './.d.ts';

  export let data;
  const campaignData: Campaign = data.campaignData;
  const ladef = campaignData.ladef;
</script>

<div class="main">
  <section>
    <h1>Aktuelle Kampagne</h1>
    <span class="title">{campaignData.title}</span>
  </section>
  <section>
    <h1>Aktuelle Mission</h1>

    <h2>Lage</h2>
    <p>{ladef.lage}</p>

    <h2>Auftrag</h2>
    <p>{ladef.auftrag}</p>

    <h2>Durchführung</h2>
    <p>{ladef.durchfuehrung}</p>

    <h2>Einsatzunterstützung</h2>
    <p>{ladef.einsatzunt}</p>

    <h2>Führungsunterstützung</h2>
    <p>{ladef.fuehrungsunt}</p>

  </section>
</div>

<style lang="scss">
  .main {
    background-color: #0d0c0f;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    color: white;
    font-size: 3rem;
    font-weight: 900;
  }

  section {
    margin-bottom: 3rem;
    height: fit-content;
    width: min(70rem, 100%);
    padding: 0 5rem 0 5rem;
    border-left: 1rem solid white;
    border-right: 1rem solid white;
  }

  h1 {
    color: white;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  h2 {
    color: white;
    font-size: 3rem;
    margin-bottom: 1rem;
    margin-top: 2rem;

  }

  p {
    color: white;
    font-size: 2rem;
  }
</style>
