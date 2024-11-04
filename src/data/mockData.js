const mockData = {
    fetch: async () => {
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await delay(1000);

        const nodes = [
            { id: 1, name: 'Salary', value: 3500 },
            { id: 2, name: 'Bills', value: 3000 },
            { id: 3, name: 'Electric Bill', value: 1000 },
            { id: 4, name: 'Mobile Bill', value: 2000 }
        ];

        const links = [
            { source: nodes.findIndex(node => node.id === 1), target: nodes.findIndex(node => node.id === 2), value: 3000 },
            { source: nodes.findIndex(node => node.id === 2), target: nodes.findIndex(node => node.id === 3), value: 1000 },
            { source: nodes.findIndex(node => node.id === 2), target: nodes.findIndex(node => node.id === 4), value: 2000 }
        ];

        return { nodes, links };
    },
};

export default mockData;
