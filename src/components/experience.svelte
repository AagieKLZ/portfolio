<script>
    let selected = "MAD"
    function handleClick(cat) {
        console.log(cat)
        selected = cat
    }
    const works = {
        MAD : {
            role : "FullStack Developer",
            company : "MAD Lions",
            date : "DEC 2020 - Present",
            desc : ["Responsible for ETL data pipelines"]
        },
        FNATIC : {
            role : "Data Analyst",
            company : "FNATIC",
            date : "JAN 2020 - DEC 2020",
            desc : []
        },
        Heretics : {
            role : "Data Analyst",
            company : "Heretics",
            date : "JAN 2019 - DEC 2019",
            desc : []
        },
    }
</script>

<span
  class="text-light-blue-100 relative font-goldman font-bold text-left text-2xl pt-12"
  >&lt;Work Experience/&gt;
</span>
<div class="flex sm:flex-row flex-col mt-8">
  <div
    id="places"
    class="flex sm:flex-col sm:text-right sm:mt-5 font-gruppo text-lg font-bold sm:border-r-2 sm:border-b-0 border-white sm:w-40
        flex-row w-full border-b-2 justify-around sm:px-0 px-2 text-center
    "
  >
    {#each Object.keys(works) as work}
      <div
        on:mousedown={() => handleClick(work)}
        class={`
            cursor-pointer text-white sm:pb-2 pl-4 sm:pl-4 hover:scale-105
            sm:hover:text-light-blue-100 sm:hover:border-r-4 hover:border-b-4 sm:hover:border-b-0 hover:border-light-blue-100 hover:bg-dark-blue-300 pr-3
            
            ${
          selected == work
            ? "text-light-blue-100 sm:border-r-4 sm:border-b-0 border-b-4 border-light-blue-100 bg-dark-blue-300 scale-105"
            : ""
        }`}
      >
        {works[work].company}
      </div>
    {/each}
    </div>
    <div>
        <div class="flex flex-col sm:ml-8 ml-8 mt-4 sm:mt-4">
            <span class="font-goldman text-white">{works[selected].role} @ <span class="text-light-blue-100">{works[selected].company}</span></span>
            <span class="font-gruppo text-gray-100">{works[selected].date}</span>
            <ul class="text-white list-inside list-disc font-montserrat">
                {#each works[selected].desc as desc}
                    <li>{desc}</li> 
                {/each}
            </ul>
    </div>
    </div>
</div>