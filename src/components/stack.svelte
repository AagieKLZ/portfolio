<script>
  let selected = "Frontend";
  const techs = {
    Frontend: [
      { tech: "NextJS", tag: "" },
      { tech: "React", tag: "best" },
      { tech: "Svelte", tag: "loved" },
      { tech: "Vuejs", tag: "" },
    ],
    Backend: [
        {tech : "Express", tag : "loved"},
        {tech : "Node", tag : ""},
        {tech : "Flask", tag : "best"},
        {tech : "Django", tag : ""},
        {tech : "Laravel", tag : ""}
    ],
    Languages: [
        {tech : "Javascript", tag : ""},
        {tech : "Typescript", tag : ""},
        {tech : "Python", tag : "best"},
        {tech : "Java", tag : ""},
        {tech : "Rust", tag : "loved"},
        {tech : "PHP", tag : ""}
    ],
    Databases: [
        {tech : "MySQL", tag : "best"},
        {tech : "Postgres", tag : "loved"},
        {tech : "MongoDB", tag : ""}
    ],
    Others: [
        {tech : "git", tag : ""},
        {tech : "docker", tag : ""},
        {tech : "linux", tag : ""},
        {tech : "figma", tag : ""},
        {tech : "tailwind", tag : "loved"}
    ],
  };

  function handleClick(cat) {
    selected = cat;
  }
</script>

<span
  class="text-light-blue-100 relative font-goldman font-bold text-left text-2xl py-3"
  >&lt;MyStack/&gt;
</span>
<div class="flex flex-row">
  <div
    id="types"
    class="flex flex-col text-right mt-5 font-gruppo text-lg font-bold border-r-2 border-white w-36"
  >
    {#each Object.keys(techs) as tech}
      <div
        on:mousedown={() => handleClick(tech)}
        class={`cursor-pointer pb-2 pl-4 hover:scale-105 hover:text-light-blue-100 hover:border-r-4 hover:border-light-blue-100 hover:bg-dark-blue-300 pr-3 ${
          selected == tech
            ? "text-light-blue-100 border-r-4 border-light-blue-100 bg-dark-blue-300 scale-105"
            : ""
        }`}
      >
        {tech}
      </div>
    {/each}
  </div>
  <div
    id="icons"
    class="w-1/2 min-w-fit pl-12 flex flex-row flex-wrap justify-around h-[60px] my-auto"
  >
    {#each techs[selected] as lang}
    <div class="relative">
      <img
        src={`/${lang.tech}.svg`}
        alt={lang.tech}
        class={`${lang.tag ? "relative" : ""}`}
      />
      {#if lang.tag === "loved"}
        <div class="absolute bottom-0 right-0">
          <img src="/loved.svg" alt="">
        </div>
        {:else if lang.tag === "best"}
        <div class="absolute bottom-0 right-0">
          <img src="/best.svg" alt="">
        </div>
      {/if}
    </div>
    {/each}
  </div>
</div>
