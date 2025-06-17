import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import rawData from '../data/roadmapData.json';

function formatTree(raw) {
  const groups = raw.reduce((acc, item) => {
    if (!acc[item.group]) {
      acc[item.group] = { name: item.group, children: [] };
    }
    acc[item.group].children.push({ id: item.id, name: item.title, children: [] });
    return acc;
  }, {});

  raw.forEach(item => {
    if (item.next.length) {
      const parent = groups[item.group].children.find(n => n.id === item.id);
      parent.children = item.next.map(childId => {
        const child = raw.find(x => x.id === childId);
        return { name: child.title, children: [] };
      });
    }
  });

  return Object.values(groups);
}

const CustomNode = ({ nodeDatum }) => {
  if (!nodeDatum.name) return null;
  return (
    <g>
      <rect
        x={-60}
        y={-15}
        width={120}
        height={30}
        fill="#FFF4C1"
        stroke="#E2B71D"
        rx={6}
      />
      <text
        x={0}
        y={0}
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize={11}
        fill="#333"
      >
        {nodeDatum.name}
      </text>
    </g>
  );
};

export default function RoadmapTree() {
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    setTreeData(formatTree(rawData));
  }, []);

  if (treeData.length === 0) return <div>Loading roadmap…</div>;

  const width = window.innerWidth;
  const height = window.innerHeight * 0.85;

  const treeRoot = { name: '', children: treeData };

  return (
    <div style={{ width: '100%', height }}>
      <Tree
        data={[treeRoot]}
        orientation="vertical"
        translate={{ x: width / 2.5, y: height / 2 }}
        pathFunc="diagonal"
        renderCustomNodeElement={CustomNode}
        zoomable
        collapsible={false}
        separation={{ siblings: 1.5, nonSiblings: 2 }}
        linkSvgProps={{ stroke: '#E2B71D', strokeWidth: 1.2, strokeDasharray: '3,3' }}
      />
    </div>
  );
}

