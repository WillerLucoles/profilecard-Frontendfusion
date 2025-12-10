import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const CheckIcon: React.FC<IconProps> = (props) => (
  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <path d="M13 1L4.75 9.25L1 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const UserPlusIcon: React.FC<IconProps> = (props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <path d="M15.0001 17.5C15.0001 15.7319 14.2977 14.0362 13.0475 12.7859C11.7972 11.5357 10.1015 10.8333 8.33341 10.8333C6.5653 10.8333 4.86961 11.5357 3.61937 12.7859C2.36913 14.0362 1.66675 15.7319 1.66675 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.33341 10.8333C10.6346 10.8333 12.5001 8.96785 12.5001 6.66667C12.5001 4.36548 10.6346 2.5 8.33341 2.5C6.03223 2.5 4.16675 4.36548 4.16675 6.66667C4.16675 8.96785 6.03223 10.8333 8.33341 10.8333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.3333 16.6666C18.3333 13.8583 16.6667 11.25 15 9.99998C15.5478 9.58895 15.9859 9.04922 16.2755 8.42854C16.565 7.80786 16.6971 7.12537 16.66 6.44148C16.6229 5.75759 16.4178 5.09338 16.0629 4.50765C15.7079 3.92191 15.2141 3.4327 14.625 3.08331" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MessageIcon: React.FC<IconProps> = (props) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <g clipPath="url(#clip0_1_230)">
      <path d="M16.5 5.25L9.75675 9.54525C9.52792 9.67816 9.268 9.74817 9.00338 9.74817C8.73875 9.74817 8.47883 9.67816 8.25 9.54525L1.5 5.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 3H3C2.17157 3 1.5 3.67157 1.5 4.5V13.5C1.5 14.3284 2.17157 15 3 15H15C15.8284 15 16.5 14.3284 16.5 13.5V4.5C16.5 3.67157 15.8284 3 15 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_1_230">
        <rect width="18" height="18" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);