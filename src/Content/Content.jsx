import React from 'react'
import Part from './Part/Part';

function Content({part1, part2, part3, task1, task2, task3}) {
  return (
    <div>
        <Part parts={part1} tasks={task1} />
        <Part parts={part2} tasks={task2}/>
        <Part parts={part3} tasks={task3}/>
    </div>
  )
}

export default Content;