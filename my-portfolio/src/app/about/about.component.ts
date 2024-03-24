import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  selectedNodes!: TreeNode[];

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
                      image: 'https://cdn-icons-png.flaticon.com/128/3976/3976555.png',
                      name: 'Education',
                      title: 'Education1'
                  },
                  children: [
                      {
                          label: 'Computer Engineer [ B.Tech ]',
                          data: 'Indus University',
                      },
                      {
                          label: '12th [ HSC Science ]'
                      }
                  ]
              },
              {
                  expanded: true,
                  type: 'person',
                  data: {
                      image: 'https://cdn-icons-png.flaticon.com/128/15376/15376552.png',
                      name: 'Experience',
                      title: 'Experience1'
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
}
