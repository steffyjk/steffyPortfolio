import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

interface ITag {
    value: string;
    background: string;
}

interface ISkill {
    name: string;
    description: string;
    tags: ITag[];
    skills: ISkill[]
}
@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    selectedNodes!: TreeNode[];
    values: any
    activeIndex: number[] = [0, 1];


    data: TreeNode[] = [
        {
            expanded: true,
            type: 'person',
            data: {
                image: 'https://cdn-icons-png.flaticon.com/128/2118/2118630.png',
                name: 'Steffy JK',
                title: 'About Me'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://cdn-icons-png.flaticon.com/128/15470/15470099.png',
                        name: 'Education',
                        title: '2017-2022'
                    },
                    children: [
                        {
                            label: '12th [ HSC Science ]'
                        },
                        {
                            label: 'Computer Engineer [ B.Tech ]',
                            data: 'Indus University',
                        },
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://cdn-icons-png.flaticon.com/128/15376/15376552.png',
                        name: 'Experience',
                        title: '2022-Present'
                    },
                    children: [
                        {
                            type: 'person',
                            data: {
                                name: 'Software Developer [ Python Developer ]',
                                title: 'Inexture Solutions LLP | 2022 - 2023'
                            }
                        },
                        {
                            type: 'person',
                            data: {
                                name: 'Software Engineer [ FullStack Developer ]',
                                title: 'Ahmedabad, Gujarat | 2023 - Present'
                            }
                        }
                    ]
                }
            ]
        }
    ];
    skills = [
        {
            name: 'Work Skills',
            description: 'This category includes technical skills relevant to software development and IT infrastructure. These skills are essential for building robust applications and managing cloud services.',
            tags: [
                'Python',
                'Django',
                'Django Rest Framework',
                'Flask',
                'Elasticsearch',
                'Angular',
                'TypeScript',
                'Flask Restful',
                'AWS',
                'AWS S3 Bucket',
                'AWS EC2',
                'Scrapy',
                'Selenium',
            ]
        },
        {
            name: 'Soft Skills',
            description: 'Soft skills are interpersonal skills that enable effective communication, collaboration, and problem-solving in the workplace. These skills are crucial for teamwork and leadership roles.',
            tags: [
                'Team Leadership',
                'Time Management',
                'Team Work',
                'Communication',
                'Problem Solving'
            ]
        }
    ];
    
}
