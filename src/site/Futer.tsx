import React from 'react';

type FuterType = {
    titleNewFuter: string
}

export const Futer = (proos: FuterType) => {
    return (
        <div>
            {proos.titleNewFuter}
        </div>
    );
};