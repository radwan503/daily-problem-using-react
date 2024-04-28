import React from 'react';
import 'react-tree-graph/dist/style.css'
import { Tree } from 'react-tree-graph';
import data from './treedata';

const TreeGraph: React.FC = (props: any) => {
  const handleClick = (event: any, node: any) => {
    console.log('handle click ', event);
    console.log('handle click node', node);
    alert(`${node} got clicked`);
  }
  return (
    <Tree
      //animated={true}
      data={data}
      //nodeRadius={15}
      margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
      gProps={{
        className: 'node',
        onClick: handleClick
      }}
      height={500}
      width={800} />
  );
}

export default TreeGraph;