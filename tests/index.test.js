import { render, fireEvent } from '@testing-library/svelte'
import Index from '../src/routes/index.svelte'

it('works', async () => {
  const { getByText, getByTestId } = render(Index)

  const increment = getByText('increment')
  const decrement = getByText('decrement')
  const counter = getByTestId('counter')

  await fireEvent.click(increment)
  await fireEvent.click(increment)
  await fireEvent.click(increment)
  await fireEvent.click(decrement)

  expect(counter.textContent).toBe('2')
})
