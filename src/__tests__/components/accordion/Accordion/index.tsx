import React from 'react';
import { render } from '@testing-library/react';
import Accordion from '../../../../components/accordion/Accordion';
import AccordionItem from '../../../../components/accordion/AccordionItem';

describe('Accordion', () => {
  it('should render', () => {
    const { getByRole } = render(
      <Accordion>
        <AccordionItem title="title" ariaLabel="aria-label">
          <div />
        </AccordionItem>
      </Accordion>,
    );
    expect(getByRole('list')).toBeInTheDocument();
  });
});
