import Arnav from '@pages/Arnav.svelte';
import Chuckie from '@pages/Chuckie.svelte';
import Home from '@pages/Home.svelte';
import Josh from '@pages/Josh.svelte';
import Logan from '@pages/Logan.svelte';
import Nickb from '@pages/Nickb.svelte';
import Nickh from '@pages/Nickh.svelte';
import NotFound from '@pages/NotFound.svelte';
import Peter from '@pages/Peter.svelte';

export default {
    '/': Home,
    '/arnav': Arnav,
    '/chuckie': Chuckie,
    '/josh': Josh,
    '/peter': Peter,
    '/logan': Logan,
    '/nickb': Nickb,
    '/nickh': Nickh,
    '*': NotFound,
};
