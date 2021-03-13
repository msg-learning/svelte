<script lang="ts">
    import {
        AppBar,
        Button,
        Icon,
        Overlay,
        ListItem,
        NavigationDrawer,
        List,
    } from "svelte-materialify";

    import { mdiMenu, mdiGithub } from "@mdi/js";
    import { Link } from "svelte-routing";

    let active = false;

    function toggleNavigation() {
        active = !active;
    }
</script>

<AppBar flat>
    <div slot="icon">
        <Button depressed on:click={toggleNavigation}>
            <Icon path={mdiMenu} />
        </Button>
    </div>
    <div style="flex-grow:1" />
    <Button fab size="small"><Icon path={mdiGithub} /></Button>
</AppBar>

<NavigationDrawer absolute {active} on:click={toggleNavigation}>
    <List style="margin-top: 56px;">
        <ListItem><Link to="/">Home</Link></ListItem>
        <ListItem><Link to="/counter">Counter</Link></ListItem>
        <ListItem><Link to="/names">Names</Link></ListItem>
    </List>
</NavigationDrawer>

<Overlay {active} absolute on:click={toggleNavigation} index={1} />
