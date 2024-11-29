import cn from 'classnames';

export const Tabs = ({ goods, currentTab, set }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {goods.map(good => (
          <li
            data-cy="Tab"
            key={good.id}
            className={cn`${good.id === currentTab.id && 'is-active'}`}
          >
            <a
              data-cy="TabLink"
              href={`#${good.id}`}
              onClick={() => {
                if (good.id !== currentTab.id) {
                  set(good.id);
                }
              }}
            >
              {good.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
