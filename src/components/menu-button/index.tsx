export const MenuButton = ({ isActive }: { isActive: boolean }) => {
  return (
    <label
      htmlFor="check"
      className={`${isActive && 'active'} menu-button`}
    >
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};
