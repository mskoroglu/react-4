import React from "react"
import For from "react-4"

export default function App() {
  return (
    <React.Fragment>
      <ul>
        <For each="3">
          <li>item</li>
        </For>
      </ul>

      <ul>
        <For each="3" map={stat => (
          <li key={stat.index}>
            <pre>{JSON.stringify(stat, null, 2)}</pre>
          </li>
        )} />
      </ul>

      <ul>
        <For each="3..5" map={item => (
          <li key={item}>item {item}</li>
        )} />
      </ul>

      <ul>
        <For each="2..-1" map={(item, stat) => (
          <li key={stat.index}>item {item}</li>
        )} />
      </ul>

      <ul>
        <For each={{ from: 3, to: 5 }} map={(item, stat) => (
          <li key={stat.index}>item {item}</li>
        )} />
      </ul>

      <ul>
        <For each={[1, 2, 3]} map={(item, stat) => (
          <li
            key={stat.index}
            className={stat.isEven ? 'even-item' : 'odd-item'}
          >
            {stat.isFirst
              ? 'first item'
              : stat.isLast
                ? 'last item'
                : `item ${item}`
            }
          </li>
        )} />
      </ul>
    </React.Fragment>
  )
}