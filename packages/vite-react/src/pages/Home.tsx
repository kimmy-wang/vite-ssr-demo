import { addAndMultiply } from '../utils/add'
import { multiplyAndAdd } from '../utils/multiply'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <div>{addAndMultiply(1, 2, 3)}</div>
      <div>{multiplyAndAdd(1, 2, 3)}</div>
    </>
  )
}
