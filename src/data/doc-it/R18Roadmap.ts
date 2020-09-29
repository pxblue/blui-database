export type FrameworkFilter = 'all' | 'angular' | 'react' | 'ionic' | 'react-native';
export type ItemTypeFilter = 'all' | 'design' | 'development';
export type Status = 'backlog' | 'in-progress' | 'pre-release' | 'deferred' | 'finished';
export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

export type RoadmapItem = {
    name: string;
    description: string;
    year: string | number;
    quarter: Quarter;
    status: Status;
    author?: string;
    type?: ItemTypeFilter;
    framework?: FrameworkFilter[];
};
type RoadmapBucket = {
    name: string;
    description: string;
    type: ItemTypeFilter;
    framework?: FrameworkFilter[];
    items: RoadmapItem[];
};

export const roadmap: RoadmapBucket[] = [
    {
        "name": "Figma Stickersheet Resources",
        "description": "New resources for designers",
        type: 'design',
        items: [
            {
                name: 'Design Patterns',
                description: 'Reusable designs that commonly occur in applications',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'Templates',
                description: 'Presets available to speed up your designs',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'Angular Component Library',
        description: 'Reusable UI elements from @pxblue/angular-components',
        type: 'development',
        framework: ['angular', 'ionic'],
        items: [
            {
                name: 'Angular 10 Support',
                description: 'Full compatibility of version 10 of the @angular component library',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'React Component Library',
        description: 'Reusable UI elements from @pxblue/react-components',
        type: 'development',
        framework: ['react'],
        items: [],
    },
    {
        name: 'pxblue.github.io',
        description: 'The PX Blue documentation site',
        type: 'design',
        items: [
            {
                name: 'Design Patterns',
                description: 'New format and content for design patterns',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'Reusable Workflows',
        description: 'Components for implementing common workflows across applications',
        type: 'development',
        framework: ['angular'],
        items: [
            {
                name: 'Angular Login & User Registration',
                description: 'Shared login and sign-up experience across applications',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
                framework: ['angular'],
            },
        ],
    },
    {
        name: 'Utilities',
        description: 'Assorted tools for helping you work faster',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'PX Blue CLI',
                description: 'CLI enhancements and templates',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
        ],
    },
];
