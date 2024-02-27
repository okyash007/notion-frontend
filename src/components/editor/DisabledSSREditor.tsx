import dynamic from 'next/dynamic';

// Temp solution for "Yjs was already imported. This breaks constructor checks and will lead to issues!" - https://github.com/yjs/yjs/issues/438

export const DisabledSSREditor = dynamic(() => import('./Editor'), {
    ssr: false,
});