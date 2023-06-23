import React from 'react';
import { render, screen } from '@testing-library/react';
import ApplicationProcess from '../../components/ApplicationProcess/ApplicationProcess';
import ApplicationProcessCard from '../../components/ApplicationProcess/ApplicationProcessCard';

describe('ApplicationProcess', () => {
  it('renders correctly', () => {
    const backgroundColor = 'test-background-color';
    const title = 'Test Wrapper Title';
    const description = 'Test Wrapper Description';
    const cardTitle = 'Test Card';
    const cardDescription = 'Test Description';
    const testImg = 'test-img.jpg';
    const accessibilityItemNumber = '1 of 2';
    const cardColor = 'test-color';
    const badgeColor = 'test-badge-color';
    const itemNumber = '1 of 2';

    const { getByText } = render(
      <div data-testid="application-process-component">

        <ApplicationProcess
          backgroundColor={backgroundColor}
          title={title}
          description={description}
        >
          <ApplicationProcessCard
            cardTitle={cardTitle}
            cardDescription={cardDescription}
            cardImage={testImg}
            accessibilityItemNumber={accessibilityItemNumber}
            cardColor={cardColor}
            badgeColor={badgeColor}
            itemNumber={itemNumber}
          />
        </ApplicationProcess>
      </div>,
    );

    const card = screen.getByTestId('application-process-component').querySelector('.blog-overview--carousel');
    const wrapperTitle = getByText(title);
    const wrapperDescription = getByText(description);
    const cardTitleElement = getByText(cardTitle);
    const cardDescriptionElement = getByText(cardDescription);

    expect(card).toBeInTheDocument();
    expect(wrapperTitle).toBeInTheDocument();
    expect(wrapperDescription).toBeInTheDocument();
    expect(cardTitleElement).toBeInTheDocument();
    expect(cardDescriptionElement).toBeInTheDocument();
    expect(card).toHaveClass(backgroundColor);
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
        cardColor: 'test-color-1',
        badgeColor: 'test-badge-color-1',
        itemNumber: '1 of 2',
      },
      {
        index: 2,
        cardTitle: 'Test Card 2',
        cardDescription: 'Test Description 2',
        cardImage: 'test-img-2.jpg',
        accessibilityItemNumber: '2 of 2',
        cardColor: 'test-color-2',
        badgeColor: 'test-badge-color-2',
        itemNumber: '2 of 2',
      },
    ];

    const { getByText } = render(
      <div data-testid="application-process-component">
        <ApplicationProcess
          backgroundColor={backgroundColor}
          title={title}
          description={description}
        >
          {cardData.map((card) => (
            <ApplicationProcessCard
              key={card.index}
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
      </div>,
    );
    const card = screen.getByTestId('application-process-component').querySelector('.blog-overview--carousel');
    const cardList = (card as Element).querySelector('.slick-list');

    const card1Title = getByText('Test Card 1');
    const card1Description = getByText('Test Description 1');
    const card1ItemNumber = getByText('1 of 2');
    const cardListBannerWrapper1 = (cardList as Element).querySelectorAll('.banner__wrapper')[0];
    const cardImage1 = cardListBannerWrapper1.querySelector('.media-block')?.children[0];

    expect(card).toBeInTheDocument();
    expect(cardList).toBeInTheDocument();

    expect(card1Title).toBeInTheDocument();
    expect(card1Description).toBeInTheDocument();
    expect(card1ItemNumber).toBeInTheDocument();
    expect(card1ItemNumber).toHaveClass('badge badge--l test-badge-color-1');
    expect(cardListBannerWrapper1).toBeInTheDocument();
    expect(cardListBannerWrapper1).toHaveClass('banner__wrapper test-color-1');
    expect(cardImage1).toBeInTheDocument();
    expect(cardImage1).toHaveAttribute('src', 'test-img-1.jpg');
    expect(cardImage1).toHaveAttribute('alt', '1 of 2');

    const card2Title = getByText('Test Card 2');
    const card2Description = getByText('Test Description 2');
    const card2ItemNumber = getByText('2 of 2');
    const cardListBannerWrapper2 = (cardList as Element).querySelectorAll('.banner__wrapper')[1];
    const cardImage2 = cardListBannerWrapper2.querySelector('.media-block')?.children[0];

    expect(card2Title).toBeInTheDocument();
    expect(card2Description).toBeInTheDocument();
    expect(card2ItemNumber).toBeInTheDocument();
    expect(card2ItemNumber).toHaveClass('badge badge--l test-badge-color-2');
    expect(cardListBannerWrapper2).toBeInTheDocument();
    expect(cardListBannerWrapper2).toHaveClass('banner__wrapper test-color-2');
    expect(cardImage2).toBeInTheDocument();
    expect(cardImage2).toHaveAttribute('src', 'test-img-2.jpg');
    expect(cardImage2).toHaveAttribute('alt', '2 of 2');
  });
});
