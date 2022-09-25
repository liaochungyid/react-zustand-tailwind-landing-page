import { ReactComponent as LogoTransistor } from '../images/logo-transistor.svg';
import { ReactComponent as LogoTuple } from '../images/logo-tuple.svg';
import { ReactComponent as LogoStatickit } from '../images/logo-statickit.svg';
import { ReactComponent as LogoMirage } from '../images/logo-mirage.svg';
import { ReactComponent as LogoLaravel } from '../images/logo-laravel.svg';
import { ReactComponent as LogoStatamic } from '../images/logo-statamic.svg';

function Footer() {
  return (
    <footer className="flex flex-col items-center py-14">
      <p className='font-lexend font-medium text-base -tracking-[0.02em] text-cool-gray-900 mb-8 dark:text-white-60'>Trusted by these six companies so far</p>
      <div className='flex flex-row gap-[42px] dark:logo-trusted'>
        <LogoTransistor />
        <LogoTuple />
        <LogoStatickit />
        <LogoMirage />
        <LogoLaravel />
        <LogoStatamic />
      </div>
    </footer>
  );
}

export default Footer;
