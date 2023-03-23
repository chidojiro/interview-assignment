import React from 'react';
import {render, screen} from '@testing-library/react';
import FooterColumnNav from '../../components/footer/FooterColumnNav';

describe('FooterColumnNav component tests', () => {
  const columns = [
    {
      "title": "column1",
      "url": "/",
      "children": [
        {
          "title": "employer solutions",
          "url": "/",
          "children": [
            {
              "title": "staffing & recruitment",
              "url": "/employers/staffing-recruitment/staffing-and-recruitment",
              "children": []
            },
            {
              "title": "HR consulting",
              "url": "/employers/hr-consulting",
              "children": []
            }
          ]
        },
        {
          "title": "hire employees",
          "url": "/",
          "children": [
            {
              "title": "administrative support",
              "url": "/employers/areas-of-expertise/administrative-support/",
              "children": []
            },
            {
              "title": "customer support",
              "url": "/employers/areas-of-expertise/contact-centre-and-customer-care/",
              "children": []
            },
            {
              "title": "engineering",
              "url": "/employers/areas-of-expertise/engineering/",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "title": "column2",
      "url": "/",
      "children": [
        {
          "title": "employer solutions",
          "url": "/",
          "children": [
            {
              "title": "staffing & recruitment",
              "url": "/employers/staffing-recruitment/staffing-and-recruitment",
              "children": []
            },
            {
              "title": "HR consulting",
              "url": "/employers/hr-consulting",
              "children": []
            }
          ]
        },
        {
          "title": "hire employees",
          "url": "/",
          "children": [
            {
              "title": "administrative support",
              "url": "/employers/areas-of-expertise/administrative-support/",
              "children": []
            },
            {
              "title": "customer support",
              "url": "/employers/areas-of-expertise/contact-centre-and-customer-care/",
              "children": []
            },
            {
              "title": "engineering",
              "url": "/employers/areas-of-expertise/engineering/",
              "children": []
            }
          ]
        }
      ]
    }
  ];
  render(<FooterColumnNav columns={columns} />);

  const columnLength = columns.length;
  const result = screen.getByTestId("footer-column-nav") as HTMLDivElement;
  it("Column count should be the same as the one provided", () => {
    expect(result.children.length).toBe(columnLength);
  });
  it("Adds another column and checks for the correct number of columns rendered", () => {
    columns.push({
      "title": "column3",
      "url": "/",
      "children": [
        {
          "title": "employer solutions",
          "url": "/",
          "children": [
            {
              "title": "staffing & recruitment",
              "url": "/employers/staffing-recruitment/staffing-and-recruitment",
              "children": []
            },
            {
              "title": "HR consulting",
              "url": "/employers/hr-consulting",
              "children": []
            }
          ]
        },
        {
          "title": "hire employees",
          "url": "/",
          "children": [
            {
              "title": "administrative support",
              "url": "/employers/areas-of-expertise/administrative-support/",
              "children": []
            }
          ]
        }
      ]
    });
    expect(result.children.length).toBe(columnLength);
  });
});
