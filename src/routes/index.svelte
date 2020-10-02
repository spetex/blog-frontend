<script>
  let count = 0

  const handleIncrement = () => {
    count += 1
  }

  const handleDecrement = () => {
    count -= 1
  }
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Hello World!</h1>
<p>Count:</p>
<span data-testid="counter">{count}</span>
<button on:click="{handleIncrement}">increment</button>
<button on:click="{handleDecrement}">decrement</button>

<style>
  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }
</style>
