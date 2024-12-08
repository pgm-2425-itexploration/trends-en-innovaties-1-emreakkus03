<script>
 import { writable } from 'svelte/store';
export const count = writable(0);

export let data;


</script>

<button on:click={() => $count++}>Increment</button>
<p>The count is: {$count}</p>

<h1>{data.about.aboutPage.title}</h1>
<p>{data.about.aboutPage.introduction}</p>

<section>
    {#each data.about.aboutPage.sections as section}
      <article>
        <h2>{section.heading}</h2>
        <p>{section.content}</p>
      </article>
    {/each}
  </section>
  
  <div>
    <p>{data.about.aboutPage.callToAction.text}</p>
    <a href="{data.about.aboutPage.callToAction.link}">Explore</a>
  </div>