// @packages
import { IntlProvider } from 'react-intl';

// @app
import { LOCALES } from 'i18n/locales';
import { messages } from 'i18n/messages';

// @own
import './styles.scss';
import Card from 'components/Card';
import clockIcon from 'assets/icon-clock.svg';
import ethereumIcon from 'assets/icon-ethereum.svg';
import mainImage from 'assets/image-equilibrium.jpg';
import userAvatar from 'assets/image-avatar.png';
import eyeIcon from 'assets/icon-view.svg';

const App = () => {
  const locale = LOCALES.ENGLISH;
  const resources = {
    clockIcon,
    ethereumIcon,
    eyeIcon,
    mainImage,
    userAvatar,
  };

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div className='app'>
        <Card resources={resources} />
      </div>
    </IntlProvider>
  );
};

export default App;
