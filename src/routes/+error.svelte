<script>
    import { page } from '$app/stores';
</script>

<div>
    {#if $page?.error}
        <div class="mt-4 p-4 border-y-2">
            {#if $page?.status}
                <p>Page status: {$page?.status}</p>
            {/if}
            {#if $page?.error?.message}
                <p>Error message: {$page?.error?.message}</p>
            {/if}
        </div>
    {/if}
</div>
