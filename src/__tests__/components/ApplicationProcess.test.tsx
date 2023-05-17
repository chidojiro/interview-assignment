import React from 'react';
import { render } from '@testing-library/react';
import ApplicationProcess from '../../components/applicationProcess/ApplicationProcess'
import ApplicationProcessCard from '../../components/applicationProcess/ApplicationProcessCard'

describe('ApplicationProcess', () => {
  it('renders correctly', () => {
    const backgroundColor = 'Test background color';
    const title = 'Test Wrapper Title';
    const description = 'Test Wrapper Description';
    const index = 1;
    const cardTitle = 'Test Card';
    const cardDescription = 'Test Description';
    const testImg = 'test-img.jpg';
    const accessibilityItemNumber = '1 of 2';
    const cardColor = 'Test Color';
    const badgeColor = 'Test Badge Color';
    const itemNumber = '1 of 2';

    const { getByText } = render(
      <ApplicationProcess
        backgroundColor={backgroundColor}
        title={title}
        description={description}
      >
        <ApplicationProcessCard
          index={index}
          cardTitle={cardTitle}
          cardDescription={cardDescription}
          cardImage={testImg}
          accessibilityItemNumber={accessibilityItemNumber}
          cardColor={cardColor}
          badgeColor={badgeColor}
          itemNumber={itemNumber}
        />
      </ApplicationProcess>
    );

    const wrapperTitle = getByText(title);
    const wrapperDescription = getByText(description);
    const cardTitleElement = getByText(cardTitle);
    const cardDescriptionElement = getByText(cardDescription);

    expect(wrapperTitle).toBeInTheDocument();
    expect(wrapperDescription).toBeInTheDocument();
    expect(cardTitleElement).toBeInTheDocument();
    expect(cardDescriptionElement).toBeInTheDocument();
  });
  it('renders multiple cards', () => {
    const backgroundColor = 'Test background color';
    const title = 'Test Wrapper Title';
    const description = 'Test Wrapper Description';
    const cardData = [
      {
        index: 1,
        cardTitle: 'Test Card 1',
        cardDescription: 'Test Description 1',
        cardImage: 'test-img-1.jpg',
        accessibilityItemNumber: '1 of 2',
        cardColor: 'Test Color 1',
        badgeColor: 'Test Badge Color 1',
        itemNumber: '1 of 2',
      },
      {
        index: 2,
        cardTitle: 'Test Card 2',
        cardDescription: 'Test Description 2',
        cardImage: 'test-img-2.jpg',
        accessibilityItemNumber: '2 of 2',
        cardColor: 'Test Color 2',
        badgeColor: 'Test Badge Color 2',
        itemNumber: '2 of 2',
      },
    ];

    const { getByText } = render(
      <ApplicationProcess
        backgroundColor={backgroundColor}
        title={title}
        description={description}
      >
        {cardData.map((card) => (
          <ApplicationProcessCard
            key={card.index}
            index={card.index}
            cardTitle={card.cardTitle}
            cardDescription={card.cardDescription}
            cardImage={card.cardImage}
            accessibilityItemNumber={card.accessibilityItemNumber}
            cardColor={card.cardColor}
            badgeColor={card.badgeColor}
            itemNumber={card.itemNumber}
          />
        ))}
      </ApplicationProcess>
    );

    const card1Title = getByText('Test Card 1');
    const card2Title = getByText('Test Card 2');

    expect(card1Title).toBeInTheDocument();
    expect(card2Title).toBeInTheDocument();
  });
});