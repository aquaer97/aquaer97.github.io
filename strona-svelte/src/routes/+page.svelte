<script>
import Navbar from '$lib/components/Navbar.svelte';
import Footer from '../lib/components/Footer.svelte';
</script>

<Navbar />
<main class="ml-48 text-lg"><h1 class="text-2xl font-bold ">Welcome to my site!</h1><br/>
<img src="/html-incompetence.gif" alt="html-incompetence.gif" class="mb-6 animate-bounce">
<p>Select the tab you are interested in from the menu above and thanks for visiting!
</p>
<h2 class="text-3xl font-bold my-5">NEW SUBPAGE! CHECK OUT MY <a href="/blog" class="text-blue-400 hover:text-blue-600 visited:text-blue-700">BLOG</a>!</h2>

<h3 class="text-2xl font-bold">Now running on Svelte 5</h3>
</main>
<Footer/>