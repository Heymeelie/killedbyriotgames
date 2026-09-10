import { FC, useEffect, useMemo, useState } from 'react';

import { FilterType } from '../types/Filter';
import { ProductType, ProductWithSlug } from '../types/Product';
import {
    Controls,
    Filter,
    List,
    Loader,
    Search,
} from '../components';

const App: FC<{ items: ProductWithSlug[] }> = ({ items }) => {
    const [searchTerm, updateSearchTerm] = useState('');
    const [activeFilter, updateActiveFilter] = useState<ProductType|FilterType>(FilterType.ALL);

    // Derived while rendering instead of mirrored into state by an effect,
    // which cascades an extra render and is flagged by the React hooks rules.
    const listItems = useMemo(() => {
        const list = activeFilter === 'all' ? items :
            items.filter(el => el.type === activeFilter);
        // If search goes empty, show the filtered list as-is.
        if (searchTerm === '') return list;
        // Otherwise filter the list by name and description
        const regexp = new RegExp(searchTerm.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        return list.filter(el =>
            regexp.test(el.name.toLowerCase()) ||
            regexp.test(el.description.toLowerCase())
        );
    }, [searchTerm, activeFilter, items]);

    useEffect(() => {
        if(searchTerm !== '' && window.umami?.trackEvent)
            window.umami.trackEvent(searchTerm, 'search');
    }, [searchTerm]);

    return (
        <>
            {items.length ? <>
                <Controls>
                    <Search searchCallback={updateSearchTerm} />
                    <Filter
                        filterHandler={updateActiveFilter}
                        items={items}
                    />
                </Controls>
                <List items={listItems} />
            </> : <Loader />}
        </>
    );
}
export default App;
