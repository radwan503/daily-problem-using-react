export interface TreeNode {
 name: string;
 pathProps: {
   className?: string; // Making className optional
 };
 textProps: {
   x: number;
   y: number;
   onMouseOver?: (event: React.MouseEvent<Element, MouseEvent>) => void;
   onMouseOut?: (event: React.MouseEvent<Element, MouseEvent>) => void;
   // Add any other required properties here
 };
 children: TreeNode[];
 color?: string; // Optional property
}

const data: TreeNode = {
 name: 'deliveryFromCityName',
 pathProps: {},
 textProps: { x: -25, y: 25 }, // Make sure this matches what the Tree component expects
 children: [
   {
		name: 'deliveryToCityName ',
		pathProps: {className: 'blue'},
		textProps: {x: -25, y: 25},
		color: 'blue',
		children: [{
   name: 'deliveryAgent',
   textProps: { x: -25, y: 25 },
   color: 'aquamarine',
   children: [],
   pathProps: {
    className: 'blue'
   }
  }, {
   name: 'deliveryAmount',
   textProps: { x: -25, y: 25 },
   color: 'cyan',
   children: [],
   pathProps: {
    className: 'blue'
   }
  }, {
   name: 'Delivery Reciver',
   textProps: { x: -25, y: 25 },
   color: 'navy',
   children: [],
   pathProps: {
    className: 'blue'
   }
  }, {
   name: '01796226722',
   textProps: { x: -25, y: 25 },
   color: 'turquoise',
   children: [],
   pathProps: {
    className: 'blue'
   }
  }]
	},
  {
		name: 'deliveryToCityName',
		pathProps: {className: 'purple'},
		textProps: {x: -25, y: 25},
		color: 'purple',
		children: [{
   name: 'deliveryAgent',
   textProps: { x: -25, y: 25 },
   color: 'aquamarine',
   children: [],
   pathProps: {
    className: 'purple'
   }
  }, {
   name: 'deliveryAmount',
   textProps: { x: -25, y: 25 },
   color: 'cyan',
   children: [],
   pathProps: {
    className: 'purple'
   }
  }, {
   name: 'Delivery Reciver',
   textProps: { x: -25, y: 25 },
   color: 'navy',
   children: [],
   pathProps: {
    className: 'purple'
   }
  }, {
   name: '01796226722',
   textProps: { x: -25, y: 25 },
   color: 'turquoise',
   children: [],
   pathProps: {
    className: 'purple'
   }
  }]
	}]
};

export default data;
