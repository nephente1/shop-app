import * as React from 'react';
import styled from 'styled-components';

const SvgElement = styled('svg')`
    height: auto;
`;

interface SearchIconProps {
    className?: string;
	onClick?: () => void;
}

export const SearchIcon = ({ className }: SearchIconProps): React.ReactElement => (
    <SvgElement
        className={className}
        fill="#A9AEC1"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
    >
        <path
            fill="#fill"
            fillRule="nonzero"
            d="M23.608 23.608a1.333 1.333 0 0 1-1.886 0l-5.366-5.36a10.117 10.117 0 0 1-6.185 2.095C4.553 20.343 0 15.788 0 10.17 0 4.554 4.553 0 10.171 0c5.616 0 10.172 4.556 10.172 10.171 0 2.27-.749 4.43-2.1 6.19l5.365 5.364a1.326 1.326 0 0 1 0 1.883zm-13.437-5.217c4.534 0 8.224-3.688 8.224-8.22s-3.691-8.224-8.224-8.224c-4.535 0-8.224 3.69-8.224 8.224 0 4.533 3.688 8.22 8.224 8.22z"
        />
    </SvgElement>
);
