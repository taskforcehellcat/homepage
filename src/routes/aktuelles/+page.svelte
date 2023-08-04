
<script lang='ts'>
    import type { Campaign } from './.d.ts';

    export let data;
    const campaignData: Campaign = data.campaignData;
</script>

<p>{campaignData.title}</p>
