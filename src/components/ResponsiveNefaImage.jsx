import nefaMobile from '../assets/nefa-mobile.webp';
import nefaDesktop from '../assets/nefa.webp';

const ResponsiveNefaImage = ({ className, loading = 'lazy', fetchPriority }) => (
  <picture>
    <source media="(max-width: 767px)" srcSet={nefaMobile} type="image/webp" />
    <source srcSet={nefaDesktop} type="image/webp" />
    <img
      src={nefaDesktop}
      alt="Nefa Jebrin"
      className={className}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
    />
  </picture>
);

export default ResponsiveNefaImage;
