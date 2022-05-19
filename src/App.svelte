<script lang="ts">
    import { deviceType } from '@utils/ui';

    import Background from '@components/Background.svelte';
    import Header from '@components/Header.svelte';

    import Router from 'svelte-spa-router';
    import routes from './routes';

    const type = deviceType();
</script>

<Background />

<Header />

<Router {routes} />
