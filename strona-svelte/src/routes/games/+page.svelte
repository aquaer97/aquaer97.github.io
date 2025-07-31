<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  const gamesData = {
    2025: {
      "January": ["LEGO® The Lord of the Rings™"],
      "February": ["Battlefield 4", "God of War: Chains of Olympus"],
      "March": ["Half-Life 2"],
      "April": ["The Walking Dead: Michonne"],
      "May": ["Grand Theft Auto IV"],
      "June":[],
      "July": ["Sons of The Forest", "Assassin's Creed Revelations"],
      "August":[],
      "September":[],
      "October":[],
      "November":[],
      "December":[],
    },
    2024: {
      "January": ["Call of Duty: Ghosts", "Call of Duty: World at War"],
      "February": ["Battlefield V", "Dishonored"],
      "March": ["Far Cry 4", "The Witcher 3: Wild Hunt"],
      "April": ["The Witcher 2: Assassins of Kings"],
      "May": ["Far Cry 5"],
      "June": ["Super Mario Bros. Wonder"],
      "July": ["Kingdom Come: Deliverance"],
      "August": ["Wolfenstein: The New Order", "Call of Duty 4: Modern Warfare", "Minecraft", "Hi-Fi RUSH"],
      "September": ["Wolfenstein II: The New Colossus"],
      "October": ["Call of Duty: Modern Warfare 2 (2009)", "Call of Duty: Modern Warfare 3 (2011)"],
      "November": ["Mafia: Definitive Edition", "Cyberpunk 2077", "Horizon Zero Dawn™ Complete Edition"],
      "December": ["Assassin's Creed: Brotherhood"]
    },
    2023: {
      "January": ["Portal"],
      "February": ["Portal 2", "The Legend of Zelda: Breath of The Wild"],
      "March": ["The Walking Dead Season 1"],
      "April": ["The Walking Dead Season 2"],
      "May": ["Grand Theft Auto V [PS3]"],
      "June": ["The Walking Dead Season 3"],
      "July": ["Helltaker", "Red Dead Redemption 2 [2nd playthrough]", "Red Dead Redemption", "Max Payne 3"],
      "August": ["Assassin's Creed II"],
      "September": ["inFamous"],
      "October": ["The Walking Dead Season 4"],
      "December": ["Marvel's Spider-Man Remastered"]
    }
  };
</script>

<!-- one game snippet -->
{#snippet gameCell(game)}
  <div class="bg-black hover:bg-gray-800 transition-colors text-white p-3 text-center border-r border-white last:border-r-0 flex-1 min-h-12 flex items-center justify-center">
    {game}
  </div>
{/snippet}

<!-- game cell snippet -->
{#snippet gamesCell(games)}
  <td class="border border-white p-0">
    {#if games.length === 0}
      <div class="bg-black hover:bg-gray-800 transition-colors text-white p-3 text-center min-h-12 flex items-center justify-center">
        
      </div>
    {:else if games.length === 1}
      <div class="bg-black hover:bg-gray-800 transition-colors text-white p-3 text-center min-h-12 flex items-center justify-center">
        {games[0]}
      </div>
    {:else}
      <div class="flex">
        {#each games as game}
          {@render gameCell(game)}
        {/each}
      </div>
    {/if}
  </td>
{/snippet}

<!-- table row snippet -->
{#snippet tableRow(month, games, index)}
  <tr>
    <td class="bg-violet-950 text-white p-3 text-center font-bold border border-white w-24">{month}</td>
    {@render gamesCell(games)}
  </tr>
{/snippet}

<!-- full table snippet -->
{#snippet yearTable(year, months)}
  <div class="w-full max-w-4xl mb-8">
    <h2 class="text-white text-xl font-bold text-center mb-4">Games I've beaten in {year}</h2>
    <div class="overflow-x-auto">
      <table class="w-full border-collapse bg-black shadow-lg">
        <thead>
          <tr>
            <th class="bg-violet-950 text-white p-3 text-center font-bold border border-white w-24">Month</th>
            <th class="bg-violet-950 text-white p-3 text-center font-bold border border-white">Game</th>
          </tr>
        </thead>
        <tbody>
          {#each Object.entries(months) as [month, games], index}
            {@render tableRow(month, games, index)}
          {/each}
        </tbody>
      </table>
    </div>
  </div>
{/snippet}

<Navbar/>

<div class="flex flex-col items-center gap-8 p-8 min-h-screen bg-#181818">
  {#each Object.entries(gamesData).sort(([a], [b]) => Number(b) - Number(a)) as [year, months]}
    {@render yearTable(year, months)}
  {/each}
</div>

<Footer/>