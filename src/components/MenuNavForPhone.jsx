export const MenuNavForPhone = ({
  transformMobileMenu,
  setTransformMobileMenu,
}) => {
  const handleCloseMenu = () => {
    setTransformMobileMenu(-100);
    document.body.style.overflow = 'unset';
  };

  return (
    <div
      style={
        {
          transform: `translateX(${transformMobileMenu}%)`,
        }
      }
      className="burger-menu"
    >
      <div className="burger-menu__header">
        <div className="wrapper wrapper--for-menu">
          <div className="logo" />
          <button 
            type="button" 
            class="menu-for-smallScreen"
            onClick={handleCloseMenu}
          >
            <span class="icon icon-menu"></span>
          </button>
        </div>
      </div>
      <div className="wrapper">
        <div className="burger-menu__nav">
          <a
            href="#about"
            className="burger-menu__link"
            onClick={handleCloseMenu}
          >
            Про нас
          </a>
          <a
            href="#program"
            className="burger-menu__link"
            onClick={handleCloseMenu}
          >
            Програма форуму
          </a>
          <a
            href="#manifest"
            className="burger-menu__link"
            onClick={handleCloseMenu}
          >
            Маніфест
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeSr6jYMKUc-Ji1zYhSbBdZp2zLEtwLlX9JxAigCNuEtaVZGQ/viewform"
            className="burger-menu__link"
            onClick={handleCloseMenu}
          >
            Реєстрація
          </a>
        </div>
      </div>
    </div>
  );
};
