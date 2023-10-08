import * as D from './data'

export default function App() {
  // console.log('App called.')
  // return <h1>Hello World!</h1>
  return (
    <div>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height="50" />
      <img src={D.randomImage()} height="300" />
    </div>
  )
}
