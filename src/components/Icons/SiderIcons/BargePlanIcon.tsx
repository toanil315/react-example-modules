import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='18'
      height='19'
      viewBox='0 0 18 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M2.33333 8.66666V3.33333C2.33333 3.11231 2.42113 2.90035 2.57741 2.74407C2.73369 2.58779 2.94565 2.49999 3.16666 2.49999H7.33333V0.833328H10.6667V2.49999H14.8333C15.0543 2.49999 15.2663 2.58779 15.4226 2.74407C15.5789 2.90035 15.6667 3.11231 15.6667 3.33333V8.66666L16.5717 8.93833C16.7768 9.00005 16.9502 9.13835 17.056 9.32455C17.1618 9.51075 17.1919 9.73055 17.14 9.93833L15.8767 14.995C15.3386 15.0228 14.8003 14.9458 14.2917 14.7683L15.3333 10.3083L9 8.33333L2.66666 10.3083L3.70833 14.7675C3.19972 14.9453 2.66141 15.0225 2.12333 14.995L0.859998 9.93833C0.808078 9.73055 0.83815 9.51075 0.943973 9.32455C1.0498 9.13835 1.22325 9.00005 1.42833 8.93833L2.33333 8.66666ZM4 8.16666L9 6.66666L14 8.16666V4.16666H4V8.16666ZM2.33333 16.6667C3.56355 16.6684 4.75089 16.2148 5.66666 15.3933C6.58244 16.2148 7.76978 16.6684 9 16.6667C10.2302 16.6684 11.4176 16.2148 12.3333 15.3933C13.2491 16.2148 14.4364 16.6684 15.6667 16.6667H17.3333V18.3333H15.6667C14.4964 18.3352 13.3464 18.0276 12.3333 17.4417C11.3203 18.0276 10.1703 18.3352 9 18.3333C7.8297 18.3352 6.67971 18.0276 5.66666 17.4417C4.65362 18.0276 3.50363 18.3352 2.33333 18.3333H0.666664V16.6667H2.33333Z'
        fill='#444646'
      />
    </svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
