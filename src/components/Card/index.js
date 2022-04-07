// @packages
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import cn from 'classnames';

// @app
import useHover from 'hooks/useHover';

// @own
import './styles.scss';

const Card = ({
  resources: { mainImage, ethereumIcon, clockIcon, userAvatar, eyeIcon },
  className,
}) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div className='card'>
      <div className='card__image' ref={hoverRef}>
        <img src={mainImage} alt='square image' className='card__image-main' />
        <div className={isHovered ? 'card__image-overlay' : ''}>
          <img
            src={eyeIcon}
            alt='eye icon'
            className={cn('card__image-secondary', className, {
              'card__image-secondary--hidden': !isHovered,
            })}
          />
        </div>
      </div>
      <div className='card__title'>
        <FormattedMessage id='title' />
      </div>
      <div className='card__description'>
        <FormattedMessage id='description' />
      </div>
      <div className='card__info'>
        <div className='card__currency'>
          <div className='card__currency-icon'>
            <img src={ethereumIcon} alt='icon-ethereum' />
          </div>
          <div className='card__currency-amount'>0.041 ETH</div>
        </div>
        <div className='card__time'>
          <div className='card__time-icon'>
            <img src={clockIcon} alt='icon-clock' />
          </div>
          <div className='card__time-info'>
            <FormattedMessage id='time' />
          </div>
        </div>
      </div>
      <div className='card__footer'>
        <div className='card__footer-image'>
          <img src={userAvatar} alt='userAvatar' />
        </div>
        <div className='card__footer-info'>
          <FormattedMessage
            id='footerText'
            values={{
              userName: (
                <a
                  target='_blank'
                  href='https://github.com/lacosta'
                  rel='noreferrer'
                >
                  Leandro Acosta
                </a>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  resources: PropTypes.object,
  className: PropTypes.string,
};

export default Card;
