import React, { useState, useEffect, useRef } from 'react';
import Tree from 'react-d3-tree';
import rawData from '../RoadmapPage/Roadmap.json';
import './RoadmapPage.css';

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
  return (
    <g>
      <rect
        width="150"
        height="40"
        x="-75"
        y="-20"
        fill="#FDF6E3"
        stroke="#FFB400"
        strokeWidth="2"
        rx="10"
      />
      <text
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="12"
        fill="#333"
      >
        {nodeDatum.name}
      </text>
    </g>
  );
};

export default function RoadmapTree() {
  const [treeData, setTreeData] = useState([]);
  const treeRef = useRef();

  useEffect(() => {
    setTreeData(formatTree(rawData));
  }, []);

  if (treeData.length === 0) return <div className="loading-msg">Loading roadmap…</div>;

  const treeRoot = { name: '', children: treeData };

  return (
    <div className="roadmap-tree-container">
      <Tree
        ref={treeRef}
        data={[treeRoot]}
        orientation="vertical"
        translate={{ x: window.innerWidth / 2, y: 100 }}
        pathFunc="diagonal"
        renderCustomNodeElement={CustomNode}
        zoomable
        collapsible={false}
        separation={{ siblings: 1.5, nonSiblings: 2 }}
        linkSvgProps={{ stroke: '#E2B71D', strokeWidth: 1.5, strokeDasharray: '4,2' }}
      />
    </div>
  );
}
