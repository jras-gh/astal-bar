import { Variable, bind } from "astal"

type Props = {
  p: string
  child?: JSX.Element
  children?: Array<JSX.Element>
}

export default function MyButton({p, child, children}: Props) {
  const count = Variable(0)
  const labels = [p +"1", p +"2"]

  if (child) {
    console.log(child.label)
  }

  function increment() {
    count.set(count.get() + 1)
  }

  function handleClick(self, ...args) {
    console.log(self, "was clicked")
  }
  return <box>
    {labels.map(label => (
      <button onClick={handleClick}>
        <label label={label}></label>
      </button>
    ))}
    <button onClick={increment}>
      <label label={bind(count).as(num => num.toString())}></label>
    </button>
  </box>
}
