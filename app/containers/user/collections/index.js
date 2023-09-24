import React from 'react'
import { Collection } from '~/components';
import { FAKE_COLLECTION } from '~/store/defaults';

export default function Index() {
  return (
    <div className='grid col4 col3-md col2-sm col1-xs gap-3'>
      {FAKE_COLLECTION.map((item, index) => (
            <Collection
              key={`${item.creator}_${item.title}`}
              detail={item}
              // onClick={() => {
              //   navigate(`/collection/${item.id}`);
              // }}
            />
          ))}
    </div>
  )
}
