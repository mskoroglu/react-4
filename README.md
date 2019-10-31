# react-4

A React component to create loops.

[![NPM](https://img.shields.io/npm/v/react-4.svg)](https://www.npmjs.com/package/react-4) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i react-4
```

## Usage

```jsx
import For from "react-4"
// or import { For } from "react-4"
```


### Repeat
```jsx
<ul>
  <For each="3">
    <li>item</li>
  </For>
</ul>
```
Output:
```html
<ul>
  <li>item</li>
  <li>item</li>
  <li>item</li>
</ul>
```


### Repeat (with iteration status)
```jsx
<ul>
  <For each="3" map={stat => (
    <li key={stat.index}>
      <pre>{JSON.stringify(stat, null, 2)}</pre>
    </li>
  )} />
</ul>
```
Output:
```html
<ul>
  <li>
    <pre>{
    "index": 0,
    "count": 1,
    "size": 3,
    "isEven": true,
    "isOdd": false,
    "isFirst": true,
    "isLast": false
    }</pre>
  </li>
  <li>
    <pre>{
    "index": 1,
    "count": 2,
    "size": 3,
    "isEven": false,
    "isOdd": true,
    "isFirst": false,
    "isLast": false
    }</pre>
  </li>
  <li>
    <pre>{
    "index": 2,
    "count": 3,
    "size": 3,
    "isEven": true,
    "isOdd": false,
    "isFirst": false,
    "isLast": true
    }</pre>
  </li>
</ul>
```


### Range
```jsx
<ul>
  <For each="3..5" map={item => (
    <li key={item}>item {item}</li>
  )} />
</ul>
```
Output:
```html
<ul>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 5</li>
</ul>
```


### Range (with iteration status)
```jsx
<ul>
  <For each="2..-1" map={(item, stat) => (
    <li key={stat.index}>item {item}</li>
  )} />
</ul>
```
Output:
```html
<ul>
  <li>item 2</li>
  <li>item 1</li>
  <li>item 0</li>
  <li>item -1</li>
</ul>
```


### Range (with `object` prop)
```jsx
<ul>
  <For each={{ from: 3, to: 5 }} map={(item, stat) => (
    <li key={stat.index}>item {item}</li>
  )} />
</ul>
```
Output:
```html
<ul>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 5</li>
</ul>
```


### Array
```jsx
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
```
Output:
```html
<ul>
  <li class="even-item">first item</li>
  <li class="odd-item">item 2</li>
  <li class="even-item">last item</li>
</ul>
```


## License

MIT © [mskoroglu](https://github.com/mskoroglu)