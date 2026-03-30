'use client';

import * as L from '@chili';
import { Live } from '@/components/live';

export const ItemRenderDemo = () => (
  <Live scope={{ L }}>
    {`
() => {
  const data = [
    { last_name: 'Dostoevsky', first_name: 'Fyodor', middle_name: 'Mikhailovich' },
    { last_name: 'Tolstoy', first_name: 'Leo', middle_name: null },
    { last_name: 'Chekhov', first_name: 'Anton', middle_name: 'Pavlovich' },
  ];

  return (
    <L.AutoComplete
      data={data}
      textField='last_name'
      minSearchLength={0}
      itemRender={({ Element, elementProps, componentProps }) => {
        const author = componentProps.item;
        const sub = [author.first_name, author.middle_name]
          .filter(Boolean)
          .join(' ');
        return (
          <Element {...elementProps}>
            <span className="block font-medium text-stone-900">
              {author.last_name}
            </span>
            {sub !== '' ? (
              <span className="block text-base text-stone-400">{sub}</span>
            ) : null}
          </Element>
        );
      }}
      onChange={({ component }) => console.log(component.value)}
      _w-48
    />
  );
}`}
  </Live>
);
