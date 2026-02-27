// Block interface to define the structure of blocks
interface Block {
    id: string;
    type: string;
    content: any;
    published: boolean;
    version: number;
}

// User type to hold information about users
type User = { 
    id: string;
    name: string;
    email: string;
    role: string;
};

// Default Blocks
const DEFAULT_BLOCKS: Block[] = [
    { id: 'heroBanner', type: 'heroBanner', content: { title: 'Welcome to Our Store', image: 'hero.jpg' }, published: true, version: 1 },
    { id: 'categoryGrid', type: 'categoryGrid', content: { categories: ['Electronics', 'Books', 'Clothing'] }, published: true, version: 1 },
    { id: 'carousel', type: 'carousel', content: { slides: ['slide1.jpg', 'slide2.jpg'] }, published: false, version: 1 },
    { id: 'promo', type: 'promo', content: { text: 'Summer Sale is Here!', discount: '20%' }, published: true, version: 1 },
    { id: 'products', type: 'products', content: { items: [] }, published: true, version: 1 }
];

// blockStorage object containing methods to manage blocks
const blockStorage = {
    getAllBlocks: () => DEFAULT_BLOCKS,
    getPublishedBlocks: () => DEFAULT_BLOCKS.filter(block => block.published),
    getBlockById: (id: string) => DEFAULT_BLOCKS.find(block => block.id === id),
    createBlock: (newBlock: Block) => { DEFAULT_BLOCKS.push(newBlock); },
    updateBlock: (updatedBlock: Block) => {
        const index = DEFAULT_BLOCKS.findIndex(block => block.id === updatedBlock.id);
        if (index !== -1) {
            DEFAULT_BLOCKS[index] = updatedBlock;
        }
    },
    deleteBlock: (id: string) => {
        const index = DEFAULT_BLOCKS.findIndex(block => block.id === id);
        if (index !== -1) {
            DEFAULT_BLOCKS.splice(index, 1);
        }
    },
    reorderBlocks: (newOrder: string[]) => {
        // Implementation to reorder blocks based on newOrder array
    },
    submitForApproval: (id: string) => { /* Implementation for approval submission */ },
    approveBlock: (id: string) => { /* Implementation to approve block */ },
    rejectBlock: (id: string) => { /* Implementation to reject block */ },
    publishBlock: (id: string) => { /* Implementation to publish block */ },
    getBlockVersions: (id: string) => { /* Implementation to get block versions */ },
    restoreBlockVersion: (id: string, version: number) => { /* Implementation to restore block version */ }
};
